import React from "react";

// by function, the function must be in Capital, because JSX must be know that's React element.
// if I understand well.
export default function Welcome(props) {
  return <h1>Bonjour {props.name}</h1>;
}
