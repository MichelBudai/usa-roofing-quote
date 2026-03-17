import type { ServiceSlug } from "./data";
import { getCurrentSiteConfig } from "./getSiteConfig";
import stateMetadataJson from "../data/state_metadata.json";

interface StateMetadata {
  cityCount: number;
  pctPre1980: number | null;
  avgMedianYear: number | null;
  avgHomeownership: number | null;
  topCities: { name: string; population: number }[];
}

const stateMetadataMap = stateMetadataJson as Record<string, StateMetadata>;

export interface StatePageContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSub: string;
  trustBullets: string[];
  intro: {
    h2: string;
    paragraphs: string[];
    ctaText: string;
  };
  why: {
    h2: string;
    points: { h3: string; text: string }[];
  };
  services: {
    h2: string;
    intro: string;
    items: { slug: ServiceSlug; title: string; description: string; costRange: string }[];
  };
  cityIntro: {
    h2: string;
    paragraph: string;
    ctaText: string;
  };
  faq: {
    h2: string;
    items: { q: string; a: string }[];
  };
  closing: {
    h2: string;
    text: string;
    ctaText: string;
  };
  internalLinks: {
    otherStatesLabel: string;
    viewAllStatesLabel: string;
    otherServicesLabel: string;
  };
}

// ── Descriptions des services pour la grille état ─────────────────────────

const SERVICE_STATE_DESCRIPTIONS: Record<
  string,
  { description: string; costRange: string }
> = {
  "roof-repair": {
    description:
      "From minor leak fixes to shingle replacement, roof repair costs vary by damage type, materials, and local labor. Connect with a licensed roofer in your city for an accurate estimate before small damage becomes a costly problem.",
    costRange: "$300 – $1,500",
  },
  "roof-replacement": {
    description:
      "Full roof replacement is one of the largest home investments. Costs depend on roof size, materials (asphalt, metal, tile), pitch, and local permit requirements. A licensed roofer assesses your roof and gives you a realistic budget.",
    costRange: "$8,000 – $25,000",
  },
  "storm-damage-repair": {
    description:
      "Storm, hail, and wind damage require fast assessment to prevent interior water damage. Most homeowner insurance policies cover sudden storm damage — licensed roofers assist with the claims process at no extra charge.",
    costRange: "$500 – $15,000",
  },
  "roof-inspection": {
    description:
      "A professional roof inspection identifies damage, estimates remaining life, and documents condition for insurance or real estate purposes. Free inspections available — get a written report with photos at no obligation.",
    costRange: "FREE",
  },
  "metal-roofing": {
    description:
      "Metal roofing lasts 40–70 years, resists fire and wind, and can lower energy costs. Standing seam and metal shingle options available for residential and commercial properties. Costs vary by profile and local labor.",
    costRange: "$10,000 – $30,000",
  },
  "flat-roof-repair": {
    description:
      "Flat roof repair and replacement for TPO, EPDM, and modified bitumen systems. Ponding water and membrane damage are the most common issues. A licensed specialist assesses your system and recommends repair vs. replacement.",
    costRange: "$400 – $8,000",
  },
  "gutter-installation": {
    description:
      "Gutters protect your roof, foundation, and landscaping from water damage. New installation, replacement, and gutter guard installation available. Proper sizing and slope prevent overflow and ice dam formation.",
    costRange: "$600 – $2,400",
  },
  "emergency-roof-repair": {
    description:
      "Active leaks, storm damage, and fallen debris require same-day emergency response. Emergency tarping stops interior water damage within hours. Licensed roofers available 7 days a week for urgent roof situations.",
    costRange: "$200 – $2,000 + emergency premium",
  },
};

const ROOFING_LABELS: Record<string, string> = {
  "roof-repair":           "Roof Repair Quote",
  "roof-replacement":      "Roof Replacement Quote",
  "storm-damage-repair":   "Storm Damage Repair Quote",
  "roof-inspection":       "Free Roof Inspection",
  "metal-roofing":         "Metal Roofing Quote",
  "flat-roof-repair":      "Flat Roof Repair Quote",
  "gutter-installation":   "Gutter Installation Quote",
  "emergency-roof-repair": "Emergency Roof Repair",
};

// ── Contexte climatique par état ──────────────────────────────────────────

const STATE_ROOFING_CONTEXT: Record<string, { risk: string; season: string; permit: string }> = {
  alabama:        { risk: "severe storms, hail, hurricane remnants",      season: "March–October peak, year-round storm repairs",         permit: "State licensing required. County permits for replacements." },
  alaska:         { risk: "extreme snow loads, ice dams, freeze-thaw",    season: "May–September compressed season",                      permit: "Municipal permits required. Varies significantly by location." },
  arizona:        { risk: "extreme heat UV degradation, monsoon hail",    season: "October–April ideal, summer scheduling around storms",  permit: "ROC license required. Permits for all replacements." },
  arkansas:       { risk: "hail, tornado, ice storms",                    season: "Year-round, avoid April–May storm peak",               permit: "State contractor license. Local building permits required." },
  california:     { risk: "wildfire exposure, heavy rain, seismic zones", season: "Year-round SoCal, Nov–Mar rain limits NorCal",          permit: "CSLB C-39 license. Permits mandatory statewide." },
  colorado:       { risk: "nation-leading hail losses, snow load",        season: "May–September hail peak along Front Range",            permit: "State licensing + local permits. Post-hail inspection required." },
  connecticut:    { risk: "nor'easters, ice dams, coastal wind",          season: "April–October, winter emergency response",             permit: "Licensed HIC contractor. Building permits for replacements." },
  delaware:       { risk: "nor'easters, tropical storms, humidity",       season: "Year-round feasible, peak April–October",              permit: "Licensed contractor. Permits for replacements." },
  florida:        { risk: "hurricane, high wind, humidity, mold",         season: "Year-round, hurricane season June–November critical",   permit: "CC/CCC license. Permits mandatory. Wind mitigation reports." },
  georgia:        { risk: "hail, wind, tropical storms, humidity",        season: "March–September peak storm season",                    permit: "State contractor license. Atlanta strict inspection protocols." },
  hawaii:         { risk: "UV, heavy rain, trade winds, salt air",        season: "Year-round, rainy side varies by island",              permit: "Licensed contractor. Permits for all roofing work." },
  idaho:          { risk: "snow load, ice dams, spring moisture",         season: "May–October mountain areas, longer in valleys",        permit: "Licensed contractor. Building permits vary by municipality." },
  illinois:       { risk: "hail, ice dams, snow load, wind",              season: "April–October, Chicago wind loads year-round",         permit: "Licensed contractor. Chicago strict code enforcement." },
  indiana:        { risk: "hail, tornado, ice dams, snow",                season: "May–October peak, ice dam repair winter/spring",       permit: "Licensed contractor. County permits vary." },
  iowa:           { risk: "hail belt, blizzard snow load, tornado",       season: "May–October, spring storm damage repairs common",      permit: "Licensed contractor. Building permits required." },
  kansas:         { risk: "tornado alley, very high hail frequency",      season: "April–June severe weather peak",                       permit: "Licensed contractor. Post-storm inspection requirements." },
  kentucky:       { risk: "ice storms, hail, tornado western KY",         season: "May–October peak, ice storm repairs Dec–Feb",          permit: "Licensed contractor. Local building permits required." },
  louisiana:      { risk: "hurricane, tropical storm, extreme humidity",  season: "Year-round, hurricane season June–November",           permit: "Licensed contractor. Post-Katrina wind resistance codes." },
  maine:          { risk: "snow load, ice dams, coastal wind",            season: "May–October, ice dam repair winter emergency",         permit: "Licensed contractor. Municipal permits required." },
  maryland:       { risk: "nor'easters, tropical storms, hail",           season: "April–October, nor'easter response Nov–Mar",           permit: "Licensed HIC contractor. County requirements vary." },
  massachusetts:  { risk: "nor'easters, ice dams, heavy snow",            season: "May–October, ice dam season Jan–March busiest",        permit: "Licensed construction supervisor. Building permits statewide." },
  michigan:       { risk: "ice dams, lake-effect snow, hail",             season: "April–October, ice dam repairs Dec–March",             permit: "Licensed contractor. Building permits required." },
  minnesota:      { risk: "extreme ice dams, heavy snow, hail",           season: "May–October compressed, book early",                   permit: "Licensed contractor. Hennepin/Ramsey specific protocols." },
  mississippi:    { risk: "hurricane, tropical storm, tornado, humidity", season: "Year-round, hurricane season dominates June–Nov",       permit: "Licensed contractor. Post-Katrina wind resistance codes." },
  missouri:       { risk: "tornado, hail, straight-line wind",            season: "May–October peak, April–June severe weather",          permit: "Licensed contractor. STL/KC inspection requirements." },
  montana:        { risk: "heavy snow loads, hail, temperature extremes", season: "May–September compressed, limited contractors",        permit: "Licensed contractor. Municipal requirements vary." },
  nebraska:       { risk: "hail belt, tornado, blizzard",                 season: "May–August hail peak, year-round repairs",             permit: "Licensed contractor. Omaha post-hail protocols." },
  nevada:         { risk: "extreme UV, heat degradation, monsoon hail",   season: "Year-round, monsoon July–September reveals damage",     permit: "C-15 license required. Clark County specific requirements." },
  "new-hampshire":{ risk: "ice dams, nor'easters, heavy snow",            season: "May–October, ice dam repairs winter emergency",        permit: "Licensed contractor. Town requirements vary." },
  "new-jersey":   { risk: "nor'easters, tropical storms, hail",           season: "April–October, nor'easter response Nov–Mar",           permit: "HIC registration. Permits statewide." },
  "new-mexico":   { risk: "monsoon hail, UV, high desert heat",           season: "October–June ideal, monsoon July–Sept hail risk",      permit: "GB98 license. Building permits required." },
  "new-york":     { risk: "nor'easters, lake-effect snow, tropical storms", season: "May–October, NYC strict year-round protocols",       permit: "Licensed HIC. NYC strict permits. Upstate varies by county." },
  "north-carolina": { risk: "hurricane, tropical storm, hail, ice storms", season: "Year-round, hurricane June–Nov dominant concern",     permit: "Licensed contractor. County inspection requirements vary." },
  "north-dakota": { risk: "blizzard, extreme cold, snow load, hail",      season: "May–September compressed season",                      permit: "Licensed contractor. Municipal permits required." },
  ohio:           { risk: "ice dams, lake-effect snow, hail, tornado",    season: "May–October, ice dam repairs Dec–March",               permit: "Licensed contractor. Columbus/Cleveland/Cincinnati protocols." },
  oklahoma:       { risk: "tornado alley, very high hail, straight-line wind", season: "March–June severe weather peak, post-storm demand high", permit: "Licensed contractor. Local inspection requirements." },
  oregon:         { risk: "moss/algae, heavy Pacific rain, storms",       season: "June–September dry window, emergency repairs year-round", permit: "CCB license. Portland metro specific requirements." },
  pennsylvania:   { risk: "ice dams, snow load, nor'easters",             season: "April–October, ice dam repairs winter/spring",         permit: "Licensed HIC. Philadelphia strict inspections." },
  "rhode-island": { risk: "nor'easters, coastal wind, tropical storms",   season: "May–October, year-round emergency response needed",    permit: "Licensed contractor. Municipal requirements vary." },
  "south-carolina": { risk: "hurricane, tropical storm, humidity, hail", season: "Year-round, hurricane June–Nov, spring storms March–May", permit: "Licensed contractor. Coastal wind resistance requirements." },
  "south-dakota": { risk: "hail, blizzard, snow load",                   season: "May–September, book contractors early",                permit: "Licensed contractor. Municipal requirements vary." },
  tennessee:      { risk: "hail, tornado, ice storms",                    season: "May–October, ice storm repairs Dec–Feb",               permit: "Licensed contractor. Nashville/Memphis inspection requirements." },
  texas:          { risk: "nation-highest hail losses, hurricane coast, extreme heat", season: "March–October hail peak, April–June most active", permit: "Licensed contractor. DFW/Houston high post-hail volumes." },
  utah:           { risk: "snow load, hail, heat degradation southern UT", season: "May–October mountain, April–November Wasatch Front",  permit: "Licensed contractor. Salt Lake/Utah County protocols." },
  vermont:        { risk: "snow load, ice dams, nor'easters",             season: "May–October compressed, ice dam repairs winter",       permit: "Licensed contractor. Town requirements vary." },
  virginia:       { risk: "nor'easters, tropical storms, hail",           season: "April–October, hurricane season June–Nov coastal",     permit: "Class A/B/C license. NOVA high inspection volumes." },
  washington:     { risk: "moss/algae west, snow load east, Pacific storms", season: "June–September west, May–October east",             permit: "RCW licensed. Seattle specific inspection requirements." },
  "west-virginia":{ risk: "snow load, ice, severe storms",                season: "May–October, winter storm repairs active",             permit: "Licensed contractor. County requirements vary." },
  wisconsin:      { risk: "ice dams, lake-effect snow, hail",             season: "April–October, ice dam repairs Dec–March",             permit: "Licensed contractor. Milwaukee/Madison protocols." },
  wyoming:        { risk: "snow load, high wind, hail eastern WY",        season: "May–September compressed, very limited contractors",   permit: "Licensed contractor. Municipal requirements vary." },
};

const DEFAULT_CONTEXT = {
  risk:   "storm damage, wind, moisture",
  season: "Year-round roofing feasible. Schedule major projects during dry season.",
  permit: "A licensed roofing contractor handles all permits as part of your quote.",
};

// ── Export principal ───────────────────────────────────────────────────────

export function getStatePageContent(
  serviceSlug: string,
  serviceLabel: string,
  stateName: string,
  stateAbbr: string,
  stateSlug: string
): StatePageContent {
  const serviceLower = serviceLabel.toLowerCase();
  const serviceClean = serviceLower.replace(/\s*quote\s*$/i, "").trim();

  const stateMeta = stateMetadataMap[stateSlug] ?? null;
  const ctx       = STATE_ROOFING_CONTEXT[stateSlug] ?? DEFAULT_CONTEXT;
  const topCityNames = stateMeta?.topCities.slice(0, 3).map((c) => c.name).join(", ") ?? "";

  const slugs = [
    "roof-repair",
    "roof-replacement",
    "storm-damage-repair",
    "roof-inspection",
    "metal-roofing",
    "flat-roof-repair",
    "gutter-installation",
    "emergency-roof-repair",
  ] as ServiceSlug[];

  return {
    metaTitle: `${serviceLabel} in ${stateName} | Free Quotes by City | Licensed Roofers`,
    metaDescription: `Get free ${serviceClean} quotes from licensed roofers in ${stateName}. ${ctx.risk} — compare estimates by city. No obligation. Licensed & insured.`,

    heroTitle: `Free ${serviceLabel} in ${stateName}`,
    heroSub: `Connect with licensed ${stateName} roofers in your city — free, no-obligation estimate for any roofing job, big or small. ${ctx.risk} experts ready now.`,

    trustBullets: [
      `Licensed & insured ${stateAbbr} roofers`,
      "Free inspection & estimate, zero commitment",
      `Same-day or next-day availability in most ${stateName} cities`,
      "Upfront pricing before any work begins",
    ],

    intro: {
      h2: `Get an Honest ${serviceLabel} from a${/^[AEIOU]/i.test(stateName) ? "n" : ""} ${stateName}-Licensed Roofer`,
      paragraphs: [
        `Roofing costs in ${stateName} vary more than most homeowners expect. Labor rates, permit fees, and material costs all shift by city and county. The only quote that matters is one from a roofer who knows your area — not a national estimate that may be off by thousands.`,
        `${stateName} roofing risks include: ${ctx.risk}. ${ctx.season}`,
        ...(stateMeta?.pctPre1980
          ? [`${stateMeta.pctPre1980}% of ${stateName} cities have a median home build year before 1980 — meaning a large share of the housing stock has aging shingles, deteriorated flashing, and gutters past their expected service life. Getting a quote before a failure happens is significantly cheaper than emergency repair.`]
          : []),
        ...(stateMeta?.avgHomeownership
          ? [`With an average homeownership rate of ${stateMeta.avgHomeownership}% across ${stateName}, most residents have a direct financial stake in protecting their roof. A free inspection and quote takes less than a day.`]
          : []),
        `Select your ${stateName} city below and connect with a licensed local roofer for an accurate, no-obligation estimate.`,
      ],
      ctaText: "Select Your City Below",
    },

    why: {
      h2: `Why ${stateName} Homeowners Get a Roofing Quote First`,
      points: [
        {
          h3: `${stateName} Roofing Permits Vary by County`,
          text: `Most significant roofing work in ${stateName} requires a permit. ${ctx.permit} There are no surprises on the final invoice when permit costs are included upfront.`,
        },
        {
          h3: `${stateName} Weather Creates Urgent Roofing Needs`,
          text: `${stateName} roofing risks: ${ctx.risk}. ${ctx.season} Getting a quote before damage compounds is the difference between a $500 repair and a $10,000+ emergency — and between a covered insurance claim and a denied one.`,
        },
        {
          h3: `${stateName} Labor Rates Vary by City`,
          text: `Roofing labor costs in ${stateName} are not consistent across the state. ${topCityNames ? `Metro areas like ${topCityNames} trend higher than rural counties.` : "Metro areas trend higher than rural counties."} A quote from a roofer in your specific city gives you the real number — not a state average that may be off by $2,000 or more.`,
        },
      ],
    },

    services: {
      h2: `Roofing Services Available for Quotes Across ${stateName}`,
      intro: "Select your city to get a local quote on any of the roofing services below.",
      items: slugs.map((slug) => {
        const { description, costRange } = SERVICE_STATE_DESCRIPTIONS[slug] ?? {
          description: `Licensed ${stateName} roofers available for ${slug} quotes.`,
          costRange: "Get a free quote",
        };
        const title = `${ROOFING_LABELS[slug] ?? slug} — ${stateName}`;
        return { slug, title, description, costRange };
      }),
    },

    cityIntro: {
      h2: `Find a ${serviceLabel} in Your ${stateName} City`,
      paragraph: `Licensed roofers are available for free quotes in ${stateMeta?.cityCount ?? "hundreds of"} ${stateName} cities${topCityNames ? `, including ${topCityNames}` : ""}. Select your city below to get an estimate specific to your area.`,
      ctaText: "Select Your City",
    },

    faq: {
      h2: `${stateName} Roofing Quote FAQ`,
      items: [
        {
          q: `How much does a roof replacement cost in ${stateName}?`,
          a: `Roof replacement in ${stateName} typically ranges from $8,000 to $25,000 for a standard home. Asphalt shingles run $3–5/sq ft; metal roofing $7–14/sq ft. Factors include roof size, pitch, materials, and local labor rates. Select your city for a local estimate.`,
        },
        {
          q: `Do I need a permit for roofing work in ${stateName}?`,
          a: `Yes, for most significant roofing work. ${ctx.permit} A licensed ${stateName} roofer handles all permits and inspections and includes costs in your quote.`,
        },
        {
          q: `How do I find a licensed roofer in ${stateName}?`,
          a: `Select your city on this page to connect with licensed, insured roofers familiar with local building codes and permit requirements.`,
        },
        {
          q: `Does homeowner insurance cover roof damage in ${stateName}?`,
          a: `Most standard homeowner policies in ${stateName} cover sudden damage from storms, hail, wind, and fire. Normal wear and tear is excluded. Our contractors assist with insurance claims at no extra charge.`,
        },
        {
          q: `What roofing problems are most common in ${stateName} homes?`,
          a: `In ${stateName}, the most common issues are: ${ctx.risk}. ${stateMeta?.pctPre1980 ? `With ${stateMeta.pctPre1980}% of homes built before 1980, aging shingles and deteriorated flashing are also widespread.` : "Getting a free inspection is the fastest way to identify issues before they compound."}`,
        },
        {
          q: `Can I get a same-day roofing quote in ${stateName}?`,
          a: `In most ${stateName} cities, same-day phone quotes and free inspections are available within 24–48 hours. Emergency storm damage response is often same-day. Select your city to check availability.`,
        },
      ],
    },

    closing: {
      h2: `Ready to Find a Roofer in Your ${stateName} City?`,
      text: `Homeowners across ${stateName} get free roofing quotes through this page every day. Select your city, connect with a licensed local roofer, and get an honest estimate before spending a dollar. No forms. No wait. No obligation.`,
      ctaText: `Select Your ${stateName} City`,
    },

    internalLinks: {
      otherStatesLabel: "Other roofing quote states",
      viewAllStatesLabel: "View All States",
      otherServicesLabel: `Other roofing services in ${stateName}`,
    },
  };
}
