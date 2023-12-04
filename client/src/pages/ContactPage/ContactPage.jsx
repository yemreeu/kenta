import React from 'react'
import "./styles.css"

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Bize Ulaşın!</h1>
      <div className="contact-content">
        <div className="contact-imgContainer">
          <img src="/contact.png" fill="true" alt="contact" className="contact-img" />
        </div>
        <form className="contact-form">
          <input type="text" className="contact-input" placeholder="İsim" />
          <input type="text" className="contact-input" placeholder="Email" />
          <textarea className="contact-textArea" placeholder="Mesajınız" cols="30" rows="10"></textarea>
          <button url="#" text="Gönder">Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;