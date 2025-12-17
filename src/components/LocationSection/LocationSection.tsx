import styles from "./LocationSection.module.css";

export default function LocationSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h2 className={styles.title}>Ubícanos</h2>

            <div className={styles.infoItem}>
              <span className={styles.label}>Dirección</span>
              <p className={styles.text}>
                4 Calle, Zona 3<br />
                Frente a Despensa Familiar
                <br />
                Estanzuela, Zacapa
              </p>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.label}>Horario de Atención</span>
              <p className={styles.text}>Lunes a Sábado: 9:00 AM - 6:00 PM</p>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.label}>Contacto Directo</span>
              <p className={styles.text}>Tel: 4242-6941</p>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.837145840577!2d-89.57373512509332!3d15.001742785533512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6227319fe0b0d7%3A0xcccac3451b74ddc6!2sTaller%20Franco!5e0!3m2!1ses-419!2sgt!4v1765694201993!5m2!1ses-419!2sgt"
              className={styles.mapFrame}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Taller Franco"
            ></iframe>
          </div>
        </div>

        <div className={styles.visualsContainer}>
          <h3 className={styles.subTitle}>Así se ve nuestro taller</h3>
          <div className={styles.visualsGrid}>
            <div className={styles.imageCard}>
              <img
                src="/taller_reduced_size.webp"
                alt="Fachada Taller Franco"
                className={styles.locationImage}
              />
              <span className={styles.imageLabel}>Entrada Principal</span>
            </div>

            <div className={styles.imageCard}>
              <img
                src="/vista_hacia_afuera_taller_reduced_size.webp"
                alt="Vista hacia la calle"
                className={styles.locationImage}
              />
              <span className={styles.imageLabel}>Vista hacia la calle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
