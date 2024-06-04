import { useEffect } from 'react';
import swal from 'sweetalert2';
import  styles from '../pages/Contact/contact.module.css';

const useFormSubmit = () => {
  useEffect(() => {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        form.reset();
        swal.fire({
          title: 'Gracias por contactarnos',
          text: 'Pronto nos pondremos en contacto contigo',
          icon: 'success',
          customClass: {
          confirmButton: styles['swal2-confirm']
          },
          buttonsStyling: false,
        });
      }
    };

    const form = document.querySelector('#sendForm');
    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return null;
};

export default useFormSubmit;

