import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const NAV_LINKS = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#servicios" },
    { name: "Repuestos", href: "#repuestos" },
    { name: "Ubicación", href: "#ubicacion" },
  ];

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
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={styles.link}>
                {link.name}
              </Link>
            ))}
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
