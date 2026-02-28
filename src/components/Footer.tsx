const Footer = () => {
  return (
    <footer className="hero-gradient py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-primary-foreground text-sm">
              CFLM QR Ticket System
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              © {new Date().getFullYear()} CFLM — Progetto Open Source
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">
              Repository
            </a>
            <a href="#contatti" className="text-xs text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">
              Contatti
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
