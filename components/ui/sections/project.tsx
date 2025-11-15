import ProjectCard from "@/components/helpers/project-card";
import { PROJECTS } from "@/content/user-data";
import { Project } from "@/types/project.t";

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  return (
    <section className="max-w-7xl mx-auto ">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
