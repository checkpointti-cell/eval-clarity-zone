import Hero from "@/components/Hero";
import VideoEmbed from "@/components/VideoEmbed";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <VideoEmbed 
        position="top"
        title="Guía Práctica de Evaluación"
        description="Aprende las mejores prácticas y metodologías para implementar un proceso efectivo"
      />
      
      <InfoSection />
      
      <VideoEmbed 
        position="bottom"
        title="Profundiza en el Proceso"
        description="Descubre más detalles sobre cómo llevar a cabo evaluaciones de desempeño exitosas"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
