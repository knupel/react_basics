import React from "react";

export default function Mailbox(props) {
  const message = props.unread;
  return (
    <div>
      <h1>Hello!</h1>
      {message.length > 0 && (
        <h2>You have {message.length} unread messages.</h2>
      )}

      {message.length > 0 &&
        ((message.length === 1 && (
          <h2>You have {message.length} unread message.</h2>
        )) ||
          (message.length > 1 && (
            <h2>You have {message.length} unread messages.</h2>
          )))}
    </div>
  );
}
