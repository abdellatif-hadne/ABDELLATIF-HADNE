import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-perf";
import FadeIn from "./FadeIn";

interface Skill {
  label: string;
  docUrl: string;
  iconUrl: string;
}

interface Category {
  name: string;
  prefix?: string;
  direction?: "left" | "right";
  skills: Skill[];
}


const skillCategories: Category[] = [
  {
    name: "Outils & méthodes",
    direction: "left",
    skills: [
      { label: "Power BI", docUrl: "https://learn.microsoft.com/en-us/power-bi/", iconUrl: "https://img.icons8.com/color/96/power-bi.png" },
      { label: "Power Query", docUrl: "https://learn.microsoft.com/en-us/power-query/", iconUrl: "https://img.icons8.com/fluency/96/filter.png" },
      { label: "Excel avancé", docUrl: "https://support.microsoft.com/en-us/excel", iconUrl: "https://img.icons8.com/color/96/microsoft-excel-2019.png" },
      { label: "SQL", docUrl: "https://www.w3schools.com/sql/", iconUrl: "https://img.icons8.com/color/96/sql.png" },
      { label: "SAP", docUrl: "https://help.sap.com/", iconUrl: "https://cdn.simpleicons.org/sap/4cc9f0" },
      { label: "Odoo ERP", docUrl: "https://www.odoo.com/documentation/", iconUrl: "https://cdn.simpleicons.org/odoo/a78bfa" },
      { label: "Cartographie des processus logistiques", docUrl: "https://www.google.com/search?q=cartographie+des+processus+logistiques", iconUrl: "https://img.icons8.com/fluency/96/flow-chart.png" },
    ],
  },
  {
    name: "Terrain & pilotage",
    direction: "right",
    skills: [
      { label: "Gestion des stocks", docUrl: "https://www.google.com/search?q=gestion+des+stocks", iconUrl: "https://img.icons8.com/fluency/96/warehouse.png" },
      { label: "Gestion des flux logistiques", docUrl: "https://www.google.com/search?q=gestion+des+flux+logistiques", iconUrl: "https://img.icons8.com/fluency/96/route.png" },
      { label: "Planification logistique", docUrl: "https://www.google.com/search?q=planification+logistique", iconUrl: "https://img.icons8.com/fluency/96/planner.png" },
      { label: "Gestion de flotte", docUrl: "https://www.google.com/search?q=gestion+de+flotte", iconUrl: "https://img.icons8.com/fluency/96/in-transit.png" },
      { label: "Gestion du transport", docUrl: "https://www.google.com/search?q=gestion+du+transport", iconUrl: "https://img.icons8.com/fluency/96/truck.png" },
      { label: "Optimisation des processus", docUrl: "https://www.google.com/search?q=optimisation+des+processus+logistiques", iconUrl: "https://img.icons8.com/fluency/96/workflow.png" },
      { label: "Analyse de performance", docUrl: "https://www.google.com/search?q=KPI+supply+chain+analyse+de+performance", iconUrl: "https://img.icons8.com/fluency/96/combo-chart.png" },
    ],
  },
  {
    name: "Soft skills",
    direction: "left",
    skills: [
      { label: "Proactivité", docUrl: "https://www.google.com/search?q=proactivit%C3%A9", iconUrl: "https://img.icons8.com/fluency/96/rocket.png" },
      { label: "Adaptabilité", docUrl: "https://www.google.com/search?q=adaptabilit%C3%A9", iconUrl: "https://img.icons8.com/fluency/96/synchronize.png" },
      { label: "Communication", docUrl: "https://www.google.com/search?q=communication+professionnelle", iconUrl: "https://img.icons8.com/fluency/96/chat.png" },
      { label: "Travail en équipe", docUrl: "https://www.google.com/search?q=travail+en+%C3%A9quipe", iconUrl: "https://img.icons8.com/fluency/96/conference-call.png" },
      { label: "Autonomie", docUrl: "https://www.google.com/search?q=autonomie+au+travail", iconUrl: "https://img.icons8.com/fluency/96/compass.png" },
      { label: "Organisation", docUrl: "https://www.google.com/search?q=organisation+au+travail", iconUrl: "https://img.icons8.com/fluency/96/todo-list.png" },
      { label: "Initiative", docUrl: "https://www.google.com/search?q=esprit+d%27initiative", iconUrl: "https://img.icons8.com/fluency/96/idea.png" },
      { label: "Distance émotionnelle", docUrl: "https://www.google.com/search?q=distance+%C3%A9motionnelle", iconUrl: "https://img.icons8.com/fluency/96/scales.png" },
    ],
  },
];

const SkillIcon = ({ skill, loadIcon }: { skill: Skill; loadIcon: boolean }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const parent = target.parentElement;
    if (parent) {
      const span = document.createElement("span");
      span.style.cssText = "font-size:12px;color:#94a3b8;font-weight:600;text-align:center;";
      span.textContent = skill.label.slice(0, 2).toUpperCase();
      parent.appendChild(span);
    }
  };

  return (
    <a
      href={skill.docUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={skill.label}
      className="group flex flex-col items-center gap-2.5 cursor-pointer no-underline flex-shrink-0"
    >
      <div className="skill-tile w-16 h-16 rounded-2xl flex items-center justify-center">
        {loadIcon && (
          <img
            src={skill.iconUrl}
            alt={skill.label}
            width={34}
            height={34}
            loading="lazy"
            decoding="async"
            className="transition-transform duration-300 group-hover:scale-110"
            onError={handleError}
          />
        )}
      </div>
      <span
        className="text-[11px] text-muted-foreground group-hover:text-primary transition-colors text-center leading-tight max-w-[72px]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {skill.label}
      </span>
    </a>
  );
};

const InfiniteCarousel = ({
  skills,
  direction = "left",
  speed = 40,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Icons are only requested once the row approaches the viewport, and the
  // animation is paused while off-screen — both matter a lot on mobile.
  const { ref, inView } = useInView<HTMLDivElement>();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (inView) setHasLoaded(true);
  }, [inView]);

  // Two identical halves → translateX(-50%) loops seamlessly.
  const half = (key: string) => (
    <div className="flex gap-6 pr-6 shrink-0" aria-hidden={key === "b"}>
      {skills.map((skill, i) => (
        <SkillIcon key={`${key}-${skill.label}-${i}`} skill={skill} loadIcon={hasLoaded} />
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      className="relative overflow-hidden w-full py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="marquee"
        style={
          {
            "--marquee-duration": `${speed}s`,
            "--marquee-direction": direction === "right" ? "reverse" : "normal",
            animationPlayState: inView ? "running" : "paused",
          } as React.CSSProperties
        }
      >
        {half("a")}
        {half("b")}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-14" margin="-80px">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Tools &amp; <span className="gradient-text">skills</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-sm md:text-base">
            A technical foundation in data &amp; tools, backed by hands-on operational logistics experience.
          </p>
        </FadeIn>

        <div className="space-y-10 md:space-y-12">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.08}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {cat.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                <span className="surface text-[11px] font-mono text-muted-foreground px-2.5 py-1 rounded-full">
                  {cat.skills.length} tools
                </span>
              </div>

              {/* Infinite scrolling carousel */}
              <InfiniteCarousel
                skills={cat.skills}
                direction={cat.direction ?? "left"}
                speed={Math.max(28, cat.skills.length * 2.6)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
