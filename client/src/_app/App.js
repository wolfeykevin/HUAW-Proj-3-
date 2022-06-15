import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../_components/Loader";
import Home from "../routes/Home";
import NotFound from "../routes/NotFound";
import Navbar from "../_components/Navbar";

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
            <Suspense fallback={<Loader />}>
              <Game />
            </Suspense>
          }
        />
        <Route
          path="/cardgallery/*"
          element={
            <Suspense fallback={<Loader />}>
              <CardGallery />
            </Suspense>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
