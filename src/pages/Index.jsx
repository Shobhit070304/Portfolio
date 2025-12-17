import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkExperience from "@/components/WorkExperience";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProfileLinksSection from "@/components/ProfileLinksSection";
import ContactSection from "@/components/ContactSection";
import DockNavigation from "@/components/DockNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <main className="max-w-2xl mx-auto px-5 py-12 pb-24 space-y-10 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WorkExperience />
        <EducationSection />
        <ProfileLinksSection />
        <ContactSection />
      </main>
      <DockNavigation />
    </div>
  );
};

export default Index;
