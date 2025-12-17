import { Code2, Terminal, Cpu } from "lucide-react";

// const profiles = [
//     {
//         name: "LeetCode",
//         url: "https://leetcode.com/u/sharmashobhit1000/",
//         icon: Code2,
//     },
//     {
//         name: "GeeksforGeeks",
//         url: "https://auth.geeksforgeeks.org/user/Shobhit070304/",
//         icon: Terminal,
//     },
//     {
//         name: "CodeStudio",
//         url: "https://www.codingninjas.com/codestudio/profile/Shobhit070304",
//         icon: Cpu,
//     },
// ];


const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/sharmashobhit1000/",

  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Shobhit07"
  },

  {
    name: "Codechef",
    url: "https://www.codechef.com/users/shobhit_77"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/sharmashobhit102"
  },
];

const ProfileLinksSection = () => {
    return (
        <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-heading font-medium mb-3">Coding Profiles</h2>
            <div className="flex flex-wrap gap-2">
                {profiles.map((profile) => {
                    return (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md hover:bg-secondary/80 transition-colors border border-border/50"
                        >
                            {profile.name}
                        </a>

                    );
                })}
            </div>
        </section>
    );
};

export default ProfileLinksSection;
