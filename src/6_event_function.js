import React from "react";

export default function ActionLink() {
  function handle_click(e) {
    e.preventDefault();
    console.log("ohhhh you click me bro!!!!");
  }
  return (
    <a href="https://stanlepunk.wordpress.com/" onClick={handle_click}>
      {" "}
      function click
    </a>
  );
}
