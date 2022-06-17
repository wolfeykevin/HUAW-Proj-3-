import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../_context/AppProvider";
import { Flex, Loader, Button } from "../_styled/StyledComponentLibrary";
import { parseCookie, getCookie, deleteCookie } from "../_helpers/cookieHelper.js"


const GameScreen = () => {
  const { store } = useContext(GlobalContext);

  return (
    <>
      <div>{JSON.stringify(store.gameData)}</div>
    </>
  )
};

export default GameScreen;
