import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or opportunities, feel free to reach out!</p>
      
      <div className="contact-info">
        <p><strong>Phone:</strong> +94 75 8 656 830</p>
        <p><strong>Email:</strong> <a href="mailto:tharinduherath2426@gmail.com">tharinduherath2426@gmail.com</a></p>
        <p>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/tharindu-herath-b648271bb" target="_blank" rel="noreferrer"> linkedin.com/in/tharindu-herath</a>
        </p>
        <p>
          <strong>GitHub:</strong> 
          <a href="https://github.com/IT22601124" target="_blank" rel="noreferrer"> github.com/IT22601124</a>
        </p>
      </div>

      <form className="contact-form">
        <h3>Send Me a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
