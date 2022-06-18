import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../_context/AppProvider";
import { Flex, Loader, Button } from "../_styled/StyledComponentLibrary";
import { parseCookie, getCookie, deleteCookie } from "../_helpers/cookieHelper.js"
import "../_styled/GameScreen.css"
import Entity from "../_helpers/Entity.js"

const GameScreen = () => {
  const { store } = useContext(GlobalContext);
  let gameData = store.gameData;
  // const [ gameData, setGameData ] = useState(store.gameData)
  const [ gameState, setGameState ] = useState('initializing');
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(store.gameData).length === 0) {
      navigate("/")
    }
  }, [gameData])

  return (
    <>
      {Object.keys(gameData).length === 0 ?
        <>{console.log("empty", gameData)}</>
        :
        <>
        {console.log("not empty", JSON.stringify(gameData))}
        <div className="debug-container">
          <div className="debug-header">Game Data:</div>
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
                <div className="current-morale" style={{width:gameData.player.morale}}></div>
              </div>
            </div>
            <div className="enemy-container">
              <img className="entity-image" src={`/assets/AFSC/${store.gameData.enemy.name}.png`}/>
              <div></div>
            </div>
          </div>
        </div>
        </>
      }
    </>
  )
};

export default GameScreen;
