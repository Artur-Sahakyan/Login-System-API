import './Main.css';
import GetWeather from './GetWeather/GetWeather';
import Register from "./Register/Register"
import SingIn from "./SingIn/SingIn"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";


function Main() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Register />} />
          <Route path="singIn" element={<SingIn />} />
          <Route path="/singIn/getweather" element={<GetWeather />} />
          
        </Routes>
      </Router>

    </div>
  );

}

export default Main;
