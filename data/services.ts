// Service names are grouped from the full list published on the First Stop
// KC Motors branch page: tyres, air conditioning, batteries, brakes, brake fluid,
// bulbs, cabin filters, car servicing, coolant, exhausts, oil changes,
// pre-NCT checks, puncture repair, wheel rotation/alignment/balancing,
// diagnostics, shock absorbers, steering/suspension, TPMS, wiper blades.

import { placeholderImages } from "@/data/images";

export type Service = {
  slug: string;
  name: string;
  description: string;
  icon: "tyre" | "wrench" | "clipboard" | "brake" | "battery" | "scan" | "steering" | "exhaust" | "spray";
  image: keyof typeof placeholderImages;
};

export const services: Service[] = [
  {
    slug: "tyres-wheels",
    name: "Tyres & Wheel Care",
    description:
      "Tyre fitting and replacement, puncture repair, wheel alignment, balancing, rotation and TPMS checks for all makes and models.",
    icon: "tyre",
    image: "tyres",
  },
  {
    slug: "servicing",
    name: "Car Servicing",
    description:
      "Full and interim servicing, oil changes, fluid and coolant top-ups, and filter replacements to keep your car running properly.",
    icon: "wrench",
    image: "oilChange",
  },
  {
    slug: "pre-nct",
    name: "Pre-NCT Checks",
    description:
      "A thorough pre-test check so small issues get sorted before your NCT appointment, not after a failed test.",
    icon: "clipboard",
    image: "tools",
  },
  {
    slug: "brakes",
    name: "Brakes",
    description:
      "Brake inspection, pad and disc replacement, and brake fluid changes carried out to a proper safety standard.",
    icon: "brake",
    image: "brakes",
  },
  {
    slug: "batteries",
    name: "Batteries",
    description:
      "Free battery testing with fitting available on the day if your car needs a replacement.",
    icon: "battery",
    image: "battery",
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    description:
      "Computerised diagnostics to properly identify warning lights and engine faults before any work starts.",
    icon: "scan",
    image: "engineBay",
  },
  {
    slug: "steering-suspension",
    name: "Steering & Suspension",
    description:
      "Shock absorber, steering and suspension checks and repairs for a smoother, safer drive.",
    icon: "steering",
    image: "suspension",
  },
  {
    slug: "exhausts",
    name: "Exhausts",
    description: "Exhaust inspection, repair and replacement for cars and light commercials.",
    icon: "exhaust",
    image: "exhaust",
  },
  {
    slug: "general-maintenance",
    name: "General Maintenance",
    description: "Air conditioning service, bulb replacement, wiper blades and cabin filters.",
    icon: "spray",
    image: "airVent",
  },
];
