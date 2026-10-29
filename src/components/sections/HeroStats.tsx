import { ChartNoAxesColumn, TrendingUp, Users, type LucideIcon } from "lucide-react";

type StatCard = {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  period: string;
  value: string;
  description: string;
  chartColor: string;
  /** SVG path for the area chart's line, in a 0 0 110 46 viewBox. */
  linePath: string;
  /** Same path, closed down to the baseline, used as the gradient fill. */
  areaPath: string;
};

const STATS: StatCard[] = [
  {
    icon: Users,
    iconColor: "#777c5a",
    title: "Leads",
    period: "Last 30 days",
    value: "75%",
    description: "More qualified leads from paid campaigns",
    chartColor: "#777c5a",
    linePath: "M2 38 L18 33 L32 24 L44 29 L58 16 L76 11 L92 7 L108 4",
    areaPath: "M2 38 L18 33 L32 24 L44 29 L58 16 L76 11 L92 7 L108 4 L108 46 L2 46 Z",
  },
  {
    icon: ChartNoAxesColumn,
    iconColor: "#3d5a9e",
    title: "Conversions",
    period: "Last 30 days",
    value: "120%",
    description: "Increase in form submissions",
    chartColor: "#4a7fe8",
    linePath: "M2 36 C 20 34, 32 30, 44 22 C 54 15, 62 8, 74 7 C 86 6, 98 10, 108 8",
    areaPath:
      "M2 36 C 20 34, 32 30, 44 22 C 54 15, 62 8, 74 7 C 86 6, 98 10, 108 8 L108 46 L2 46 Z",
  },
  {
    icon: TrendingUp,
    iconColor: "#777c5a",
    title: "ROI",
    period: "Last 30 days",
    value: "270%",
    description: "Higher return from ad spend across channels",
    chartColor: "#777c5a",
    linePath: "M2 40 L22 35 L38 30 L54 27 L70 18 L86 13 L108 4",
    areaPath: "M2 40 L22 35 L38 30 L54 27 L70 18 L86 13 L108 4 L108 46 L2 46 Z",
  },
];

function AreaChart({ stat, gradientId }: { stat: StatCard; gradientId: string }) {
  return (
    <svg viewBox="0 0 110 46" className="h-12 w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stat.chartColor} stopOpacity="0.26" />
          <stop offset="100%" stopColor={stat.chartColor} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={stat.areaPath} fill={`url(#${gradientId})`} stroke="none" />
      <path
        d={stat.linePath}
        fill="none"
        stroke={stat.chartColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
      {STATS.map((stat) => {
        const Icon = stat.icon;
        const gradientId = `hero-stat-${stat.title.toLowerCase()}`;
        return (
          <div
            key={stat.title}
            className="flex w-full flex-col rounded-[1.25rem] border border-hairline bg-paper p-5 shadow-[0_28px_56px_-36px_rgba(12,32,20,0.35)]"
          >
            <Icon size={20} strokeWidth={2} style={{ color: stat.iconColor }} aria-hidden="true" />

            <p className="mt-3.5 text-[0.9375rem] font-semibold text-ink">{stat.title}</p>

            <p className="mt-1 text-[0.6875rem] text-grey">{stat.period}</p>

            <p className="mt-2.5 font-display text-[1.875rem] font-bold leading-none tracking-tight text-ink">
              {stat.value}
            </p>

            <div className="mt-3.5">
              <AreaChart stat={stat} gradientId={gradientId} />
            </div>

            <p className="mt-3.5 text-[0.8125rem] leading-snug text-grey">{stat.description}</p>
          </div>
        );
      })}
    </div>
  );
}
