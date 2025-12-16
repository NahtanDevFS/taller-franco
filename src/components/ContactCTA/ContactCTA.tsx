import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          ¿Estás interesado en nuestros servicios?
        </h2>
        <p className={styles.subtitle}>
          Contáctanos directamente por WhatsApp para una respuesta rápida o
          síguenos en Facebook para ver más información.
        </p>

        <div className={styles.grid}>
          <a
            href="https://wa.me/50242426941"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialCard} ${styles.whatsapp}`}
            aria-label="Chat en WhatsApp"
          >
            <FaWhatsapp className={styles.icon} />
            <span className={styles.cardText}>WhatsApp</span>
            <span className={styles.cardAction}>Chatear ahora</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100086254461751&locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialCard} ${styles.facebook}`}
            aria-label="Ver en Facebook"
          >
            <FaFacebook className={styles.icon} />
            <span className={styles.cardText}>Facebook</span>
            <span className={styles.cardAction}>Síguenos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
