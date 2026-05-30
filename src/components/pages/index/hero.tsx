import { FC } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../button";

const Hero: FC = () => {
  const { t } = useTranslation("index-page");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center max-w-[1440px] mx-auto px-gutter py-section-gap" id="intro">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
        <div className="space-y-stack-md">
          <div className="flex items-center gap-stack-sm text-secondary font-label-caps text-label-caps uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            {t("hero.available")}
          </div>
          <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface">
            {t("hero.hello")}{" "}
            <span className="text-primary">{t("hero.name")}</span>.
          </h1>
          <p className="font-body-lg text-body-lg text-slate-text max-w-xl">
            {t("hero.what")}
          </p>
          <div className="flex items-center gap-gutter pt-stack-md">
            <Button size="lg" onClick={() => scrollTo('projects')}>
              {t("hero.viewProjects")}
            </Button>
            <Button size="lg" variant="outlined" onClick={() => scrollTo('contact')}>
              {t("hero.getInTouch")}
            </Button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative aspect-[1.5] rounded-xl overflow-hidden border border-border-subtle bg-surface-container-low shadow-sm">
            <img
              alt="Yannic Inselmann"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="/me-hero.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
