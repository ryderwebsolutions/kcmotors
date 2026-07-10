// Factual business details sourced from the First Stop KC Motors branch page:
// https://www.firststop.ie/branch-selector/first-stop-kc-motors/
// Update here if any detail changes — every component reads from this file.

export const business = {
  name: "KC Motors",
  tagline: "Driving Trust",
  legalDescriptor: "A family-run garage in Carrick-on-Shannon",
  phoneDisplay: "071 961 6809",
  phoneHref: "tel:+353719616809",
  whatsappUrl: "https://wa.me/353719616809",
  email: "office@kcmotorsrepairs.com",
  emailHref: "mailto:office@kcmotorsrepairs.com",
  managers: ["Kenny Cox", "Lauren Farrell"],
  address: {
    line1: "Castlecara Road",
    line2: "Carrick-on-Shannon",
    county: "Co. Leitrim",
    eircode: "N41 D2R2",
    full: "Castlecara Road, Carrick-on-Shannon, Co. Leitrim, N41 D2R2",
  },
  // Google Maps directions link — safe to hotlink, uses a text query rather than a
  // fixed place_id so it keeps working without needing a verified Place ID.
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("KC Motors, Castlecara Road, Carrick-on-Shannon, Co. Leitrim, N41 D2R2"),
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Castlecara Road, Carrick-on-Shannon, Co. Leitrim, N41 D2R2") +
    "&output=embed&z=14",
  hours: [
    { day: "Monday", hours: "08:00 – 17:00" },
    { day: "Tuesday", hours: "08:00 – 17:00" },
    { day: "Wednesday", hours: "08:00 – 17:00" },
    { day: "Thursday", hours: "08:00 – 17:00" },
    { day: "Friday", hours: "08:00 – 17:00" },
    { day: "Saturday", hours: "09:00 – 13:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  lunchBreak: "Closed for lunch 12:00 – 13:00, Monday to Friday",
  googleRating: 4.5,
  // Review count is not published on the First Stop branch page — do not invent a number.
  ratingSource: "Google",
  firstStop: {
    memberOf: "Irish Tyre Industry Association",
    bridgestoneStatus: "Bridgestone Approved Website — Silver status",
    branchPageUrl: "https://www.firststop.ie/branch-selector/first-stop-kc-motors/",
  },
  facilities: [
    "Customer toilets",
    "Disabled access",
    "Finance options available",
    "Free WiFi",
    "Refreshments",
    "Off-street parking",
    "Reception & waiting area",
    "TV in waiting area",
  ],
  social: {
    facebook: "https://www.facebook.com/kcmotorss/",
    instagram: "https://www.instagram.com/kc_motors8/",
  },
} as const;
