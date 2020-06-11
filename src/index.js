// import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Basic from "./0_basic.js";
import { Welcome } from "./1_welcome";
import { Multi } from "./2_multi.js";
import { Clock } from "./3_clock.js";
import { Tempo } from "./4_tempo.js";
import { Toggle } from "./5_event_toggle.js";
import { ToggleShow } from "./6_event_toggle_show.js";
import { ActionLink } from "./7_event_function.js";
import { ButtonClick } from "./8_event_class.js";
import { Mailbox } from "./9_if_without_if.js";

export const elem_welcome = <Welcome name="Félix" />;

ReactDOM.render(
  <React.StrictMode>
    {/* <ToggleShow />
    <Mailbox unread={["truc", "machin", "bidule"]} /> */}
    {/* <Toggle /> */}
    {/* <ButtonClick />
    <ActionLink /> */}

    {/* {elem_welcome} */}
    {/* <Multi />
    <Basic name="Stan" nickname="le Punk" /> */}
    {/* <Clock date={new Date()} /> // this one is for class without constructor*/}
    {/* <Clock /> */}
    <Tempo increment={1} tempo={10000} />
    <Tempo increment={1} tempo={1000} />
    <Tempo increment={1} tempo={100} />
    <Tempo increment={1} tempo={10} />
    <Tempo increment={1} tempo={1} />
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
