/**
 * Curated profile data used by the interactive terminal.
 * Mirrors what is displayed in the portfolio sections.
 */

export const identity = {
  name: "Abdellatif Hadne",
  handle: "A.Hadne",
  role: "Supply Chain & Logistics | Analytics & Performance",
  focus: "Stocks & entrepôt - Transport - Data & BI (Power BI, KPI, reporting)",
  school: "ENCG Marrakech - Master en Management Logistique (2021-2026)",
  location: "Mobile sur tout le Maroc",
  status: "Disponible immédiatement - opportunité en Supply Chain / Logistique",
  languages: ["Tamazight", "Arabe", "Français", "Anglais", "Espagnol"],
};

export const contact = [
  { label: "email", value: "abdellatif.hadne@gmail.com", href: "mailto:abdellatif.hadne@gmail.com" },
  { label: "phone", value: "+212 6 52 10 98 10", href: "tel:+212652109810" },
  { label: "location", value: "Mobile sur tout le Maroc", href: "https://www.google.com/maps/search/?api=1&query=Morocco" },
];

export const socials = [
  { label: "linkedin", value: "linkedin.com/in/abdellatif-hadne", href: "https://www.linkedin.com/in/abdellatif-hadne-396a782b4/" },
];

export interface SkillGroup {
  key: string;
  label: string;
  color: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: "tech",
    label: "Outils & méthodes",
    color: "text-emerald-400",
    items: [
      "Power BI", "Power Query", "Excel avancé", "SQL", "SAP", "Odoo ERP",
      "Cartographie des processus logistiques",
    ],
  },
  {
    key: "ops",
    label: "Terrain & pilotage",
    color: "text-rose-400",
    items: [
      "Gestion des stocks", "Gestion des flux logistiques", "Planification logistique",
      "Gestion de flotte", "Gestion du transport", "Optimisation des processus", "Analyse de performance",
    ],
  },
  {
    key: "soft",
    label: "Soft skills",
    color: "text-cyan-400",
    items: [
      "Proactivité", "Adaptabilité", "Communication", "Travail en équipe", "Autonomie",
      "Organisation", "Initiative", "Distance émotionnelle",
    ],
  },
];

export interface TerminalProject {
  name: string;
  desc: string;
  stack: string;
  url: string;
}

export const projects: TerminalProject[] = [
  { name: "Projet PFE - Novares", desc: "Synchronisation inter-services dans une Supply Chain industrielle via la Business Intelligence.", stack: "Power BI / KPI / Control Tower", url: "https://www.linkedin.com/in/abdellatif-hadne-396a782b4/" },
  { name: "Automatisation du processus d'achat", desc: "Fichier automatisé centralisant commandes, stocks, fournisseurs et échéances.", stack: "Excel / Automatisation", url: "https://www.linkedin.com/in/abdellatif-hadne-396a782b4/" },
];

export interface TerminalEntry {
  role: string;
  org: string;
  period: string;
  note: string;
}

export const experience: TerminalEntry[] = [
  { role: "Stagiaire PFE - Business Intelligence & Logistique", org: "Novares (Kénitra)", period: "février - juin 2026", note: "Synchronisation Supply Chain, dashboards Power BI, suivi des KPI, reporting automatisé, approche BI / Control Tower." },
  { role: "Dispatcher Transport & Logistique", org: "Afriquia SMDC", period: "juillet - août 2025", note: "Planification des tournées, suivi de flotte, coordination chauffeurs, reporting opérationnel." },
  { role: "Stagiaire - Gestion de Flotte", org: "Collectivité Territoriale de Tilmi", period: "juin - juillet 2025", note: "Disponibilité de la flotte, maintenance préventive & corrective, coûts d'exploitation." },
  { role: "Stagiaire - Logistique & Gestion des Stocks", org: "SMI - Groupe Managem", period: "juin - juillet 2024", note: "Réception, stockage, inventaires, fiabilité des stocks, reporting Excel / Power BI." },
];

export const volunteering: TerminalEntry[] = [
  { role: "Accueil, vente & e-commerce", org: "Collectif culturel & artistique", period: "2025", note: "Vente en festivals, gestion e-commerce, suivi des commandes." },
  { role: "Membre", org: "Club Graphic Design - ENCG Marrakech", period: "2021 - 2023", note: "Coaching Illustrator, création graphique, communication visuelle." },
  { role: "Bénévole", org: "Action associative - ENCG Marrakech", period: "2022 - 2023", note: "Activités associatives avec des enfants." },
];

export const education: TerminalEntry[] = [
  { role: "Master en Management Logistique", org: "ENCG Marrakech", period: "2021 - 2026", note: "Supply Chain, gestion des flux, stocks, transport, pilotage de la performance." },
  { role: "Baccalauréat - Sciences de Gestion Comptable", org: "Baccalauréat", period: "-", note: "Mention Très Bien." },
];

export const certifications = [
  { name: "Tamazight", issuer: "Langue", date: "Maternelle" },
  { name: "Arabe", issuer: "Langue", date: "Courant" },
  { name: "Français", issuer: "Langue", date: "Courant" },
  { name: "Anglais", issuer: "Langue", date: "Courant" },
  { name: "Espagnol", issuer: "Langue", date: "Débutant" },
];

export const achievements = [
  { name: "Master en Management Logistique - ENCG Marrakech", detail: "Diplômé en 2026, disponible immédiatement." },
  { name: "Baccalauréat - Mention Très Bien", detail: "Sciences de Gestion Comptable." },
  { name: "Projet PFE - Novares", detail: "Approche BI / Control Tower pour la synchronisation inter-services." },
];

export const sections: { id: string; label: string }[] = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "projects", label: "projects" },
  { id: "certs", label: "certs" },
  { id: "cv", label: "cv" },
  { id: "contact", label: "contact" },
];
