import { Home, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const DockNavigation = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { icon: Home, href: "#", label: "Home" },
    { icon: Github, href: "https://github.com/Shobhit070304", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shobhit-kumar-sharma-17bb4223a/", label: "LinkedIn" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-0.5 px-2 py-1.5 bg-card/90 backdrop-blur-md border border-border rounded-full shadow-lg">
        {navItems.map((item, index) => {
  const Icon = item.icon;
  return (
    <div key={item.label} className="flex items-center">
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="p-2 rounded-full hover:bg-accent transition-colors"
        aria-label={item.label}
      >
        <Icon className="w-4 h-4" />
      </a>

      {/* Divider after Home */}
      {index === 0 && (
        <div className="w-px h-5 bg-border mx-0.5" />
      )}
    </div>
  );
})}
        <div className="w-px h-5 bg-border mx-0.5" />
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
};

export default DockNavigation;
