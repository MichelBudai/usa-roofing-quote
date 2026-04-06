/**
 * City page content for roofing service-specific pages.
 * Structure identique à cityServiceContentPestControl.ts
 *
 * 8 builders dédiés :
 *   getRoofRepairCityPageContent
 *   getRoofReplacementCityPageContent
 *   getStormDamageRepairCityPageContent
 *   getRoofInspectionCityPageContent
 *   getMetalRoofingCityPageContent
 *   getFlatRoofRepairCityPageContent
 *   getGutterInstallationCityPageContent
 *   getEmergencyRoofRepairCityPageContent
 *
 * Dispatcher : getServiceCityPageContent(service, params)
 */

import type { CityMetadata } from "./cityMetadata";

// ── Types ──────────────────────────────────────────────────────────────────

export interface ServiceCityContent {
  meta: { title: string; description: string };
  hero: { h1: string; sub: string; trustBullets: string[]; cta: string };
  intro: { h2: string; paragraphs: string[]; cta: string };
  costEstimator: { h2: string; intro: string; ctaBelow: string };
  mainService: {
    h2: string;
    description: string;
    localParagraphs?: string[];
    cost: string;
    whatAffects: string[];
    cta: string;
  };
  whyCall: { h2: string; paragraphs: string[] };
  localSignals: { h2: string; intro: string; bullets: string[] };
  eeat: { title: string; bullets: string[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  closing: { h2: string; text: string; cta: string; sub: string };
  internalLinks: {
    otherServicesLabel: string;
    nearbyLabel: string;
    backLabel: string;
  };
}

export type ServiceContentParams = {
  cityName: string;
  stateName: string;
  stateAbbr: string;
  nearby1: string;
  nearby2: string;
  nearby3: string;
  phone?: string;
  cityMetadata?: CityMetadata | null;
};

// ── Helpers partagés ───────────────────────────────────────────────────────

const PHONE_DEFAULT = "(855) 766-3669";

function buildTrustBullets(stateAbbr: string, cityName: string, county?: string): string[] {
  const bullets = [
    `Licensed & insured in ${stateAbbr}`,
    "Free inspection & estimate, no obligation",
    `Same-day or next-day availability in ${cityName}`,
    "Upfront pricing before any work begins",
  ];
  if (county) bullets.push(`Serving ${cityName} and ${county}`);
  return bullets;
}

function buildLocalSignalsBullets(
  stateName: string,
  stateAbbr: string,
  cityName: string,
  baseBullets: string[],
  cityMetadata?: CityMetadata | null
): string[] {
  const bullets = [...baseBullets];
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const growthSnippet = cityMetadata?.growthSnippet;
  if (county) {
    bullets.unshift(`Serving ${cityName} and ${county} — licensed under ${stateName} state requirements.`);
  }
  if (medianYear) {
    bullets.push(`Many ${cityName} homes were built in the ${medianYear} era — local roofers know this housing stock and its typical repair scope.`);
  }
  if (growthSnippet) {
    bullets.push(`${cityName} is ${growthSnippet}, so demand for quality roofing is high — getting a quote early helps secure a slot.`);
  }
  return bullets;
}

const EEAT_BULLETS = [
  "This guide is written for homeowners comparing local roofing quotes — we focus on what actually affects your estimate.",
  "We don't charge roofers for placement. The quotes you get are from licensed contractors, not pay-to-play leads.",
  "Cost ranges are based on typical project scope; your final quote depends on your roof, materials, and local permit requirements.",
];

// ── 1. Roof Repair ─────────────────────────────────────────────────────────

export function getRoofRepairCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const homeownershipRate = cityMetadata?.homeownershipRate;
  const totalHousingUnits = cityMetadata?.totalHousingUnits;

  const introParagraphs = [
    `Get a free roof repair quote in ${cityName}, ${stateName}. This page connects you with licensed local roofers for leak repairs, shingle replacement, flashing work, and emergency repairs — no obligation.`,
    county && growthSnippet
      ? `${cityName} is ${growthSnippet}. Roof repair permits in ${county} are familiar to local contractors — a quick call gets you a real estimate.`
      : county
      ? `In ${county}, licensed roofers handle local permits and can give you an honest repair estimate in under 5 minutes.`
      : `A licensed roofer who serves ${cityName} can give you an honest repair estimate over the phone in under 5 minutes.`,
  ].filter(Boolean) as string[];

  const localParagraphs = [
    county ? `In ${county}, roof repair permit requirements vary by scope — a licensed ${cityName} roofer factors that into your estimate upfront.` : "",
    medianYear ? `With a median build year of ${medianYear}, many ${cityName} homes have aging shingles and deteriorated flashing that are prime candidates for repair before they require full replacement.` : "",
    homeValue ? `With a median home value of $${homeValue.toLocaleString()} in ${cityName}, timely roof repair is one of the highest-ROI decisions a homeowner can make — a $500 repair today can prevent a $15,000 water damage claim tomorrow.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName} sees steady demand for roof repair — getting a quote early helps avoid the post-storm backlog.` : "",
    homeownershipRate ? `With a homeownership rate of ${homeownershipRate}% in ${cityName}, roof repair is a common owner-driven investment — most residents addressing issues proactively to protect long-term property value.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} roofer can give you a repair estimate tailored to your roof's specific condition.`);

  return {
    meta: {
      title: `Roof Repair in ${cityName}, ${stateAbbr} | Free Estimate from Licensed Local Roofers`,
      description: `Free roof repair quote in ${cityName}, ${stateName}. Leaks, shingles, flashing & emergency repairs from licensed roofers. Upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Free Roof Repair Quote in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} roofers for leak repair, shingle replacement, flashing, and emergency repairs. Honest estimates, no commitment.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Roof Repair Quote — Call Now",
    },
    intro: {
      h2: `Get a Real Roof Repair Estimate in ${cityName}, ${stateName}`,
      paragraphs: introParagraphs,
      cta: `Call for a Free ${cityName} Roof Repair Quote`,
    },
    costEstimator: {
      h2: `Roof Repair Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Roof repair in ${cityName} typically runs $300–$1,500 depending on damage type and scope. A few damaged shingles: $150–$400. Flashing repair: $200–$500. Leak diagnosis and repair: $300–$900. Your exact quote depends on your roof.`,
      ctaBelow: `Get Your Exact ${cityName} Roof Repair Quote — Call Now`,
    },
    mainService: {
      h2: `Roof Repair in ${cityName}, ${stateAbbr}`,
      description: `Roof repair is one of those jobs where delay always costs more. A small leak in ${cityName} that costs $400 to fix today can cause $5,000+ in interior water damage — drywall, insulation, mold — within weeks. Common repair types include shingle replacement, flashing repair around chimneys and vents, sealant and boot replacement, and ridge cap repair. A licensed ${cityName} roofer can diagnose the source of a leak accurately — which is the single most important step.`,
      localParagraphs,
      cost: `Typical ${cityName} roof repair cost: $300 – $1,500`,
      whatAffects: [
        "Damage type — shingles, flashing, boots, ridge cap",
        "Roof pitch and accessibility",
        "Extent of damage and number of repair areas",
        `${stateAbbr} permit requirements for your scope`,
      ],
      cta: `Get a Roof Repair Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Get a Roof Repair Quote First`,
      paragraphs: [
        `A phone quote from a licensed ${cityName} roofer gives you a realistic repair budget before any work starts. Roof repair costs${county ? ` in ${county}` : ""} vary by damage type, roof pitch, and access complexity. A 5-minute call gets you a real number, not a national average that may not apply to your roof.`,
        `It tells you repair vs. replace. A licensed ${cityName} roofer will tell you honestly whether your roof warrants repair or whether continued repairs are costing you more than a replacement would over 3–5 years.`,
        `Getting a repair quote before damage spreads is always the right move. Water intrusion that reaches insulation and framing can turn a $600 repair into a $6,000 remediation.`,
      ],
    },
    localSignals: {
      h2: `Roof Repair Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed roofers available for repair quotes in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All roofers are licensed and insured under ${stateName} requirements`,
        `Familiar with ${cityName}-area permit processes and common repair issues`,
        "Upfront pricing — no surprise fees after work begins",
        `Emergency availability in ${cityName} and surrounding ${stateAbbr} areas`,
        ...(totalHousingUnits ? [`${cityName} has ${totalHousingUnits.toLocaleString()} housing units — local roofers are experienced with the roof types and repair requirements common across this market.`] : []),
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Roof Repair FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `How much does roof repair cost in ${cityName}, ${stateAbbr}?`, a: `Roof repair in ${cityName} typically ranges from $300 for minor shingle replacement to $1,500 for more extensive flashing or leak repair. A licensed ${cityName} roofer can give you a specific estimate after a free inspection.` },
        { q: `Is the roof repair quote in ${cityName} free?`, a: `Yes. A phone quote and free inspection cost nothing. No obligation, no dispatch fee. You get a real estimate from a licensed ${cityName} roofer before any work begins.` },
        { q: `How do I know if I need repair or full replacement in ${cityName}?`, a: `If your roof is under 15 years old with localized damage, repair is almost always the right call. If it's 20+ years old with widespread granule loss or multiple leak areas, a replacement quote is the smarter next step. A free inspection gives you an honest recommendation.` },
        { q: `Can roof repair be done in winter in ${cityName}?`, a: `Most roof repairs can be performed year-round except during active rain or snow. Cold-weather repairs require specific adhesives — a licensed ${cityName} roofer knows when conditions allow safe, effective repairs.` },
        { q: `How long does a roof repair last in ${cityName}?`, a: `A properly executed repair should last 5–10 years or longer depending on the repair type and surrounding roof condition. Flashing repairs and shingle replacements using matching materials typically integrate seamlessly with the existing roof.` },
      ],
    },
    closing: {
      h2: `Get Your Free Roof Repair Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed roofer serving ${cityName}, ${stateName} can give you an honest repair estimate in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Roof Repair Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day quote in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── 2. Roof Replacement ────────────────────────────────────────────────────

export function getRoofReplacementCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const medianHouseholdIncome = cityMetadata?.medianHouseholdIncome;
  const medianGrossRent = cityMetadata?.medianGrossRent;

  const localParagraphs = [
    county ? `In ${county}, roof replacement permits are straightforward for licensed contractors who work the area regularly.` : "",
    medianYear ? `With a median build year of ${medianYear}, many ${cityName} homes are approaching or past the end of their original roof's service life.` : "",
    homeValue ? `With a median home value of $${homeValue.toLocaleString()} in ${cityName}, a new roof is one of the highest-ROI home improvements — typically returning 60–70% of cost at resale.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName} sees growing demand for quality roof replacements that protect long-term property values.` : "",
    medianGrossRent ? `In ${cityName}, where median rent is $${medianGrossRent.toLocaleString()}/month, rental property owners especially need a durable replacement roof — a failed roof is one of the top habitability issues that landlords face.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} roofer can give you a full replacement estimate tailored to your home's size, pitch, and preferred materials.`);

  return {
    meta: {
      title: `Roof Replacement in ${cityName}, ${stateAbbr} | Free Estimate | Licensed Local Roofers`,
      description: `Free roof replacement quote in ${cityName}, ${stateName}. Asphalt, metal & tile from licensed roofers. Insurance claims assistance. Upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Free Roof Replacement Quote in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} roofers for full roof replacement. Asphalt shingles, metal roofing, and tile. Honest estimates, manufacturer warranties, no commitment.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Replacement Quote — Call Now",
    },
    intro: {
      h2: `Get a Real Roof Replacement Estimate in ${cityName}, ${stateName}`,
      paragraphs: [
        `Get a free roof replacement quote in ${cityName}, ${stateName}. This page connects you with licensed local roofers for full roof replacement — asphalt shingles, metal, tile, and flat systems — no obligation.`,
        county ? `In ${county}, roof replacement permits are handled by licensed roofers who work the area regularly. A phone quote takes under 5 minutes.` : `A licensed roofer serving ${cityName} can give you a replacement estimate — including material options, timeline, and warranty — over the phone.`,
      ],
      cta: `Call for a Free ${cityName} Roof Replacement Quote`,
    },
    costEstimator: {
      h2: `Roof Replacement Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Roof replacement in ${cityName} typically runs $8,000–$25,000 for a standard home. Asphalt shingles: $8,000–$15,000. Metal roofing: $15,000–$25,000+. Tile: $18,000–$35,000+. Final cost depends on roof size, pitch, materials, and local labor.`,
      ctaBelow: `Get Your Exact ${cityName} Replacement Quote — Call Now`,
    },
    mainService: {
      h2: `Roof Replacement in ${cityName}, ${stateAbbr}`,
      description: `Roof replacement in ${cityName} is a major investment. Material choice affects both upfront cost and total cost of ownership: asphalt shingles (20–30 year lifespan) are the most affordable; architectural shingles offer better aesthetics at a modest premium; metal roofing (40–70 years) has higher upfront cost but lower long-term maintenance. A licensed ${cityName} roofer recommends the right material for your climate, home style, and budget — and handles the permit, inspection, and manufacturer warranty registration.`,
      localParagraphs,
      cost: `Typical ${cityName} roof replacement cost: $8,000 – $25,000`,
      whatAffects: [
        "Roof size (measured in squares — 100 sq ft each)",
        "Roof pitch and accessibility",
        "Material choice — asphalt, metal, tile, or flat system",
        `${stateAbbr} permit, inspection, and disposal fees`,
      ],
      cta: `Get a Roof Replacement Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Get a Replacement Quote First`,
      paragraphs: [
        `A phone quote from a licensed ${cityName} roofer gives you a realistic budget with material options before committing to anything. Replacement costs${county ? ` in ${county}` : ""} vary by roof size, pitch, material, and local labor — a national average may be $4,000+ off for your specific home.`,
        `It clarifies repair vs. replace. Continuing to repair a roof past its service life costs more than replacement over 3–5 years. A licensed ${cityName} roofer gives you an honest assessment.`,
        `Insurance and financing options exist. Many ${cityName} homeowners don't know their insurance may cover storm-related replacement, or that 0% financing is available. A free quote call surfaces these options upfront.`,
      ],
    },
    localSignals: {
      h2: `Roof Replacement Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed roofers available for replacement quotes in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All roofers are licensed and insured under ${stateName} requirements`,
        `Familiar with ${cityName}-area building codes and material suppliers`,
        "Manufacturer warranties available — workmanship guarantees included",
        `Insurance claims assistance available in ${cityName} and surrounding ${stateAbbr} areas`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Roof Replacement FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `How much does roof replacement cost in ${cityName}, ${stateAbbr}?`, a: `Roof replacement in ${cityName} typically ranges from $8,000 for a small home with asphalt shingles to $25,000+ for a large home with premium materials. A licensed ${cityName} roofer gives you a project-specific quote including materials, labor, permit, and disposal.${medianHouseholdIncome ? ` In ${cityName}, where median household income is $${Number(medianHouseholdIncome).toLocaleString()}, most homeowners budget for this as a planned home improvement.` : ""}` },
        { q: `How long does roof replacement take in ${cityName}?`, a: `Most residential roof replacements in ${cityName} take 1–3 days. Large or complex roofs may take up to 5 days. Your contractor will provide a completion timeline before work starts.` },
        { q: `What warranty comes with a new roof in ${cityName}?`, a: `Material warranties from major manufacturers run 25–50 years on premium shingles. Workmanship warranties from licensed ${cityName} contractors typically run 5–10 years.` },
        { q: `Does insurance cover roof replacement in ${cityName}?`, a: `Most homeowner policies cover sudden storm, hail, and wind damage. A licensed ${cityName} roofer can document the damage and assist with your claim at no extra charge.` },
        { q: `What's the best roofing material for ${cityName}?`, a: `For most ${cityName} homeowners, architectural asphalt shingles offer the best value — 25–30 year warranty, wind resistance up to 130 mph. Metal roofing is a strong choice for longevity. A licensed local roofer advises based on your climate exposure and budget.` },
      ],
    },
    closing: {
      h2: `Get Your Free Roof Replacement Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed roofer serving ${cityName}, ${stateName} can give you an honest replacement estimate — materials, labor, timeline — in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Replacement Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day quote in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── 3. Storm Damage Repair ─────────────────────────────────────────────────

export function getStormDamageRepairCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const homeownershipRate = cityMetadata?.homeownershipRate;
  const totalHousingUnits = cityMetadata?.totalHousingUnits;

  const localParagraphs = [
    county ? `In ${county}, insurance adjusters and licensed roofers work together on storm claims regularly — a contractor familiar with the area knows what documentation your insurer requires.` : "",
    medianYear ? `Many ${cityName} homes built around ${medianYear} have roofing materials that show accelerated wear after hail events — granule loss in older shingles is often much more extensive than it appears from the ground.` : "",
    homeValue ? `With a median home value of $${homeValue.toLocaleString()} in ${cityName}, filing a legitimate storm damage claim and completing proper repairs protects your investment and maintains your insurability.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName} sees regular contractor demand after storm events — calling promptly helps avoid the backlog that can delay repairs for weeks.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} storm damage contractor can assess your roof and assist with your insurance claim as part of the free inspection.`);

  return {
    meta: {
      title: `Storm Damage Roof Repair in ${cityName}, ${stateAbbr} | Free Inspection & Insurance Help`,
      description: `Free storm damage roof inspection in ${cityName}, ${stateName}. Hail, wind & emergency roof repair. Insurance claims assistance at no extra charge. Licensed roofers, no obligation.`,
    },
    hero: {
      h1: `Free Storm Damage Roof Inspection in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} storm damage roofing contractors. Hail, wind, and emergency repair. Insurance claims assistance included. Fast response, honest estimates.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Storm Damage Inspection — Call Now",
    },
    intro: {
      h2: `Get a Real Storm Damage Estimate in ${cityName}, ${stateName}`,
      paragraphs: [
        `Get a free storm damage repair quote in ${cityName}, ${stateName}. This page connects you with licensed roofing contractors for hail damage, wind damage, fallen tree damage, and emergency roof repair — including insurance claims assistance at no extra charge.`,
        county ? `In ${county}, storm damage assessments are handled by licensed contractors who understand local insurance requirements. A phone call gets you a free inspection and real estimate.` : `A licensed storm damage specialist in ${cityName} can inspect your roof, document the damage, and give you an honest estimate — including whether to file an insurance claim — in under a day.`,
      ],
      cta: `Call for a Free ${cityName} Storm Damage Inspection`,
    },
    costEstimator: {
      h2: `Storm Damage Repair Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Storm damage repair costs vary widely: minor hail damage $500–$2,000; moderate damage requiring partial replacement $2,000–$8,000; severe damage requiring full replacement $8,000–$20,000+. If covered by insurance, your out-of-pocket cost may be only your deductible.`,
      ctaBelow: `Get Your Free ${cityName} Storm Damage Assessment — Call Now`,
    },
    mainService: {
      h2: `Storm Damage Roof Repair in ${cityName}, ${stateAbbr}`,
      description: `Storm roof damage in ${cityName} falls into three main categories: hail damage (dented metal components, granule loss, cracked shingles), wind damage (lifted or missing shingles, torn flashing, ridge cap loss), and impact damage (tree limbs, debris). Hail damage is particularly insidious — what looks cosmetic from the ground often represents significant reduction in shingle performance. Most homeowner insurance policies cover sudden storm damage, and most reputable ${cityName} roofing contractors handle the insurance documentation and adjuster coordination as a standard part of the job.`,
      localParagraphs,
      cost: `Typical ${cityName} storm damage repair: $500 – $15,000 (may be covered by insurance)`,
      whatAffects: [
        "Damage type — hail size and density, wind speed, impact",
        "Extent of affected area — partial vs. full roof",
        "Insurance deductible and coverage limits",
        "Whether emergency tarping is needed",
      ],
      cta: `Get a Storm Damage Assessment in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Call Immediately After a Storm`,
      paragraphs: [
        `A free post-storm inspection from a licensed ${cityName} roofer tells you three critical things: whether you have damage, whether it's covered by insurance, and what it will cost if not. Hail damage is often invisible from the ground but clearly visible from the roof.${homeownershipRate ? ` With a ${homeownershipRate}% homeownership rate in ${cityName}, local contractors are experienced with owner-occupied properties and understand the quality expectations that come with permanent roof repairs.` : ""}`,
        `Insurance claim windows are time-limited. Most homeowner policies require claims to be filed within 1–2 years of the damage event. Waiting months to get an inspection can jeopardize your right to file.`,
        `Emergency tarping prevents compounding damage. If your roof has active penetrations after a storm, every day without protection risks interior water damage. A licensed ${cityName} contractor can tarp within hours of your call.`,
      ],
    },
    localSignals: {
      h2: `Storm Damage Roof Repair Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed storm damage contractors available for inspections in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All contractors are licensed and insured under ${stateName} requirements`,
        `Insurance claims assistance — adjuster coordination included`,
        "Emergency tarping available same-day",
        `Serving ${cityName} and surrounding ${stateAbbr} areas — fast post-storm response`,
        ...(totalHousingUnits ? [`${cityName} has ${totalHousingUnits.toLocaleString()} housing units — local storm damage contractors are experienced with the roof types common across this market.`] : []),
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Storm Damage Roof Repair FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `Will insurance cover my storm roof damage in ${cityName}?`, a: `Most standard homeowner policies in ${stateName} cover sudden storm damage from hail, wind, and falling debris. A licensed ${cityName} roofer can assess your damage and advise whether it meets the threshold for a successful claim.` },
        { q: `Is the storm damage inspection in ${cityName} free?`, a: `Yes. A post-storm roof inspection costs nothing. No obligation, no dispatch fee. You get a written damage report from a licensed ${cityName} contractor.` },
        { q: `How quickly can you respond to storm damage in ${cityName}?`, a: `Emergency tarping is typically available within hours. Full inspections and estimates are usually completed within 24–48 hours after a storm event. Call as soon as possible — post-event scheduling fills quickly.` },
        { q: `What does hail damage look like on a roof in ${cityName}?`, a: `From the ground, hail damage is often invisible. On the roof: random impact marks with granule loss (circular bare spots) on asphalt shingles, dented metal components (vents, flashing, ridge caps). A licensed ${cityName} roofer documents all damage with photos for your insurance claim.` },
        { q: `Should I choose my own roofer or use my insurance company's preferred contractor?`, a: `You have the right to choose your own licensed contractor in ${stateName}. An independent licensed ${cityName} roofer works for you and can advocate for full coverage of your damage.` },
      ],
    },
    closing: {
      h2: `Get Your Free Storm Damage Inspection in ${cityName} Today`,
      text: `Don't wait — insurance windows are time-limited and interior damage compounds daily. A licensed storm damage contractor serving ${cityName}, ${stateName} can inspect your roof and assist with your claim.`,
      cta: `Call for Your Free ${cityName} Storm Damage Inspection`,
      sub: `Call ${phone} · Emergency response available · Free insurance claim assistance`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── 4. Roof Inspection ─────────────────────────────────────────────────────

export function getRoofInspectionCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const medianHouseholdIncome = cityMetadata?.medianHouseholdIncome;
  const medianGrossRent = cityMetadata?.medianGrossRent;

  const localParagraphs = [
    county ? `In ${county}, a written roof inspection report is often required for real estate transactions and insurance renewals — a licensed contractor's report meets all local standards.` : "",
    medianYear ? `With a median build year of ${medianYear}, many ${cityName} homes have roofs approaching the end of their warranty period — an inspection now identifies issues while they're still repairable.` : "",
    homeValue ? `For a home with a median value of $${homeValue.toLocaleString()} in ${cityName}, a $0 inspection that reveals a $600 repair is one of the best financial decisions a homeowner can make.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName}'s real estate market means roof condition is increasingly scrutinized in home sales — a clean inspection report adds negotiating power.` : "",
    medianHouseholdIncome ? `With a median household income of $${Number(medianHouseholdIncome).toLocaleString()} in ${cityName}, homeowners typically approach a roof inspection as a planned maintenance step — a licensed specialist helps you balance repair cost against long-term roof performance.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} roofer delivers a comprehensive written report you can use for insurance, real estate, or peace of mind.`);

  return {
    meta: {
      title: `Free Roof Inspection in ${cityName}, ${stateAbbr} | Written Report | Licensed Roofers`,
      description: `Free roof inspection in ${cityName}, ${stateName}. Written report with photos, remaining life estimate, damage documentation. Licensed roofers, no obligation.`,
    },
    hero: {
      h1: `Free Roof Inspection in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} roofers for comprehensive inspections. Written report with photos, damage documentation, and honest condition assessment. No commitment.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Schedule Your Free Roof Inspection — Call Now",
    },
    intro: {
      h2: `Get a Free Professional Roof Inspection in ${cityName}, ${stateName}`,
      paragraphs: [
        `Get a free roof inspection in ${cityName}, ${stateName}. This page connects you with licensed roofing contractors for comprehensive inspections — written report with photos, damage documentation, remaining life estimate, and no obligation to hire.`,
        county ? `In ${county}, licensed roofers provide thorough written inspection reports that meet insurance and real estate documentation standards.` : `A licensed ${cityName} roofer can complete your inspection and deliver a written report typically within 24–48 hours of scheduling.`,
      ],
      cta: `Call to Schedule Your Free ${cityName} Roof Inspection`,
    },
    costEstimator: {
      h2: `Roof Inspection — ${cityName}, ${stateName}`,
      intro: `A professional roof inspection in ${cityName} is free with no obligation. Third-party inspections for real estate transactions typically cost $150–$350 if you need a fully independent report.`,
      ctaBelow: `Schedule Your Free ${cityName} Roof Inspection — Call Now`,
    },
    mainService: {
      h2: `Roof Inspection in ${cityName}, ${stateAbbr}`,
      description: `A professional roof inspection in ${cityName} covers every visible component of your roofing system: shingles (condition, granule retention, curling, cracking, missing sections), flashing around chimneys, vents, skylights, and valleys, ridge caps and ridge vents, soffit and fascia condition, gutter attachment and drainage, and visible attic conditions including ventilation adequacy and signs of moisture intrusion. The result is a written report with photos documenting current condition, any identified damage, estimated remaining service life, and recommended repairs if any.`,
      localParagraphs,
      cost: "FREE — no obligation",
      whatAffects: [
        "Roof size and accessibility",
        "Number of penetrations (chimneys, vents, skylights)",
        "Whether attic access inspection is included",
        "Report format required (insurance, real estate, or personal)",
      ],
      cta: `Schedule a Roof Inspection in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Schedule Regular Roof Inspections`,
      paragraphs: [
        `A free annual or biennial inspection from a licensed ${cityName} roofer is the most cost-effective roof maintenance strategy available. Issues caught at inspection stage cost $200–$600 to fix. The same issues, discovered after a water leak has penetrated insulation and drywall, cost $3,000–$10,000 to remediate.`,
        `After any significant storm in ${cityName}, an inspection is essential even if you see no visible damage from the ground. Hail damage is nearly always invisible from street level but clearly documented on the roof surface.${medianGrossRent ? ` In ${cityName}, where median rent is $${medianGrossRent.toLocaleString()}/month, rental property owners especially rely on inspection reports to maintain habitability standards and protect their investment.` : ""}`,
        `For home buyers and sellers in ${cityName}, a roof inspection is non-negotiable. A licensed ${cityName} roofer's written report provides the documentation both parties need.`,
      ],
    },
    localSignals: {
      h2: `Roof Inspection Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed roofers available for free inspections in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All roofers are licensed and insured under ${stateName} requirements`,
        `Written report with photos — meets insurance and real estate standards`,
        "No obligation — inspection is fully free",
        `Available in ${cityName} and surrounding ${stateAbbr} areas within 24–48 hours`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Roof Inspection FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `Is the roof inspection really free in ${cityName}?`, a: `Yes, 100% free with no obligation. A licensed ${cityName} roofer will inspect your roof, document findings with photos, and provide a written report at no charge. You are never required to hire them for any repairs.` },
        { q: `What does a roof inspection include in ${cityName}?`, a: `A standard inspection covers all shingle surfaces, flashing (chimney, pipe boots, valleys), ridge and hip components, gutters and fascia, soffit vents, and visible attic condition if accessible. You receive a written report with photos of any issues found.` },
        { q: `How often should I get my roof inspected in ${cityName}?`, a: `Experts recommend a professional inspection every 1–2 years, and within 60 days after any significant storm. Homes with older roofs (15+ years) benefit from annual inspections.` },
        { q: `Do I need a roof inspection to sell my home in ${cityName}?`, a: `Not legally required, but highly recommended. In ${cityName}'s real estate market, buyers routinely request roof inspections. Having a current licensed contractor's report in hand lets you negotiate from a position of full disclosure.` },
        { q: `Can a roof inspection help with my insurance in ${cityName}?`, a: `Yes. A documented inspection report is essential for filing storm damage claims and can help dispute policy non-renewals based on roof condition. A licensed ${cityName} roofer can provide a report that meets insurer requirements.` },
      ],
    },
    closing: {
      h2: `Schedule Your Free Roof Inspection in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed roofer serving ${cityName}, ${stateName} will inspect your roof and give you a complete written report — completely free.`,
      cta: `Call to Schedule Your Free ${cityName} Roof Inspection`,
      sub: `Call ${phone} · Available 7 days a week · Report delivered within 24 hours`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── 5. Metal Roofing ───────────────────────────────────────────────────────

export function getMetalRoofingCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const homeownershipRate = cityMetadata?.homeownershipRate;
  const totalHousingUnits = cityMetadata?.totalHousingUnits;

  const localParagraphs = [
    county ? `In ${county}, metal roofing permits and inspections are straightforward for experienced contractors who regularly work the area.` : "",
    medianYear ? `Many ${cityName} homeowners with homes built around ${medianYear} are replacing aging asphalt systems with metal — the step-up in cost often makes financial sense when factoring in a 40–70 year service life.` : "",
    homeValue ? `For a home valued at $${homeValue.toLocaleString()} in ${cityName}, metal roofing is a premium upgrade that increases resale value and eliminates the need for another replacement in the owner's lifetime.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName} sees growing demand for metal roofing as homeowners invest in durable, low-maintenance systems that outperform in the local climate.` : "",
    homeownershipRate ? `With a homeownership rate of ${homeownershipRate}% in ${cityName}, metal roofing is a popular long-term investment — residents planning to stay in their homes benefit most from the 40–70 year lifespan of a properly installed metal system.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} metal roofing contractor can recommend the right system for your home's style and climate exposure.`);

  return {
    meta: {
      title: `Metal Roofing in ${cityName}, ${stateAbbr} | Free Estimate | Licensed Metal Roofers`,
      description: `Free metal roofing quote in ${cityName}, ${stateName}. Standing seam, metal shingles & panel systems. 40–70 year lifespan. Licensed contractors, no obligation.`,
    },
    hero: {
      h1: `Free Metal Roofing Quote in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} metal roofing contractors. Standing seam, metal shingles, and panel systems. 40–70 year lifespan, energy efficient, honest estimates.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Metal Roofing Quote — Call Now",
    },
    intro: {
      h2: `Get a Real Metal Roofing Estimate in ${cityName}, ${stateName}`,
      paragraphs: [
        `Get a free metal roofing quote in ${cityName}, ${stateName}. This page connects you with licensed metal roofing contractors for standing seam, metal shingles, and exposed fastener panel systems — no obligation.`,
        county ? `In ${county}, metal roofing installations follow specific permit and code requirements — a licensed contractor familiar with local standards ensures your installation meets all requirements.` : `A licensed metal roofing contractor serving ${cityName} can give you a full system quote — material type, profile, color options, installation timeline, and warranty details.`,
      ],
      cta: `Call for a Free ${cityName} Metal Roofing Quote`,
    },
    costEstimator: {
      h2: `Metal Roofing Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Metal roofing in ${cityName} typically costs $10,000–$30,000 for a standard residential installation. Standing seam (premium): $15,000–$30,000+. Metal shingles: $12,000–$22,000. Exposed fastener panels: $10,000–$16,000. All significantly outlast asphalt.`,
      ctaBelow: `Get Your Exact ${cityName} Metal Roofing Quote — Call Now`,
    },
    mainService: {
      h2: `Metal Roofing in ${cityName}, ${stateAbbr}`,
      description: `Metal roofing in ${cityName} is a long-term investment that eliminates the replacement cycle of asphalt shingles. A properly installed standing seam metal roof lasts 40–70 years with minimal maintenance. Metal roofing resists fire (Class A rating), high wind (most systems rated to 140+ mph), hail impact, and UV degradation. It reflects radiant heat, reducing summer cooling costs by 10–25%. A licensed ${cityName} metal roofing contractor will specify the right system for your home's pitch, style, and climate exposure.`,
      localParagraphs,
      cost: `Typical ${cityName} metal roofing cost: $10,000 – $30,000`,
      whatAffects: [
        "System type — standing seam vs. metal shingles vs. panels",
        "Gauge and profile of the metal",
        "Roof size, pitch, and complexity",
        `${stateAbbr} permit and installation requirements`,
      ],
      cta: `Get a Metal Roofing Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Choose Metal Roofing`,
      paragraphs: [
        `The financial case for metal roofing in ${cityName}: one metal roof vs. 2–3 asphalt replacements over the same period. A $20,000 standing seam installation that lasts 50 years costs $400/year. Two asphalt replacements at $12,000 each cost $480/year — and the asphalt requires more maintenance.`,
        `Insurance and energy savings improve the ROI further. Many ${stateName} insurers offer premium discounts for metal roofing due to its fire and wind resistance. Energy savings of 10–25% on summer cooling add up over decades.`,
        `Metal roofing is not a commodity product — installation quality determines performance. A licensed ${cityName} metal roofing contractor understands proper fastening patterns, thermal expansion allowances, and flashing details.`,
      ],
    },
    localSignals: {
      h2: `Metal Roofing Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed metal roofing contractors available for quotes in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All contractors are licensed and insured under ${stateName} requirements`,
        `Experienced with standing seam, metal shingles, and panel systems`,
        "Manufacturer warranties available — 40+ year material coverage",
        `Serving ${cityName} and surrounding ${stateAbbr} areas`,
        ...(totalHousingUnits ? [`${cityName} has ${totalHousingUnits.toLocaleString()} housing units — local metal roofing specialists are experienced with the home styles and installation requirements common in this market.`] : []),
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Metal Roofing FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `How much does metal roofing cost in ${cityName}, ${stateAbbr}?`, a: `Metal roofing in ${cityName} ranges from $10,000 for an exposed fastener panel system on a small home to $30,000+ for standing seam on a larger roof. A licensed ${cityName} contractor can give you a system-specific quote.` },
        { q: `Is metal roofing noisy in rain in ${cityName}?`, a: `When installed over solid decking with standard insulation and underlayment — as all licensed ${cityName} metal roofers install — metal roofs are no louder than asphalt during rain.` },
        { q: `Will metal roofing rust in ${cityName}?`, a: `Modern metal roofing has protective coatings (Galvalume, Galvanized, or painted Kynar/PVDF) that prevent rust for decades. Premium systems carry 40-year coating warranties.` },
        { q: `How long does metal roofing installation take in ${cityName}?`, a: `Most residential metal roof installations in ${cityName} take 2–5 days. Standing seam systems are more labor-intensive than panel systems.` },
        { q: `Can I install metal roofing over my existing shingles in ${cityName}?`, a: `In many cases, yes — metal roofing can be installed over one layer of existing asphalt shingles, saving the cost of tear-off. ${stateAbbr} building codes govern this practice.` },
      ],
    },
    closing: {
      h2: `Get Your Free Metal Roofing Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed metal roofing contractor serving ${cityName}, ${stateName} can give you a complete system quote in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Metal Roofing Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day quote in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── 6. Flat Roof Repair ────────────────────────────────────────────────────

export function getFlatRoofRepairCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const medianHouseholdIncome = cityMetadata?.medianHouseholdIncome;
  const homeownershipRate = cityMetadata?.homeownershipRate;

  const localParagraphs = [
    county ? `In ${county}, flat roof drainage requirements vary by building type and age — a specialist familiar with local codes ensures your system meets current standards.` : "",
    medianYear ? `Many ${cityName} buildings constructed around ${medianYear} have flat or low-slope roofing systems approaching the end of their service life — an inspection now determines whether repair can extend performance or replacement is more cost-effective.` : "",
    homeValue ? `For a property valued at $${homeValue.toLocaleString()} in ${cityName}, proper flat roof maintenance protects the building envelope and prevents interior water damage.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName} has active commercial and residential flat roofing demand — early scheduling ensures you get a qualified specialist.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} flat roofing specialist can diagnose your membrane system and give you a clear repair vs. replace recommendation.`);

  return {
    meta: {
      title: `Flat Roof Repair in ${cityName}, ${stateAbbr} | TPO, EPDM & More | Free Estimate`,
      description: `Free flat roof repair quote in ${cityName}, ${stateName}. TPO, EPDM, modified bitumen & built-up roofing. Licensed flat roof specialists, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Free Flat Roof Repair Quote in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} flat roofing specialists. TPO, EPDM, modified bitumen, and built-up systems. Honest repair vs. replace assessment, no commitment.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Flat Roof Quote — Call Now",
    },
    intro: {
      h2: `Get a Real Flat Roof Estimate in ${cityName}, ${stateName}`,
      paragraphs: [
        `Get a free flat roof repair or replacement quote in ${cityName}, ${stateName}. This page connects you with licensed flat roofing specialists for TPO, EPDM, modified bitumen, and built-up roofing systems — no obligation.`,
        county ? `In ${county}, flat roofing work requires experienced specialists familiar with local drainage requirements and building codes.` : `A licensed flat roofing specialist serving ${cityName} can diagnose your system and give you a clear recommendation — repair, recoat, or replace.`,
      ],
      cta: `Call for a Free ${cityName} Flat Roof Inspection`,
    },
    costEstimator: {
      h2: `Flat Roof Repair Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Flat roof repair costs in ${cityName}: minor membrane repair $400–$1,500; ponding water correction and re-slope $1,500–$4,000; full membrane replacement $4,000–$12,000+. TPO and EPDM replacements are typically more affordable than built-up or modified bitumen systems.`,
      ctaBelow: `Get Your Exact ${cityName} Flat Roof Quote — Call Now`,
    },
    mainService: {
      h2: `Flat Roof Repair in ${cityName}, ${stateAbbr}`,
      description: `Flat roofs require specialized knowledge that differs significantly from pitched roofing. The most common issues in ${cityName} are ponding water (standing water exceeding 48 hours), membrane blistering and splitting, flashing failures at walls and penetrations, and seam separation. The right approach depends on the membrane type: TPO is currently the most popular for new installations; EPDM is proven and durable; modified bitumen works well in cold climates. A licensed ${cityName} flat roofing specialist determines whether your system can be repaired, recoated, or needs replacement.`,
      localParagraphs,
      cost: `Typical ${cityName} flat roof repair: $400 – $8,000 (varies widely by system and scope)`,
      whatAffects: [
        "Membrane system type — TPO, EPDM, modified bitumen, BUR",
        "Damage type and extent — punctures, seams, ponding, full failure",
        "Roof size and number of penetrations",
        "Whether recoating can extend life vs. full replacement",
      ],
      cta: `Get a Flat Roof Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Property Owners Get a Flat Roof Quote First`,
      paragraphs: [
        `Flat roof repairs are often simple and low-cost if caught early — a failed seam or small puncture costs $400–$800 to fix professionally. The same issues, after months of water intrusion, can require full membrane replacement plus interior remediation: $8,000–$20,000+.${homeownershipRate ? ` With a ${homeownershipRate}% homeownership rate in ${cityName}, local flat roofing contractors are experienced with owner-occupied properties and the quality standards that come with permanent installations.` : ""}`,
        `Flat roofs fail silently. Unlike pitched roofs where water runs to the ceiling, flat roof leaks often migrate horizontally through the insulation layer and appear at interior locations far from the actual penetration.`,
        `The repair vs. replace decision is financial, not just technical. A flat roof with 5+ years of remaining life that needs a $1,200 repair is worth repairing. One with 1–2 years left may be better replaced. A licensed ${cityName} contractor gives you this analysis as part of a free inspection.`,
      ],
    },
    localSignals: {
      h2: `Flat Roof Repair Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed flat roofing specialists available for quotes in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All specialists are licensed and insured under ${stateName} requirements`,
        `Experienced with TPO, EPDM, modified bitumen, and built-up systems`,
        "Upfront repair vs. replace assessment — no pressure to replace",
        `Serving ${cityName} commercial and residential properties`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Flat Roof Repair FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `How much does flat roof repair cost in ${cityName}, ${stateAbbr}?`, a: `Flat roof repair in ${cityName} ranges from $400 for a minor membrane patch to $8,000+ for a full membrane replacement. A free inspection from a licensed ${cityName} specialist gives you an accurate quote.${medianHouseholdIncome ? ` In ${cityName}, where median household income is $${Number(medianHouseholdIncome).toLocaleString()}, most property owners approach flat roof repair as a planned maintenance investment.` : ""}` },
        { q: `How often do flat roofs need repair or replacement in ${cityName}?`, a: `With annual inspections and prompt repair of minor issues, TPO and EPDM membranes typically last 15–25 years. Modified bitumen: 15–20 years. Built-up roofing: 20–30 years.` },
        { q: `TPO vs. EPDM — which is better for ${cityName}?`, a: `Both are excellent choices. TPO is more reflective (better for heat climates), weldable (stronger seams), and currently more popular for new installations. EPDM is extremely durable and often lower cost. A licensed ${cityName} specialist advises based on your building type and climate.` },
        { q: `What causes ponding water on flat roofs in ${cityName}?`, a: `Ponding water is typically caused by inadequate slope design, blocked drains, insulation compression, or structural deflection. A licensed ${cityName} roofer can diagnose the cause and recommend the right correction.` },
        { q: `Can a flat roof be repaired in winter in ${cityName}?`, a: `Most flat roof repairs require temperatures above 40°F for proper membrane adhesion and welding. A licensed ${cityName} flat roofer will advise on seasonal repair windows for your specific system.` },
      ],
    },
    closing: {
      h2: `Get Your Free Flat Roof Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed flat roofing specialist serving ${cityName}, ${stateName} can inspect your system and give you an honest repair vs. replace assessment — completely free.`,
      cta: `Call for Your Free ${cityName} Flat Roof Quote`,
      sub: `Call ${phone} · Available 7 days a week · Free inspection in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── 7. Gutter Installation ─────────────────────────────────────────────────

export function getGutterInstallationCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const totalHousingUnits = cityMetadata?.totalHousingUnits;
  const medianGrossRent = cityMetadata?.medianGrossRent;

  const localParagraphs = [
    county ? `In ${county}, local rainfall patterns and freeze-thaw cycles affect gutter system specifications — a contractor familiar with the area sizes and installs your system to handle local conditions.` : "",
    medianYear ? `Many ${cityName} homes built around ${medianYear} have original gutters that are past their service life — aging steel gutters rust through; aluminum gutters pull away from fascia as fasteners fail over time.` : "",
    homeValue ? `For a home valued at $${homeValue.toLocaleString()} in ${cityName}, properly functioning gutters protect your foundation, siding, and landscaping from water damage that can cost $5,000–$30,000 to remediate.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName} homeowners are increasingly investing in seamless gutters and guards to eliminate the maintenance burden of sectional systems.` : "",
    medianGrossRent ? `In ${cityName}, where median rent is $${medianGrossRent.toLocaleString()}/month, rental property owners especially depend on properly functioning gutters to prevent foundation and siding damage that triggers habitability complaints.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} gutter contractor can give you a complete system quote sized correctly for your home and local rainfall.`);

  return {
    meta: {
      title: `Gutter Installation in ${cityName}, ${stateAbbr} | Free Estimate | Licensed Contractors`,
      description: `Free gutter installation quote in ${cityName}, ${stateName}. Seamless gutters, gutter guards & downspouts. Licensed contractors, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Free Gutter Installation Quote in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter contractors. Seamless gutters, gutter guards, and downspout installation. Protect your foundation, roof, and landscaping. Honest estimates.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Gutter Quote — Call Now",
    },
    intro: {
      h2: `Get a Real Gutter Installation Estimate in ${cityName}, ${stateName}`,
      paragraphs: [
        `Get a free gutter installation or replacement quote in ${cityName}, ${stateName}. This page connects you with licensed contractors for seamless gutters, gutter guards, downspout installation, and full system replacement — no obligation.`,
        county ? `In ${county}, gutter sizing and pitch requirements vary by local rainfall intensity — a licensed ${cityName} contractor sizes your system correctly for your specific location.` : `A licensed gutter contractor serving ${cityName} can give you a complete system quote — size, profile, material, guard options, and downspout placement.`,
      ],
      cta: `Call for a Free ${cityName} Gutter Installation Quote`,
    },
    costEstimator: {
      h2: `Gutter Installation Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Gutter installation in ${cityName} typically costs $600–$2,400 for a standard home. Seamless aluminum gutters (most common): $6–$12 per linear foot installed. Gutter guards: $4–$15 per linear foot. Most homes need 150–200 linear feet of gutters.`,
      ctaBelow: `Get Your Exact ${cityName} Gutter Quote — Call Now`,
    },
    mainService: {
      h2: `Gutter Installation in ${cityName}, ${stateAbbr}`,
      description: `Gutters are the first line of defense against water damage to your ${cityName} home's foundation, siding, basement, and landscaping. Seamless gutters (fabricated on-site in one continuous piece) are the preferred choice — they eliminate the seam joints where sectional gutters leak and fail. Sizing matters: most homes need 5-inch K-style gutters; homes with steep pitches or large roof areas need 6-inch. Gutter guards significantly reduce maintenance. A licensed ${cityName} gutter contractor measures your home, calculates the right sizing, and installs a properly pitched system that drains completely.`,
      localParagraphs,
      cost: `Typical ${cityName} gutter installation cost: $600 – $2,400`,
      whatAffects: [
        "Linear footage around the home's perimeter",
        "Gutter size — 5-inch vs. 6-inch K-style",
        "Material — aluminum (standard), copper, or steel",
        "Whether gutter guards are included",
      ],
      cta: `Get a Gutter Installation Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Invest in Quality Gutters`,
      paragraphs: [
        `Gutters are one of the lowest-cost ways to prevent some of the most expensive home damage. Foundation waterproofing in ${cityName} can cost $5,000–$15,000; basement leak repair $3,000–$8,000; siding replacement $6,000–$20,000. A $1,200 seamless gutter installation prevents all of these.`,
        `Seamless vs. sectional gutters: sectional gutters have joints every 10 feet — each joint is a future leak point. Seamless gutters are fabricated on-site to your home's exact measurements. A licensed ${cityName} contractor brings the seamless fabrication equipment to your home.`,
        `Gutter guards are worth considering if you have large trees nearby. Annual gutter cleaning runs $150–$300 per year; quality gutter guards at $4–$10 per linear foot pay for themselves in 4–8 years.`,
      ],
    },
    localSignals: {
      h2: `Gutter Installation Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter contractors available for quotes in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All contractors are licensed and insured under ${stateName} requirements`,
        `Seamless gutter fabrication on-site — custom fit for your home`,
        "Gutter guard options available — reduce cleaning frequency",
        `Serving ${cityName} and surrounding ${stateAbbr} areas`,
        ...(totalHousingUnits ? [`${cityName} has ${totalHousingUnits.toLocaleString()} housing units — local gutter specialists are experienced with the home styles and drainage requirements common across this market.`] : []),
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Installation FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `How much does gutter installation cost in ${cityName}, ${stateAbbr}?`, a: `Gutter installation in ${cityName} typically costs $600–$2,400 depending on the home's perimeter, gutter size, material, and whether guards are included. A licensed ${cityName} contractor gives you a linear-foot quote after measuring your home.` },
        { q: `Seamless vs. sectional gutters — which is better in ${cityName}?`, a: `Seamless gutters are almost always the better choice. They're fabricated on-site with no joints along straight runs — eliminating the primary failure point of sectional systems. The cost difference is minimal ($0.50–$2 per linear foot).` },
        { q: `Should I add gutter guards in ${cityName}?`, a: `If you have trees within 30 feet of your home, gutter guards make strong financial sense. Quality micro-mesh guards ($8–$15/LF) virtually eliminate cleaning while allowing water flow.` },
        { q: `What size gutters does my ${cityName} home need?`, a: `Most homes need 5-inch K-style gutters. Homes with roof pitches above 8:12 or large roof surface areas benefit from 6-inch gutters. A licensed ${cityName} contractor calculates the correct sizing based on your roof's drainage area.` },
        { q: `How long do gutters last in ${cityName}?`, a: `Aluminum seamless gutters typically last 20–30 years in ${cityName}'s climate with proper installation. Steel gutters: 15–20 years. Copper: 50+ years but at 3–4x the cost.` },
      ],
    },
    closing: {
      h2: `Get Your Free Gutter Installation Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter contractor serving ${cityName}, ${stateName} can measure your home and give you a complete system quote — completely free.`,
      cta: `Call for Your Free ${cityName} Gutter Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day quote in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── 8. Emergency Roof Repair ───────────────────────────────────────────────

export function getEmergencyRoofRepairCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone: string = PHONE_DEFAULT, cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const medianHouseholdIncome = cityMetadata?.medianHouseholdIncome;

  const localParagraphs = [
    county ? `In ${county}, emergency roofing contractors are familiar with local permit requirements for emergency work and can move quickly to protect your home.` : "",
    medianYear ? `Many ${cityName} homes built around ${medianYear} have aging roofs more vulnerable to sudden failure — emergency repairs prevent minor events from becoming catastrophic water intrusions.` : "",
    homeValue ? `For a home valued at $${homeValue.toLocaleString()} in ${cityName}, emergency tarping within hours of storm damage prevents interior water damage that can cost 10x the roof repair itself.` : "",
    growthSnippet ? `As ${growthSnippet}, ${cityName} has experienced emergency roofing contractors who respond quickly and know the local area.` : "",
    medianHouseholdIncome ? `With a median household income of $${Number(medianHouseholdIncome).toLocaleString()} in ${cityName}, homeowners understand that emergency tarping ($200–$500) is always a far better investment than the interior water damage it prevents.` : "",
  ].filter(Boolean) as string[];

  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} emergency roofer can tarp your roof and assess damage within hours of your call.`);

  return {
    meta: {
      title: `Emergency Roof Repair in ${cityName}, ${stateAbbr} | Same-Day Response | Licensed Roofers`,
      description: `Emergency roof repair in ${cityName}, ${stateName}. Same-day tarping, storm damage response, active leak repair. Licensed roofers available 7 days a week. No obligation.`,
    },
    hero: {
      h1: `Emergency Roof Repair in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} roofers for emergency response — active leaks, storm damage, fallen trees. Same-day tarping and repair. 7 days a week.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Call for Emergency Roof Repair — Now",
    },
    intro: {
      h2: `Emergency Roof Repair in ${cityName} — Same-Day Response`,
      paragraphs: [
        `If your roof has an active leak, storm damage, or structural breach in ${cityName}, ${stateName}, call now. This page connects you with licensed local roofers for emergency tarping, same-day damage assessment, and urgent repair — no obligation.`,
        county ? `In ${county}, licensed emergency roofers are available for rapid response and understand local permit requirements for emergency work.` : `Licensed emergency roofers serving ${cityName} are available 7 days a week for urgent situations. A call now gets you an honest assessment and same-day tarping if needed.`,
      ],
      cta: "Call for Emergency Roof Repair Now",
    },
    costEstimator: {
      h2: `Emergency Roof Repair Cost — ${cityName}, ${stateName}`,
      intro: `Emergency tarping in ${cityName}: $200–$500 depending on roof size and access. Emergency repair (same-day): $300–$2,000+ depending on damage scope. Most homeowner insurance policies cover sudden storm damage — your out-of-pocket cost may be only your deductible.`,
      ctaBelow: `Call for Emergency Response in ${cityName} Now`,
    },
    mainService: {
      h2: `Emergency Roof Repair in ${cityName}, ${stateAbbr}`,
      description: `Emergency roof situations in ${cityName} include: active leaks during rain, storm damage (hail, wind, fallen trees), collapsed roof sections, and sudden shingle failures that expose the roof deck. Every hour of delay with an active leak risks drywall damage, insulation saturation, and mold growth that can cost 10x the roof repair itself. A licensed ${cityName} emergency roofer provides same-day tarping to stop water intrusion immediately, a written damage assessment for insurance purposes, and a repair estimate before any permanent work begins.`,
      localParagraphs,
      cost: `Emergency tarping: $200–$500 · Emergency repair: $300–$2,000+`,
      whatAffects: [
        "Damage type and extent — leak, storm, structural",
        "Roof size and access complexity",
        "Whether tarping or immediate repair is the right first step",
        "Insurance coverage and deductible",
      ],
      cta: "Call for Emergency Roof Repair in ${cityName} Now",
    },
    whyCall: {
      h2: `Why You Should Call an Emergency Roofer in ${cityName} Now`,
      paragraphs: [
        `Every hour with an active roof breach in ${cityName} adds damage. Water that reaches drywall can cause mold within 24–48 hours. Insulation saturation is not always visible and can require full replacement. The cost of emergency tarping ($200–$500) is always less than the interior damage it prevents.`,
        `Emergency tarping stops the bleeding while you figure out the right permanent repair. A licensed ${cityName} roofer provides a temporary watertight seal and a written damage report for your insurance company — both in the same visit.`,
        `Insurance claims require prompt action. Most policies have reporting requirements — waiting days or weeks after storm damage can jeopardize your claim. An emergency inspection and written report from a licensed ${cityName} roofer documents the damage immediately.`,
      ],
    },
    localSignals: {
      h2: `Emergency Roof Repair Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed emergency roofers available for same-day response in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, stateAbbr, cityName, [
        `All roofers are licensed and insured under ${stateName} requirements`,
        "Same-day emergency tarping available",
        "Written damage report for insurance claims included",
        `Emergency response in ${cityName} and surrounding ${stateAbbr} areas — 7 days a week`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Emergency Roof Repair FAQ — ${cityName}, ${stateName}`,
      items: [
        { q: `How fast can an emergency roofer respond in ${cityName}?`, a: `Most licensed emergency roofers in ${cityName} can respond within 1–4 hours for same-day tarping. Urgent situations with active structural damage are often addressed within 2 hours of your call.` },
        { q: `What counts as a roofing emergency in ${cityName}?`, a: `Active leaks during rain, storm damage with exposed roof deck, fallen tree impact, large sections of missing shingles, and any situation where water is actively entering your home are all roofing emergencies requiring immediate response.` },
        { q: `Will insurance cover emergency roof repair in ${cityName}?`, a: `Most homeowner policies cover sudden storm damage including emergency tarping costs. A licensed ${cityName} roofer documents the damage and assists with your insurance claim as part of the emergency response.` },
        { q: `Should I try to tarp my roof myself in ${cityName}?`, a: `Only if it is safe and the roof is accessible. Wet roofs are extremely slippery and dangerous. A licensed ${cityName} emergency roofer has the equipment and safety gear to do it correctly — and the tarping cost ($200–$500) is covered by most insurance policies.` },
        { q: `What happens after emergency tarping in ${cityName}?`, a: `After tarping, your ${cityName} roofer provides a written damage assessment and a repair or replacement quote. Emergency tarping is temporary — permanent repairs are typically scheduled within 1–2 weeks.` },
      ],
    },
    closing: {
      h2: `Emergency Roof Repair in ${cityName} — Call Now`,
      text: `Don't wait. Every hour of delay with an active roof breach costs more in interior damage. A licensed emergency roofer serving ${cityName}, ${stateName} can tarp your roof and assess damage today.`,
      cta: `Call for Emergency Roof Repair in ${cityName}`,
      sub: `Call ${phone} · Emergency response available · 7 days a week`,
    },
    internalLinks: {
      otherServicesLabel: `Other roofing services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ── Dispatcher ─────────────────────────────────────────────────────────────

export function getServiceCityPageContent(
  service: string,
  params: ServiceContentParams
): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone, cityMetadata } = params;
  const p = [cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone ?? PHONE_DEFAULT, cityMetadata] as const;

  switch (service) {
    case "roof-repair":            return getRoofRepairCityPageContent(...p);
    case "roof-replacement":       return getRoofReplacementCityPageContent(...p);
    case "storm-damage-repair":    return getStormDamageRepairCityPageContent(...p);
    case "roof-inspection":        return getRoofInspectionCityPageContent(...p);
    case "metal-roofing":          return getMetalRoofingCityPageContent(...p);
    case "flat-roof-repair":       return getFlatRoofRepairCityPageContent(...p);
    case "gutter-installation":    return getGutterInstallationCityPageContent(...p);
    case "emergency-roof-repair":  return getEmergencyRoofRepairCityPageContent(...p);
    default:                       return getRoofRepairCityPageContent(...p);
  }
}
