"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { executionStages } from "@/lib/content/execution-model";

const STAGE_COUNT = executionStages.length;

/** 3 cards on desktop (lg+), 2 on small tablets (sm+), 1 on mobile. */
function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const compute = () => {
      const width = window.innerWidth;
      setVisible(width >= 1024 ? 3 : width >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return visible;
}

type ArrowButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  className?: string;
};

function ArrowButton({
  direction,
  onClick,
  disabled,
  className = "",
}: ArrowButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous stage" : "Next stage"}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairlineStrong bg-paper text-ink2 transition-all duration-200 ease-editorial hover:-translate-y-[1px] hover:border-ink hover:text-ink active:translate-y-0 active:scale-95 disabled:pointer-events-none disabled:opacity-35 ${className}`}
    >
      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}

function Dots({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Stage pagination">
      {executionStages.map((stage, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={stage.number}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to stage ${stage.number}: ${stage.title}`}
            aria-current={active || undefined}
            className={`h-2 rounded-full transition-all duration-300 ease-editorial ${
              active ? "w-6 bg-ink" : "w-2 bg-hairlineStrong hover:bg-greyLight"
            }`}
          />
        );
      })}
    </div>
  );
}

export function ExecutionModelCarousel() {
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, STAGE_COUNT - visible);
  const [rawIndex, setRawIndex] = useState(0);
  // Derived so the position is always valid when the card count changes.
  const index = Math.min(rawIndex, maxIndex);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) =>
      setRawIndex(Math.min(Math.max(next, 0), Math.max(0, STAGE_COUNT - visible))),
    [visible],
  );

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <div className="mt-14">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="How we work, stage by stage"
        className="md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-4"
      >
        <ArrowButton
          direction="prev"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className="max-md:hidden"
        />

        <div
          className="-mx-3 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transform-gpu transition-transform duration-[600ms] ease-in-out"
            style={{
              transform: `translateX(calc(${index} * (-100% / ${visible})))`,
            }}
          >
            {executionStages.map((stage) => (
              <div
                key={stage.number}
                className="shrink-0 px-3"
                style={{ width: `${100 / visible}%` }}
              >
                <p className="font-display text-[2rem] text-hairlineStrong">
                  {stage.number}
                </p>
                <p className="heading-2 mt-1">{stage.title}</p>
                <p className="body-base mt-2 text-grey">{stage.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <ArrowButton
          direction="next"
          onClick={() => goTo(index + 1)}
          disabled={index === maxIndex}
          className="max-md:hidden"
        />
      </div>

      {/* Desktop: dots centered under the cards (arrows flank the track). */}
      <div className="mt-9 hidden justify-center md:flex">
        <Dots activeIndex={index} onSelect={goTo} />
      </div>

      {/* Mobile/tablet: arrows and dots share one control row. */}
      <div className="mt-9 flex items-center justify-center gap-6 md:hidden">
        <ArrowButton direction="prev" onClick={() => goTo(index - 1)} disabled={index === 0} />
        <Dots activeIndex={index} onSelect={goTo} />
        <ArrowButton direction="next" onClick={() => goTo(index + 1)} disabled={index === maxIndex} />
      </div>
    </div>
  );
}
