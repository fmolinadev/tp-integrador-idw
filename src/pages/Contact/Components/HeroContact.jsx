import React from 'react'
import styles from '../contact.module.css'

const HeroContact = () => {
  return (
    <div>
        <h3 className={styles['titulo-seccion']}>Contacto</h3>
      <div className={styles.parrafo}>
        <p>
          ¡Estamos aquí para ayudarte a planificar tu estancia perfecta! <br />
          Completa el formulario de contacto y nos pondremos en contacto contigo
          lo antes posible.
        </p>
      </div>
    </div>
  )
}

export default HeroContact