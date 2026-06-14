import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="surface inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wide text-primary shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            ABOUT ME
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Securing the <span className="gradient-text">digital world</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground font-medium">Abdelhadi Rizki</span>, a
            cybersecurity engineer and ethical hacker based in Marrakech, Morocco. I'm passionate
            about protecting the digital world through security research, secure engineering, and
            hands-on projects — and I love breaking systems to understand how to defend them better.
          </p>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground/80">
            My focus is on ethical hacking, threat analysis, and AI integration — building
            intelligent tools to anticipate, detect, and stop modern cyber attacks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
