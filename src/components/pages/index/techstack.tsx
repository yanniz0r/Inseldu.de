import { FC } from "react";
import { useTranslation } from "react-i18next";

const StackChip: FC<{ label: string }> = ({ label }) => (
  <span className="px-4 py-2 bg-surface-container-low border border-border-subtle rounded-lg font-label-caps text-[11px] hover:border-primary transition-colors cursor-default">
    {label}
  </span>
);

const categories = [
  {
    key: "languages" as const,
    items: ["TypeScript", "SQL", "Java", "Kotlin"],
  },
  {
    key: "frontend" as const,
    items: ["React", "Next.js", "Tanstack", "Tailwind CSS", "Zustand"],
  },
  {
    key: "backend" as const,
    items: ["Node.js", "Bun", "Express", "Fastify", "Nest.js", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
  },
  {
    key: "tools" as const,
    items: ["Git", "Figma", "Sentry", "Prometheus", "Linear", "AI"],
  },
  {
    key: "testing" as const,
    items: ["Vitest", "Cypress", "Playwright", "Testing Library"],
  },
  {
    key: "infrastructure" as const,
    items: ["AWS", "IaC w/ Pulumi", "Kubernetes", "Coolify", "CI/CD Pipelines", "Docker"],
  },
  {
    key: "mobile" as const,
    items: ["React Native", "Expo", "Android"],
  },
];

const Techstack: FC = () => {
  const { t } = useTranslation("index-page");
  return (
  <section className="py-section-gap max-w-[1440px] mx-auto px-gutter" id="techstack">
    <div className="mb-16">
      <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase">{t("techstack.label")}</span>
      <h2 className="font-display-lg text-display-lg text-on-surface">{t("techstack.heading")}</h2>
    </div>
    <div className="flex flex-wrap justify-center gap-gutter">
      {categories.map(({ key, items }) => (
        <div key={key} className="space-y-stack-md w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]">
          <h3 className="font-headline-sm text-headline-sm border-b-2 border-primary w-fit pb-1 mb-6">
            {t(`techstack.categoryTitles.${key}`)}
          </h3>
          <div className="flex flex-wrap gap-stack-sm">
            {items.map((item) => (
              <StackChip key={item} label={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Techstack;
