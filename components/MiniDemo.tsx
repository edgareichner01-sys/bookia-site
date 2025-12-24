"use client";

import { useMemo, useState } from "react";

type Msg = { from: "bot" | "user"; text: string };

export default function MiniDemo() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Salut 👋 Je suis Bookia. Tu veux prendre un rendez-vous ?" },
  ]);

  const options = useMemo(() => {
    // 0 -> choix du besoin
    // 1 -> choix du moment
    // 2 -> confirmation
    if (step === 0)
      return [
        "Prendre un RDV",
        "Demander un devis",
        "Horaires / infos",
      ];
    if (step === 1)
      return [
        "Aujourd’hui",
        "Demain",
        "Cette semaine",
      ];
    if (step === 2) return ["Oui, confirmer", "Parler à un humain"];
    return [];
  }, [step]);

  const botReply = (userText: string) => {
    if (step === 0) {
      if (userText === "Horaires / infos") {
        return [
          "📍 Nous sommes ouverts du lundi au vendredi, 9h–18h (exemple).",
          "Souhaites-tu quand même prendre un RDV ?",
        ];
      }
      if (userText === "Demander un devis") {
        return [
          "Bien sûr. Pour un devis, j’ai besoin de 2 infos : modèle + problème.",
          "Tu préfères qu’on planifie un RDV ou qu’un conseiller te rappelle ?",
        ];
      }
      return ["Top ✅ Quel moment te conviendrait ?"];
    }

    if (step === 1) {
      return [
        `Parfait. Je te propose un créneau ${userText.toLowerCase()} à 10h30 (exemple).`,
        "Tu confirmes ?",
      ];
    }

    if (step === 2) {
      if (userText === "Parler à un humain") {
        return [
          "Pas de souci 🙌 Clique sur “Demander une démo” et on te recontacte.",
        ];
      }
      return [
        "✅ C’est confirmé ! Tu recevras une confirmation par message.",
        "Tu veux que je l’installe pour ton entreprise ?",
      ];
    }

    return ["Merci !"];
  };

  const pick = (text: string) => {
    setMessages((prev) => [...prev, { from: "user", text }]);

    const replies = botReply(text);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        ...replies.map((t) => ({ from: "bot" as const, text: t })),
      ]);
      setStep((s) => Math.min(s + 1, 3));
    }, 350);
  };

  return (
    <div className="w-full">
      {/* CTA */}
      <div className="rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Mini démo</h3>
            <p className="mt-2 text-slate-600">
              Teste une conversation typique (sans IA) pour comprendre l’expérience client.
            </p>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors"
          >
            {open ? "Fermer" : "Démarrer la démo"}
          </button>
        </div>

        {open && (
          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4">
            {/* Messages */}
            <div className="max-h-72 overflow-auto space-y-3 pr-2">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={[
                    "flex",
                    m.from === "user" ? "justify-end" : "justify-start",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "max-w-[85%] rounded-2xl px-4 py-2 text-sm",
                      m.from === "user"
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-800",
                    ].join(" ")}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Options */}
            {options.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {options.map((o) => (
                  <button
                    key={o}
                    onClick={() => pick(o)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm hover:border-slate-300 transition-colors"
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 text-xs text-slate-500">
              Démo illustrative — la version réelle sera adaptée à ton activité.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
