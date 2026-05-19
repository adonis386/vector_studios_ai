import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import EfectoVoz from "./components/EfectoVoz.jsx";
import Servicios from "./components/Servicios.jsx";
import DiferenciaVector from "./components/DiferenciaVector.jsx";
import Precios from "./components/Precios.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import VectorStudioBackground from "./components/VectorStudioBackground.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background font-body-md text-on-background selection:bg-primary-fixed selection:text-primary">
      <VectorStudioBackground />
      <div className="relative z-[1]">
        <Header />
        <main id="inicio">
          <Hero />
          <Servicios />
          <EfectoVoz />
          <DiferenciaVector />
          <Precios />
          <Contacto />
        </main>
        <Footer />
      </div>
    </div>
  );
}
