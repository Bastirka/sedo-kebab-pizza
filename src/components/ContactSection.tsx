import { motion } from "framer-motion";
import { Phone, ShoppingBag } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-4 block">
          Sazinies ar mums
        </span>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          Kontakti
        </h2>

        <p className="mt-4 text-white/85 text-lg max-w-2xl mx-auto">
          Zvaniet mums vai apmeklējiet restorānu — garšīgs ēdiens jūs jau gaida!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4"
      >
        <a
  href="tel:+37127000057"
  className="flex items-center justify-center gap-3 
  bg-white text-red-600
  px-8 py-5 rounded-2xl text-lg font-semibold 
  hover:scale-105 hover:bg-white/95
  transition-all duration-300 shadow-xl"
>
  <Phone className="w-6 h-6" />
  Zvanīt tagad
        </a>

        <a
          href="sms:+37127000057"
          className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-lg font-semibold
                     border border-white/70 bg-transparent text-white
                     hover:bg-white hover:text-red-700 hover:border-white hover:scale-[1.02]
                     transition-all duration-300"
        >
          <ShoppingBag className="w-6 h-6" />
          Pasūtīt līdzņemšanai
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
