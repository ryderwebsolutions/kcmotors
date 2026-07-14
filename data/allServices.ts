// Full granular service list from the First Stop KC Motors branch page, each
// mapped to its parent group in services.ts (by slug) for anchor linking.
// This gives a comprehensive A–Z list, matching how most garage sites list
// every service individually for search visibility.

export type ServiceListItem = {
  name: string;
  groupSlug: string;
};

// Every group has a dedicated page at /services/[slug] (see app/services/[slug]).
export function serviceGroupHref(groupSlug: string): string {
  return `/services/${groupSlug}`;
}

export const allServices: ServiceListItem[] = [
  { name: "Air Conditioning", groupSlug: "general-maintenance" },
  { name: "Batteries", groupSlug: "batteries" },
  { name: "Brake Fluid", groupSlug: "brakes" },
  { name: "Brakes", groupSlug: "brakes" },
  { name: "Bulb Replacement", groupSlug: "general-maintenance" },
  { name: "Cabin Filters", groupSlug: "general-maintenance" },
  { name: "Car Servicing", groupSlug: "servicing" },
  { name: "Coolant", groupSlug: "servicing" },
  { name: "Diagnostics", groupSlug: "diagnostics" },
  { name: "Exhausts", groupSlug: "exhausts" },
  { name: "Oil Changes", groupSlug: "servicing" },
  { name: "Pre-NCT Checks", groupSlug: "pre-nct" },
  { name: "Puncture Repair", groupSlug: "tyres-wheels" },
  { name: "Shock Absorbers", groupSlug: "steering-suspension" },
  { name: "Steering", groupSlug: "steering-suspension" },
  { name: "Suspension", groupSlug: "steering-suspension" },
  { name: "TPMS Checks", groupSlug: "tyres-wheels" },
  { name: "Tyres", groupSlug: "tyres-wheels" },
  { name: "Wheel Alignment", groupSlug: "tyres-wheels" },
  { name: "Wheel Balancing", groupSlug: "tyres-wheels" },
  { name: "Wheel Rotation", groupSlug: "tyres-wheels" },
  { name: "Wiper Blades", groupSlug: "general-maintenance" },
];
