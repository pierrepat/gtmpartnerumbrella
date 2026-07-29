"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Option = { label: string; next: string };
type Node = { ai: string; options?: Option[]; note?: string };

const SCRIPT: Record<string, Node> = {
  open: {
    ai: "Hi, it's Sarah with Whitmore Law. Is this the same Mike who was looking for help after a car accident a while back?",
    options: [
      { label: "Yes, that's me", next: "qualify" },
      { label: "Who is this?", next: "explain" },
      { label: "STOP", next: "optout" },
    ],
  },
  explain: {
    ai: "Sorry, I should have said. Sarah from Whitmore Law. You reached out to us after an accident and I wanted to check whether you still needed a hand.",
    options: [
      { label: "Oh right, yes", next: "qualify" },
      { label: "I'm all set", next: "closed" },
    ],
  },
  qualify: {
    ai: "Good to hear from you. Quick question so I point you the right way: were you hurt, and has anyone been treating you for it?",
    options: [
      { label: "Yes, I saw a doctor", next: "book" },
      { label: "No, I was fine", next: "notqualified" },
    ],
  },
  book: {
    ai: "Thanks. That sounds like something one of our attorneys should look at. I can set up a free consult. Thursday at 2pm, or Friday at 10am?",
    options: [
      { label: "Thursday works", next: "booked" },
      { label: "Friday is better", next: "booked" },
    ],
  },
  booked: {
    ai: "Booked. You'll get a confirmation text shortly, and someone from the firm will call you then.",
    note: "Handed to intake · Tagged GOLD",
  },
  notqualified: {
    ai: "Understood, glad you're okay. I'll close this out so we're not bothering you about it again. Take care.",
    note: "Screened out · No consult booked",
  },
  closed: {
    ai: "No problem at all. I'll close this out. If anything changes, you have my number.",
    note: "Closed · No further follow-up",
  },
  optout: {
    ai: "You're opted out. You won't get any more texts from us.",
    note: "Opted out · Added to suppression list",
  },
};

type Msg = { from: "ai" | "them"; text: string };

export function SmsDemo() {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(true);
  const [node, setNode] = useState<string | null>(null);

  // Schedules the reply without touching state synchronously, so it is safe
  // to call from an effect.
  const schedule = useCallback((key: string) => {
    const step = SCRIPT[key];
    const instant =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(
      () => {
        setTyping(false);
        setMessages((m) => [...m, { from: "ai", text: step.ai }]);
        setNode(key);
      },
      instant ? 0 : 900
    );
  }, []);

  const enter = useCallback(
    (key: string) => {
      setNode(null);
      setTyping(true);
      schedule(key);
    },
    [schedule]
  );

  // The component mounts in the typing state, so the opener just needs scheduling.
  useEffect(() => {
    schedule("open");
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [schedule]);

  const choose = (opt: Option) => {
    setMessages((m) => [...m, { from: "them", text: opt.label }]);
    enter(opt.next);
  };

  const replay = () => {
    setMessages([]);
    enter("open");
  };

  const current = node ? SCRIPT[node] : null;
  const done = Boolean(current?.note);

  return (
    <div className="card !p-0 overflow-hidden max-w-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-subtle bg-surface">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-text-secondary">
            Example conversation
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-text-muted">
          AI &middot; SMS
        </span>
      </div>

      {/* Thread */}
      <div className="px-5 py-5 space-y-3 min-h-[260px] sm:min-h-[280px]">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "ai" ? "justify-start" : "justify-end"}`}
          >
            <p
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed animate-in ${
                m.from === "ai"
                  ? "bg-surface-overlay text-text-secondary rounded-bl-md"
                  : "bg-brand/15 text-text-primary rounded-br-md"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <span className="bg-surface-overlay rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-text-muted"
                  style={{
                    animation: "float 1s ease-in-out infinite",
                    animationDelay: `${d * 0.15}s`,
                  }}
                />
              ))}
            </span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="px-5 py-4 border-t border-border-subtle bg-surface min-h-[58px] flex items-center">
        {done ? (
          <div className="flex flex-wrap items-center justify-between gap-3 w-full">
            <span className="text-[11px] font-mono text-brand">
              {current?.note}
            </span>
            <button
              onClick={replay}
              className="text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              Replay &#8635;
            </button>
          </div>
        ) : current?.options ? (
          <div className="flex flex-wrap gap-2">
            {current.options.map((o) => (
              <button
                key={o.label}
                onClick={() => choose(o)}
                className="px-3.5 py-2 rounded-lg border border-border-default text-xs font-medium text-text-secondary hover:border-brand/40 hover:text-text-primary transition-colors"
              >
                {o.label}
              </button>
            ))}
          </div>
        ) : (
          <span className="text-xs text-text-muted">Sarah is typing&hellip;</span>
        )}
      </div>
    </div>
  );
}
