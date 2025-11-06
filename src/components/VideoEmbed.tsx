import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import { useState, useEffect } from "react";

interface VideoEmbedProps {
  title?: string;
  description?: string;
  position?: "top" | "bottom";
}

const VideoEmbed = ({ title, description, position = "top" }: VideoEmbedProps) => {
  // Video file path - usar servidor dedicado para archivos grandes
  const videoPath = "http://localhost:3001/evaluacion-desempeno.mp4";
  const fallbackPath = "/evaluacion-desempeno.mp4";
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [videoInfo, setVideoInfo] = useState<string>("");
  const [currentVideoPath, setCurrentVideoPath] = useState(videoPath);

  const handleDownload = async () => {
    try {
      // Intentar descargar desde el servidor de video primero, luego fallback
      const pathsToTry = [currentVideoPath, fallbackPath];
      
      for (const path of pathsToTry) {
        try {
          const response = await fetch(path, { method: 'HEAD' });
          if (response.ok) {
            const link = document.createElement('a');
            link.href = path;
            link.download = 'Evaluacion-de-Desempeno.mp4';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
          }
        } catch (error) {
          console.log(`Intentando siguiente ruta: ${error}`);
        }
      }
      
      alert('El archivo de video no está disponible. Asegúrate de que el servidor de video esté ejecutándose.');
    } catch (error) {
      console.error('Error al descargar:', error);
      alert('Error al descargar el video.');
    }
  };

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setIsLoading(false);
    setVideoInfo(`Duración: ${Math.round(video.duration / 60)} min, Tamaño: ~310MB`);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsLoading(false);
    setHasError(true);
    console.error('Error cargando video:', e);
  };

  // Verificar disponibilidad del video al montar el componente
  useEffect(() => {
    const checkVideoAvailability = async () => {
      try {
        // Intentar servidor de video primero
        let response = await fetch(videoPath, { method: 'HEAD' });
        if (response.ok) {
          setCurrentVideoPath(videoPath);
          return;
        }
        
        // Fallback a Vite
        response = await fetch(fallbackPath, { method: 'HEAD' });
        if (response.ok) {
          setCurrentVideoPath(fallbackPath);
          return;
        }
        
        // Si ninguno funciona, mostrar error
        setHasError(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Video no disponible:', error);
        // Intentar fallback antes de mostrar error
        try {
          const fallbackResponse = await fetch(fallbackPath, { method: 'HEAD' });
          if (fallbackResponse.ok) {
            setCurrentVideoPath(fallbackPath);
            return;
          }
        } catch (fallbackError) {
          console.error('Fallback también falló:', fallbackError);
        }
        
        setHasError(true);
        setIsLoading(false);
      }
    };

    checkVideoAvailability();
  }, [videoPath, fallbackPath]);

  return (
    <section className={`py-16 px-4 ${position === "top" ? "bg-gradient-to-b from-accent to-background" : "bg-background"}`}>
      <div className="container mx-auto max-w-6xl">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        )}
        
        <Card className="overflow-hidden shadow-elevated">
          <div className="relative w-full aspect-video bg-black">
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Cargando video...</p>
                </div>
              </div>
            )}
            
            {hasError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-muted-foreground">Video no disponible</p>
                  <Button onClick={handleDownload} variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Descargar Video
                  </Button>
                </div>
              </div>
            ) : (
              <video
                className="w-full h-full"
                controls
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                preload="metadata"
              >
                <source src={currentVideoPath} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            )}
          </div>
          
          {!hasError && (
            <div className="p-4 bg-muted/50 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-foreground">Video: Evaluación de Desempeño</h3>
                  <p className="text-sm text-muted-foreground">
                    {videoInfo || "Guía completa sobre el proceso de evaluación"}
                  </p>
                </div>
                <Button onClick={handleDownload} variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Descargar
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default VideoEmbed;
