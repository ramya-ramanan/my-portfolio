import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for contacting me!");
    setMessage("");
  };

  return (
    <div id="contact" className="section">
      <div className="container">

        <h2 className="section-title"> Contact Me </h2>

        <div className="contact-container">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />

            <textarea placeholder="Your Message" value={message} onChange={(event) =>
              setMessage(event.target.value) } required >
            </textarea>

            <button type="submit"> Send Message </button>
          </form>

        </div>

        </div>

     </div>
  );
}

export default Contact;