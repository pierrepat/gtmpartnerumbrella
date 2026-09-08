/* Generated from "State Pricing - Sheet1.csv".
   TODO(Pierre): CA, NV and UT are flagged "Avoid" in the CSV. CO is marked
   closed here because you named it as an exclusivity state; the CSV does not
   flag it. Flip `open` back to true if that was wrong. */

export type Territory = {
  ab: string;
  name: string;
  cpl: number;
  retainer: number;
  open: boolean;
  r: number;
  c: number;
};

export const TERRITORIES: Territory[] = [
  { ab: "ME", name: "Maine", cpl: 250, retainer: 2500, open: true, r: 0, c: 10 },
  { ab: "VT", name: "Vermont", cpl: 250, retainer: 2500, open: true, r: 1, c: 9 },
  { ab: "NH", name: "New Hampshire", cpl: 250, retainer: 2500, open: true, r: 1, c: 10 },
  { ab: "WA", name: "Washington", cpl: 300, retainer: 3000, open: true, r: 2, c: 0 },
  { ab: "ID", name: "Idaho", cpl: 250, retainer: 2500, open: true, r: 2, c: 1 },
  { ab: "MT", name: "Montana", cpl: 300, retainer: 3000, open: true, r: 2, c: 2 },
  { ab: "ND", name: "North Dakota", cpl: 250, retainer: 2500, open: true, r: 2, c: 3 },
  { ab: "MN", name: "Minnesota", cpl: 275, retainer: 2750, open: true, r: 2, c: 4 },
  { ab: "IL", name: "Illinois", cpl: 300, retainer: 3000, open: true, r: 2, c: 5 },
  { ab: "WI", name: "Wisconsin", cpl: 275, retainer: 2750, open: true, r: 2, c: 6 },
  { ab: "MI", name: "Michigan", cpl: 300, retainer: 3000, open: true, r: 2, c: 7 },
  { ab: "NY", name: "New York", cpl: 300, retainer: 3000, open: true, r: 2, c: 8 },
  { ab: "RI", name: "Rhode Island", cpl: 250, retainer: 2500, open: true, r: 2, c: 9 },
  { ab: "MA", name: "Massachusetts", cpl: 300, retainer: 3000, open: true, r: 2, c: 10 },
  { ab: "OR", name: "Oregon", cpl: 275, retainer: 2750, open: true, r: 3, c: 0 },
  { ab: "NV", name: "Nevada", cpl: 350, retainer: 3500, open: false, r: 3, c: 1 },
  { ab: "WY", name: "Wyoming", cpl: 250, retainer: 2500, open: true, r: 3, c: 2 },
  { ab: "SD", name: "South Dakota", cpl: 250, retainer: 2500, open: true, r: 3, c: 3 },
  { ab: "IA", name: "Iowa", cpl: 250, retainer: 2500, open: true, r: 3, c: 4 },
  { ab: "IN", name: "Indiana", cpl: 275, retainer: 2750, open: true, r: 3, c: 5 },
  { ab: "OH", name: "Ohio", cpl: 300, retainer: 3000, open: true, r: 3, c: 6 },
  { ab: "PA", name: "Pennsylvania", cpl: 300, retainer: 3000, open: true, r: 3, c: 7 },
  { ab: "NJ", name: "New Jersey", cpl: 300, retainer: 3000, open: true, r: 3, c: 8 },
  { ab: "CT", name: "Connecticut", cpl: 275, retainer: 2750, open: true, r: 3, c: 9 },
  { ab: "CA", name: "California", cpl: 350, retainer: 3500, open: false, r: 4, c: 0 },
  { ab: "UT", name: "Utah", cpl: 350, retainer: 3500, open: false, r: 4, c: 1 },
  { ab: "CO", name: "Colorado", cpl: 350, retainer: 3500, open: false, r: 4, c: 2 },
  { ab: "NE", name: "Nebraska", cpl: 250, retainer: 2500, open: true, r: 4, c: 3 },
  { ab: "MO", name: "Missouri", cpl: 300, retainer: 3000, open: true, r: 4, c: 4 },
  { ab: "KY", name: "Kentucky", cpl: 250, retainer: 2500, open: true, r: 4, c: 5 },
  { ab: "WV", name: "West Virginia", cpl: 250, retainer: 2500, open: true, r: 4, c: 6 },
  { ab: "VA", name: "Virginia", cpl: 300, retainer: 3000, open: true, r: 4, c: 7 },
  { ab: "MD", name: "Maryland", cpl: 300, retainer: 3000, open: true, r: 4, c: 8 },
  { ab: "DE", name: "Delaware", cpl: 250, retainer: 2500, open: true, r: 4, c: 9 },
  { ab: "AZ", name: "Arizona", cpl: 350, retainer: 3500, open: true, r: 5, c: 1 },
  { ab: "NM", name: "New Mexico", cpl: 250, retainer: 2500, open: true, r: 5, c: 2 },
  { ab: "KS", name: "Kansas", cpl: 250, retainer: 2500, open: true, r: 5, c: 3 },
  { ab: "AR", name: "Arkansas", cpl: 250, retainer: 2500, open: true, r: 5, c: 4 },
  { ab: "TN", name: "Tennessee", cpl: 275, retainer: 2750, open: true, r: 5, c: 5 },
  { ab: "NC", name: "North Carolina", cpl: 300, retainer: 3000, open: true, r: 5, c: 6 },
  { ab: "SC", name: "South Carolina", cpl: 300, retainer: 3000, open: true, r: 5, c: 7 },
  { ab: "OK", name: "Oklahoma", cpl: 250, retainer: 2500, open: true, r: 6, c: 3 },
  { ab: "LA", name: "Louisiana", cpl: 275, retainer: 2750, open: true, r: 6, c: 4 },
  { ab: "MS", name: "Mississippi", cpl: 275, retainer: 2750, open: true, r: 6, c: 5 },
  { ab: "AL", name: "Alabama", cpl: 350, retainer: 3500, open: true, r: 6, c: 6 },
  { ab: "GA", name: "Georgia", cpl: 350, retainer: 3500, open: true, r: 6, c: 7 },
  { ab: "AK", name: "Alaska", cpl: 275, retainer: 2750, open: true, r: 7, c: 0 },
  { ab: "TX", name: "Texas", cpl: 350, retainer: 3500, open: true, r: 7, c: 3 },
  { ab: "FL", name: "Florida", cpl: 300, retainer: 3000, open: true, r: 7, c: 8 },
  { ab: "HI", name: "Hawaii", cpl: 250, retainer: 2500, open: true, r: 8, c: 0 },
];

export const TIERS = [250, 275, 300, 350];

/* Sequential gold ramp, low price to high. Validated for contrast against the
   dark surface; every tile also carries its price, so colour is never the only
   encoding. */
export const TIER_COLOR: Record<number, string> = {
  250: "#7a6531",
  275: "#a98741",
  300: "#d0a94f",
  350: "#f0d68a",
};

export const GRID_COLS = 11;
export const GRID_ROWS = 9;
