import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "5863935ee9cca4c02ed68203f807c65b";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thur</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecastTemp">
            <span className="forecastTempMax">19°</span>
            <span className="forecastTempMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
