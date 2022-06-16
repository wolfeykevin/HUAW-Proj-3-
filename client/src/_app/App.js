import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../_components/Loading";
import Home from "../routes/Home";
import NotFound from "../routes/NotFound";
import Navbar from "../_components/Navbar";
import "../_styled/App.css";

const Game = lazy(() => import("../routes/Game"));
const CardGallery = lazy(() => import("../routes/CardGallery"));

const App = () => {
  return (
    /* APP should render each ROUTE with props */
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/game/*"
          element={
            <Suspense fallback={<Loading />}>
              <Game />
            </Suspense>
          }
        />
        <Route
          path="/cardgallery/*"
          element={
            <Suspense fallback={<Loading />}>
              <CardGallery />
            </Suspense>
          }
        />
        <Route path="/loading" element={<Loading />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
