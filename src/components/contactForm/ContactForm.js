import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicate,
  setDuplicate,
}) => {
  const handleNameChange = (e) => {};

  const handlePhoneChange = (e) => {
    if (e.target.value.match(/9[1236][0-9]{7}|2[1-9][0-9]{7}/) != null) {
      setPhone(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    if (
      e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !=
      null
    ) {
      setEmail(e.target.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id={"form"}>
        <label htmlFor="name">Name:</label>
        <input type={"text"} id="name" onChange={setName} name={name} />
        <label htmlFor="phone">Phone:</label>
        <input
          type={"number"}
          id="phone"
          onChange={handlePhoneChange}
          name={phone}
        />
        <label htmlFor="email">Email:</label>
        <input
          type={"text"}
          pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          id="email"
          onChange={handleEmailChange}
          name={email}
        />
        <button type="submit" form="form">
          Submit
        </button>
      </form>
    </div>
  );
};
