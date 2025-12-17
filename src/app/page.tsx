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

      <HeroSection bgImageSrc="/taller_with_filter.webp" />

      <div id="servicios">
        <FeatureSection
          title="Nuestros servicios"
          imageSrc="/car_with_parts.webp"
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
              imageSrc: "/productos/suspension_555.jpg",
            },
            {
              id: 4,
              title: "Baterías América",
              description:
                "Potencia de arranque confiable y larga duración para mantener tu vehículo en movimiento bajo cualquier condición.",
              imageSrc: "/productos/baterias_america.jpg",
            },
            {
              id: 5,
              title: "Filtros de aceite Fram",
              description:
                "Protección superior para tu motor, atrapando impurezas y asegurando una lubricación limpia y eficiente.",
              imageSrc: "/productos/filtros_aceites.jpg",
            },
            {
              id: 6,
              title: "Fajas Gates",
              description:
                "Correas de transmisión líderes en la industria, resistentes al calor y al desgaste para un rendimiento óptimo.",
              imageSrc: "/productos/fajas.jpg",
            },
            {
              id: 7,
              title: "Filtros de aire Lemko",
              description:
                "Filtración de alta eficiencia que garantiza aire limpio para una mejor combustión y ahorro de combustible.",
              imageSrc: "/productos/filtros_aires.jpg",
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
