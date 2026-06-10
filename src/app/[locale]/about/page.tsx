import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { timeline } from "@/content/timeline";
import { Container, PageHeader } from "@/components/ui/blocks";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "fr");
  return { title: dict.about.title, description: dict.about.intro };
}

const copy = {
  story: {
    fr: "Mon parcours commence par les réseaux et la sécurité, là où j'ai appris à raisonner sur des systèmes : comment ils communiquent, où ils cassent, comment les protéger. Cette base m'a naturellement mené vers le développement logiciel, puis vers l'intelligence artificielle générative, où je conçois aujourd'hui des backends et des agents en production.",
    en: "My path started with networks and security, where I learned to reason about systems: how they communicate, where they break, how to protect them. That foundation pulled me toward software development, then toward generative AI, where I now design production backends and agents.",
  },
  vision: {
    fr: "Je crois qu'une grande partie de la prochaine vague technologique se construira depuis l'Afrique. Je veux y contribuer en bâtissant des outils solides, en publiant ce que j'apprends et en formant la prochaine génération d'ingénieurs.",
    en: "I believe a large part of the next technological wave will be built from Africa. I want to contribute by building solid tools, publishing what I learn, and training the next generation of engineers.",
  },
  philosophy: {
    fr: "Security-first, prêt pour la production, et reproductible. Je préfère des conventions claires à la magie, des systèmes que l'on peut comprendre et redéployer. Le code que j'écris doit pouvoir être enseigné ; sinon, il n'est pas assez simple.",
    en: "Security-first, production-ready, and reproducible. I prefer clear conventions over magic: systems you can understand and redeploy. The code I write should be teachable; if it isn't, it isn't simple enough.",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const dict = await getDictionary(locale);

  return (
    <Container className="py-20">
      <PageHeader label="about" title={dict.about.title} intro={dict.about.intro} />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <Reveal>
            <section>
              <h2 className="mono-label">{dict.about.storyHeading}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {copy.story[locale]}
              </p>
            </section>
          </Reveal>
          <Reveal delay={0.05}>
            <section>
              <h2 className="mono-label">{dict.about.visionHeading}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {copy.vision[locale]}
              </p>
            </section>
          </Reveal>
          <Reveal delay={0.1}>
            <section>
              <h2 className="mono-label">{dict.about.philosophyHeading}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {copy.philosophy[locale]}
              </p>
            </section>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal delay={0.1}>
          <section>
            <h2 className="mono-label">{dict.about.timelineHeading}</h2>
            <ol className="mt-5 border-l border-border">
              {timeline.map((step) => (
                <li key={step.label.en} className="relative pb-7 pl-6 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-foreground bg-background" />
                  <div className="font-medium tracking-tight">{step.label[locale]}</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">
                    {step.detail[locale]}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>
      </div>
    </Container>
  );
}
