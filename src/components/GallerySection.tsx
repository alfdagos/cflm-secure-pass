import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import partyHero from "@/assets/party-hero.jpg";
import cocktails from "@/assets/cocktails.jpg";
import musicFestival from "@/assets/music-festival.jpg";
import partyDrinks from "@/assets/party-drinks.jpg";

const images = [
  { src: partyHero, alt: "Festa notturna con cocktail colorati e DJ", span: "md:col-span-2" },
  { src: cocktails, alt: "Cocktail eleganti al bancone del bar", span: "" },
  { src: musicFestival, alt: "Festival musicale con folla e coriandoli fucsia", span: "" },
  { src: partyDrinks, alt: "Amici brindano con drink colorati su un rooftop", span: "md:col-span-2" },
];

const ParallaxImage = ({ img, i }: { img: typeof images[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-lg ${img.span} group`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
    >
      <motion.img
        src={img.src}
        alt={img.alt}
        className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ y }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-sm text-foreground/90 font-medium">{img.alt}</span>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <section className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            L'atmosfera che gestiamo
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Drink, musica e notti indimenticabili — il nostro sistema nasce per rendere 
            ogni evento più sicuro senza togliere il divertimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <ParallaxImage key={i} img={img} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
