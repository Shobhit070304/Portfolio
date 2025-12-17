import { Badge } from "@/components/ui/badge";

const skills = [
  "C++",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Git",
  "Tailwind",
];

const SkillsSection = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <h2 className="text-lg font-heading font-medium mb-3">Skills</h2>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-2.5 rounded-sm py-1 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
