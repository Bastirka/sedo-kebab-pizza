import { motion } from "framer-motion";
import { Phone, ShoppingBag } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-20">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[2rem] bg-[#c8161d] px-6 py-14 md:px-12 md:py-16 shadow-xl text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
          Pasūti savu ēdienu jau šodien
        </h2>

        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Zvaniet mums vai apmeklējiet restorānu — garšīgs ēdiens jūs jau gaida!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+37127000057"
            className="flex items-center justify-center gap-3 w-full sm:w-[260px] bg-white text-[#d71920] px-8 py-5 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-white/95 hover:scale-[1.03]"
          >
            <Phone className="w-5 h-5" />
            Zvanīt tagad
          </a>

          <a
            href="sms:+37127000057"
            className="flex items-center justify-center gap-3 w-full sm:w-[260px] border border-white/60 text-white px-8 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-[1.03]"
          >
            <ShoppingBag className="w-5 h-5" />
            Pasūtīt līdzņemšanai
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
