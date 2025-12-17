"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#servicios" },
  { name: "Repuestos", href: "#repuestos" },
  { name: "Ubicación", href: "#ubicacion" },
];

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const headerClass =
    scrollDirection === "down" && !isMobileMenuOpen
      ? `${styles.header} ${styles.headerHidden}`
      : styles.header;

  return (
    <header className={headerClass}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <Image
              src="/logo_taller_franco.svg"
              alt="Logo Taller Franco"
              width={40}
              height={40}
              className={styles.logoImage}
              priority
            />
            <span>Taller Franco</span>
          </Link>

          <div className={styles.desktopNav}>
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="https://wa.me/50242426941"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            <span>4242-6941</span>
          </a>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`${isMobileMenuOpen ? styles.sidebarOpen : ""}`}>
            <div className={styles.sidebarOverlay} onClick={closeMenu}></div>

            <div className={styles.mobileMenu}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/50242426941"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileCtaBtn}
              >
                <FaWhatsapp size={30} className={styles.whatsappIcon} />
                <span>Escribir al WhatsApp</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
