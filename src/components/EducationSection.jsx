import { GraduationCap } from "lucide-react";

const education = [
    {
        institution: "Jamia Hamdard University",
        degree: "Bachelors of Technology - CSE",
        period: "Sep 2021 - May 2025",
        description: "Computer Science & Engineering. Studied DSA, OOP, DBMS, OS, Computer Networks.",
    },
];

const EducationSection = () => {
    return (
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-lg font-heading font-medium mb-3">Education</h2>
            <div className="space-y-4">
                {education.map((edu) => (
                    <div key={edu.institution} className="flex gap-3 p-3 -mx-2 rounded-lg hover:bg-accent/50 transition-colors border border-transparent hover:border-border">
                        <div className="mt-1">
                            <div className="p-2 rounded-full bg-primary/10 text-primary">
                                <GraduationCap className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-sm font-medium text-foreground">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-xs text-muted-foreground font-medium">{edu.degree}</p>
                                </div>
                                <span className="text-xs text-muted-foreground whitespace-nowrap bg-secondary px-2 py-0.5 rounded-full">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
