import { motion } from "framer-motion";
import { Clock, Star, ChevronDown } from "lucide-react";
import heroImg from "@/assets/food-kebab-plate.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="SEDO kebaba šķīvis"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Badges */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur px-4 py-2 rounded-full text-sm text-foreground">
              <Clock className="w-4 h-4 text-accent" />
              10:00 – 22:00
            </span>
            <span className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur px-4 py-2 rounded-full text-sm text-foreground">
              <Star className="w-4 h-4 text-accent fill-accent" />
              4.3 Google
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
            SEDO<br />
            <span className="text-gradient-gold">Kebabi & Picas</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto">
            Svaigi kebabi, picas un ātra apkalpošana Rēzeknē
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-glow"
            >
              Skatīt ēdienkarti
            </a>
            <a
              href="tel:+37127000057"
              className="border-2 border-foreground/30 text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:border-accent hover:text-accent transition-all"
            >
              Pasūtīt tagad
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
