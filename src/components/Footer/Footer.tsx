import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brandColumn}>
            <h3>TALLER FRANCO</h3>
            <p>
              Compromiso, calidad y honestidad en cada servicio. Tu taller de
              confianza en Guatemala.
            </p>
          </div>

          <nav className={styles.linksColumn}>
            <Link href="/" className={styles.link}>
              Inicio
            </Link>
            <span className={styles.link}>Servicios</span>
            <span className={styles.link}>Repuestos</span>
            <span className={styles.link}>Contacto</span>
          </nav>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.copyright}>
          <p>© {currentYear} Taller Franco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
