import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Users, Award, CheckCircle2, BarChart3 } from "lucide-react";

const InfoSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Objetivos Claros",
      description: "Define metas específicas y medibles alineadas con la estrategia organizacional."
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Continuo",
      description: "Identifica áreas de mejora y oportunidades de desarrollo profesional."
    },
    {
      icon: Users,
      title: "Comunicación Efectiva",
      description: "Fomenta el diálogo abierto entre líderes y colaboradores."
    },
    {
      icon: Award,
      title: "Reconocimiento",
      description: "Valora y reconoce los logros y contribuciones del equipo."
    },
    {
      icon: CheckCircle2,
      title: "Toma de Decisiones",
      description: "Información objetiva para promociones, compensaciones y planes de desarrollo."
    },
    {
      icon: BarChart3,
      title: "Métricas de Rendimiento",
      description: "Indicadores claros para medir el progreso y el impacto organizacional."
    }
  ];

  return (
    <section id="content" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            ¿Qué es la Evaluación de Desempeño?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            La evaluación de desempeño es un proceso sistemático y periódico que permite medir, 
            analizar y mejorar el rendimiento de los colaboradores en relación con sus 
            responsabilidades y objetivos. Es una herramienta fundamental para el desarrollo 
            del talento humano y el logro de los objetivos organizacionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-accent to-background border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">
              Beneficios Clave del Proceso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  Para la Organización
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Mejora la productividad y eficiencia</li>
                  <li>• Alinea el desempeño individual con objetivos estratégicos</li>
                  <li>• Facilita la identificación de talento</li>
                  <li>• Optimiza la gestión de recursos humanos</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  Para el Colaborador
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Claridad sobre expectativas y objetivos</li>
                  <li>• Retroalimentación constructiva y oportuna</li>
                  <li>• Oportunidades de desarrollo y crecimiento</li>
                  <li>• Reconocimiento de logros y fortalezas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InfoSection;
