import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-xl font-bold text-primary">SEDO</span>
          <p className="text-sm text-muted-foreground mt-1">Kebab & Pizza · Rēzekne</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition-colors">Ēdienkarte</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Kontakti</a>
          <a href="tel:+37127000057" className="hover:text-primary transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3" />
            +371 27 000 057
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} SEDO Restorāns. Visas tiesības aizsargātas.
      </div>
    </div>
  </footer>
);

export default Footer;
