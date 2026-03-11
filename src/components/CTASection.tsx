import { motion } from "framer-motion";
import { Phone, ShoppingBag } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-cta rounded-3xl p-10 md:p-16 text-center shadow-glow"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Pasūti savu ēdienu jau šodien
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto">
          Zvaniet mums vai apmeklējiet restorānu — garšīgs ēdiens jūs jau gaida!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+37127000057"
            className="flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all"
          >
            <Phone className="w-5 h-5" />
            Zvanīt tagad
          </a>
          <a
            href="#menu"
            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/20 hover:border-white transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Pasūtīt līdzņemšanai
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
