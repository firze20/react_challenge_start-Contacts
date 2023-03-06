import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import PropTypes from "prop-types";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    props.addContact({
      name,
      phone,
      email,
    });
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const checkForDuplicate = (contact) => {
      const duplicate = props.contacts.some(
        (element) => element.name === contact
      );
      return duplicate;
    };

    checkForDuplicate(name);
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {props.contacts.length ? (
          <ol start={1}>
            {props.contacts.map((contact) => {
              return (
                <li>
                  <span>{contact.name}</span>
                  <span>
                    phone: {contact.phone}
                  </span>
                  <span>
                    email: {contact.mail}
                  </span>
                </li>
              );
            })}
          </ol>
        ) : null}
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
