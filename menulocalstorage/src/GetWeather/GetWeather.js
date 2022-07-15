import {useState} from "react"
import "./getWeather.css"

 function GetWeather (){
        let [weather, setweather] = useState("");

        return (
            <div className="mainDiv">
               <h1 className="headerText">Get Weather by country name</h1>
               <h1 className="errorMassage">{weather}</h1>

                  <input id="inputText"></input><br/>
                  <input type="submit" onClick={()=> {
                  let countryName = document.getElementById('inputText').value;

                      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=6d54fe5b52ef977d22d69909e12ad1e9`)
                      .then(response => response.json())
                      .then(response => weather = "Wind speed - " + response.wind.speed + " Country Name - " + response.name )
                      .catch(function err (err){
                          console.error(err)
                          weather = "Enter the name of the city"
                      });
                      setTimeout(() => {
                          console.log(weather + " weather")
                          setweather(weather)
                      }, 1000);
                  }} />

            </div>
          );
    }
 

export default GetWeather;