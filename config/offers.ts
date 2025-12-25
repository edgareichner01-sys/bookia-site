export type Offer = {
  id: "L'Accueil Numérique" | "L'Assistant Business" | "Le Closer IA";
  name: string;
  setupFee: number;
  monthly: number;
  description: string;
  highlight?: boolean;
};

export const offers: Offer[] = [
  {
    id: "L'Accueil Numérique",
    name: "Offre Accueil Numérique",
    setupFee: 297,
    monthly: 49,
    description: "Accès aux services de base.",
  },
  {
    id: "L'Assistant Business",
    name: "Offre Assistant Business",
    setupFee: 597,
    monthly: 99,
    description: "Plus d’options, moins de limites, meilleur support.",
    highlight: true,
  },
  {
    id: "Le Closer IA",
    name: "Offre Closer IA",
    setupFee: 1497,
    monthly: 199,
    description: "Accès prioritaire + services exclusifs / personnalisés.",
  },
];
