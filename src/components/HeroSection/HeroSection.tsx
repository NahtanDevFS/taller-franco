import Image from "next/image";
import styles from "./HeroSection.module.css";
import { FaWhatsapp } from "react-icons/fa";

interface HeroSectionProps {
  bgImageSrc: string;
}

export default function HeroSection({ bgImageSrc }: HeroSectionProps) {
  return (
    <section className={styles.heroContainer}>
      <Image
        src={bgImageSrc}
        alt="Fondo Taller Franco"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.contentWrapper}>
        <div className="container">
          <h1 className={styles.title}>
            Bienvenido a Taller{" "}
            <span className={styles.highlightName}>Franco</span>
          </h1>
          <p className={styles.subtitle}>
            Donde te ofrecemos diagnóstico y reparación de tu vehículo,
            mantenimientos, repuestos, cotizaciones y mucho más.
          </p>
          <br />
          <p className={styles.subtitle}>
            Llevamos 25 años comprometidos con la calidad, transparencia y
            honestidad de nuestro servicio.
          </p>
          <br />
          <p className={styles.subtitleCursive}>
            Tu seguridad y confianza son nuestro motor.
          </p>
          <br />
          <p className={styles.subtitle}>
            ¡Estamos a la orden para ayudarte en todo momento vía WhatsApp!
          </p>
          <br />
          <div className={styles.contactBtnContainer}>
            <a
              href="https://wa.me/50242426941"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp className={styles.whatsappIcon} />
              <span>Contáctanos al 4242-6941</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
