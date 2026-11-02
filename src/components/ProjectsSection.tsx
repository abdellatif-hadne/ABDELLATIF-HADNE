import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  stars?: number;
}

const projects: Project[] = [
  {
    title: "Projet PFE — Synchronisation inter-services via la BI",
    description:
      "Amélioration de la synchronisation inter-services dans une Supply Chain industrielle via la Business Intelligence. Projet de fin d'études réalisé chez Novares, centré sur l'analyse des flux et la conception d'une approche BI pour renforcer la synchronisation entre services et le pilotage de la performance logistique.",
    tags: ["Supply Chain", "Business Intelligence", "Power BI", "KPI", "Synchronisation inter-services", "Performance logistique", "Reporting", "Control Tower"],
    github: "https://www.linkedin.com/in/abdellatif-hadne-396a782b4/",
  },
  {
    title: "Automatisation du processus d'achat",
    description:
      "Projet académique : conception d'un fichier automatisé pour centraliser les données d'achat et faciliter le suivi des commandes, des stocks, des fournisseurs et des échéances.",
    tags: ["Excel", "Automatisation", "Processus achats"],
    github: "https://www.linkedin.com/in/abdellatif-hadne-396a782b4/",
  },
];

const MAX_TAGS = 5;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const extra = project.tags.length - MAX_TAGS;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  return (
    <FadeIn delay={(index % 3) * 0.08} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group card-spotlight card-accent relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_30px_-16px_hsl(var(--primary)/0.4)]"
      >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live website`}
              className="transition-colors hover:text-primary"
            >
              <ArrowUpRight className="h-[18px] w-[18px]" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="transition-colors hover:text-primary"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-1.5">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {extra > 0 && (
          <span className="px-1 text-[10px] text-primary/80">+{extra}</span>
        )}
      </div>
      </div>
    </FadeIn>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center" margin="-80px">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Two projects focused on process improvement and data-driven performance management.
          </p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
