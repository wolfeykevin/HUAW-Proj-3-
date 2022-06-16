import React, { useContext } from "react";
import { GlobalContext } from "../_context/AppProvider";
import Career from "./Career";
import { Flex, Loader } from "../_styled/StyledComponentLibrary";
import "../_styled/StartScreen.css";

const StartScreen = () => {
  const { store } = useContext(GlobalContext);
  const { set } = store;

  return (
    <Flex className="start-screen fill" column center>
      <form onSubmit={set}>
        <div className="row">
          <Career name="Finance" src="/assets/AFSC/finance.png" />
          <Career name="Secfo" src="/assets/AFSC/secfo.png" />
          <Career name="DFAC Chef" src="/assets/AFSC/dfac_chef.png" />
          <Career name="Intel" src="/assets/AFSC/intel.png" />
          <Career name="Spec Ops" src="/assets/AFSC/spec_ops.png" />
        </div>
        <div className="row">input form</div>
        <div className="row">start button</div>
        <div className="row">resume game button</div>
      </form>
    </Flex>
  );
};

export default StartScreen;
