import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductoShowcase from "./components/ProductoShowcase.jsx";
import Servicios from "./components/Servicios.jsx";
import DemoVozAgente from "./components/DemoVozAgente.jsx";
import DiferenciaVector from "./components/DiferenciaVector.jsx";
import Cotiza from "./components/Cotiza.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import ElevenLabsConvaiEmbed from "./components/ElevenLabsConvaiEmbed.jsx";
import GsapScrollProvider from "./motion/gsap/GsapScrollProvider.jsx";

export default function App() {
  return (
    <GsapScrollProvider>
    <div className="relative min-h-screen bg-background font-body-md text-on-background selection:bg-primary-fixed selection:text-primary">
      <Header />
      <ElevenLabsConvaiEmbed />
      <div className="site-shell">
        <main id="inicio">
          <Hero />
          <ProductoShowcase />
          <Servicios />
          <DemoVozAgente />
          <DiferenciaVector />
          <Cotiza />
          <Contacto />
        </main>
        <Footer />
      </div>
    </div>
    </GsapScrollProvider>
  );
}
