import './Main.css';
import GetWeather from './GetWeather/GetWeather';
import Register from "./SingIN/Register"

function Main() {
  return (
    <div className="App">
       <Register/>
       <GetWeather/>
    </div>
  );
}

export default Main;
