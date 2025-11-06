import VideoEmbed from "@/components/VideoEmbed";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-primary-dark py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-primary-foreground/10 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Inicio
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Video: Evaluación de Desempeño
          </h1>
        </div>
      </header>

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
