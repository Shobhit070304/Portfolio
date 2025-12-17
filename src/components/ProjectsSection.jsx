import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Voltspot from "../assets/voltspot.png";
import Concisio from "../assets/concisio.png";
import Linkly from "../assets/linkly.png";
import QuickReadMe from "../assets/quickreadme.png";

const projects = [
  {
    title: "Voltspot",
    description: "An EV charging platform centered on location-based discovery, charging cost insights, secure access, and smooth system performance.",
    tags: ["React", "Node", "Express", "MongoDB", "Redis", "Firebase", "Tailwind", "Maps API"],
    source: "https://github.com/Shobhit070304/VoltSpot",
    demo: "https://voltspot.vercel.app",
    image: Voltspot, // Placeholder
  },
  {
    title: "Concisio",
    description: "An AI-powered summarization platform designed for organizing notes, processing documents and videos, and maintaining reliable backend operations.",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind", "LLM API"],
    source: "https://github.com/Shobhit070304/Concisio",
    demo: "https://concisio.vercel.app",
    image: Concisio, // Placeholder
  },
  {
    title: "Linkly",
    description: "A modern URL management system focused on fast redirection, link analytics, access control, and consistent request handling.",
    tags: ["React",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "Firebase",
      "Tailwind"],
    source: "https://github.com/Shobhit070304/Linkly",
    demo: "https://linkly1.vercel.app/",
    image: Linkly, // Placeholder
  },
  {
    title: "QuickReadMe",
    description: "Generate the sleekest, most modern GitHub profile README in seconds, powered by AI.",
    tags: ["React",
      "Gemini",
      "Tailwind"],
    source: "https://github.com/Shobhit070304/QuickReadMe",
    demo: "https://quickreadme.vercel.app/",
    image: QuickReadMe, // Placeholder
  }
];

const ProjectsSection = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="text-center mb-6">
        <Badge variant="secondary" className="mb-2 text-xs bg-primary text-primary-foreground">
          Selected Works
        </Badge>
        <h2 className="text-2xl font-heading font-medium mb-2">
          Things I've Built
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          A collection of projects that showcase my passion for development.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-md hover:border-border/80 transition-all duration-200">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-heading font-medium mb-1">{project.title}</h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-3 h-3" />
                  Source
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
