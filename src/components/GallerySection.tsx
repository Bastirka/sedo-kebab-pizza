import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import img1 from "@/assets/food-kebab-plate.jpg";
import img2 from "@/assets/food-kebab-plate2.jpg";
import img3 from "@/assets/food-falafel.jpg";
import img4 from "@/assets/food-grill.jpg";
import img5 from "@/assets/food-wrap-plate.jpg";
import img6 from "@/assets/restaurant-exterior.jpg";

const images = [
  { src: img1, alt: "Kebaba šķīvis" },
  { src: img2, alt: "Kebaba šķīvis ar salātiem" },
  { src: img3, alt: "Falafels" },
  { src: img4, alt: "Grilēta gaļa" },
  { src: img5, alt: "Kebaba wraps" },
  { src: img6, alt: "SEDO restorāns" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
            Foto
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Galerija
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="overflow-hidden rounded-xl aspect-square group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
