import { ArrowDown, Linkedin, Mail, Shield } from "lucide-react";

import TypingText from "./TypingText";


const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
            <div className="container mx-auto px-6 text-center z-10">
                <div
                    className="pop-in surface inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-primary text-xs font-mono tracking-wide mb-8 shadow-sm"
                >
                    <Shield className="w-3 h-3" />
                    SUPPLY CHAIN & LOGISTICS
                </div>

                <h1
                    style={{ animationDelay: "0.1s" }}
                    className="rise-in text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight"
                >
                    Abdellatif <span className="gradient-text">Hadne</span>
                    <span className="text-primary">.</span>
                </h1>

                <div style={{ animationDelay: "0.2s" }} className="rise-in group">
                    <p className="surface font-mono text-xs sm:text-base md:text-lg text-muted-foreground mb-5 inline-flex items-center justify-center max-w-full min-w-[240px] sm:min-w-[280px] md:min-w-[340px] px-4 sm:px-5 py-1.5 md:py-2 rounded-full whitespace-nowrap shadow-sm">
                        <TypingText texts={[
                            "Supply Chain & Logistics",
                            "Analytics & Performance",
                            "Power BI & KPI Reporting",
                            "Transport & Fleet Planning",
                            "Stock & Warehouse Management"
                        ]} />
                    </p>
                </div>




                <p
                    style={{ animationDelay: "0.3s" }}
                    className="rise-in max-w-2xl mx-auto text-muted-foreground/80 leading-relaxed mb-10 text-sm md:text-lg"
                >
                    Graduate of a Master's in Logistics Management from ENCG Marrakech, looking for an opportunity in Supply Chain / Logistics. Available immediately, mobile across Morocco.
                </p>


                <div
                    style={{ animationDelay: "0.4s" }}
                    className="rise-in flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
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
                            { icon: Linkedin, href: "https://www.linkedin.com/in/abdellatif-hadne-396a782b4/" },
                            { icon: Mail, href: "mailto:abdellatif.hadne@gmail.com" },
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
                </div>
            </div>

            <div
                style={{ animationDelay: "1s" }}
                className="fade-in absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/50"
            >
                <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to initiate</span>
                <div className="w-6 h-10 rounded-full border border-primary/25 flex items-start justify-center p-2">
                    <div className="scroll-dot w-1 h-1 rounded-full bg-primary" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;