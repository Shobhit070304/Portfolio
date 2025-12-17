import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Codsoft",
    role: "Frontend Developer Intern",
    period: "Jan 2024 - Feb 2024",
    description: "Implemented a React-based frontend, improving performance by 40% while maintaining design consistency.",
  },
];

const WorkExperience = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-lg font-heading font-medium mb-3">Work Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex gap-3 p-3 -mx-2 rounded-lg hover:bg-accent/50 transition-colors border border-transparent hover:border-border">
            <div className="mt-1">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">{exp.role}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap bg-secondary px-2 py-0.5 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
