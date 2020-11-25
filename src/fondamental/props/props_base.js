import React from "react";

export function PropsBase(props) {
  console.log("info", props.name, props.age);
  return (
    <div>
      <p>Your props name is {props.name}</p>
      <p>Your props age is {props.age}</p>
    </div>
  );
}
