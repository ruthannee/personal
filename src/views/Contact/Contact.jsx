import React from "react";
import ContactForm from '../../components/ContactForm/ContactForm';
import CustomScrollbar from '../../components/CustomScrollbar/CustomScrollbar';

const Contact = () => (
  <CustomScrollbar>
    <div>
      <h1 id="h1-contact">Obrigada por entrar em contato! <br/> Como posso te ajudar?</h1>
      <ContactForm/>
    </div>
  </CustomScrollbar>
);

export default Contact;