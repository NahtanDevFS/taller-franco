import Image from "next/image";
import styles from "./ProductShowcase.module.css";

interface Product {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface ProductShowcaseProps {
  products: Product[];
}

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Repuestos y productos</h2>
          <p className={styles.subtitle}>
            Utilizamos y vendemos únicamente componentes de calidad comprobada
            para garantizar la vida útil de tu vehículo.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardText}>{product.description}</p>
                <span className={styles.badge}>¡Disponibles!</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
