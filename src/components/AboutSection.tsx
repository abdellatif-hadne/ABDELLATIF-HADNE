import FadeIn from "./FadeIn";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
          {/* Photo */}
          <FadeIn className="shrink-0" margin="-80px">
            <div className="relative mx-auto w-52 sm:w-60 md:w-72 aspect-square">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 to-[hsl(265_85%_62%)]/30 blur-2xl" />
              <div className="relative h-full w-full rounded-[1.75rem] bg-gradient-to-br from-primary to-[hsl(265_85%_62%)] p-1 shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Abdelhadi Rizki"
                  loading="lazy"
                  className="h-full w-full rounded-[1.6rem] object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn className="text-center md:text-left" delay={0.1} margin="-80px">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Securing the <span className="gradient-text">digital world</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground font-medium">Abdelhadi Rizki</span>, a
              cybersecurity engineering student based in Marrakech, Morocco. I work across the
              <span className="text-foreground font-medium"> full security spectrum</span> - from
              offensive (penetration testing, ethical hacking) to defensive (threat detection, SOC,
              SIEM) - driven by understanding how systems break in order to make them stronger.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground/80">
              What sets me apart is <span className="text-foreground font-medium">AI applied to
              cybersecurity</span> - building intelligent tools that detect anomalies, analyze
              threats, and respond to modern attacks faster than traditional approaches.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
