import React, { useContext } from "react";
import { GlobalContext } from "../_context/AppProvider";

const CardGallery = () => {
  const { store } = useContext(GlobalContext);

  return <div>card gallery</div>;
};

export default CardGallery;
