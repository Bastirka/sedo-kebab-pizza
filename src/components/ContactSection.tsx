import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
          Sazinies ar mums
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Kontakti
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4"
      >
        <a
          href="tel:+37127000057"
          className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-primary/90 transition-all shadow-card"
        >
          <Phone className="w-6 h-6" />
          Zvanīt tagad
        </a>
        <a
          href="sms:+37127000057"
          className="flex items-center justify-center gap-3 bg-card text-foreground border border-border px-8 py-5 rounded-2xl text-lg font-semibold hover:border-primary transition-all shadow-card"
        >
          <MessageCircle className="w-6 h-6" />
          Sūtīt SMS
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
