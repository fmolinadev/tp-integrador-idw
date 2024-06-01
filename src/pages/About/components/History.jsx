import styles from "../about.module.css"
const {section_centered,container_centered}=styles

function History() {
    return ( <section className={section_centered}>
    <div className={container_centered}>
    <h2>Nuestra Historia</h2>
    <p>
      Fundada en 2020, BOOKINGIDW surgió de la visión de hacer que el mundo
      fuera más accesible para los viajeros y brindar a las personas la
      oportunidad de sentirse como en casa en cualquier lugar del mundo.
      Comenzamos con solo unos pocos alojamientos en una ciudad, y a lo
      largo de los años, hemos crecido hasta convertirnos en una plataforma
      global líder en la industria de la hospitalidad compartida. A lo largo
      de nuestra historia, hemos superado desafíos, hemos celebrado éxitos y
      hemos aprendido lecciones valiosas, todo mientras mantenemos nuestro
      compromiso con la excelencia, la innovación y el impacto positivo en
      el mundo que nos rodea.
    </p>
    </div>
  </section>)
}
export default History