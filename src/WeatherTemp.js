import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <p className="temperature">{Math.round(props.celcius)}</p>
      <span className="unit">°C</span>
    </div>
  );
}
