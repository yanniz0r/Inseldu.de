import { FC } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  url?: string;
}

const ProjectCard: FC<ProjectCardProps & { visitLabel: string }> = ({ title, category, tags, description, image, url, visitLabel }) => (
  <div className="bento-card group bg-surface-card rounded-xl border border-border-subtle overflow-hidden">
    <div className="aspect-video overflow-hidden bg-surface-container-low">
      <img
        alt={`${title} Preview`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        src={image}
      />
    </div>
    <div className="p-8 space-y-4">
      <div className="flex justify-between items-center">
        <span className="font-label-caps text-label-caps text-secondary">
          {category}
        </span>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-surface-container px-2 py-1 rounded text-[10px] font-bold">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h3 className="font-headline-md text-headline-md">{title}</h3>
      <p className="text-slate-text font-body-md line-clamp-2">{description}</p>
      {url && (
        <a
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group/link"
          href={url}
        >
          {visitLabel}
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  </div>
);

const Projects: FC = () => {
  const { t } = useTranslation("index-page");

  const visitLabel = t("projects.visitProject");

  const projects: ProjectCardProps[] = [
    {
      title: t("projects.partymate.title"),
      category: t("projects.partymate.category"),
      tags: ["REACT NATIVE", "AWS"],
      description: t("projects.partymate.description"),
      image: "/partymate.png",
      url: "https://partymate.party",
    },
    {
      title: t("projects.binckebanck.title"),
      category: t("projects.binckebanck.category"),
      tags: ["WORDPRESS", "PHP"],
      description: t("projects.binckebanck.description"),
      image: "/binckebanck.png",
      url: "https://binckebanck.com",
    },
    {
      title: t("projects.memoryMachine.title"),
      category: t("projects.memoryMachine.category"),
      tags: ["REACT", "THREE.JS"],
      description: t("projects.memoryMachine.description"),
      image: "/memory-machine.png",
      url: "https://memorymachine.de",
    },
    {
      title: t("projects.sonq.title"),
      category: t("projects.sonq.category"),
      tags: ["NEXT.JS", "NODE"],
      description: t("projects.sonq.description"),
      image: "/sonq.png",
      url: "https://sonq.de",
    },
    {
      title: t("projects.reverbOrdermanager.title"),
      category: t("projects.reverbOrdermanager.category"),
      tags: ["NODE", "DHL API"],
      description: t("projects.reverbOrdermanager.description"),
      image: "/reverb-order-manager.png",
    },
    {
      title: t("projects.spicyChances.title"),
      category: t("projects.spicyChances.category"),
      tags: ["REACT", "CSS"],
      description: t("projects.spicyChances.description"),
      image: "/spicy-chances.png",
      url: "https://spicychances.de",
    },
  ];

  return (
    <section className="bg-surface py-section-gap" id="projects">
      <div className="max-w-[1440px] mx-auto px-gutter">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase">{t("projects.label")}</span>
            <h2 className="font-display-lg text-display-lg text-on-surface">{t("projects.heading")}</h2>
          </div>
          <p className="font-body-md text-body-md text-slate-text max-w-xs text-right hidden md:block">
            {t("projects.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} visitLabel={visitLabel} />
          ))}
        </div>
        {/* Featured Invocraft banner */}
        <div className="mt-20 bento-card group bg-on-surface text-white rounded-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 p-12 lg:p-20 space-y-8">
            <span className="font-label-caps text-label-caps text-secondary-fixed uppercase">{t("projects.recentHighlight")}</span>
            <h2 className="font-headline-md text-headline-md lg:text-display-lg leading-tight">
              {t("projects.invocraft.title")}: {t("projects.invocraftSubtitle")}
            </h2>
            <p className="text-surface-container-highest font-body-lg text-body-lg">
              {t("projects.invocraft.description")}
            </p>
            <a
              href="https://preview.invocraft.de"
              className="inline-block"
            >
              <Button size="lg" color="primary">
                {t("projects.visitProject")}
              </Button>
            </a>
          </div>
          <div className="flex-1 bg-surface-container-highest overflow-hidden">
            <img
              alt="Invocraft"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              src="/invocraft.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
