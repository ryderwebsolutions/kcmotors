// Temporary placeholder photography (royalty-free, originally sourced from
// Unsplash, downloaded and self-hosted under /public/images/placeholder/).
// None of these are KC Motors' own photos, and none are taken from BTS Garage,
// Station Garage Hyde, Red Oak Garage or First Stop.
//
// Self-hosted deliberately: hotlinking Unsplash directly is unreliable long
// term — a photo ID can silently start serving completely different content
// with no warning (this happened once already during development). Local
// files can't change out from under us.
//
// TO REPLACE: swap the `src` for KC Motors' real photo once supplied, in
// this same /public/images/placeholder/ folder or a new /public/images/real/
// folder — either works, just update the path here.

export const placeholderImages = {
  hero: {
    src: "/images/kcmotorsfront.png",
    alt: "The KC Motors garage on Castlecara Road, Carrick-on-Shannon",
    replaceNote: "Real KC Motors photo",
  },
  about: {
    src: "/images/kcmotorsfront.png",
    alt: "The KC Motors garage frontage on Castlecara Road, Carrick-on-Shannon",
    replaceNote: "Real KC Motors photo",
  },
  tyres: {
    src: "/images/placeholder/tyres.jpg",
    alt: "Stack of tyres outside a garage — replace with a real KC Motors tyre service image",
    replaceNote: "Replace with real KC Motors tyre service image",
  },
  tools: {
    src: "/images/placeholder/tools.jpg",
    alt: "Drawer of wrenches and sockets in a workshop tool chest",
    replaceNote: "Replace with real KC Motors tools/workshop image",
  },
  oilChange: {
    src: "/images/placeholder/oil-change.jpg",
    alt: "Mechanic pouring oil into a car engine during a service",
    replaceNote: "Replace with real KC Motors servicing image",
  },
  engineBay: {
    src: "/images/placeholder/engine-bay.jpg",
    alt: "Close-up of a car engine bay showing belts and pulleys",
    replaceNote: "Replace with real KC Motors diagnostics/engine image",
  },
  mechanicAtWork: {
    src: "/images/placeholder/mechanic-at-work.jpg",
    alt: "Mechanic leaning into an engine bay working under a workshop light",
    replaceNote: "Replace with real KC Motors mechanic-at-work image",
  },
} as const;
