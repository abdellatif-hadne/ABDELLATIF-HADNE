import { Trophy, Flag, ExternalLink, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

interface Achievement {
    title: string;
    description: string;
    icon: typeof Trophy;
    url?: string;
    linkLabel?: string;
}

const issuerLabels: Record<string, string> = {
    "Langue": "LNG",
};

const certifications = [
    { title: "Tamazight", issuer: "Langue", date: "Maternelle", url: "" },
    { title: "Arabe", issuer: "Langue", date: "Courant", url: "" },
    { title: "Français", issuer: "Langue", date: "Courant", url: "" },
    { title: "Anglais", issuer: "Langue", date: "Courant", url: "" },
    { title: "Espagnol", issuer: "Langue", date: "Débutant", url: "" },
];

const achievements: Achievement[] = [
    {
        title: "Master en Management Logistique - ENCG Marrakech",
        description: "Diplômé en 2026, à la recherche d'une opportunité en Supply Chain / Logistique. Disponible immédiatement, mobile sur tout le Maroc.",
        icon: Trophy,
    },
    {
        title: "Baccalauréat - Mention Très Bien",
        description: "Sciences de Gestion Comptable.",
        icon: ShieldCheck,
    },
    {
        title: "Projet PFE - Novares",
        description: "Approche BI / Control Tower pour améliorer la synchronisation inter-services et le pilotage de la performance logistique.",
        icon: Flag,
    },
    {
        title: "Soft skills",
        description: "Proactivité, adaptabilité, communication, travail en équipe, autonomie, organisation, initiative, distance émotionnelle.",
        icon: Flag,
    }
];

const CertCard = ({ cert, index }: { cert: typeof certifications[number]; index: number }) => {
    const label = issuerLabels[cert.issuer] ?? "?";
    return (
        <FadeIn delay={index * 0.05} className="h-full">
        <a
            href={cert.url || "#"}
            target={cert.url ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-4 no-underline transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_24px_-14px_hsl(var(--primary)/0.4)]"
        >
            {/* Top row: issuer badge + external icon */}
            <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {label}
                </span>
                <ExternalLink className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            {/* Title */}
            <p className="mb-2 flex-1 font-mono text-[11px] font-semibold leading-snug text-foreground">
                {cert.title}
            </p>

            {/* Meta */}
            <p className="font-mono text-[10px] text-muted-foreground">
                {cert.issuer} · {cert.date}
            </p>
        </a>
        </FadeIn>
    );
};

const AchievementCard = ({ ach, index }: { ach: Achievement; index: number }) => {
    const hasLink = !!ach.url && ach.url !== "REPLACE_WITH_YOUR_DRIVE_LINK";
    const Comp: React.ElementType = hasLink ? "a" : "div";

    return (
        <FadeIn delay={index * 0.1} className="h-full">
        <Comp
            {...(hasLink ? { href: ach.url, target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`group flex h-full min-h-[112px] items-start gap-4 rounded-xl border border-primary/25 bg-card/70 p-4 no-underline backdrop-blur-sm transition-all dark:bg-[#0d0a18] ${
                hasLink ? "cursor-pointer hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md" : ""
            }`}
        >
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
                <ach.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
                <h4 className="mb-1 font-mono text-xs font-semibold text-foreground">{ach.title}</h4>
                <p className="text-[11px] text-muted-foreground">{ach.description}</p>
                {ach.url && (
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                        {ach.linkLabel ?? "View document"}
                        <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                )}
            </div>
        </Comp>
        </FadeIn>
    );
};

const CertsSection = () => {
    return (
        <section id="certs" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Languages &amp; <span className="gradient-text">highlights</span>
                        </h2>
                        <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-sm md:text-base">
                            Languages, academic distinctions and soft skills that complete the professional path.
                        </p>
                    </div>
                </FadeIn>

                {/* Cert Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-12">
                    {certifications.map((cert, i) => (
                        <CertCard key={cert.title} cert={cert} index={i} />
                    ))}
                </div>

                {/* Achievements */}
                <h3 className="mb-5 font-mono text-base font-bold text-foreground">
                    <span className="text-primary">#</span> highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-4 items-stretch">
                    {achievements.map((ach, i) => (
                        <AchievementCard key={ach.title} ach={ach} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertsSection;
