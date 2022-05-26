import { send, init } from "emailjs-com";
import React, { useState } from "react";

const serviceId = "service_8d6kpkl"
const templateId = "template_v1424ar"
const userId = "1kNKti1lRioOck_TH"

// export default function Contact() {

//   const sendEmail = async (content) => {
//     init(userId)

//     const toSend = {
//         from_name: content.from_name,
//         to_email: "jasonjayoo@outlook.com",
//         from_email: content.from_email,
//         message: content.message,
//     }

//     await send(serviceId, templateId, toSend)
// }

//   const [validated, setValidated] = useState(true);
//   const [validName, setValidName] = useState(false);
//   const [validMessage, setValidMessage] = useState(false);

//   function validateEmail(event) {
//     const email = event.target.value;
//     let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
//     if (regex.test(email)) {
//       console.log(true);
//       setValidated(true);
//       return;
//     }
//     setValidated(false);
//   }

//   const [fullName, setName] = useState("");

//   function validateFormFields(event){

//     const {name, value} = event.target
//     setName(event.target.name);

//     if(name==="Name") {
//       if(value.length > 0){
//         setValidName(true);
//       } else {
//         setValidName(false);
//       }
//     }

//     if(name==="Message") {
//       if(value.length > 0){
//         setValidMessage(true);
//       } else {
//         setValidMessage(false);
//       }
//     }
//   }

//   return (
//     <div>
//       <div className="container">
//         <form onSubmit={sendEmail}>
//           <div className="row pt-5 mx-auto">
//             <div className="col-8 form-group mx-auto">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 name="name"
//                 onChange={validateFormFields}
//               />
//             </div>

//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email Address"
//                 name="email"
//                 onChange={validateEmail}
//               />
//             </div>

//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Subject"
//                 name="subject"
//               />
//             </div>

//             <div className="col-8 form-group pt-2 mx-auto">
//               <textarea
//                 className="form-control"
//                 id=""
//                 cols="30"
//                 rows="8"
//                 placeholder="Your message"
//                 name="message"
//                 onChange={validateFormFields}
//               ></textarea>
//             </div>

//             <div className="col-8 pt-3 mx-auto">
//               <input
//                 onClick={() => {sendEmail(fullName)}}
//                 type="submit"
//                 style={{"display": (validName&&validMessage&&validated) ? "block":"none"}}
//                 className="btn btn-info"
//                 value="Send Message"
//               ></input>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// ********************************* Working Below *********************************************//

// import React, { useState } from "react";

function Contact() {

  
  const [validated, setValidated] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validMessage, setValidMessage] = useState(false);

const sendEmail = async (content) => {
 init(userId)

 const toSend = {
     from_name: content.from_name,
     to_email: "jasonjyoo1988@gmail.com",
     from_email: content.from_email,
     message: content.message,
 }

    await send(serviceId, templateId, toSend)
}

  const [content, setContent] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  // function validateEmail(event) {
  //   const email = event.target.value;
  //   let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

  // }

  function validateFormFields(event) {
    const { name, value } = event.target;

    setContent((prevInput) => {
      return {
          ...prevInput,
          [name]: value,
      }
  })
  if(name==="from_email") {  
  const email = event.target.value;
  let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
  if (regex.test(email)) {
    console.log(true);
    setValidated(true);
    return;
  } else if (
    value.length === 0 
  ) {
    setValidated(true);
  } else setValidated(false);
}


    if (name === "from_name") {
      if (/^[a-zA-Z]+$/.test(value)) {
        setValidName(true);
      } else if (
        value.length === 0 
      ) {
        setValidName(true);
      }
      else {
        setValidName(false);
      }
    }

    if (name === "message") {
      if (value.length > 0) {
        setValidMessage(true);
      } else {
        setValidMessage(false);
      }
    }

    if (validated, validName, validMessage) {

    }
  }

  return (
    <div>
      <h1>Email Me Directly</h1>
      <p>(Please complete the form below to send me an email - the submit button will appear once form is filled)</p>
      {/* <form
        // action="mailto:jasonjayoo@outlook.com"
        // method="post"
        encType="text/plain"
        name="EmailForm"
      > */}
      <div className="mainContact">
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <input
          name="from_name"
          className="input"
          type="text"
          id="name"
          onChange={validateFormFields}
          placeholder="Your name"
        />
        <p className="input" style={{ display: validName ? "none" : "block" }}>
          <span>Please enter a valid name.</span>
        </p>
        <input
          id="email"
          className="input"
          type="text"
          name="from_email"
          placeholder="Your email address"
          onChange={validateFormFields}
        />
        <p className="input" style={{ display: validated ? "none" : "block" }}>
          <span>Please enter a valid email address.</span>
        </p>
        <textarea
          className="input"
          type="text"
          id="message"
          name="message"
          htmlFor="message"
          placeholder="Your message"
          rows="8"
          onChange={validateFormFields}
        ></textarea>
        <button
        onClick={(event) => {
          event.preventDefault()
          console.log(content)
          sendEmail(content)
          document.getElementById('name').value = ''
          document.getElementById('email').value = ''
          document.getElementById('message').value = ''
        }}
          type="submit"
          className="btn btn-dark"
          style={{
            display: validName && validMessage && validated ? "block" : "none",
          }}
        >
          Submit
        </button>
        <p
          className="input"
          style={{
            display: validName && validMessage && validated ? "none" : "block",
          }}
        >
        Please complete all fields to submit.
        </p>
      {/* </form> */}
      </div>
      </div>
    </div>
  );
}

export default Contact;
