import { motion } from "framer-motion";
import kebabPlate from "@/assets/food-kebab-plate2.jpg";
import falafel from "@/assets/food-falafel.jpg";
import wrapPlate from "@/assets/food-wrap-plate.jpg";

const menuItems = [
  {
    name: "Kebaba šķīvis",
    description: "Kebaba gaļa, frī kartupeļi, svaigi salāti un gardas mērces.",
    image: kebabPlate,
  },
  {
    name: "Falafels",
    description: "Kraukšķīgi falafeli ar svaigiem salātiem un mērcēm.",
    image: falafel,
  },
  {
    name: "Kebaba wraps",
    description: "Svaigs wraps ar dārzeņiem un kebaba gaļu.",
    image: wrapPlate,
  },
];

const MenuSection = () => (
  <section id="menu" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
          Ēdienkarte
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Populārākie ēdieni
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {menuItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card group hover:shadow-glow transition-all duration-300"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
