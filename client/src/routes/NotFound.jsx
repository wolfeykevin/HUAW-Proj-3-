import React from "react";
import { Routes, Route } from "react-router-dom";

const NotFound = () => {
  return (
    <Routes>
      <Route path="/*" element={<div>404</div>} />
    </Routes>
  );
};

export default NotFound;
