import { Phone } from "lucide-react";

const FloatingOrderButton = () => (
  <a
    href="tel:+37127000057"
    className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all animate-float md:hidden"
    aria-label="Zvanīt"
  >
    <Phone className="w-6 h-6" />
  </a>
);

export default FloatingOrderButton;
