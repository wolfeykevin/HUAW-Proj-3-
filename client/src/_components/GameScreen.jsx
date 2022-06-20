import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../_context/AppProvider";
import { GameContext } from "../_context/GameProvider";
import { Flex, Loader, Button } from "../_styled/StyledComponentLibrary";
import { parseCookie, getCookie, deleteCookie } from "../_helpers/cookieHelper.js"
import "../_styled/GameScreen.css"
// import { Button } from "../_styled/StyledComponentLibrary";
import Entity from "../_helpers/Entity.js"


const getCards = async (amount) => {
  if (amount === undefined || amount > 5) {
    amount = 1;
  }

  let data = await fetch(`http://localhost:8080/api/card/random/?limit=${amount}`)
    .then(res => res.json())

  return data;
}





let enemyCard = [];

const GameScreen = () => {
  const navigate = useNavigate();
  const { store } = useContext(GlobalContext);
  const { game } = useContext(GameContext);


  //TO-DO: refactor to remove these lines
  let gameData = game.gameData;
  let gameState = game.gameState;
  let setGameState = game.setGameState;
  let playerHand = game.playerHand;
  let setPlayerHand = game.setPlayerHand;
  let log = game.gameLog;
  let setGameLog = game.setGameLog;
  let prevGameState = game.prevGameState;
  let logMessage = game.logMessage;

  const checkMorale = () => {
    if (gameData.player.current.morale <= 0) {
      return "you lose"
    }
    if (gameData.enemy.current.morale <= 0) {
      return "you win"
    }
  }

  const applyEffects = (effects, target) => {
    for (let index in effects.effect) {
      let effect = effects.effect[index];
      let value = effects.value[index];

      target.applyEffect(effect, value);

    }


  }

  const clickHandler = (element) => {
    if (gameState === 'player turn') {
      // parse data from HTML element
      let data = JSON.parse(element.dataset.card)

      // get index of the selected card
      let index = playerHand.findIndex(card => card.name === data.name)

      // remove card from player hand
      playerHand.splice(index, 1);

      // pass the selected card to gameHandler
      gameHandler(data)
    }
  }

  const gameHandler = async (card) => {
    console.log(gameState);

    if (gameState === 'loading') {
      game.setGameData(store.gameData)
      setGameState('initializing')
    }

    if (gameState === 'initializing') {
      await new Promise(resolve => setTimeout(resolve, 1000))
      //initialize entities
      gameData.player = new Entity(gameData.player);
      gameData.enemy = new Entity(gameData.enemy);
      gameData.level += 1
      enemyCard = [];

      setGameState('player draw')
    }

    if (gameState === 'player draw') {

      getCards(3-playerHand.length).then(data => setPlayerHand([...playerHand,...data]))

      logMessage(['player turn', `drew ${3-playerHand.length} card(s)`])

      setGameState('player turn')
    }

    if (gameState === 'player turn' && card !== undefined) {

      logMessage(`you used: ${card.name}`)
      // apply user effects
      console.log('User Effects:')
      applyEffects(card.user_effect, gameData.player)

      // apply enemy effects
      console.log('Enemy Effects:')
      applyEffects(card.enemy_effect, gameData.enemy)

      if (checkMorale() !== undefined) {
        setGameState(checkMorale())
      } else {
        setGameState('enemy draw')
      }
    }

    if (gameState === 'enemy draw') {

      await new Promise(resolve => setTimeout(resolve, 1000))
      logMessage('enemy turn')

      // draw a card
      enemyCard = await getCards(1)

      console.log('Enemy drew a card:', enemyCard[0].name)


      setGameState('enemy turn')
    }

    if (gameState === 'enemy turn') {

      console.log('Enemy card: ', enemyCard)
      logMessage(`enemy used: ${enemyCard[0].name}`)
      // apply enemy card effects
      enemyCard.forEach(card => {
        applyEffects(enemyCard[0].user_effect, gameData.enemy)
        applyEffects(enemyCard[0].enemy_effect, gameData.player)
      })
      await new Promise(resolve => setTimeout(resolve, 1500))
      enemyCard = [];

      if (checkMorale() !== undefined) {
        setGameState(checkMorale())
      } else {
        setGameState('player draw')
      }
    }

    if (gameState === 'you lose') {
      // do nothing
    }

    if (gameState === 'you win') {
      //
    }
  }


  useEffect(() => {
    if (Object.keys(store.gameData).length === 0) {
      navigate("/")
    } else {
      if (prevGameState.current !== gameState) {
        gameHandler()
      }
      prevGameState.current = gameState;
    }
  }, [gameState])

  return (
    <>
      {Object.keys(gameData).length === 0 ?
        <></>
        :
        <>
          <div className="debug-container">
            <div className="debug-header">Game Data:</div>
            <div>{gameState}</div>
            {Object.keys(gameData).map(key => {
              return <div className="debug-entry">{key + ": " + JSON.stringify(gameData[key])}</div>
            })}
          </div>

          <div className="game-container">
            <div className="entity-container">
              <div className="player-container">
                <div>{gameData.player_name}</div>
                <img className="entity-image" src={`/assets/AFSC/${gameData.player.name}.png`}/>

                  {gameData.player.current === undefined ? <></> :
                  <div className="morale-bar">
                    <div
                      className="current-morale"
                      style={{width:((gameData.player.current.morale/gameData.player.max.morale)*100)+"%"}}>
                        {gameData.player.current.morale + " / " + gameData.player.max.morale}
                    </div>
                  </div>
                  }

              </div>
              <div className="enemy-container">
                <div>{gameData.enemy.name + " Guy"}</div>
                <img className="entity-image" src={`/assets/AFSC/${store.gameData.enemy.name}.png`}/>
                {gameData.enemy.current === undefined ? <></> :
                  <div className="morale-bar">
                    <div
                      className="current-morale"
                      style={{width:((gameData.enemy.current.morale/gameData.enemy.max.morale)*100)+"%"}}>
                        {gameData.enemy.current.morale + " / " + gameData.enemy.max.morale}
                    </div>
                  </div>
                  }
              </div>
            </div>
            <div className="player-cards-container">
              {playerHand.map(card =>
                <img
                  className="player-card"
                  key={card.id}
                  name={card.name}
                  data-card={JSON.stringify(card)}
                  src={`/assets/cards/${card.name}.png`}
                  alt={card.name}
                  onClick={(e) => clickHandler(e.target)}
                />
              )}
            </div>
            <div className="enemy-card-container">
              {enemyCard.map(card => {
                return <img className="enemy-card" src={`/assets/cards/${card.name}.png`}/>
              }
              )}
            </div>
            <div className="game-log">
              {log.map(entry => <span className="log-entry">{entry}</span>)}
            </div>
          </div>

        </>
      }
      {gameState === 'you lose' ?
        <div className='end-screen'>
          You Lost...
          <Button className="end-screen-button" onClick={() => navigate("/")}>Go Home</Button>
        </div> : <></>}
      {(gameState === 'you win' || gameState == 'save complete') ?
        <div className='end-screen'>
          You Won!
          {gameState === 'you win' ?
            <Button disabled>Saving...</Button>
            :
            <Button onClick={() => navigate("/game/*")}>Next Battle</Button>
          }
        </div>:<></>}
    </>
  )
};

export default GameScreen;
