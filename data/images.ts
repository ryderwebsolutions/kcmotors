// Temporary placeholder photography (royalty-free, hotlinked from Unsplash).
// None of these are KC Motors' own photos, and none are taken from BTS Garage,
// Station Garage Hyde, Red Oak Garage or First Stop.
//
// TO REPLACE: swap the `src` for a path under /public/images/real/... once
// KC Motors supply real photos, then update `next.config.mjs` remotePatterns
// if no external images remain.

export const placeholderImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1723099971299-3789db53604c?w=1600&q=80&auto=format&fit=crop",
    alt: "Car raised on a workshop lift with an open bonnet — replace with a real KC Motors workshop photo",
    replaceNote: "Replace with KC Motors workshop / car-on-lift photo",
  },
  about: {
    src: "https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee?w=1200&q=80&auto=format&fit=crop",
    alt: "Mechanic inspecting the underside of a car with a work light — replace with a real KC Motors team photo",
    replaceNote: "Replace with a real KC Motors team or workshop photo",
  },
  tyres: {
    src: "https://images.unsplash.com/photo-1764699186616-8f707281e4f3?w=1200&q=80&auto=format&fit=crop",
    alt: "Stack of tyres outside a garage — replace with a real KC Motors tyre service image",
    replaceNote: "Replace with real KC Motors tyre service image",
  },
  tools: {
    src: "https://images.unsplash.com/photo-1637640125496-31852f042a60?w=1200&q=80&auto=format&fit=crop",
    alt: "Drawer of wrenches and sockets in a workshop tool chest",
    replaceNote: "Replace with real KC Motors tools/workshop image",
  },
  oilChange: {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80&auto=format&fit=crop",
    alt: "Mechanic pouring oil into a car engine during a service",
    replaceNote: "Replace with real KC Motors servicing image",
  },
  engineBay: {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80&auto=format&fit=crop",
    alt: "Close-up of a car engine bay showing belts and pulleys",
    replaceNote: "Replace with real KC Motors diagnostics/engine image",
  },
  mechanicAtWork: {
    src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&q=80&auto=format&fit=crop",
    alt: "Mechanic working on an open car engine in a workshop",
    replaceNote: "Replace with real KC Motors mechanic-at-work image",
  },
} as const;
