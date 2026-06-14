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
            cybersecurity engineer based in Marrakech, Morocco, focused on
            <span className="text-foreground font-medium"> defensive security</span> — threat
            detection, SOC operations, and SIEM. My offensive background helps me understand how
            attackers think, so I can defend smarter.
          </p>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground/80">
            What sets me apart is <span className="text-foreground font-medium">AI applied to
            cybersecurity</span> — building intelligent tools that detect anomalies, analyze threats,
            and respond to modern attacks faster than traditional approaches.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
