/* Territory availability only. Pricing is deliberately NOT in this file:
   the repo is public, so anything here is readable by competitors.
   Rates live in "Pay Per Lead/Intake & Ops/state-pricing.csv", outside the repo.

   CA, NV, UT and CO are closed. CA/NV/UT are flagged "Avoid" in the source
   sheet; CO was added because Pierre named it as an exclusivity state. */

export type Territory = {
  ab: string;
  name: string;
  /** false = an exclusivity deal is already in place with another firm */
  open: boolean;
  r: number;
  c: number;
};

export const TERRITORIES: Territory[] = [
  { ab: "ME", name: "Maine", open: true, r: 0, c: 10 },
  { ab: "VT", name: "Vermont", open: true, r: 1, c: 9 },
  { ab: "NH", name: "New Hampshire", open: true, r: 1, c: 10 },
  { ab: "WA", name: "Washington", open: true, r: 2, c: 0 },
  { ab: "ID", name: "Idaho", open: true, r: 2, c: 1 },
  { ab: "MT", name: "Montana", open: true, r: 2, c: 2 },
  { ab: "ND", name: "North Dakota", open: true, r: 2, c: 3 },
  { ab: "MN", name: "Minnesota", open: true, r: 2, c: 4 },
  { ab: "IL", name: "Illinois", open: true, r: 2, c: 5 },
  { ab: "WI", name: "Wisconsin", open: true, r: 2, c: 6 },
  { ab: "MI", name: "Michigan", open: true, r: 2, c: 7 },
  { ab: "NY", name: "New York", open: true, r: 2, c: 8 },
  { ab: "RI", name: "Rhode Island", open: true, r: 2, c: 9 },
  { ab: "MA", name: "Massachusetts", open: true, r: 2, c: 10 },
  { ab: "OR", name: "Oregon", open: true, r: 3, c: 0 },
  { ab: "NV", name: "Nevada", open: false, r: 3, c: 1 },
  { ab: "WY", name: "Wyoming", open: true, r: 3, c: 2 },
  { ab: "SD", name: "South Dakota", open: true, r: 3, c: 3 },
  { ab: "IA", name: "Iowa", open: true, r: 3, c: 4 },
  { ab: "IN", name: "Indiana", open: true, r: 3, c: 5 },
  { ab: "OH", name: "Ohio", open: true, r: 3, c: 6 },
  { ab: "PA", name: "Pennsylvania", open: true, r: 3, c: 7 },
  { ab: "NJ", name: "New Jersey", open: true, r: 3, c: 8 },
  { ab: "CT", name: "Connecticut", open: true, r: 3, c: 9 },
  { ab: "CA", name: "California", open: false, r: 4, c: 0 },
  { ab: "UT", name: "Utah", open: false, r: 4, c: 1 },
  { ab: "CO", name: "Colorado", open: false, r: 4, c: 2 },
  { ab: "NE", name: "Nebraska", open: true, r: 4, c: 3 },
  { ab: "MO", name: "Missouri", open: true, r: 4, c: 4 },
  { ab: "KY", name: "Kentucky", open: true, r: 4, c: 5 },
  { ab: "WV", name: "West Virginia", open: true, r: 4, c: 6 },
  { ab: "VA", name: "Virginia", open: true, r: 4, c: 7 },
  { ab: "MD", name: "Maryland", open: true, r: 4, c: 8 },
  { ab: "DE", name: "Delaware", open: true, r: 4, c: 9 },
  { ab: "AZ", name: "Arizona", open: true, r: 5, c: 1 },
  { ab: "NM", name: "New Mexico", open: true, r: 5, c: 2 },
  { ab: "KS", name: "Kansas", open: true, r: 5, c: 3 },
  { ab: "AR", name: "Arkansas", open: true, r: 5, c: 4 },
  { ab: "TN", name: "Tennessee", open: true, r: 5, c: 5 },
  { ab: "NC", name: "North Carolina", open: true, r: 5, c: 6 },
  { ab: "SC", name: "South Carolina", open: true, r: 5, c: 7 },
  { ab: "OK", name: "Oklahoma", open: true, r: 6, c: 3 },
  { ab: "LA", name: "Louisiana", open: true, r: 6, c: 4 },
  { ab: "MS", name: "Mississippi", open: true, r: 6, c: 5 },
  { ab: "AL", name: "Alabama", open: true, r: 6, c: 6 },
  { ab: "GA", name: "Georgia", open: true, r: 6, c: 7 },
  { ab: "AK", name: "Alaska", open: true, r: 7, c: 0 },
  { ab: "TX", name: "Texas", open: true, r: 7, c: 3 },
  { ab: "FL", name: "Florida", open: true, r: 7, c: 8 },
  { ab: "HI", name: "Hawaii", open: true, r: 8, c: 0 },
];

export const GRID_COLS = 11;
export const GRID_ROWS = 9;
