import React from "react";
import ReactDOM from "react-dom";
import Compy1 from "./MyComponent";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div clas="Web">
      <Compy1 />
    </div>
  </React.StrictMode>,
  rootElement
);
