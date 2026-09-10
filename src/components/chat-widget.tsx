"use client";

import { useEffect } from "react";

// LeadConnector chat widget. On desktop it loads after the first scroll or
// 15 seconds. On phones its greeting bubble lands on top of the video, so
// there it waits for the first scroll only.
const WIDGET_ID = "6a71d820a4347d15e373f74f";

export function ChatWidget() {
  useEffect(() => {
    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      const s = document.createElement("script");
      s.src = "https://widgets.leadconnectorhq.com/loader.js";
      s.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
      s.setAttribute("data-widget-id", WIDGET_ID);
      s.setAttribute("data-source", "WEB_USER");
      s.async = true;
      document.body.appendChild(s);
      window.removeEventListener("scroll", load);
    };
    window.addEventListener("scroll", load, { passive: true, once: true });
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const t = desktop ? setTimeout(load, 15000) : undefined;
    return () => {
      if (t) clearTimeout(t);
      window.removeEventListener("scroll", load);
    };
  }, []);
  return null;
}
