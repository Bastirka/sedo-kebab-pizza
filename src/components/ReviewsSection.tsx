import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Anna K.", text: "Ļoti garšīgi kebabi! Vienmēr svaigi un ar lieliskām mērcēm.", rating: 5 },
  { name: "Mārtiņš R.", text: "Ātra apkalpošana un draudzīgs personāls. Iesaku!", rating: 5 },
  { name: "Ieva L.", text: "Labākie kebabi Rēzeknē. Porcijas ir lielas un garšīgas.", rating: 4 },
];

const ratingBars = [
  { stars: 5, pct: 55 },
  { stars: 4, pct: 25 },
  { stars: 3, pct: 12 },
  { stars: 2, pct: 5 },
  { stars: 1, pct: 3 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
          Atsauksmes
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Klientu atsauksmes
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-card"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl font-bold text-foreground">4.3</span>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-5 h-5 text-accent fill-accent" />
                ))}
                <Star className="w-5 h-5 text-accent fill-accent/40" />
              </div>
              <span className="text-sm text-muted-foreground">33 atsauksmes</span>
            </div>
          </div>
          <div className="space-y-3">
            {ratingBars.map((b) => (
              <div key={b.stars} className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-4">{b.stars}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card"
            >
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-3 italic">"{r.text}"</p>
              <span className="text-sm font-semibold text-muted-foreground">{r.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
