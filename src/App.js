import React from "react";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
