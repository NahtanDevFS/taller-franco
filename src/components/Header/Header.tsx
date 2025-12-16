"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import styles from "./Header.module.css";

export default function Header() {
  const scrollDirection = useScrollDirection();

  const headerClass =
    scrollDirection === "down"
      ? `${styles.header} ${styles.headerHidden}`
      : styles.header;

  return (
    <header className={headerClass}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.brand}>
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

          <a
            href="https://wa.me/50242426941"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            <span>Escríbenos 4242-6941</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
