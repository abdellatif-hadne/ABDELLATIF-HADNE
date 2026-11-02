import FadeIn from "./FadeIn";
import {
  Briefcase,
  Heart,
  MapPin,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

interface ExpEntry {
  title: string;
  organization: string;
  period: string;
  location: string;
  contract?: string;
  description?: string;
  missions: string[];
  skills: string[];
  logoUrl: string;
  url?: string;
  links?: { icon: typeof Briefcase; href: string; label: string }[];
}

const experience: ExpEntry[] = [
  {
    title: "Stagiaire PFE — Business Intelligence & Logistique",
    organization: "Novares",
    period: "février 2026 - juin 2026 · 5 mois",
    location: "Kénitra, Maroc",
    contract: "Stage PFE",
    description:
      "Amélioration de la synchronisation entre les services de la Supply Chain.",
    missions: [
      "Analyse des processus logistiques.",
      "Conception de tableaux de bord Power BI.",
      "Suivi des KPI Supply Chain.",
      "Automatisation du reporting logistique.",
      "Analyse de la performance logistique.",
      "Proposition d'une approche BI / Control Tower.",
    ],
    skills: ["Approvisionnement", "Planification", "Relation client", "Stock / magasin", "Transport / expédition", "Import / export", "Power BI", "KPI", "Control Tower"],
    logoUrl: "/logos/novares.jpg",
    url: "https://www.novares.com/",
  },
  {
    title: "Dispatcher Transport & Logistique",
    organization: "Afriquia SMDC",
    period: "juillet 2025 - août 2025 · 2 mois",
    location: "Maroc",
    contract: "Stage",
    missions: [
      "Planification et organisation des tournées de transport.",
      "Suivi de la flotte.",
      "Coordination avec les chauffeurs.",
      "Analyse des performances du transport.",
      "Reporting opérationnel.",
      "Contribution à l'optimisation des opérations logistiques.",
    ],
    skills: ["Planification des tournées", "Suivi de flotte", "Coordination", "Performance transport", "Reporting"],
    logoUrl: "/logos/afriquia.png",
    url: "https://www.afriquia.ma/",
  },
  {
    title: "Stagiaire — Gestion de Flotte",
    organization: "Collectivité Territoriale de Tilmi",
    period: "juin 2025 - juillet 2025 · 2 mois",
    location: "Tilmi, Maroc",
    contract: "Stage",
    missions: [
      "Suivi de la disponibilité et de l'utilisation de la flotte.",
      "Suivi de la maintenance préventive et corrective.",
      "Suivi des coûts d'exploitation.",
      "Gestion des opérations liées à la flotte.",
    ],
    skills: ["Gestion de flotte", "Maintenance préventive", "Maintenance corrective", "Coûts d'exploitation"],
    logoUrl: "/logos/tilmi.png",
  },
  {
    title: "Stagiaire — Logistique & Gestion des Stocks",
    organization: "SMI — Groupe Managem",
    period: "juin 2024 - juillet 2024 · 2 mois",
    location: "Maroc",
    contract: "Stage",
    missions: [
      "Réception et stockage des marchandises.",
      "Gestion des sorties de stock.",
      "Participation aux inventaires.",
      "Suivi de la fiabilité des stocks.",
      "Réorganisation de la zone de stockage.",
      "Création de reporting automatisé avec Excel / Power BI.",
    ],
    skills: ["Réception", "Stockage", "Inventaires", "Fiabilité des stocks", "Excel", "Power BI"],
    logoUrl: "/logos/managem.png",
    url: "https://www.managemgroup.com/",
  },
];

const volunteering: ExpEntry[] = [
  {
    title: "Accueil, vente & e-commerce",
    organization: "Collectif culturel & artistique",
    period: "2025",
    location: "Maroc",
    missions: [
      "Accueil et vente lors de festivals.",
      "Gestion e-commerce.",
      "Suivi des commandes.",
    ],
    skills: ["Vente", "E-commerce", "Suivi des commandes"],
    logoUrl: "/logos/collectif.png",
  },
  {
    title: "Membre",
    organization: "Club Graphic Design — ENCG Marrakech",
    period: "2021 - 2023",
    location: "Marrakech, Maroc",
    missions: [
      "Coaching Illustrator.",
      "Création graphique.",
      "Communication visuelle.",
    ],
    skills: ["Illustrator", "Création graphique", "Communication visuelle"],
    logoUrl: "/logos/encg.png",
  },
  {
    title: "Bénévole",
    organization: "Action associative — ENCG Marrakech",
    period: "2022 - 2023",
    location: "Marrakech, Maroc",
    missions: [
      "Participation à des activités associatives avec des enfants.",
    ],
    skills: ["Engagement associatif", "Travail en équipe"],
    logoUrl: "/logos/encg.png",
  },
];

const resolveLogo = (logoUrl: string) =>
  logoUrl.startsWith("http")
    ? logoUrl
    : `${import.meta.env.BASE_URL}${logoUrl.replace(/^\//, "")}`;

const LogoBox = ({ entry }: { entry: ExpEntry }) => (
  <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-sm ring-4 ring-background">
    <img
      src={resolveLogo(entry.logoUrl)}
      alt={entry.organization}
      className="h-full w-full object-contain"
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.style.display = "none";
        const p = t.parentElement;
        if (p) {
          const span = document.createElement("span");
          span.style.cssText = "font-size:14px;font-weight:700;color:#3a5bf7;font-family:'JetBrains Mono',monospace;";
          span.textContent = entry.organization.slice(0, 2).toUpperCase();
          p.appendChild(span);
        }
      }}
    />
  </div>
);

const ExperienceCard = ({ entry, index }: { entry: ExpEntry; index: number }) => (
  <FadeIn delay={index * 0.06}>
    <div className="surface card-glow rounded-2xl p-5 sm:p-6 shadow-sm">
    {/* Header */}
    <div className="mb-4">
      <h4 className="text-base font-semibold leading-snug text-foreground">{entry.title}</h4>
      {entry.url ? (
        <a
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {entry.organization}
          <ExternalLink className="h-3 w-3" />
        </a>
      ) : (
        <p className="mt-1 text-sm font-medium text-primary">{entry.organization}</p>
      )}
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" />
          {entry.period}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          {entry.location}
        </span>
        {entry.contract && (
          <span className="rounded-full px-2 py-0.5 font-medium text-primary">
            {entry.contract}
          </span>
        )}
      </div>
    </div>

    {/* Description */}
    {entry.description && (
      <p className="mb-4 border-l-2 border-primary/30 pl-3 text-sm leading-relaxed text-muted-foreground">
        {entry.description}
      </p>
    )}

    {/* Missions */}
    <ul className="mb-4 space-y-2">
      {entry.missions.map((m, i) => (
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-0.5 shrink-0 font-bold text-primary">›</span>
          {m}
        </li>
      ))}
    </ul>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
      {entry.skills.map((s) => (
        <span
          key={s}
          className="rounded-md border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
        >
          {s}
        </span>
      ))}
    </div>

    {/* Social links */}
    {entry.links && (
      <div className="mt-4 flex flex-wrap gap-2 border-t border-border/60 pt-4">
        {entry.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <link.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    )}
    </div>
  </FadeIn>
);

const Timeline = ({
  title,
  icon: Icon,
  entries,
}: {
  title: string;
  icon: typeof Briefcase;
  entries: ExpEntry[];
}) => (
  <div>
    {/* Sub-header */}
    <div className="mb-8 flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </p>
      </div>
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-8 top-3 bottom-3 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
      <div className="space-y-6">
        {entries.map((entry, i) => (
          <div key={entry.title + i} className="relative pl-[76px] sm:pl-24">
            <div className="absolute left-0 top-0 z-10">
              {entry.url ? (
                <a href={entry.url} target="_blank" rel="noopener noreferrer" aria-label={entry.organization}>
                  <LogoBox entry={entry} />
                </a>
              ) : (
                <LogoBox entry={entry} />
              )}
            </div>
            <ExperienceCard entry={entry} index={i} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <FadeIn className="mb-14 text-center" margin="-80px">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            My <span className="gradient-text">journey</span> so far
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Four field missions, from the warehouse to the data, building a complete view of the Supply Chain.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 md:gap-10 lg:grid-cols-2 items-start">
          <Timeline title="Work Experience" icon={Briefcase} entries={experience} />
          <Timeline title="Activities & Engagements" icon={Heart} entries={volunteering} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
