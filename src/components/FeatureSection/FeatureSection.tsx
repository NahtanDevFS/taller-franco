import Image from "next/image";
import styles from "./FeatureSection.module.css";

interface FeatureSectionProps {
  title: string;
  items: string[];
  imageSrc: string;
  isReversed?: boolean;
  highlightText?: string;
}

export default function FeatureSection({
  title,
  items,
  imageSrc,
  isReversed = false,
  highlightText,
}: FeatureSectionProps) {
  const bgStyle = isReversed
    ? { backgroundColor: "var(--bg-lighter)" }
    : { backgroundColor: "transparent" };
  return (
    <section className={styles.section} style={bgStyle}>
      <div className="container">
        <div className={styles.grid}>
          <div
            className={styles.imageWrapper}
            style={{ order: isReversed ? 2 : 1 }}
          >
            <Image
              src={imageSrc}
              alt={`Imagen ilustrativa para ${title}`}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className={styles.content} style={{ order: isReversed ? 1 : 2 }}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
            {highlightText && (
              <p className={styles.highlight}>{highlightText}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
