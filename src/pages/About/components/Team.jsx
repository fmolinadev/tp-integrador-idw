import styles from "../about.module.css"
const {section_centered,container_centered}=styles

function Team() {
    return ( <section className={section_centered}>
    <div className={container_centered}>
    <h2>Nuestro Equipo</h2>
    <p>
      Son el corazón de nuestra empresa. Compuesto por personas apasionadas
      y diversas de diferentes partes del mundo, trabajamos juntos para
      hacer realidad nuestra visión y misión. Desde nuestro equipo de
      desarrollo tecnológico que impulsa la innovación hasta nuestro equipo
      de atención al cliente que garantiza experiencias excepcionales, cada
      miembro desempeña un papel vital en el éxito de nuestra empresa. Nos
      enorgullece nuestra cultura colaborativa, inclusiva y orientada al
      impacto, y nos esforzamos por fomentar un entorno donde cada individuo
      pueda crecer, aprender y prosperar.
    </p>
    </div>
  </section>)
}
export default Team