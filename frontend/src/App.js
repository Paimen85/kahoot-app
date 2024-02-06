import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Kahoot from "./components/kahootComponent/Kahoot";
import Login from "./components/loginComponent/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateKahoot from "./components/createKahootComponent/CreateKahoot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/start" element={<Kahoot />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/createKahoot' element={<CreateKahoot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
