import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="forecastTemp">
        <span className="forecastTempMax">{maxTemperature()}°</span>
        <span className="forecastTempMin">{minTemperature()}°</span>
      </div>
    </div>
  );
}
