import React from "react";

const numbers = [1, 2, 3, 4, 5];
export const list_items = numbers.map((number) => <li>{number * 2}</li>);

export function List(props) {
  const num = props.numbers;
  const list_items = num.map((num) => <li>{num * 2}</li>);
  return (
    <div>
      <ul>{num}</ul>
      <ul>{list_items}</ul>
      <ol>{list_items}</ol>
    </div>
  );
}
