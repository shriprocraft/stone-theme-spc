import { Crown, Code2, Bot, Workflow, type LucideIcon } from "lucide-react";

type Member = { name: string; title?: string };

type TeamGroup = {
  role: string;
  icon: LucideIcon;
  members: Member[];
  span: string;
  featured?: boolean;
};

const teamGroups: TeamGroup[] = [
  {
    role: "Leadership",
    icon: Crown,
    members: [
      { name: "Shrihari", title: "CEO" },
      { name: "Adithya", title: "COO" },
    ],
    span: "lg:col-span-2",
    featured: true,
  },
  {
    role: "AI Agent Developers",
    icon: Bot,
    members: [{ name: "Varshaa" }, { name: "Parimala" }],
    span: "lg:col-span-1",
  },
  {
    role: "AI Workflow Specialists",
    icon: Workflow,
    members: [{ name: "Niranjana" }, { name: "Sanjana" }],
    span: "lg:col-span-1",
  },
  {
    role: "Full Stack Developers",
    icon: Code2,
    members: [{ name: "Thayalan" }, { name: "Thrisha" }, { name: "Sriruthra" }, { name: "Varshini" }],
    span: "lg:col-span-4",
  },
];

export function TeamBentoGrid() {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-4">
      {teamGroups.map((group) => {
        const Icon = group.icon;
        return (
          <div
            key={group.role}
            className={`group p-7 transition-all duration-300 ease-editorial hover:-translate-y-[3px] hover:shadow-[0_30px_58px_-28px_rgba(25,24,23,0.5)] ${group.span} ${
              group.featured ? "rounded-[26px] border border-white/10 bg-ink" : "tile"
            }`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 ${
                group.featured ? "bg-paper/10 text-paper" : "bg-surface text-ink"
              }`}
            >
              <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
            </span>

            <p className={`label mt-5 ${group.featured ? "text-hairlineStrong" : "text-grey"}`}>{group.role}</p>

            <ul className={`mt-4 grid gap-2 ${group.members.length > 2 ? "sm:grid-cols-2" : ""}`}>
              {group.members.map((member) => (
                <li
                  key={member.name}
                  className={`body-base ${group.featured ? "text-paper" : "text-ink"}`}
                >
                  {member.name}
                  {member.title && (
                    <span className={group.featured ? "text-hairlineStrong" : "text-grey"}> — {member.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
