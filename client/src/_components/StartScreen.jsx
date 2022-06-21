import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../_context/AppProvider";
import Career from "./Career";
import { Flex, Loader, Button } from "../_styled/StyledComponentLibrary";
import "../_styled/StartScreen.css";
import { parseCookie, getCookie, deleteCookie } from "../_helpers/cookieHelper.js"
import SaveData from './SaveData'

const StartScreen = () => {
  const { store } = useContext(GlobalContext);
  const { set } = store;
  let cookies = {
    player_game_id: undefined
  }

  try {
    cookies = parseCookie(document.cookie)
  } catch {
    console.log("something went wrong with parsing cookies")
  }

  useEffect(()=> {
    if (cookies.player_game_id !== undefined) {
      store.resumeGame().then(data => store.setGameData(data))
    }
  }, [])

  // console.log(cookies);
  const playerName = useRef('');
  const playerClass = useRef('');
    // { id: 1, name: "Finance", morale: 100, attack: 1, defense: 5 },
    // { id: 2, name: "SECFO", morale: 100, attack: 1, defense: 5 },
    // { id: 3, name: "DFAC", morale: 100, attack: 1, defense: 5 },
    // { id: 4, name: "Intel", morale: 100, attack: 1, defense: 5 },
    // { id: 5, name: "SpecOps", morale: 100, attack: 1, defense: 5 },
  const navigate = useNavigate();

  return (
    <Flex className="start-screen fill" column center>
      <form onSubmit={async (e) => {
        e.preventDefault()
        if (playerName.current !== '' && playerClass.current !== '') {
          console.log(`Name: ${playerName.current} Class: ${playerClass.current}`)
          store.startGame(playerName.current,playerClass.current)
          setTimeout(() => {window.location.reload()}, 1000)
        }
      }}>
        <div className="row">
          <Career name="Finance" src="/assets/AFSC/Finance.png" clickHandler={() => {playerClass.current = "Finance"; console.log(playerClass.current)}}/>
          <Career name="Secfo" src="/assets/AFSC/SECFO.png" clickHandler={() => {playerClass.current = "SECFO"; console.log(playerClass.current)}}/>
          <Career name="DFAC Chef" src="/assets/AFSC/DFAC.png" clickHandler={() => {playerClass.current = "DFAC"; console.log(playerClass.current)}}/>
          <Career name="Intel" src="/assets/AFSC/Intel.png" clickHandler={() => {playerClass.current = "Intel"; console.log(playerClass.current)}}/>
          <Career name="Spec Ops" src="/assets/AFSC/SpecOps.png" clickHandler={() => {playerClass.current = "SpecOps"; console.log(playerClass.current)}}/>
        </div>
        <div className="row">
          <input className="name-input" onChange={(e) => {playerName.current = e.target.value}} placeholder="Name" />
        </div>
        <div className="row">
          <Button>
              Start Game
          </Button>
        </div>
      </form>
      <div className="row">
        {cookies.player_game_id !== undefined ?
          <Button className={"resume-button"} onClick={async () => {
            navigate("/game/*")
          }}>
              Resume Game
          </Button> :
          <Button className={"resume-button"} disabled>
              Resume Game
          </Button>
        }
      </div>

      <Button onClick={() => {
        deleteCookie('player_game_id')
        window.location.reload()
        }}>Delete Save</Button>

      <SaveData player_game_id={cookies.player_game_id} gameData={store.gameData} />
    </Flex>

  );
};

export default StartScreen;
