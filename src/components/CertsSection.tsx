import { motion } from "framer-motion";
import { Trophy, Flag, ExternalLink, ShieldCheck } from "lucide-react";

interface Achievement {
    title: string;
    description: string;
    icon: typeof Trophy;
    color: string;
    bg: string;
    url?: string;
    linkLabel?: string;
}

const issuerStyles: Record<string, { color: string; bg: string; label: string }> = {
    "TryHackMe": { color: "#ff4d6d", bg: "#ff4d6d18", label: "THM" },
    "SOCRadar": { color: "#f4a261", bg: "#f4a26118", label: "SOC" },
    "Proofpoint": { color: "#4cc9f0", bg: "#4cc9f018", label: "PP" },
    "Cisco": { color: "#4cc9f0", bg: "#4cc9f018", label: "CSC" },
    "Cybrary": { color: "#a78bfa", bg: "#a78bfa18", label: "CBR" },
    "Cisco Networking Academy": { color: "#4cc9f0", bg: "#4cc9f018", label: "CSC" },
};

const certifications = [
    { title: "Ethical Hacker", issuer: "Cisco", date: "May 2026", url: "https://www.credly.com/badges/06ec8462-385d-4989-9db7-f11fba15681a/public_url" },
    { title: "Jr Penetration Tester", issuer: "TryHackMe", date: "Feb 2026", url: "https://tryhackme.com/certificate/THM-S3LRB8724U" },
    { title: "Ransomware Defense Masterclass", issuer: "SOCRadar", date: "Jul 2025", url: "https://credsverse.com/credentials/dc6384e6-2920-46ff-b2f1-0aef9ab1c826?preview=1" },
    { title: "Mastering Cyber Threat Intelligence for SOC Analysts", issuer: "SOCRadar", date: "Jul 2025", url: "https://credsverse.com/credentials/3b0c8b7f-223f-4f93-a1c9-c3e083141e42?preview=2" },
    { title: "Certified Email Authentication Specialist", issuer: "Proofpoint", date: "Apr 2025", url: "https://www.credly.com/badges/68b5fe7a-e1af-41ba-962f-022a414bf4a2/linked_in_profile" },
    { title: "Introduction to Cybersecurity", issuer: "Cisco", date: "Mar 2025", url: "https://www.credly.com/badges/7b687211-0909-4ba1-943a-875f70f56ea2/linked_in_profile" },
    { title: "CCNA: Automation and Programmability", issuer: "Cybrary", date: "Feb 2025", url: "https://app.cybrary.it/profile/CooperativeMockingbird3528?tab=badges" },
    { title: "Python Essentials 1", issuer: "Cisco", date: "Jan 2025", url: "https://www.credly.com/badges/b0164192-1158-42f7-a33e-e479b31fbdfb/linked_in_profile" },
    { title: "Python", issuer: "Cisco Networking Academy", date: "Sep 2024", url: "" },
    { title: "Pre Security", issuer: "TryHackMe", date: "Nov 2024", url: "" },
    { title: "Introduction to Cyber Security", issuer: "TryHackMe", date: "Nov 2024", url: "" },
];

const achievements: Achievement[] = [
    {
        title: "🏆 1st Prize IT – SKILLUP26",
        description: "Won the 1st IT Prize at the final competition of the 8th Summer School in Aeronautics (SKILLUP26) in Marrakech — after months of intensive mentoring, workshops and coaching with international experts.",
        icon: Trophy,
        color: "#FFD700",
        bg: "#FFD70018",
        url: "https://www.linkedin.com/posts/abdelhadi-rizki_skillup26-skillup26-skillup26-activity-7464357418823688193-ON_S",
        linkLabel: "View LinkedIn post",
    },
    {
        title: "Security Research Recognition – SEM",
        description: "Formal recognition letter from SEM for identifying and responsibly reporting a potential vulnerability, helping safeguard their digital integrity and data-protection compliance.",
        icon: ShieldCheck,
        color: "#4826F3",
        bg: "#4826F318",
        url: "REPLACE_WITH_YOUR_DRIVE_LINK",
        linkLabel: "View recognition letter",
    },
    {
        title: "1st Place Gold League",
        description: "Top 6% worldwide on TryHackMe",
        icon: Trophy,
        color: "#f4a261",
        bg: "#f4a26118",
    },
    {
        title: "Natas CTF Complete",
        description: "All 33 levels completed on OverTheWire",
        icon: Flag,
        color: "#00ff88",
        bg: "#00ff8818",
    },
    {
        title: "Top 10 – Knights of the Fury CTF",
        description: "8ème place sur 100 équipes avec S4M_Hack – 24h de challenges intensifs en cybersécurité (Web, Crypto, OSINT, Reverse, IoT…).",
        icon: Trophy,
        color: "#FFD700",
        bg: "#FFD70018",
    },
    {
        title: "Official CTF Player – SOC4M",
        description: "Active CTF player officially representing team SOC4M, participating in cybersecurity competitions and solving challenges across multiple domains.",
        icon: Flag,
        color: "#00c2ff",
        bg: "#00c2ff18",
    }
];

const CertsSection = () => {
    return (
        <section id="certs" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-2">
                            <span className="text-primary">~/</span>Certifications
                            <span className="text-[#a78bfa]"></span>
                        </h2>
                        <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-4" />
                    </div>

                    {/* Cert Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-12">
                        {certifications.map((cert, i) => {
                            const s = issuerStyles[cert.issuer] ?? { color: "#888", bg: "#88888818", label: "?" };
                            return (
                                <motion.a
                                    key={cert.title}
                                    href={cert.url || "#"}
                                    target={cert.url ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group relative flex flex-col rounded-xl border border-border bg-card/70 p-4 no-underline backdrop-blur-sm transition-all duration-200 cursor-pointer hover:border-primary/40 hover:bg-primary/5 dark:border-[#1e1e35] dark:bg-[#0d0d18] dark:hover:border-primary/35 dark:hover:bg-[#0d1a10]"
                                >
                                    {/* Top row: issuer badge + external icon */}
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <span
                                            className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded"
                                            style={{ background: s.bg, color: s.color }}
                                        >
                                            {s.label}
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
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Achievements */}
                    <h3 className="mb-5 font-mono text-base font-bold text-violet-600 dark:text-[#a78bfa]">
                        # achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 items-stretch">
                        {achievements.map((ach, i) => {
                            const hasLink = !!ach.url && ach.url !== "REPLACE_WITH_YOUR_DRIVE_LINK";
                            const Comp: React.ElementType = hasLink ? motion.a : motion.div;
                            return (
                                <Comp
                                    key={ach.title}
                                    {...(hasLink
                                        ? { href: ach.url, target: "_blank", rel: "noopener noreferrer" }
                                        : {})}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`group flex h-full min-h-[112px] items-start gap-4 rounded-xl border border-primary/25 bg-card/70 p-4 no-underline backdrop-blur-sm transition-all dark:bg-[#0d0a18] ${
                                        hasLink ? "cursor-pointer hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md" : ""
                                    }`}
                                >
                                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
                                        <ach.icon className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="mb-1 font-mono text-xs font-semibold text-foreground">
                                            {ach.title}
                                        </h4>
                                        <p className="text-[11px] text-muted-foreground">{ach.description}</p>
                                        {ach.url && (
                                            <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                                                {ach.linkLabel ?? "View document"}
                                                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                            </span>
                                        )}
                                    </div>
                                </Comp>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CertsSection;
