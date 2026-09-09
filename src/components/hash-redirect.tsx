"use client";

import { useEffect } from "react";

// Old homepage anchors (shared in emails and LinkedIn posts) now live on
// /system. Server redirects cannot see the hash, so this runs on the client.
const MOVED = new Set(["#recover", "#scale", "#offers", "#reporting", "#how-it-works"]);

export function HashRedirect() {
  useEffect(() => {
    const h = window.location.hash;
    if (MOVED.has(h)) window.location.replace(`/system${h}`);
    if (h === "#pilot-form") window.location.replace("/apply");
  }, []);
  return null;
}
