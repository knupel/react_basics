import React from "react";

export function PropsChildren({ children, ...props }) {
  console.log("info props", props.name, props.age);
  return (
    <div>
      <p>Props name is {props.name}</p>
      <p>Props age is {props.age}</p>
    </div>
  );
}
