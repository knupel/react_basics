import React from "react";
import Welcome from "./1_welcome.js";
// export default const elem_welcome = <Welcome name="Félix" />;

// from other function
export default function Multi() {
  return (
    <div>
      <Welcome name="Lysandre" />
      <Welcome name="Lalou" />
    </div>
  );
}
// export const {elem_welcome};
// export default Basic;
// export function Multi(){};
