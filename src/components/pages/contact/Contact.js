import React from 'react'

import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import {  useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";


export default function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false)
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_qhmc9n8",
          "template_ktaf09d",
          formRef.current,
          "user_4pJZiMHA350uL9r6Wmca7"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <>
        <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 744 755 9195
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              shbhamgawade1292@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Bhigvan Chowk, Rashin
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for you...
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
