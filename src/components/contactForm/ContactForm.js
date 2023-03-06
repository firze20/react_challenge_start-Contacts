import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type={"text"} id="name" onChange={setName} name={name} />
        <label htmlFor="phone">Phone:</label>
        <input
          type={"number"}
          pattern="/9[1236][0-9]{7}|2[1-9][0-9]{7}/"
          id="phone"
          onChange={setPhone}
          name={phone} />
        <label htmlFor="email">Email:</label>
        <input
          type={"text"}
          pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          id="email"
          onChange={setEmail}
          name={email}
        />
      </form>
    </div>
  );
};
