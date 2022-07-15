import './Main.css';
import GetWeather from './GetWeather/GetWeather';
import Register from "./SingIN/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";


function Main() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="about" element={<GetWeather />} />
        </Routes>
      </Router>

    </div>
  );

}

export default Main;
