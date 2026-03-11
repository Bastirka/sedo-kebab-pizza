import { motion } from "framer-motion";
import { Phone, ShoppingBag } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#d7141f] via-[#c9101a] to-[#b80d16] px-6 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:px-12 md:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-6xl">
            Pasūti savu ēdienu jau šodien
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-xl md:leading-8">
            Zvaniet mums vai apmeklējiet restorānu — garšīgs ēdiens jūs jau gaida!
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+37127000057"
              className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 text-lg font-semibold text-[#c9101a] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 sm:w-[280px]"
            >
              <Phone className="h-5 w-5" />
              Zvanīt tagad
            </a>

            <a
              href="sms:+37127000057"
              className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-2xl border border-white/35 bg-white/5 px-8 text-lg font-semibold text-white backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 sm:w-[280px]"
            >
              <ShoppingBag className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap">Pasūtīt līdzņemšanai</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
