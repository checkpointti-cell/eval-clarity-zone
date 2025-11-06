import { Card } from "@/components/ui/card";

interface VideoEmbedProps {
  title?: string;
  description?: string;
  position?: "top" | "bottom";
}

const VideoEmbed = ({ title, description, position = "top" }: VideoEmbedProps) => {
  // SharePoint embed URL converted from share link
  const embedUrl = "https://agroindustrialmolino-my.sharepoint.com/personal/rbohorquez_arrozsonora_com_co/_layouts/15/embed.aspx?UniqueId=98fb0ce5-4e46-a92a-6ffa-6ed74b8520d5&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create";

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
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Video sobre Evaluación de Desempeño"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoEmbed;
