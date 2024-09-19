import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="todaysWeather">
        <div className="row mt-3">
          <div className="col-4">
            <p className="text-capitalize">
              <FormattedDate date={props.data.date} />

              <span className="description">{props.data.description}</span>
            </p>
          </div>
          <div className="col-2">
            <WeatherIcon code={props.data.icon} size={68} />
          </div>

          <div className="col-2">
            <WeatherTemp celcius={props.data.temperature} />
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
