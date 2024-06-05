import React from 'react';
import HeroContact from './Components/HeroContact';
import ContactForm from './Components/Form';
import styles from './contact.module.css';

const ContactPage = () => {
  
  return (
    <section id={styles.contacto}>
      <HeroContact />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
