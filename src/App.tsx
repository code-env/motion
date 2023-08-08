import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Playground, Home, Canvas } from "./pages";
import { Suspense } from "react";
import Loading from "./components/ui/loading";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/playground"
        element={
          <Suspense fallback={<Loading />}>
            <Playground />
          </Suspense>
        }
      />
      <Route
        path="/canvas"
        element={
          <Suspense fallback={<Loading />}>
            <Canvas />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
