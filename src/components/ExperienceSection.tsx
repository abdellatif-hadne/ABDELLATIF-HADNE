import { motion } from "framer-motion";
import { Briefcase, Heart, MapPin, CalendarDays, ExternalLink } from "lucide-react";

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
}

const experience: ExpEntry[] = [
  {
    title: "SOC Analyst Intern – SIEM Implementation & Security Monitoring",
    organization: "ARWA Medic",
    period: "juin 2026 – Présent · 1 semaine",
    location: "Marrakech, Maroc",
    contract: "Stage",
    missions: [
      "Mise en place et configuration d'une solution SIEM pour la surveillance de sécurité.",
      "Monitoring des événements de sécurité et analyse des logs en temps réel.",
      "Détection, triage et investigation des incidents de sécurité.",
    ],
    skills: ["SOC", "SIEM", "Security Monitoring", "Log Analysis", "Incident Response", "Blue Team"],
    logoUrl: "/logos/ARWA_Medic.png",
    url: "https://www.arwamedic.com/",
  },
  {
    title: "Étudiant en Cybersécurité - Programme SkillUp IT 2026",
    organization: "EMAN Aerospace",
    period: "mars 2026 · 3 mois",
    location: "Marrakech, Maroc · À distance",
    contract: "Alternance",
    description:
      "Programme d'Immersion Professionnelle – SkillUp IT 2026, en partenariat avec EMAN Aerospace et l'Université Cadi Ayyad.",
    missions: [
      "Architecture : conception de l'architecture applicative et sécurisation de l'infrastructure réseau.",
      "Gestion de Projet : application de la méthodologie Agile (KANBAN) pour le suivi des livrables techniques.",
    ],
    skills: ["Configuration Compliance", "ServiceNow Integration", "Analyse de vulnérabilités", "Architecture de sécurité", "Méthodologie Agile", "Gouvernance IT & Conformité"],
    logoUrl: "/logos/eman.png",
    url: "https://emanaerospace.com/",
  },
  {
    title: "Bug Bounty Hunter (Independent Researcher)",
    organization: "Bugcrowd & HackerOne",
    period: "janv. 2026 – Présent · 4 mois",
    location: "Remote · Indépendant",
    contract: "Indépendant",
    missions: [
      "Conducting web application security testing through the Bugcrowd platform.",
      "Identifying and reporting security vulnerabilities.",
      "Practicing vulnerability research and responsible disclosure.",
    ],
    skills: ["Burp Suite", "Nmap", "Web Application Testing", "Vulnerability Research", "Responsible Disclosure", "XSS", "IDOR", "SQL Injection"],
    logoUrl: "/logos/hackerone.png",
  },
  {
    title: "Cybersecurity CTF Player | Red Team Practice",
    organization: "TryHackMe",
    period: "janv. 2025 – Présent · 1 an 5 mois",
    location: "Remote · Temps partiel",
    contract: "Temps partiel",
    missions: [
      "Solving CTF challenges related to web, network and privilege escalation.",
      "Practicing Red Team techniques and attack methodology.",
      "Ranked in Gold League – Top 6%.",
      "Hands-on labs with Linux, networking and exploitation.",
    ],
    skills: ["CTF", "Red Team", "Linux", "Networking", "Privilege Escalation", "Web Exploitation"],
    logoUrl: "/logos/tryhackme.png",
  },
];

const volunteering: ExpEntry[] = [
  {
    title: "Member & Event Volunteer",
    organization: "Google Developer Groups Marrakesh",
    period: "Dec 2025 – Present",
    location: "Marrakesh, Morocco",
    description:
      "Active community member, volunteering at GDG flagship events including DevFest 2025 and Build With AI 2026.",
    missions: [
      "Supported event logistics, coordination and on-site experience.",
      "Engaged with developers through talks, workshops and networking.",
    ],
    skills: ["Community", "Event Management", "Networking"],
    logoUrl: "/logos/GDG.png",
    url: "https://gdg.community.dev/gdg-marrakesh/",
  },
  {
    title: "Co-Founder",
    organization: "n8n Marrakech Community",
    period: "2026 – Present",
    location: "Marrakesh, Morocco",
    description:
      "Member of the local n8n community focused on workflow automation and no-code / low-code tooling.",
    missions: [
      "Participating in automation meetups and hands-on sessions.",
      "Exploring n8n workflows for security and productivity automation.",
    ],
    skills: ["Automation", "n8n", "Community"],
    logoUrl: "/logos/n8n.png",
    url: "https://luma.com/n8n-marrakech",
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
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    className="surface card-glow rounded-2xl p-5 sm:p-6 shadow-sm"
  >
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
          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
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
  </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="surface inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono tracking-wide text-primary shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            EXPERIENCE
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            My <span className="gradient-text">journey</span> so far
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            A professional path through cybersecurity, research, and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:gap-10 lg:grid-cols-2 items-start">
          <Timeline title="Work Experience" icon={Briefcase} entries={experience} />
          <Timeline title="Volunteering" icon={Heart} entries={volunteering} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
