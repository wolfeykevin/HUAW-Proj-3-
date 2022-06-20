import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../_context/AppProvider";
import { Flex, Loader, Button } from "../_styled/StyledComponentLibrary";
import { parseCookie, getCookie, deleteCookie } from "../_helpers/cookieHelper.js"
import "../_styled/GameScreen.css"
import Entity from "../_helpers/Entity.js"

let enemyCard = [];

const getCards = async (amount) => {
  if (amount === undefined || amount > 5) {
    amount = 1;
  }

  let data = await fetch(`http://localhost:8080/api/card/random/?limit=${amount}`)
    .then(res => res.json())

  return data;
}

const applyEffects = (effects, target) => {
  console.log(effects)
  for (let index in effects.effect) {
    let effect = effects.effect[index];
    let value = effects.value[index];

    console.log('Effect:', effect)
    console.log('Value:', value)

    // only use morale right now
    if (effect === "morale") {
      if (typeof value === 'number') {
        target[effect] += value;
      }
    }
  }
}

const GameScreen = () => {
  const { store } = useContext(GlobalContext);
  let gameData = store.gameData;
  const [ gameState, setGameState ] = useState('initializing');
  const [ cardData, setCardData ] = useState([]);
  const [ log, setLog ] = useState([]);
  const prevGameState = useRef();
  const navigate = useNavigate();

  const logMessage = (message) => {
    setLog([message, ...log])
  }

  const clickHandler = (element) => {
    if (gameState === 'player turn') {
      let data = JSON.parse(element.dataset.card)

      let index = cardData.findIndex(card => card.name === data.name)

      cardData.splice(index, 1);

      gameHandler(data)
    }
  }

  const gameHandler = async (card) => {
    console.log(gameState);

    if (gameState === 'initializing') {
      getCards(3-cardData.length).then(data => setCardData([...cardData,...data]))

      logMessage('player turn')
      setGameState('player turn')
      enemyCard = [];
    }

    if (gameState === 'player draw') {
      getCards(3-cardData.length).then(data => setCardData([...cardData,...data]))

      await logMessage(`drew ${3-cardData.length} card(s)`)

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

      // await new Promise(resolve => setTimeout(resolve, 1000))


      setGameState('enemy draw')
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

      // logMessage('player turn')
      setGameState('player draw')
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
                <div className="morale-bar">
                  <div className="current-morale" style={{width:(gameData.player.morale)+"%"}}>{gameData.player.morale}</div>
                </div>
              </div>
              <div className="enemy-container">
                <div>{gameData.enemy.name}</div>
                <img className="entity-image" src={`/assets/AFSC/${store.gameData.enemy.name}.png`}/>
                <div className="morale-bar">
                  <div className="current-morale" style={{width:(gameData.enemy.morale)+"%"}}>
                    {gameData.enemy.morale}
                  </div>
                </div>
              </div>
            </div>
            <div className="player-cards-container">
              {cardData.map(card =>
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
    </>
  )
};

export default GameScreen;
