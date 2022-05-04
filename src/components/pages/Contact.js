import React, { useState } from 'react';

function Contact() {

  const [validated, setValidated] = useState(true);
  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  function validateEmail(event) {
    const email = event.target.value;
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
    if (regex.test(email)) {
      console.log(true);
      setValidated(true);
      return;
    }
    setValidated(false);
  }

  function validateFormFields(event){
    const {name, value} = event.target

    if(name==="Name") {
      if(value.length > 0){
        setValidName(true);
      } else {
        setValidName(false);
      }
    }

    if(name==="Message") {
      if(value.length > 0){
        setValidMessage(true);
      } else {
        setValidMessage(false);
      }
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form action="mailto:jasonjyoo1988@gmail.com" method="post" encType="text/plain" name="EmailForm">
        <input
          name="name"
          className="input"
          type="text"
          id="name"
          onChange={validateFormFields}
          

          placeholder="Your name" />
        <input
          id="email"
          className="input"
          type="text"
          
          name="Email Address"
          placeholder="Your email address"
          onChange={validateEmail} />
        <p
          className="input"
          style={{ "display": validated ? "none" : "block" }}
        >Please enter a valid email address.</p>
        <textarea
          className="input"
          type="text"
          id="message"
          name="Message"
          htmlFor="message"
          placeholder="Your message"
          rows="8"
          onChange={validateFormFields}
          >
        </textarea>
        <button type="submit"
          className="btn btn-dark"
          style={{"display": (validName&&validMessage&&validated) ? "block":"none"}}
        >Submit</button>
        <p
          className="input"
          style={{"display": (validName&&validMessage&&validated) ? "none":"block"}}
        >Please complete all fields to submit.</p>
      </form>
    </div>
  );
}

export default Contact;

