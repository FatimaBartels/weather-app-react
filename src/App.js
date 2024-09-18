import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />

        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://www.fatimabartels.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fatima Bartels
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/FatimaBartels/weather-app-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://fb-weather-app-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
