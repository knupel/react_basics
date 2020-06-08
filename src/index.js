// import React from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Basic from "./0_basic.js";
import Welcome from "./1_welcome.js";
import Multi from "./2_multi.js";
import Clock from "./3_clock.js";

// import * from *.js;

// import elem_welcome from "./1_Multi.js";

// const elem_welcome = 2;
export const elem_welcome = <Welcome name="Félix" />;
ReactDOM.render(
  <React.StrictMode>
    {/* {elem_welcome}
    <Multi /> */}
    <Basic name="Stan" nickname="le Punk" />
    <Clock date={new Date()} />
  </React.StrictMode>,

  // <Multi />,
  document.getElementById("shook-root")
);
