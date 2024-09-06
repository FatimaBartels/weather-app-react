import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <p>
            This app was coded by{" "}
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
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
