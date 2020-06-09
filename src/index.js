// import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Basic from "./0_basic.js";
import Welcome from "./1_welcome.js";
import Multi from "./2_multi.js";
import Clock from "./3_clock.js";

export const elem_welcome = <Welcome name="Félix" />;

ReactDOM.render(
  <React.StrictMode>
    {elem_welcome}
    <Multi />
    <Basic name="Stan" nickname="le Punk" />
    {/* <Clock date={new Date()} /> // this one is for class without constructor*/}
    <Clock />
  </React.StrictMode>,

  // <Multi />,
  document.getElementById("shook-root")
);

// refresh your page, but it's very raw and not optimize for all
// function draw() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById("shook-root")
//   );
// }

// setInterval(draw, 1000);
