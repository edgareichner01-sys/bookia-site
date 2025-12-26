import MiniDemo from "../components/MiniDemo";
import Image from "next/image";
import { offers, type Offer } from "../config/offers";

const euro = (n: number) => new Intl.NumberFormat("fr-FR").format(n) + " €";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-3xl border border-slate-100 bg-white/70 shadow-sm backdrop-blur " +
        "transition duration-300 hover:shadow-md hover:-translate-y-0.5 " +
        className
      }
    >
      {children}
    </div>
  );
}

function OfferCard({ o }: { o: Offer }) {
  
  return (
    <div
      className={[
        "relative rounded-3xl border p-7 shadow-sm transition duration-300",
        "hover:shadow-md hover:-translate-y-0.5",
        o.highlight
          ? "border-slate-900 bg-white"
          : "border-slate-100 bg-white/70",
      ].join(" ")}
    >
      {o.highlight && (
        <div className="absolute -top-3 left-6">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white shadow-sm">
            Populaire
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{o.name}</h3>
          <p className="mt-2 text-slate-600">{o.description}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <div>
          <div className="text-sm text-slate-500">Installation</div>
          <div className="text-2xl font-semibold">{euro(o.setupFee)}</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">Abonnement</div>
          <div className="text-3xl font-semibold">
            {euro(o.monthly)}
            <span className="text-base font-normal text-slate-500"> / mois</span>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className={[
          "mt-7 inline-flex w-full justify-center rounded-2xl px-5 py-3 font-medium",
          o.highlight
            ? "bg-slate-900 text-white hover:bg-slate-800"
            : "bg-white text-slate-900 border border-slate-200 hover:border-slate-300",
          "transition-colors",
        ].join(" ")}
      >
        Demander une démo
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* Premium background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
        <div className="absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full blur-3xl opacity-25 bg-fuchsia-400" />
        <div className="absolute -bottom-44 -right-44 h-[560px] w-[560px] rounded-full blur-3xl opacity-25 bg-cyan-400" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/75 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Image src="/bookia-logo.png" alt="Bookia" width={44} height={44} priority />
            <div className="leading-tight min-w-0">
              <div className="font-semibold hidden sm:block">Bookia</div>
              <div className="text-xs text-slate-500 hidden sm:block">
                Vos clients réservent. Vous travaillez.
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#benefices">
              Bénéfices
            </a>
            <a className="text-slate-600 hover:text-slate-900" href="#offres">
              Offres
            </a>
            <a className="text-slate-600 hover:text-slate-900" href="#faq">
              FAQ
            </a>
            <a
              className="ml-2 rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              href="#contact"
            >
              Demander une démo
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <Badge>Site web</Badge>
              <Badge>WhatsApp</Badge>
              <Badge>Instagram</Badge>
              <Badge>PME & garages</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Automatisez les RDV et les réponses clients, sans perdre de temps.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Bookia installe des chatbots qui répondent instantanément et prennent
              rendez-vous 24/7. Vos clients avancent, pendant que vous travaillez.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#offres"
                className="rounded-xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-colors"
              >
                Voir les offres
              </a>
              <a
                href="#contact"
                className="rounded-xl px-5 py-3 border border-slate-200 bg-white/70 hover:border-slate-300 transition-colors"
              >
                Demander une démo
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              Installation + abonnement mensuel. Mise en place rapide.
            </div>
          </div>

          <Card className="p-6">
            <div className="flex items-center gap-5">
              <Image src="/bookia-mascot.png" alt="Mascotte Bookia" width={220} height={220} />
              <div className="text-sm text-slate-700">
                <div className="font-semibold mb-2">Ce que Bookia fait</div>
                <ul className="space-y-2">
                  <li> -Disponibilité permanente</li>
                  <li> -Moins de tâches répétitives</li>
                  <li> -Plus de clients qualifiés</li>
                  <li> -Passe la main quand nécessaire</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefices" className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="text-sm text-slate-500">Gain de temps</div>
            <div className="mt-2 text-lg font-semibold">Moins d’appels, plus d’actions</div>
            <div className="mt-2 text-slate-600">
              Le bot répond aux questions répétitives et qualifie les demandes.
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-slate-500">Plus de RDV</div>
            <div className="mt-2 text-lg font-semibold">Réservation 24/7</div>
            <div className="mt-2 text-slate-600">
              Même quand tu es occupé, les clients peuvent avancer et réserver.
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-slate-500">Image pro</div>
            <div className="mt-2 text-lg font-semibold">Réponses rapides & claires</div>
            <div className="mt-2 text-slate-600">
              Une expérience fluide sur web, WhatsApp et Instagram.
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="offres" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-semibold">Offres Bookia</h2>
            <p className="mt-2 text-slate-600">
              Choisis l’offre selon ton volume et ton besoin de personnalisation.
            </p>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {offers.map((o) => (
            <OfferCard key={o.id} o={o} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-10">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-5">
              <div className="font-semibold">Bookia fonctionne où ?</div>
              <div className="mt-2 text-sm text-slate-600">
                Sur site web, WhatsApp et Instagram.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5">
              <div className="font-semibold">C’est adapté aux garages ?</div>
              <div className="mt-2 text-sm text-slate-600">
                Oui, Bookia est conçu pour les PME locales : garages, artisans, commerces.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5">
              <div className="font-semibold">Combien de temps pour être prêt ?</div>
              <div className="mt-2 text-sm text-slate-600">
                Ça dépend des contenus, mais la mise en place peut être rapide.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5">
              <div className="font-semibold">Je peux changer d’offre ?</div>
              <div className="mt-2 text-sm text-slate-600">
                Oui, tu peux évoluer de Standard vers Premium/VIP.
              </div>
            </div>
          </div>
        </Card>
      </section>
{/* Témoignages */}
<section className="mx-auto max-w-6xl px-4 py-12">
  <h2 className="text-3xl font-semibold text-center">
    Ils utilisent Bookia
  </h2>
  <p className="mt-2 text-center text-slate-600">
    Des PME qui gagnent du temps grâce à l’automatisation.
  </p>

  <div className="mt-10 grid md:grid-cols-3 gap-6">
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <p className="text-slate-700">
        “Avant Bookia, on passait notre journée au téléphone.
        Maintenant les clients prennent rendez-vous seuls.”
      </p>
      <div className="mt-4 font-semibold">Garage Dupont</div>
      <div className="text-sm text-slate-500">Garage automobile</div>
    </div>

    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <p className="text-slate-700">
        “Le chatbot répond aux questions simples et nous envoie
        seulement les demandes qualifiées.”
      </p>
      <div className="mt-4 font-semibold">Atelier Martin</div>
      <div className="text-sm text-slate-500">Artisan indépendant</div>
    </div>

    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <p className="text-slate-700">
        “On ne rate plus aucun message sur Instagram ou WhatsApp.
        Bookia répond même quand on est fermé.”
      </p>
      <div className="mt-4 font-semibold">Auto Services Pro</div>
      <div className="text-sm text-slate-500">Garage & dépannage</div>
    </div>
  </div>
</section>
<section className="mx-auto max-w-6xl px-4 py-10">
  <MiniDemo />
</section>

      {/* Contact (placeholder) */}
      <footer id="contact" className="mx-auto max-w-6xl px-4 py-12">
  <div className="rounded-3xl border border-slate-100 p-8 bg-white/70 shadow-sm backdrop-blur">
    <h2 className="text-2xl font-semibold">Demander une démo</h2>
    <p className="mt-2 text-slate-600">
      Laisse tes infos et on te recontacte rapidement.
    </p>

    <form
      action="https://formspree.io/f/mnjaweek"
      method="POST"
      className="mt-6 grid gap-4 max-w-lg"
    >
      <input
        type="text"
        name="entreprise"
        placeholder="Nom de l’entreprise"
        required
        className="rounded-xl border border-slate-200 px-4 py-3 bg-white"
      />

      <input
        type="text"
        name="nom"
        placeholder="Ton nom"
        required
        className="rounded-xl border border-slate-200 px-4 py-3 bg-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="rounded-xl border border-slate-200 px-4 py-3 bg-white"
      />

      <input
        type="tel"
        name="telephone"
        placeholder="Téléphone"
        className="rounded-xl border border-slate-200 px-4 py-3 bg-white"
      />

      <textarea
        name="message"
        placeholder="Décris ton besoin (garage, horaires, prise de RDV, etc.)"
        rows={4}
        className="rounded-xl border border-slate-200 px-4 py-3 bg-white"
      />

      <button
        type="submit"
        className="rounded-xl bg-slate-900 text-white px-6 py-3 hover:bg-slate-800 transition-colors"
      >
        Envoyer la demande
      </button>

      <p className="text-xs text-slate-500">
        En envoyant ce formulaire, tu acceptes d’être recontacté par Bookia.
      </p>
    </form>
  </div>
</footer>

    </main>
  );
}
