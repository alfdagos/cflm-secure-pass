import { motion } from "framer-motion";

const columns = [
  {
    title: "Backend",
    items: ["Java 21", "Spring Boot 3", "Spring Data JPA", "Spring Security", "ZXing", "H2 / PostgreSQL"],
  },
  {
    title: "Frontend",
    items: ["Thymeleaf", "HTML5 / CSS3", "JavaScript"],
  },
  {
    title: "Documentazione & API",
    items: ["OpenAPI", "Swagger UI"],
  },
];

const StackSection = () => {
  return (
    <section id="stack" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Stack tecnologico
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {columns.map((col) => (
            <motion.div
              key={col.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-card border border-border rounded-lg p-6 card-shadow"
            >
              <h3 className="font-heading font-semibold text-primary mb-4 text-center">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-foreground text-center py-1.5 border-b border-border last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StackSection;
