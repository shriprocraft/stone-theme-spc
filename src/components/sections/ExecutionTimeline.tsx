"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ExecutionStage } from "@/lib/content/execution-model";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.4 } as const;

function StageBody({
  stage,
  hovered,
  isLeft,
}: {
  stage: ExecutionStage;
  hovered: boolean;
  isLeft: boolean;
}) {
  return (
    <>
      <div className={`flex items-center gap-4 ${isLeft ? "lg:justify-end" : ""}`}>
        <img
          src={`/stages/${stage.title.toLowerCase()}.webp`}
          alt=""
          width={256}
          height={256}
          loading="lazy"
          decoding="async"
          draggable={false}
              className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24"
            />
            <div className="min-w-0">
          <p
            className={`font-display text-[2.25rem] leading-none transition-colors duration-300 ease-editorial ${
              hovered ? "text-greyLight" : "text-hairlineStrong"
            }`}
          >
            {stage.number}
          </p>
          <h2 className="heading-1 mt-3">{stage.title}</h2>
        </div>
      </div>
      <p className="body-lg mt-3 text-ink2">{stage.summary}</p>
      <p className="body-base mt-4 max-w-prose text-grey">{stage.detail}</p>
    </>
  );
}

/** Fades content in on scroll, entering from the given side, with a slight upward
 *  drift, then lifts slightly on its own hover (native whileHover — the one
 *  reliable way to combine an ongoing hover response with a one-shot
 *  whileInView reveal). Reports hover state up so the sibling node can react too. */
function RevealContent({
  from,
  onHoverChange,
  children,
}: {
  from: "left" | "right" | "up";
  onHoverChange: (hovered: boolean) => void;
  children: ReactNode;
}) {
  const x = from === "left" ? -28 : from === "right" ? 28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, x, y: 14 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{ y: -3 }}
      onHoverStart={() => onHoverChange(true)}
      onHoverEnd={() => onHoverChange(false)}
      viewport={VIEWPORT}
      transition={{ duration: 0.65, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Node() {
  return (
    <motion.span
      initial={{ scale: 0.75, backgroundColor: "#FFFFFF", borderColor: "#DCDCDC" }}
      whileInView={{ scale: 1, backgroundColor: "#191817", borderColor: "#191817" }}
      whileHover={{ scale: 1.35 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
      className="relative z-10 mt-2 block h-3 w-3 shrink-0 rounded-full border-2 lg:col-start-2 lg:mx-auto"
      aria-hidden="true"
    />
  );
}

function TimelineRow({ stage, isLeft }: { stage: ExecutionStage; isLeft: boolean }) {
  const [contentHovered, setContentHovered] = useState(false);

  return (
    <div className="grid grid-cols-[12px_1fr] items-start gap-x-6 py-10 sm:gap-x-8 lg:grid-cols-[1fr_48px_1fr] lg:gap-x-0 lg:py-16">
      <Node />

      <div
        className={
          isLeft
            ? "relative lg:col-start-1 lg:pr-10 lg:text-right"
            : "relative lg:col-start-3 lg:pl-10 lg:text-left"
        }
      >
        {/* Short horizontal connector from the node to the content — desktop only */}
        <span
          className={`absolute top-[1.65rem] hidden h-px w-6 bg-hairlineStrong lg:block ${
            isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"
          }`}
          aria-hidden="true"
        />
        <RevealContent from={isLeft ? "left" : "right"} onHoverChange={setContentHovered}>
          <StageBody stage={stage} hovered={contentHovered} isLeft={isLeft} />
        </RevealContent>
      </div>
    </div>
  );
}

export function ExecutionTimeline({ stages }: { stages: ExecutionStage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={trackRef} className="relative mx-auto max-w-[880px]">
      {/* Central line: left-aligned on mobile, centered from lg up. One continuous
          track — each row's segment is a normal-flow slice of the same column,
          so consecutive rows join into a single unbroken line. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[5px] w-px bg-hairline lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div style={{ height: progressHeight }} className="w-px bg-[#2865F5]" />
      </div>

      {stages.map((stage, i) => (
        <TimelineRow key={stage.number} stage={stage} isLeft={i % 2 === 0} />
      ))}
    </div>
  );
}
