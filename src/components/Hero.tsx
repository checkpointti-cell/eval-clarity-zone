import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-background rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Evaluación de Desempeño
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Potencia el crecimiento de tu equipo con un sistema efectivo de evaluación que impulsa el desarrollo profesional y el éxito organizacional
          </p>
          <Button
            onClick={scrollToContent}
            size="lg"
            variant="secondary"
            className="gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            Conoce Más
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
