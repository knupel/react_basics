import React from "react";

export default function ActionLink() {
  function handle_click(e) {
    e.preventDefault();
    console.log("Le lien a été cliqué.");
  }
  return (
    <a href="https://stanlepunk.wordpress.com/" onClick={handle_click}>
      {" "}
      Clique ici
    </a>
  );
}
