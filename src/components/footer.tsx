import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation("index-page");
  const year = new Date().getFullYear();
  return (
    <footer className="w-full pt-section-gap pb-gutter bg-surface border-t border-border-subtle">
      <div className="max-w-[1440px] mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="flex items-center gap-stack-md">
          <span className="font-headline-sm font-bold text-on-surface">Yannic Inselmann.</span>
          <span className="hidden md:block w-8 h-px bg-border-subtle"></span>
          <p className="font-body-md text-body-md text-slate-text">
            &copy; 2024 – {year} Yannic Inselmann. {t("footer.tagline")}
          </p>
        </div>
        <div className="flex gap-10">
          <a className="text-slate-text hover:text-primary transition-colors font-medium" href="https://github.com/yanniz0r">{t("footer.github")}</a>
          <a className="text-slate-text hover:text-primary transition-colors font-medium" href="https://de.linkedin.com/in/yannic-inselmann-7178a415a">{t("footer.linkedin")}</a>
          <a className="text-slate-text hover:text-primary transition-colors font-medium" href="https://twitter.com/yanniz0r">{t("footer.twitter")}</a>
          <a className="text-slate-text hover:text-primary transition-colors font-medium" href="https://www.xing.com/profile/Yannic_Inselmann">{t("footer.email")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
