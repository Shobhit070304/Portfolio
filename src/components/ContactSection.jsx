import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="animate-fade-in text-center py-4" style={{ animationDelay: "0.5s" }}>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs mb-3">
        <Mail className="w-3 h-3" />
        Contact
      </div>
      <h2 className="text-2xl font-heading font-medium mb-2">Get in Touch</h2>
      <p className="text-sm text-muted-foreground">
        Contact me at{" "}
        <a href="mailto:sharmashobhit1000@gmail.com" className="text-foreground underline underline-offset-2 hover:no-underline">
          sharmashobhit1000@gmail.com
        </a>
      </p>
    </section>
  );
};

export default ContactSection;
