export const roofingConfig = {
  name: "Roofer",
  namePlural: "Roofers",
  slug: "roofing",
  siteUrl: "https://usa-roofing-quote.com",
  siteName: "USA Roofing Quote",
  phoneTel: "tel:+18335675933",
  phoneDisplay: "(833) 567-5933",
  ga4Id: "G-R5XHFLY3R3", // ← à remplir après création GA4
  services: [
    { slug: "roof-repair",          label: "Roof Repair Quote" },
    { slug: "roof-replacement",     label: "Roof Replacement Quote" },
    { slug: "storm-damage-repair",  label: "Storm Damage Repair Quote" },
    { slug: "roof-inspection",      label: "Free Roof Inspection" },
    { slug: "metal-roofing",        label: "Metal Roofing Quote" },
    { slug: "flat-roof-repair",     label: "Flat Roof Repair Quote" },
    { slug: "gutter-installation",  label: "Gutter Installation Quote" },
    { slug: "emergency-roof-repair",label: "Emergency Roof Repair" },
  ],
} as const;
