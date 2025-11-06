import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

interface VideoEmbedProps {
  title?: string;
  description?: string;
  position?: "top" | "bottom";
}

const VideoEmbed = ({ title, description, position = "top" }: VideoEmbedProps) => {
  // Mega.nz video URL
  const videoUrl = "https://mega.nz/file/YChCWQxD#KxiIL_41HaBZ0pmkk6x-zmAUVdZIVHgJBM6C9MICEfU";

  const handleWatchVideo = () => {
    window.open(videoUrl, '_blank');
  };

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
          <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Video: Evaluación de Desempeño
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Haz clic en el botón de abajo para ver el video en una nueva pestaña
              </p>
              <Button 
                onClick={handleWatchVideo}
                size="lg"
                className="gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Video
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoEmbed;
