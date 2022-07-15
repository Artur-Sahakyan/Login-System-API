import './Main.css';
import GetWeather from './components/GetWeather/GetWeather';
import Register from "./components/Register/Register"
import SingIn from "./components/SingIn/SingIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";

const A = () => <div>Apapapapa</div>

function Main() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="singIn" element={<SingIn />} />
          <Route path="/singIn/getweather" element={<GetWeather />} />
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default Main;
