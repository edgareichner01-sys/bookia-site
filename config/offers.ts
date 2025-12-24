export type Offer = {
  id: "standard" | "premium" | "vip";
  name: string;
  setupFee: number;
  monthly: number;
  description: string;
  highlight?: boolean;
};

export const offers: Offer[] = [
  {
    id: "standard",
    name: "Offre Standard",
    setupFee: 350,
    monthly: 40,
    description: "Accès aux services de base.",
  },
  {
    id: "premium",
    name: "Offre Premium",
    setupFee: 500,
    monthly: 89,
    description: "Plus d’options, moins de limites, meilleur support.",
    highlight: true,
  },
  {
    id: "vip",
    name: "Offre VIP",
    setupFee: 1000,
    monthly: 250,
    description: "Accès prioritaire + services exclusifs / personnalisés.",
  },
];
