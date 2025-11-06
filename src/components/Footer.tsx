const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Evaluación de Desempeño. Desarrollando talento, construyendo futuro.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
