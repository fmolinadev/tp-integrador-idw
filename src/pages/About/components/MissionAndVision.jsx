import styles from "../about.module.css"
const {seccion_centrada,contenido_centrado}=styles

function MissionAndVision() {
    
        return (
          <section className={seccion_centrada}>
            <div className={contenido_centrado}>
              <h2>Misión y Visión</h2>
              <article>
                <p>
                  Nuestra misión en **BOOKINGIDW** es inspirar la exploración, fomentar la diversidad cultural y promover la comprensión global a través de la hospitalidad compartida. Nos comprometemos a proporcionar una plataforma confiable y segura donde las personas puedan descubrir y reservar alojamientos únicos en todo el mundo, mientras que los anfitriones pueden compartir sus espacios de manera significativa y rentable. Estamos dedicados a crear un impacto positivo en las comunidades locales, promoviendo la inclusión y la sostenibilidad en cada viaje.
                </p>
              </article>
              <article>
                <p>
                  Nos visualizamos como líderes mundiales en la creación de experiencias únicas y significativas a través de la conexión humana. Buscamos transformar la manera en que las personas viajan, exploran y se conectan con el mundo, ofreciendo alojamientos excepcionales y experiencias auténticas que enriquecen la vida de nuestros huéspedes y anfitriones.
                </p>
              </article>
            </div>
          </section>
        );
     
}
export default MissionAndVision