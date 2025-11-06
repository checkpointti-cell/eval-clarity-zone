import Header from "@/components/Header";
import VideoEmbed from "@/components/VideoEmbed";
import Footer from "@/components/Footer";

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Video: Evaluación de Desempeño
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Aprende las mejores prácticas y metodologías para implementar un proceso efectivo de evaluación de desempeño
            </p>
          </div>
        </div>
      </main>

      <VideoEmbed 
        position="top"
        title="Guía Completa de Evaluación de Desempeño"
        description="Mira este video para aprender las mejores prácticas y metodologías para implementar un proceso efectivo"
      />
      
      <Footer />
    </div>
  );
};

export default VideoPage;
