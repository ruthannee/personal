import React from "react";
import ContactForm from '../Contact/ContactForm';
import CustomScrollbar from '../CustomScrollbar/CustomScrollbar';

const Contact = () => (
  <CustomScrollbar>
    <div>
      <h1 id="h1-contact">Obrigada por entrar em contato! <br/> Como posso te ajudar?</h1>
      <ContactForm/>
    </div>
  </CustomScrollbar>
);

export default Contact;