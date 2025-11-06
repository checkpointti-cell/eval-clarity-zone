import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isVideoPage = location.pathname === '/video';

  return (
    <header className="bg-gradient-to-r from-primary to-primary-dark py-4 px-4 shadow-lg">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logo-empresa.svg" 
            alt="Logo de la Empresa" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback si no hay logo
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden bg-primary-foreground/10 rounded-lg px-3 py-2">
            <span className="text-primary-foreground font-bold text-lg">
              Mi Empresa
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          {isVideoPage && (
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Button>
          )}
          
          {!isVideoPage && (
            <Button
              onClick={() => navigate('/video')}
              variant="secondary"
              className="shadow-lg hover:shadow-xl transition-all"
            >
              Ver Video Guía
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;