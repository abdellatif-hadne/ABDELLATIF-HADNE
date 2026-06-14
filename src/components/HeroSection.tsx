import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Shield } from "lucide-react";

import TypingText from "./TypingText";


const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="surface inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-primary text-xs font-mono tracking-wide mb-8 shadow-sm"
                >
                    <Shield className="w-3 h-3" />
                    CYBERSECURITY ENGINEER
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight"
                >
                    Abdelhadi <span className="gradient-text">Rizki</span>
                    <span className="text-primary">.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group"
                >
                    <p className="surface font-mono text-sm sm:text-base md:text-lg text-muted-foreground mb-5 inline-flex items-center justify-center min-w-[280px] md:min-w-[340px] px-5 py-1.5 md:py-2 rounded-full whitespace-nowrap shadow-sm">
                        <TypingText texts={[
                            "Blue Team / SOC Analyst",
                            "AI for Cybersecurity",
                            "Threat Detection Engineer",
                            "Security Researcher",
                            "Penetration Tester"
                        ]} />
                    </p>
                </motion.div>




                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-muted-foreground/80 leading-relaxed mb-10 text-sm md:text-lg"
                >
                    Defensive-focused cybersecurity engineer specializing in threat detection, SOC operations, and AI applied to security — backed by hands-on offensive experience to defend smarter.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
                >
                    <a
                        href="#cv"
                        className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_hsl(var(--primary)/0.7)]"
                    >
                        <span>View Resume</span>
                        <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </a>
                    <div className="flex items-center justify-center gap-3">
                        {[
                            { icon: Github, href: "https://github.com/Rizki033" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/abdelhadi-rizki/" },
                            { icon: Twitter, href: "https://x.com/Rizki40109" },
                            { icon: Mail, href: "mailto:rizkiabdelhadi4@gmail.com" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="surface surface-hover p-3 rounded-2xl group"
                            >
                                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/50"
            >
                <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to initiate</span>
                <div className="w-6 h-10 rounded-full border border-primary/25 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;