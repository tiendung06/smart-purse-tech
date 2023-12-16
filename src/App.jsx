import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
