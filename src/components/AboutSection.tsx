import { motion } from "framer-motion";
import exteriorImg from "@/assets/restaurant-exterior.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
            Par mums
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Turku tradīcijas<br />
            <span className="text-primary">Rēzeknē</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            SEDO restorāns piedāvā svaigus kebabus, picas un ātrās maltītes, kas gatavotas no kvalitatīvām sastāvdaļām. Pie mums varat baudīt ēdienu uz vietas, paņemt to līdzņemšanai vai izmantot piegādes iespēju.
          </p>
          <div className="flex gap-8">
            {[
              { value: "4.3★", label: "Google vērtējums" },
              { value: "33+", label: "Atsauksmes" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src={exteriorImg}
            alt="SEDO restorāns no ārpuses"
            className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg">
            Kopš 2024
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
