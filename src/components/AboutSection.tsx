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
                  alt="Abdellatif Hadne"
                  loading="lazy"
                  className="h-full w-full rounded-[1.6rem] object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn className="text-center md:text-left" delay={0.1} margin="-80px">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Moving information as well as <span className="gradient-text">goods</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground font-medium">Abdellatif Hadne</span>, a
              graduate of a Master's in Logistics Management from ENCG Marrakech. Through four field
              missions - from the warehouse to the data - I've built a
              <span className="text-foreground font-medium"> complete view of the Supply Chain</span>:
              stocks &amp; warehousing, transport planning and fleet follow-up.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground/80">
              What sets me apart is <span className="text-foreground font-medium">data-driven
              performance management</span> - Power BI dashboards, automated reporting and KPI
              analysis to understand and improve a Supply Chain. Available immediately, mobile
              across Morocco.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
