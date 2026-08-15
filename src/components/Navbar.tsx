import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

import NavLink from "./NavLink";
import { useTheme } from "../hooks/use-theme";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const navLinks = [
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Experience", href: "/#experience" },
        { name: "Projects", href: "/#projects" },
        { name: "Blog", href: "/blog" },
        { name: "Certs", href: "/#certs" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:px-6 md:pt-5 pointer-events-none">
            <div
                className={`pointer-events-auto mx-auto flex w-full max-w-4xl items-center justify-between rounded-[20px] border px-4 py-3 transition-all duration-300 md:px-6 ${isScrolled
                    ? "border-border/80 bg-background/85 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
                    : "border-border/60 bg-background/72 shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                    }`}
            >
                <a href="/" className="flex items-center gap-3 group shrink-0">
                    <span className="font-sans text-[1.75rem] font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        0xRizki
                    </span>
                    <span className="text-primary text-xl leading-none">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} href={link.href}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="inline-flex items-center gap-2 rounded-[14px] border border-border bg-card/70 px-3 py-2 text-sm text-foreground/80 transition-all hover:border-primary/35 hover:text-primary"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        <span>{theme === "dark" ? "Light" : "Dark"}</span>
                    </button>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-[14px] border border-primary/25 bg-primary/[0.08] px-4 py-2 text-sm text-primary transition-all hover:border-primary/45 hover:bg-primary/[0.12]"
                    >
                        <span>Let's talk</span>
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="rounded-[14px] border border-border bg-card/70 p-2 text-foreground hover:text-primary transition-colors"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                    <button
                        className="rounded-[14px] border border-border bg-card/70 p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                    <div
                        className="panel-in pointer-events-auto fixed inset-x-4 top-[88px] rounded-[28px] border border-border bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8 px-6 py-10"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-bold"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                toggleTheme();
                                setIsMobileMenuOpen(false);
                            }}
                            className="inline-flex items-center gap-2 rounded-[14px] border border-border bg-card/70 px-5 py-2.5 text-sm text-foreground/80 transition-all hover:border-primary/35 hover:text-primary"
                        >
                            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                        </button>
                        <a
                            href="#cv"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center gap-2 rounded-[14px] border border-primary/25 bg-primary/[0.08] px-5 py-2.5 text-sm text-primary transition-all hover:border-primary/45 hover:bg-primary/[0.12]"
                        >
                            <span>Resume</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                )}
        </nav>
    );
};

export default Navbar;
