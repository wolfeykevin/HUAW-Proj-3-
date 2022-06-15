import React, { useContext } from "react";
import { GlobalContext } from "../_context/AppProvider";

const Home = () => {
  const { store } = useContext(GlobalContext);

  return <div>HOME PAGE - insert components here as needed</div>;
};

export default Home;
