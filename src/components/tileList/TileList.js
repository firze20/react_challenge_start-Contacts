import React from "react";

export const TileList = (props) => {
  return (
    <div>
      <ol start={1}>
        {props.contacts.map((contact) => {
          return (
            <li key={contact.key}>
              <span>{contact.name}</span>
              <span>phone: {contact.phone}</span>
              <span>email: {contact.mail}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
