"use client";

import { useEffect } from "react";
import { PLAINTIFFPILOT_URL } from "@/lib/site";

// Old homepage anchors, shared in emails and LinkedIn posts, pointed at AI
// and reactivation content that now lives on plaintiffpilot.com. Server
// redirects cannot see the hash, so this runs on the client.
const MOVED = new Set(["#recover", "#scale", "#offers", "#reporting", "#how-it-works"]);

export function HashRedirect() {
  useEffect(() => {
    const h = window.location.hash;
    if (MOVED.has(h)) window.location.replace(`${PLAINTIFFPILOT_URL}/`);
    if (h === "#pilot-form" || h === "#book") window.location.replace("/apply");
  }, []);
  return null;
}
