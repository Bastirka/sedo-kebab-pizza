import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const hours = [
  { day: "Pirmdiena – Piektdiena", time: "10:00 – 22:00" },
  { day: "Sestdiena", time: "11:00 – 22:00" },
  { day: "Svētdiena", time: "11:00 – 21:00" },
];

const LocationSection = () => (
  <section id="location" className="py-20 md:py-28 bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
          Atrašanās vieta
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Kur mūs atrast
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Address */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Adrese</h3>
                <p className="text-muted-foreground">Atbrīvošanas aleja 172A, Rēzekne</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Atbrīvošanas+aleja+172A+Rēzekne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-3 hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  Norādes kartē
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div className="w-full">
                <h3 className="font-semibold text-foreground mb-3">Darba laiks</h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="text-foreground font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefons</h3>
                <a href="tel:+37127000057" className="text-accent font-semibold text-lg hover:underline">
                  +371 27 000 057
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-card min-h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2150.5!2d27.3167!3d56.5097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDMwJzM1LjAiTiAyN8KwMTknMDAuMCJF!5e0!3m2!1slv!2slv!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SEDO restorāna atrašanās vieta"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
