import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./Navigation";

// TODO REFACTOR
ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
    <Navigation />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
