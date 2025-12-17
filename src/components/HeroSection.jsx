import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Resume from "../assets/Resume_Shobhit.pdf";
import Profile from "../assets/profile.jpg"

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-6 animate-fade-in">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-3">
          Hi, I'm Shobhit
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-lg mb-4">
          I care about how systems behave as they grow, not just how they look today.
        </p>
        {/* Why this button showing cross on hover */}
        {/* I want to open this resume in new tab */}

        <Button size="sm" target="_blank"  asChild className="gap-1.5 h-8 text-xs">
          <a href={Resume} className="opacity-90">
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </Button>
      </div>
      <Avatar className="w-24 h-24 md:w-32 md:h-32 border border-border shadow-sm">
        <AvatarImage src={Profile} alt="Shobhit Sharma" />
        <AvatarFallback className="text-lg font-heading">SS</AvatarFallback>
      </Avatar>
    </section>
  );
};

export default HeroSection;
