import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleOnChange = (e) => {
    const value = e.target.value;
    const _name = e.target.name;
    if (_name === "name") setName(value);
    else if (_name === "email") setEmail(value);
    else setMessage(value);
  };
  const handleOnSubmit = () => {};
  return (
    <div className="contact" onSubmit={handleOnSubmit}>
      <form className="form">
        <h2 className="form__title">Contact Us</h2>
        <input
          value={name}
          onChange={handleOnChange}
          type="text"
          name="name"
          className="form__input--name"
          placeholder="Name*"
          required={true}
        />
        <input
          value={email}
          onChange={handleOnChange}
          type="email"
          name="email"
          className="form__input--email"
          placeholder="Email*"
          required={true}
        />
        <textarea
          value={message}
          onChange={handleOnChange}
          name="message"
          className="form__input__message"
          placeholder="Message*"
          required={true}
        />
        <button className="form__submit">Submit</button>
      </form>
    </div>
  );
};

export { Contact as default };
