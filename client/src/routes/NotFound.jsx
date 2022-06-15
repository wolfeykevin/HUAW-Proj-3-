import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "../_context/AppProvider";

const NotFound = () => {
  const { store } = useContext(GlobalContext);

  return (
    <Routes>
      <Route path="/*" element={<div>404</div>} />
    </Routes>
  );
};

export default NotFound;
