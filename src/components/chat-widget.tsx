"use client";

import { useEffect } from "react";

// LeadConnector chat widget. Loaded after the first scroll or 15 seconds,
// whichever comes first, so its greeting bubble does not sit on top of the
// VSL play button in the first screen on phones.
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
    const t = setTimeout(load, 15000);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", load);
    };
  }, []);
  return null;
}
