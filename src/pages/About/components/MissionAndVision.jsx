import styles from "../about.module.css"
const {section_centered,container_centered}=styles

function MissionAndVision() {
    
        return (
          <section className={section_centered}>
            <div className={container_centered}>
              <h2>Misión y Visión</h2>
              <div>
                <p>
                  Nuestra misión en <strong>BOOKINGIDW</strong> es inspirar la exploración, fomentar la diversidad cultural y promover la comprensión global a través de la hospitalidad compartida. Nos comprometemos a proporcionar una plataforma confiable y segura donde las personas puedan descubrir y reservar alojamientos únicos en todo el mundo, mientras que los anfitriones pueden compartir sus espacios de manera significativa y rentable. Estamos dedicados a crear un impacto positivo en las comunidades locales, promoviendo la inclusión y la sostenibilidad en cada viaje.
                </p>
                <p>
                  Nos visualizamos como líderes mundiales en la creación de experiencias únicas y significativas a través de la conexión humana. Buscamos transformar la manera en que las personas viajan, exploran y se conectan con el mundo, ofreciendo alojamientos excepcionales y experiencias auténticas que enriquecen la vida de nuestros huéspedes y anfitriones.
                </p>
                </div>
            </div>
          </section>
        );
     
}
export default MissionAndVision