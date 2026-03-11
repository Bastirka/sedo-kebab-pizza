import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Truck } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Uz vietas",
    description: "Baudiet maltīti mūsu restorānā patīkamā atmosfērā.",
  },
  {
    icon: ShoppingBag,
    title: "Līdzņemšanai",
    description: "Ātri un ērti pasūtījumi līdzņemšanai.",
  },
  {
    icon: Truck,
    title: "Piegāde",
    description: "Ātra un ērta ēdiena piegāde.",
  },
];

const ServicesSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
          Pakalpojumi
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Mūsu pakalpojumi
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
