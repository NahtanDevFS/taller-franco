import Image from "next/image";
import styles from "./BrandsMarquee.module.css";

interface BrandsMarqueeProps {
  brandImages: string[];
}

export default function BrandsMarquee({ brandImages }: BrandsMarqueeProps) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Trabajamos con las mejores marcas</h3>

      <div className={styles.scroller}>
        <div className={styles.scrollerInner}>
          {brandImages.map((src, index) => (
            <div key={`brand-1-${index}`} className={styles.logoWrapper}>
              <Image
                src={src}
                alt="Logo marca"
                width={150}
                height={80}
                className={styles.logoImage}
              />
            </div>
          ))}
          {brandImages.map((src, index) => (
            <div key={`brand-2-${index}`} className={styles.logoWrapper}>
              <Image
                src={src}
                alt="Logo marca"
                width={150}
                height={80}
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
