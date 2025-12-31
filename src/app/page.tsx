import Header from "@/components/Header/Header";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import BrandsMarquee from "@/components/BrandsMarquee/BrandsMarquee";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import LocationSection from "@/components/LocationSection/LocationSection";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <HeroSection bgImageSrc="/taller_with_filter_reduced_size.jpeg" />

      <div id="servicios">
        <FeatureSection
          title="Nuestros servicios"
          imageSrc="/carro_partes_cut.jpg"
          items={[
            "Mantenimientos preventivos y correctivos.",
            "Reparaciones de motor.",
            "Reparaciones de caja manual.",
            "Reparaciones de tren delantero y trasero.",
            "Solución de problemas de sobrecalentamiento.",
            "Reparaciones de frenos.",
            "Diagnósticos computarizados avanzados.",
            "Cotizaciones de piezas y repuestos.",
          ]}
          highlightText="¡Para más información contáctanos vía WhatsApp!"
        />
      </div>

      <FeatureSection
        title="Venta de repuestos"
        imageSrc="/venta_repuestos.jpg"
        isReversed={true}
        items={[
          "Aceites de motor de alta calidad.",
          "Aceites de caja.",
          "Pastillas y discos de freno.",
          "Filtros de aire, aceite y cabina.",
          "Anticongelantes.",
          "Líquido de frenos.",
          "Fluído de dirección hidraúlica.",
          "Baterías y mucho más.",
        ]}
        highlightText="¡Si no lo tenemos, nosotros lo conseguimos!"
      />

      <BrandsMarquee
        brandImages={[
          "/logos/Castrol_logo.png",
          "/logos/Chevron-Logo.png",
          "/logos/555-logo.png",
          "/logos/america-logo.png",
          "/logos/liqui-moly-logo.png",
          "/logos/wagner-logo.png",
          "/logos/lemko.png",
          "/logos/fram_logo.png",
          "/logos/roshfrans.png",
          "/logos/prestone_logo.webp",
          "/logos/senfineco.webp",
          "/logos/tenacity_logo.png",
          "/logos/valvoline.png",
        ]}
      />

      <div id="repuestos">
        <ProductShowcase
          products={[
            {
              id: 1,
              title: "Frenos Wagner QS",
              description:
                "Contamos con pastillas de freno de la marca Wagner QS para tu vehículo, diseñadas para un frenado silencioso y seguro.",
              imageSrc: "/productos/pastillas_y_demas.jpg",
            },
            {
              id: 2,
              title: "Aceites de calidad",
              description:
                "Contamos con aceites de múltiples gamas, desde semi sintéticos hasta full sintéticos para proteger tu motor en cualquier condición.",
              imageSrc: "/productos/aceites.jpg",
            },
            {
              id: 3,
              title: "Suspensión 555",
              description:
                "Repuestos de suspensión de calidad japonesa 555 para garantizar la estabilidad y confort de tu manejo.",
              imageSrc: "/productos/suspension_555.jpeg",
            },
            {
              id: 4,
              title: "Baterías América",
              description:
                "Potencia de arranque confiable y larga duración para mantener tu vehículo en movimiento bajo cualquier condición.",
              imageSrc: "/productos/baterias.jpeg",
            },
            {
              id: 5,
              title: "Filtros de aceite Fram",
              description:
                "Protección superior para tu motor, atrapando impurezas y asegurando una lubricación limpia y eficiente.",
              imageSrc: "/productos/filtro_aceite.jpeg",
            },
            {
              id: 6,
              title: "Fajas Gates",
              description:
                "Correas de transmisión líderes en la industria, resistentes al calor y al desgaste para un rendimiento óptimo.",
              imageSrc: "/productos/fajas.jpeg",
            },
            {
              id: 7,
              title: "Filtros de aire",
              description:
                "Filtración de alta eficiencia que garantiza aire limpio para una mejor combustión y ahorro de combustible.",
              imageSrc: "/productos/filtro_aire.jpeg",
            },
            {
              id: 8,
              title: "Grasas Roshfrans",
              description:
                "Lubricación de alto desempeño para chasis y rodamientos, diseñada para resistir altas temperaturas y proteger contra el desgaste.",
              imageSrc: "/productos/grasas.jpeg",
            },
            {
              id: 9,
              title: "Líquido de frenos Senfineco",
              description:
                "Fluido DOT-4 de tecnología alemana que asegura una respuesta de frenado inmediata y protege el sistema contra la corrosión.",
              imageSrc: "/productos/liquido_frenos.jpeg",
            },
            {
              id: 10,
              title: "Fluidos de dirección hidráulica",
              description:
                "Mantén una dirección suave y silenciosa con nuestras opciones de marcas líderes como Supers y Prestone, formuladas para evitar fugas.",
              imageSrc: "/productos/direccion_hidraulica.jpeg",
            },
            {
              id: 11,
              title: "Guarda polvos",
              description:
                "Protección esencial para las juntas homocinéticas y la dirección, evitando la entrada de suciedad para prolongar la vida útil de tus ejes.",
              imageSrc: "/productos/guarda_polvos.jpeg",
            },
            {
              id: 12,
              title: "Fusibles Automotrices",
              description:
                "Protección indispensable para el sistema eléctrico. Contamos con fusibles de múltiples amperajes para prevenir daños por sobrecargas en cualquier circuito de tu auto.",
              imageSrc: "/productos/fusibles.jpeg",
            },
          ]}
        />
      </div>

      <div id="ubicacion">
        <LocationSection />
      </div>

      <ContactCTA />

      <Footer />
    </main>
  );
}
