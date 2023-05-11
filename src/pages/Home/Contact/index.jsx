import React from 'react'
import { FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="contact">
        <strong>WHATS NEXT</strong>
        <h3>Lets work together!</h3>
        <p>f you'd like to talk about a project you want help with or need an advice about product design, just drop me a message at <b>nasirruslan91@gmail.com</b> I will contact you soon.</p>
        <a href="mailto:nasirruslan91@gmail.com" className="contact-btn">Write Me An Email <FaEnvelope/></a>
      </section>
  )
}

export default Contact
