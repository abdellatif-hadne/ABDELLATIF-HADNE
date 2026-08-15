import { ArrowUpRight, FileText, Globe2, Languages } from "lucide-react";
import FadeIn from "./FadeIn";

const cvLinks = {
    fr: "https://drive.google.com/file/d/10mGH0es9_RsE52",
    en: "https://drive.g",
};

const resumes = [
    {
        title: "Version Francaise",
        subtitle: "Pour les candidatures en francais",
        href: cvLinks.fr,
        icon: Languages,
    },
    {
        title: "English Version",
        subtitle: "For international opportunities",
        href: cvLinks.en,
        icon: Globe2,
    },
];

const ResumeCard = ({ resume, index }: { resume: typeof resumes[number]; index: number }) => {
    return (
        <FadeIn delay={index * 0.08} className="h-full">
        <a
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-2xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_32px_-16px_hsl(var(--primary)/0.45)]"
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                        <resume.icon className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{resume.title}</h3>
                        <p className="text-sm text-muted-foreground">{resume.subtitle}</p>
                    </div>
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                </div>
            </div>
        </a>
        </FadeIn>
    );
};

const CVSection = () => {
    return (
        <section id="cv" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <FadeIn className="surface mx-auto max-w-4xl rounded-[28px] px-6 py-10 shadow-sm md:px-12 md:py-14">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="surface inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono tracking-wide text-primary shadow-sm">
                            <FileText className="h-3.5 w-3.5" />
                            RESUME
                        </span>

                        <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Want to know <span className="gradient-text">more</span>?
                        </h2>

                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Open the version that matches your context and get a clearer view of my
                            experience, skills, education, and cybersecurity background.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {resumes.map((resume, index) => (
                            <ResumeCard key={resume.title} resume={resume} index={index} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default CVSection;
