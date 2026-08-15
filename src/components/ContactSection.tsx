import { useState } from "react";
import FadeIn from "./FadeIn";
import { Mail, Phone, MapPin, Send, Loader2, Check, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const FORM_ENDPOINT = "https://send.pageclip.co/M6DsQNaVJXhIJ81gPAyi5prHfmAJr5iO";

const successToast = () =>
    toast.custom(
        () => (
            <div className="flex w-full items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-md">
                <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={3} />
                <span className="text-sm font-medium text-foreground">Message sent successfully</span>
            </div>
        ),
        { unstyled: true, duration: 4000 },
    );

const errorToast = () =>
    toast.custom(
        () => (
            <div className="flex w-full items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-md">
                <AlertTriangle className="h-4 w-4 shrink-0 text-rose-500" strokeWidth={2.5} />
                <span className="text-sm font-medium text-foreground">Couldn&apos;t send — email me directly</span>
            </div>
        ),
        { unstyled: true, duration: 5000 },
    );

const contactInfo = [
    { icon: Mail, label: "Email", value: "rizkiabdelhadi4@gmail.com", href: "mailto:rizkiabdelhadi4@gmail.com" },
    { icon: Phone, label: "Phone", value: "+212 659 030 899", href: "tel:+212659030899" },
    { icon: MapPin, label: "Location", value: "Marrakech, Morocco", href: "https://www.google.com/maps/search/?api=1&query=Marrakech,Morocco" },
];

const inputClass =
    "w-full px-4 py-3 rounded-xl bg-background/60 border border-border text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

const ContactSection = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const body = new URLSearchParams();
        new FormData(form).forEach((value, key) => body.append(key, value.toString()));

        setSubmitting(true);
        try {
            // Pageclip saves the submission but blocks reading its response (CORS),
            // so we send with no-cors and treat a completed request as success.
            await fetch(FORM_ENDPOINT, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            });
            successToast();
            form.reset();
        } catch {
            errorToast();
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <FadeIn margin="-80px">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Let&apos;s <span className="gradient-text">work together</span>
                        </h2>
                        <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-sm md:text-base">
                            Have a project, an opportunity, or just want to say hi? My inbox is always open.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
                        {/* Contact info */}
                        <div className="surface rounded-2xl p-7 shadow-sm">
                            <h3 className="text-base font-semibold text-foreground mb-6">Get in touch</h3>
                            <div className="space-y-3">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.label === "Location" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 rounded-xl border border-transparent p-2 -mx-2 transition-all hover:border-primary/30 hover:bg-primary/5"
                                    >
                                        <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                                {item.label}
                                            </div>
                                            <div className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                                                {item.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-7 flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3 text-xs text-muted-foreground">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                Available for internships &amp; freelance security work
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="surface rounded-2xl p-7 shadow-sm space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="contact-name" className="sr-only">Your name</label>
                                    <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="sr-only">Email address</label>
                                    <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Email address" required className={inputClass} />
                                </div>
                            </div>
                            <label htmlFor="contact-subject" className="sr-only">Subject</label>
                            <input id="contact-subject" name="subject" type="text" placeholder="Subject" className={inputClass} />
                            <label htmlFor="contact-message" className="sr-only">Your message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Your message…"
                                rows={6}
                                required
                                className={`${inputClass} resize-none`}
                            ></textarea>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_hsl(var(--primary)/0.7)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Sending…</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send message</span>
                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ContactSection;
