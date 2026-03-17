/**
 * Full service page content for roofing — usa-roofing-quote.com
 * Structure : FullServiceContent (identique à pest-control-content.ts)
 */
import type { FullServiceContent } from "@/lib/fullServiceContentTypes";

export const ROOFING_FULL_CONTENT: Record<string, FullServiceContent> = {
  "roof-repair": {
    meta: {
      title: "Roof Repair Quote | Free Estimates from Licensed Local Roofers",
      description: "Get free roof repair quotes from licensed roofers near you. Leaks, shingles, flashing & emergency repairs. Upfront pricing, no obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Roof Repair Quote" }],
    hero: {
      h1: "Free Roof Repair Quotes from Licensed Local Roofers",
      sub: "Connect with licensed roofers in your city — free, no-obligation estimate for leaks, shingles, flashing, and emergency repairs.",
      trustBar: ["Licensed & insured roofers", "Free estimates", "Same-day availability", "Upfront pricing"],
      cta: "Get Your Free Quote",
    },
    intro: {
      h2: "Get an Honest Roof Repair Estimate Before Spending a Dollar",
      paragraphs: [
        "Roof repair costs vary significantly by city, damage type, and roof pitch. A small leak that costs $400 to fix today can cause $5,000+ in interior water damage within weeks if ignored.",
        "A free quote from a licensed local roofer gives you a realistic budget before any work begins. Select your state and city below.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "Why Get a Roof Repair Quote First",
      items: [
        { h3: "Repair vs. Replace Decision", p: "A licensed roofer tells you honestly whether your roof warrants repair or whether continued repairs are costing more than replacement over 3–5 years." },
        { h3: "Insurance Documentation", p: "Storm and hail damage is often covered by homeowner insurance. A licensed roofer documents the damage and assists with your claim at no extra charge." },
        { h3: "Upfront Permit Costs", p: "Most significant roof repairs require a building permit. A licensed roofer factors permit costs into your quote upfront — no surprises on the invoice." },
      ],
    },
    services: {
      h2: "Roof Repair Services Available Nationwide",
      intro: "Select your state to find licensed roofers in your city.",
      items: [
        { h3: "Shingle Replacement", description: "Missing, cracked, or granule-loss shingles repaired or replaced with matching materials.", range: "$150 – $600", linkLabel: "Get a quote", href: "/roof-repair" },
        { h3: "Flashing Repair", description: "Chimney, vent, skylight, and valley flashing re-sealed or replaced to stop leaks.", range: "$200 – $500", linkLabel: "Get a quote", href: "/roof-repair" },
        { h3: "Leak Diagnosis & Repair", description: "Professional leak tracing and repair — finding the source accurately is the most important step.", range: "$300 – $900", linkLabel: "Get a quote", href: "/roof-repair" },
        { h3: "Ridge Cap & Vent Repair", description: "Ridge cap replacement and ridge vent repair to maintain weatherproofing and ventilation.", range: "$200 – $800", linkLabel: "Get a quote", href: "/roof-repair" },
      ],
    },
    stateGridIntro: {
      h2: "Find a Roof Repair Quote in Your State",
      paragraphs: ["Select your state below to find licensed roofers in your city. Free estimates, no obligation."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How It Works",
      steps: [
        { title: "Select Your State & City", text: "Choose your location to connect with licensed local roofers who know your area." },
        { title: "Get a Free Estimate", text: "A licensed roofer assesses your damage and gives you an upfront quote before any work begins." },
        { title: "Decide With No Pressure", text: "Compare options and decide on your timeline. No obligation, no commitment." },
      ],
    },
    faq: {
      h2: "Roof Repair FAQ",
      items: [
        { q: "How much does roof repair cost?", a: "Roof repair typically costs $300–$1,500 depending on damage type, roof pitch, and local labor rates. Minor shingle replacement runs $150–$400; flashing repair $200–$500; leak diagnosis and repair $300–$900." },
        { q: "Does homeowner insurance cover roof repair?", a: "Most policies cover sudden damage from storms, hail, wind, and falling debris. Normal wear and tear is excluded. A licensed roofer can document storm damage and assist with your claim." },
        { q: "How do I know if I need repair or replacement?", a: "If your roof is under 15 years old with localized damage, repair is almost always the right call. If it's 20+ years old with widespread issues, a replacement quote is worth getting. A licensed roofer gives you an honest assessment." },
        { q: "How long does roof repair take?", a: "Most roof repairs take 2–8 hours for a licensed crew. Complex repairs involving multiple areas may take a full day. Emergency tarping can be done within hours of your call." },
      ],
    },
    closing: {
      h2: "Ready to Get Your Free Roof Repair Quote?",
      paragraphs: ["Select your state below. Connect with a licensed local roofer. Get an honest estimate before spending a dollar. No forms. No wait. No obligation."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Roof Replacement Quote", href: "/roof-replacement" },
        { label: "Storm Damage Repair", href: "/storm-damage-repair" },
        { label: "Free Roof Inspection", href: "/roof-inspection" },
        { label: "Emergency Roof Repair", href: "/emergency-roof-repair" },
      ],
    },
  },

  "roof-replacement": {
    meta: {
      title: "Roof Replacement Quote | Free Estimates from Licensed Local Roofers",
      description: "Get free roof replacement quotes from licensed roofers. Asphalt, metal & tile. Insurance claims assistance. Upfront pricing, no obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Roof Replacement Quote" }],
    hero: {
      h1: "Free Roof Replacement Quotes from Licensed Local Roofers",
      sub: "Full roof replacement — asphalt shingles, metal roofing, and tile. Manufacturer warranties. Insurance claims assistance. Honest estimates.",
      trustBar: ["Licensed & insured roofers", "Free estimates", "Manufacturer warranties", "Insurance claims help"],
      cta: "Get Your Free Quote",
    },
    intro: {
      h2: "Get a Real Roof Replacement Estimate Before Committing",
      paragraphs: [
        "Roof replacement costs $8,000–$25,000 for most homes — and the right material choice affects both upfront cost and total cost of ownership for the next 20–50 years.",
        "A free quote from a licensed local roofer gives you material options, a realistic budget, and honest repair-vs-replace guidance. Select your state and city below.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "Why Get a Replacement Quote First",
      items: [
        { h3: "Material Options & True Cost", p: "Asphalt shingles, metal, and tile have very different upfront costs and lifespans. A licensed roofer explains total cost of ownership, not just the sticker price." },
        { h3: "Insurance May Cover It", p: "Storm and hail damage can trigger a full replacement covered by homeowner insurance. A licensed roofer documents the damage and coordinates with your adjuster." },
        { h3: "Financing Is Often Available", p: "Many licensed roofing contractors offer 0% financing options. A free quote call surfaces these options upfront so cost doesn't delay protecting your home." },
      ],
    },
    services: {
      h2: "Roof Replacement Options Available Nationwide",
      intro: "Select your state to find licensed roofers offering these replacement systems in your city.",
      items: [
        { h3: "Asphalt Shingle Replacement", description: "The most common replacement — 20–30 year lifespan, broad color options, cost-effective. Architectural shingles available at modest premium.", range: "$8,000 – $15,000", linkLabel: "Get a quote", href: "/roof-replacement" },
        { h3: "Metal Roof Installation", description: "Standing seam and metal shingle systems — 40–70 year lifespan, fire resistant, energy efficient. Higher upfront, lower long-term cost.", range: "$15,000 – $30,000", linkLabel: "Get a quote", href: "/roof-replacement" },
        { h3: "Tile Roof Replacement", description: "Clay and concrete tile — 50+ year lifespan, premium aesthetics, excellent durability in hot and coastal climates.", range: "$18,000 – $40,000", linkLabel: "Get a quote", href: "/roof-replacement" },
        { h3: "Flat Roof Replacement", description: "TPO, EPDM, and modified bitumen systems for low-slope and flat roofs — commercial and residential.", range: "$4,000 – $12,000", linkLabel: "Get a quote", href: "/roof-replacement" },
      ],
    },
    stateGridIntro: {
      h2: "Find a Roof Replacement Quote in Your State",
      paragraphs: ["Select your state below to find licensed roofers in your city. Free estimates, no obligation."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How It Works",
      steps: [
        { title: "Select Your State & City", text: "Choose your location to connect with licensed local roofers who know your area and local permit requirements." },
        { title: "Get a Free Estimate", text: "A licensed roofer inspects your roof, reviews material options, and gives you an upfront quote — including permit and disposal costs." },
        { title: "Decide With No Pressure", text: "Compare material options and financing. Decide on your timeline. No obligation, no commitment." },
      ],
    },
    faq: {
      h2: "Roof Replacement FAQ",
      items: [
        { q: "How much does roof replacement cost?", a: "Roof replacement costs $8,000–$25,000 for most homes. Asphalt shingles: $8,000–$15,000. Metal roofing: $15,000–$30,000. Tile: $18,000–$40,000. Final cost depends on roof size, pitch, materials, and local labor." },
        { q: "How long does roof replacement take?", a: "Most residential roof replacements take 1–3 days. Large or complex roofs may take up to 5 days. Your contractor provides a completion timeline before work starts." },
        { q: "What warranty comes with a new roof?", a: "Material warranties from major manufacturers run 25–50 years on premium shingles. Workmanship warranties from licensed contractors typically run 5–10 years." },
        { q: "Does insurance cover roof replacement?", a: "Most homeowner policies cover sudden storm, hail, and wind damage. A licensed roofer documents the damage and assists with your claim at no extra charge." },
      ],
    },
    closing: {
      h2: "Ready to Get Your Free Roof Replacement Quote?",
      paragraphs: ["Select your state below. Connect with a licensed local roofer. Get an honest estimate — materials, labor, timeline, warranty — before spending a dollar."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Roof Repair Quote", href: "/roof-repair" },
        { label: "Storm Damage Repair", href: "/storm-damage-repair" },
        { label: "Metal Roofing Quote", href: "/metal-roofing" },
        { label: "Free Roof Inspection", href: "/roof-inspection" },
      ],
    },
  },

  "storm-damage-repair": {
    meta: {
      title: "Storm Damage Roof Repair | Free Inspection & Insurance Claims Help",
      description: "Free storm damage roof inspection. Hail, wind & emergency repair. Insurance claims assistance at no extra charge. Licensed roofers, no obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Storm Damage Repair Quote" }],
    hero: {
      h1: "Free Storm Damage Roof Inspection & Insurance Claims Help",
      sub: "Hail, wind, and emergency roof damage. Licensed contractors handle insurance documentation and adjuster coordination at no extra charge.",
      trustBar: ["Free inspection", "Insurance claims help", "Emergency tarping", "Licensed & insured"],
      cta: "Get Your Free Inspection",
    },
    intro: {
      h2: "Act Fast After Storm Damage — Insurance Windows Are Time-Limited",
      paragraphs: [
        "Most homeowner policies require storm damage claims to be filed within 1–2 years of the event. Hail damage is nearly always invisible from the ground but clearly documented on the roof surface.",
        "A free post-storm inspection from a licensed roofer tells you whether you have damage, whether it's covered by insurance, and what it will cost if not. Select your state and city below.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "Why Call a Licensed Roofer Immediately After a Storm",
      items: [
        { h3: "Hail Damage Is Invisible From the Ground", p: "What looks fine from the street often shows significant granule loss and impact marks on the roof surface. A professional inspection documents all damage with photos for your insurance claim." },
        { h3: "Emergency Tarping Stops Interior Damage", p: "If your roof has active penetrations, every day without protection risks drywall damage, insulation saturation, and mold growth. Emergency tarping can be done within hours of your call." },
        { h3: "You Have the Right to Choose Your Own Contractor", p: "Insurance company preferred contractors work for the insurer's interests. An independent licensed roofer works for you and can advocate for full coverage of your damage." },
      ],
    },
    services: {
      h2: "Storm Damage Services Available Nationwide",
      intro: "Select your state to find licensed storm damage contractors in your city.",
      items: [
        { h3: "Emergency Tarping", description: "Same-day emergency tarping to stop active water intrusion after storm damage.", range: "$200 – $500", linkLabel: "Get help now", href: "/storm-damage-repair" },
        { h3: "Hail Damage Assessment", description: "Professional inspection with photo documentation — required for insurance claims.", range: "FREE", linkLabel: "Schedule inspection", href: "/storm-damage-repair" },
        { h3: "Storm Damage Repair", description: "Shingle replacement, flashing repair, and structural repair after storm events.", range: "$500 – $8,000", linkLabel: "Get a quote", href: "/storm-damage-repair" },
        { h3: "Insurance-Covered Replacement", description: "Full roof replacement when storm damage meets the threshold for insurance coverage.", range: "Deductible only (if covered)", linkLabel: "Get assessed", href: "/storm-damage-repair" },
      ],
    },
    stateGridIntro: {
      h2: "Find Storm Damage Roof Help in Your State",
      paragraphs: ["Select your state below to find licensed storm damage contractors in your city. Free inspection, no obligation."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How It Works",
      steps: [
        { title: "Call for a Free Inspection", text: "A licensed contractor inspects your roof and documents all damage with photos — typically within 24–48 hours of your call." },
        { title: "Insurance Claim Assistance", text: "Your contractor coordinates with your insurance adjuster and advocates for full coverage of your damage." },
        { title: "Repair or Replacement", text: "Once the claim is approved, your contractor schedules and completes the work. Your out-of-pocket cost is typically only your deductible." },
      ],
    },
    faq: {
      h2: "Storm Damage Roof Repair FAQ",
      items: [
        { q: "Will insurance cover my storm roof damage?", a: "Most standard homeowner policies cover sudden damage from hail, wind, and falling debris. The key factors are whether the damage was caused by a covered event, your deductible, and your policy's ACV vs. RCV terms." },
        { q: "How quickly should I call after a storm?", a: "As soon as possible. Insurance claim windows are typically 1–2 years from the date of damage, but contractor availability fills quickly after major storm events. Calling within 1–2 weeks keeps all your options open." },
        { q: "What does hail damage look like on a roof?", a: "Hail damage appears as random impact marks with granule loss (circular bare spots) on asphalt shingles, and dented metal components (vents, flashing, ridge caps). It's nearly always invisible from the ground." },
        { q: "Is emergency tarping covered by insurance?", a: "Yes, in most cases. Emergency tarping costs are typically covered as part of your storm damage claim. A licensed contractor documents the tarping and includes it in the claim." },
      ],
    },
    closing: {
      h2: "Get Your Free Storm Damage Inspection Today",
      paragraphs: ["Don't wait — insurance windows are time-limited and interior damage compounds daily. Select your state below to connect with a licensed storm damage contractor in your city."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Roof Repair Quote", href: "/roof-repair" },
        { label: "Emergency Roof Repair", href: "/emergency-roof-repair" },
        { label: "Roof Replacement Quote", href: "/roof-replacement" },
        { label: "Free Roof Inspection", href: "/roof-inspection" },
      ],
    },
  },

  "roof-inspection": {
    meta: {
      title: "Free Roof Inspection | Written Report from Licensed Local Roofers",
      description: "Free roof inspection with written report and photos. Damage documentation, remaining life estimate. Licensed roofers, no obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Free Roof Inspection" }],
    hero: {
      h1: "Free Roof Inspection — Written Report with Photos",
      sub: "Licensed local roofers. Comprehensive inspection covering shingles, flashing, gutters, and attic. Written report with photos. No obligation.",
      trustBar: ["100% free inspection", "Written report with photos", "Licensed & insured", "No obligation"],
      cta: "Schedule Your Free Inspection",
    },
    intro: {
      h2: "A Free Annual Inspection Is the Most Cost-Effective Roof Maintenance Strategy",
      paragraphs: [
        "Issues caught at inspection stage — a cracked boot, a loose flashing section, a few missing shingles — cost $200–$600 to fix. The same issues, after water has penetrated insulation and drywall, cost $3,000–$10,000 to remediate.",
        "A free inspection from a licensed local roofer takes 30–60 minutes and delivers a written report with photos documenting current condition, any identified damage, and recommended repairs if any.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "When You Need a Roof Inspection",
      items: [
        { h3: "After Any Significant Storm", p: "Hail damage is nearly always invisible from the ground. A post-storm inspection within 60 days keeps your insurance claim options fully open." },
        { h3: "Before Buying or Selling a Home", p: "A written inspection report from a licensed contractor is essential for real estate transactions — buyers use it to negotiate; sellers use it to disclose accurately." },
        { h3: "Every 1–2 Years for Older Roofs", p: "Roofs 15+ years old benefit from annual inspections. Issues caught early are exponentially cheaper than emergency repairs or premature replacement." },
      ],
    },
    services: {
      h2: "What's Included in Your Free Inspection",
      intro: "A comprehensive inspection covers every visible component of your roofing system.",
      items: [
        { h3: "Shingle & Surface Condition", description: "Granule retention, curling, cracking, missing sections, and overall weathering assessment.", range: "Included", linkLabel: "Schedule inspection", href: "/roof-inspection" },
        { h3: "Flashing & Penetrations", description: "Chimney, pipe boots, skylights, and valley flashing — the most common sources of leaks.", range: "Included", linkLabel: "Schedule inspection", href: "/roof-inspection" },
        { h3: "Gutters & Drainage", description: "Gutter attachment, slope, drainage, and signs of granule accumulation indicating shingle wear.", range: "Included", linkLabel: "Schedule inspection", href: "/roof-inspection" },
        { h3: "Written Report with Photos", description: "Documented condition report with photos of any issues found — meets insurance and real estate standards.", range: "Included", linkLabel: "Schedule inspection", href: "/roof-inspection" },
      ],
    },
    stateGridIntro: {
      h2: "Schedule a Free Roof Inspection in Your State",
      paragraphs: ["Select your state below to find licensed roofers offering free inspections in your city."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How It Works",
      steps: [
        { title: "Schedule Your Free Inspection", text: "Select your state and city. A licensed local roofer schedules your inspection — typically within 24–48 hours." },
        { title: "30–60 Minute Inspection", text: "The roofer inspects all roof surfaces, flashing, gutters, and visible attic condition. Photos are taken of any issues found." },
        { title: "Written Report Delivered", text: "You receive a written report with photos documenting current condition, any identified damage, estimated remaining life, and recommended repairs if any." },
      ],
    },
    faq: {
      h2: "Roof Inspection FAQ",
      items: [
        { q: "Is the roof inspection really free?", a: "Yes, 100% free with no obligation. A licensed roofer inspects your roof, documents findings with photos, and provides a written report at no charge. You are never required to hire them for any repairs." },
        { q: "How often should I get my roof inspected?", a: "Every 1–2 years, and within 60 days after any significant storm. Homes with roofs 15+ years old benefit from annual inspections." },
        { q: "What does the written report include?", a: "Current condition of all shingle surfaces, flashing, gutters, and visible attic conditions. Photos of any issues found. Estimated remaining service life. Recommended repairs if any." },
        { q: "Can a roof inspection help with my insurance?", a: "Yes. A documented inspection report is essential for filing storm damage claims and can help dispute policy non-renewals based on roof condition." },
      ],
    },
    closing: {
      h2: "Schedule Your Free Roof Inspection Today",
      paragraphs: ["No forms. No waiting. No obligation. Select your state below to connect with a licensed local roofer who will inspect your roof and deliver a complete written report — completely free."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Roof Repair Quote", href: "/roof-repair" },
        { label: "Storm Damage Repair", href: "/storm-damage-repair" },
        { label: "Roof Replacement Quote", href: "/roof-replacement" },
        { label: "Emergency Roof Repair", href: "/emergency-roof-repair" },
      ],
    },
  },

  "metal-roofing": {
    meta: {
      title: "Metal Roofing Quote | Free Estimates from Licensed Metal Roofers",
      description: "Free metal roofing quotes. Standing seam, metal shingles & panel systems. 40–70 year lifespan. Licensed contractors, no obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Metal Roofing Quote" }],
    hero: {
      h1: "Free Metal Roofing Quotes from Licensed Local Contractors",
      sub: "Standing seam, metal shingles, and panel systems. 40–70 year lifespan. Fire resistant. Energy efficient. Honest estimates, no commitment.",
      trustBar: ["Licensed & insured", "40–70 year lifespan", "Manufacturer warranties", "Free estimates"],
      cta: "Get Your Free Metal Roofing Quote",
    },
    intro: {
      h2: "Metal Roofing — One Installation for the Life of Your Home",
      paragraphs: [
        "A properly installed standing seam metal roof lasts 40–70 years with minimal maintenance — eliminating the 20–25 year replacement cycle of asphalt shingles. Over 50 years, the total cost of ownership often favors metal.",
        "A free quote from a licensed metal roofing contractor gives you system options, accurate pricing, and an honest assessment of whether metal makes financial sense for your home.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "Why Homeowners Choose Metal Roofing",
      items: [
        { h3: "40–70 Year Lifespan", p: "One metal roof vs. 2–3 asphalt replacements over the same period. A $20,000 standing seam installation that lasts 50 years costs $400/year — comparable to or less than asphalt over the same period." },
        { h3: "Fire, Wind & Hail Resistance", p: "Metal roofing carries a Class A fire rating and wind resistance ratings up to 140+ mph. Many insurers offer premium discounts for metal roofing due to its superior resistance profile." },
        { h3: "Energy Savings", p: "Metal roofing reflects radiant heat, reducing summer cooling costs by 10–25% in most climates. Over decades, energy savings contribute significantly to the ROI calculation." },
      ],
    },
    services: {
      h2: "Metal Roofing Systems Available Nationwide",
      intro: "Select your state to find licensed metal roofing contractors in your city.",
      items: [
        { h3: "Standing Seam (Premium)", description: "Concealed fasteners, no exposed penetrations, 40–70 year lifespan. The premium metal roofing standard for residential installations.", range: "$15,000 – $30,000", linkLabel: "Get a quote", href: "/metal-roofing" },
        { h3: "Metal Shingles", description: "Traditional shingle aesthetics with metal durability. Compatible with most architectural styles. Lower cost than standing seam.", range: "$12,000 – $22,000", linkLabel: "Get a quote", href: "/metal-roofing" },
        { h3: "Exposed Fastener Panels", description: "The most affordable metal roofing option. Well-suited for outbuildings, agricultural, and budget-conscious residential applications.", range: "$10,000 – $16,000", linkLabel: "Get a quote", href: "/metal-roofing" },
        { h3: "Metal Over Existing Shingles", description: "In many cases, metal can be installed over one layer of existing asphalt, saving the tear-off cost.", range: "Varies — ask contractor", linkLabel: "Get a quote", href: "/metal-roofing" },
      ],
    },
    stateGridIntro: {
      h2: "Find a Metal Roofing Quote in Your State",
      paragraphs: ["Select your state below to find licensed metal roofing contractors in your city. Free estimates, no obligation."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How It Works",
      steps: [
        { title: "Select Your State & City", text: "Connect with licensed metal roofing contractors who know your local climate, codes, and permit requirements." },
        { title: "Get a System-Specific Quote", text: "A licensed contractor reviews your roof, recommends the right system, and gives you a detailed quote — materials, labor, permit, and warranty." },
        { title: "Decide With Full Information", text: "Compare system options and total cost of ownership. Decide on your timeline. No obligation, no commitment." },
      ],
    },
    faq: {
      h2: "Metal Roofing FAQ",
      items: [
        { q: "Is metal roofing noisy in rain?", a: "No — when installed over solid decking with standard insulation and underlayment, metal roofs are no louder than asphalt during rain. The 'noisy tin roof' perception applies only to exposed metal over open framing." },
        { q: "Will metal roofing rust?", a: "Modern metal roofing uses protective coatings (Galvalume, Galvanized, or painted Kynar/PVDF) that prevent rust for decades. Premium systems carry 40-year coating warranties." },
        { q: "Can I install metal roofing over existing shingles?", a: "In many cases, yes. Metal roofing can be installed over one layer of existing asphalt shingles, saving the tear-off cost. Local building codes govern this practice." },
        { q: "How long does metal roofing installation take?", a: "Most residential metal roof installations take 2–5 days. Standing seam systems are more labor-intensive than panel systems." },
      ],
    },
    closing: {
      h2: "Ready to Get Your Free Metal Roofing Quote?",
      paragraphs: ["Select your state below. Connect with a licensed local metal roofing contractor. Get an honest estimate — system options, materials, labor, and warranty — before spending a dollar."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Roof Replacement Quote", href: "/roof-replacement" },
        { label: "Roof Repair Quote", href: "/roof-repair" },
        { label: "Free Roof Inspection", href: "/roof-inspection" },
        { label: "Gutter Installation Quote", href: "/gutter-installation" },
      ],
    },
  },

  "flat-roof-repair": {
    meta: {
      title: "Flat Roof Repair Quote | TPO, EPDM & More | Free Estimates",
      description: "Free flat roof repair quotes. TPO, EPDM, modified bitumen & built-up roofing. Licensed flat roof specialists. Upfront pricing, no obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Flat Roof Repair Quote" }],
    hero: {
      h1: "Free Flat Roof Repair Quotes from Licensed Specialists",
      sub: "TPO, EPDM, modified bitumen, and built-up systems. Honest repair vs. replace assessment. No commitment.",
      trustBar: ["Licensed flat roof specialists", "Repair vs. replace assessment", "Free estimates", "No obligation"],
      cta: "Get Your Free Flat Roof Quote",
    },
    intro: {
      h2: "Flat Roof Issues Caught Early Cost a Fraction of What They Cost Later",
      paragraphs: [
        "A failed seam or small puncture costs $400–$800 to fix professionally. The same issue, after months of water intrusion through the insulation layer, can require full membrane replacement plus interior remediation: $8,000–$20,000+.",
        "A free inspection from a licensed flat roofing specialist determines whether your system needs repair, recoating, or replacement — and gives you an honest budget for each option.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "Why Flat Roof Issues Require a Specialist",
      items: [
        { h3: "Flat Roofs Fail Silently", p: "Unlike pitched roofs where water runs to the ceiling, flat roof leaks migrate horizontally through the insulation and appear at interior locations far from the actual penetration. Accurate diagnosis requires an experienced specialist." },
        { h3: "System Type Determines Repair Method", p: "TPO, EPDM, modified bitumen, and built-up roofing each require different repair techniques and materials. Using the wrong approach can void manufacturer warranties and accelerate failure." },
        { h3: "Ponding Water Accelerates Deterioration", p: "Standing water exceeding 48 hours compresses insulation, stresses membranes, and causes premature failure. A licensed specialist diagnoses the drainage cause, not just the symptom." },
      ],
    },
    services: {
      h2: "Flat Roof Services Available Nationwide",
      intro: "Select your state to find licensed flat roofing specialists in your city.",
      items: [
        { h3: "TPO Repair & Replacement", description: "The current standard for commercial and residential flat roofing. Reflective, weldable seams, excellent energy performance.", range: "$400 – $10,000", linkLabel: "Get a quote", href: "/flat-roof-repair" },
        { h3: "EPDM Repair & Replacement", description: "Proven rubber membrane system — durable, flexible, and cost-effective. Excellent cold-climate performance.", range: "$400 – $8,000", linkLabel: "Get a quote", href: "/flat-roof-repair" },
        { h3: "Modified Bitumen Repair", description: "Two-ply system with excellent puncture resistance. Common on residential low-slope roofs built before 2000.", range: "$400 – $6,000", linkLabel: "Get a quote", href: "/flat-roof-repair" },
        { h3: "Ponding Water Correction", description: "Drainage improvement, re-sloping, and tapered insulation to eliminate standing water and prevent membrane deterioration.", range: "$1,500 – $6,000", linkLabel: "Get a quote", href: "/flat-roof-repair" },
      ],
    },
    stateGridIntro: {
      h2: "Find a Flat Roof Specialist in Your State",
      paragraphs: ["Select your state below to find licensed flat roofing specialists in your city. Free estimates, no obligation."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How It Works",
      steps: [
        { title: "Free Inspection & Assessment", text: "A licensed flat roofing specialist inspects your membrane, drainage, and penetrations — and gives you an honest repair vs. replace assessment." },
        { title: "Clear Recommendation", text: "You get a specific recommendation: repair, recoat, or replace — with a budget for each option so you can make an informed decision." },
        { title: "Decide With No Pressure", text: "Compare options and decide on your timeline. No obligation, no commitment." },
      ],
    },
    faq: {
      h2: "Flat Roof Repair FAQ",
      items: [
        { q: "How much does flat roof repair cost?", a: "Flat roof repair ranges from $400 for a minor membrane patch to $8,000+ for a full membrane replacement. The wide range reflects the variety of system types and damage extents. A free inspection gives you an accurate quote." },
        { q: "TPO vs. EPDM — which is better?", a: "Both are excellent choices. TPO is more reflective (better for warm climates), weldable (stronger seams), and currently more popular for new installations. EPDM is extremely durable and often lower cost. A licensed specialist advises based on your building type and climate." },
        { q: "What causes ponding water on flat roofs?", a: "Ponding is typically caused by inadequate slope design, blocked drains, insulation compression, or structural deflection. A licensed roofer diagnoses the cause and recommends the right correction." },
        { q: "Can a flat roof be repaired in winter?", a: "Most flat roof repairs require temperatures above 40°F for proper membrane adhesion and welding. A licensed flat roofer advises on seasonal repair windows for your specific system." },
      ],
    },
    closing: {
      h2: "Ready to Get Your Free Flat Roof Quote?",
      paragraphs: ["Select your state below. Connect with a licensed flat roofing specialist in your city. Get an honest repair vs. replace assessment — completely free."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Roof Repair Quote", href: "/roof-repair" },
        { label: "Roof Replacement Quote", href: "/roof-replacement" },
        { label: "Storm Damage Repair", href: "/storm-damage-repair" },
        { label: "Free Roof Inspection", href: "/roof-inspection" },
      ],
    },
  },

  "gutter-installation": {
    meta: {
      title: "Gutter Installation Quote | Free Estimates from Licensed Contractors",
      description: "Free gutter installation quotes. Seamless gutters, gutter guards & downspouts. Licensed contractors, upfront pricing, no obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Gutter Installation Quote" }],
    hero: {
      h1: "Free Gutter Installation Quotes from Licensed Local Contractors",
      sub: "Seamless gutters, gutter guards, and downspout installation. Protect your foundation, roof, and landscaping. Honest estimates.",
      trustBar: ["Licensed & insured", "Seamless fabrication on-site", "Gutter guards available", "Free estimates"],
      cta: "Get Your Free Gutter Quote",
    },
    intro: {
      h2: "Gutters Are the Lowest-Cost Way to Prevent the Most Expensive Home Damage",
      paragraphs: [
        "Foundation waterproofing costs $5,000–$15,000. Basement leak repair $3,000–$8,000. Siding replacement $6,000–$20,000. A $1,200 seamless gutter installation prevents all of these by simply directing water away from your foundation.",
        "A free quote from a licensed gutter contractor gives you size recommendations, material options, and an installed price — including downspout placement and guard options if relevant.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "Why Seamless Gutters Are the Right Choice",
      items: [
        { h3: "No Joints = No Leaks", p: "Sectional gutters from home improvement stores have joints every 10 feet — each joint is a future leak point. Seamless gutters are fabricated on-site to your home's exact dimensions with no joints along straight runs." },
        { h3: "Proper Sizing Matters", p: "Most homes need 5-inch K-style gutters. Homes with steep pitches or large roof areas need 6-inch. Undersized gutters overflow during heavy rain, defeating their purpose. A licensed contractor calculates the correct size." },
        { h3: "Guard ROI for Tree-Heavy Lots", p: "Annual gutter cleaning runs $150–$300/year. Quality micro-mesh guards at $8–$15/LF pay for themselves in 4–8 years — while also preventing the clogged-gutter ice dams that damage roofs in winter." },
      ],
    },
    services: {
      h2: "Gutter Services Available Nationwide",
      intro: "Select your state to find licensed gutter contractors in your city.",
      items: [
        { h3: "Seamless Aluminum Gutters", description: "The standard choice — fabricated on-site to exact dimensions, 20–30 year lifespan, broad color options.", range: "$6 – $12 per linear foot installed", linkLabel: "Get a quote", href: "/gutter-installation" },
        { h3: "Gutter Guards", description: "Micro-mesh and reverse-curve systems that virtually eliminate cleaning while allowing water flow.", range: "$4 – $15 per linear foot", linkLabel: "Get a quote", href: "/gutter-installation" },
        { h3: "Downspout Installation & Extension", description: "Proper downspout sizing and underground extension to direct water away from your foundation.", range: "$75 – $200 per downspout", linkLabel: "Get a quote", href: "/gutter-installation" },
        { h3: "Copper Gutters (Premium)", description: "50+ year lifespan, premium aesthetics, develops natural patina over time. For high-end residential applications.", range: "$25 – $40 per linear foot", linkLabel: "Get a quote", href: "/gutter-installation" },
      ],
    },
    stateGridIntro: {
      h2: "Find a Gutter Installation Quote in Your State",
      paragraphs: ["Select your state below to find licensed gutter contractors in your city. Free estimates, no obligation."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How It Works",
      steps: [
        { title: "Free Measurement & Quote", text: "A licensed contractor measures your home's perimeter, assesses roof pitch and drainage area, and gives you a complete installed quote — including size recommendations and guard options." },
        { title: "On-Site Seamless Fabrication", text: "Your contractor brings the seamless gutter fabrication machine to your home and cuts gutters to exact measurements — no joints, no seams along straight runs." },
        { title: "Installation & Cleanup", text: "Gutters are installed with proper pitch, secure fasteners, and correctly positioned downspouts. Full cleanup included." },
      ],
    },
    faq: {
      h2: "Gutter Installation FAQ",
      items: [
        { q: "How much does gutter installation cost?", a: "Gutter installation typically costs $600–$2,400 for a standard home. Seamless aluminum at $6–$12/LF installed; gutter guards add $4–$15/LF. Most homes need 150–200 linear feet." },
        { q: "Seamless vs. sectional gutters?", a: "Seamless gutters are almost always the better choice. They're fabricated on-site to exact dimensions with no joints along straight runs — eliminating the primary failure point of sectional systems." },
        { q: "What size gutters do I need?", a: "Most homes need 5-inch K-style gutters. Homes with steep pitches or large roof areas need 6-inch. A licensed contractor calculates the correct size based on your roof's drainage area and local rainfall." },
        { q: "How long do gutters last?", a: "Aluminum seamless gutters typically last 20–30 years with proper installation. Steel: 15–20 years. Copper: 50+ years at 3–4x the cost." },
      ],
    },
    closing: {
      h2: "Ready to Get Your Free Gutter Installation Quote?",
      paragraphs: ["Select your state below. Connect with a licensed local gutter contractor. Get a complete installed quote — seamless gutters, sizing, guard options — before spending a dollar."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Roof Repair Quote", href: "/roof-repair" },
        { label: "Roof Replacement Quote", href: "/roof-replacement" },
        { label: "Storm Damage Repair", href: "/storm-damage-repair" },
        { label: "Roof Ventilation Quote", href: "/roof-ventilation" },
      ],
    },
  },

  "emergency-roof-repair": {
    meta: {
      title: "Emergency Roof Repair | Same-Day Response | Licensed Roofers",
      description: "Emergency roof repair — same-day tarping, storm damage response, active leak repair. Licensed roofers available 7 days a week. No obligation.",
    },
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Emergency Roof Repair" }],
    hero: {
      h1: "Emergency Roof Repair — Same-Day Response Available",
      sub: "Active leaks, storm damage, fallen trees. Licensed roofers for same-day emergency tarping and repair. 7 days a week.",
      trustBar: ["Same-day response", "Emergency tarping", "Licensed & insured", "Insurance claims help"],
      cta: "Call for Emergency Roof Repair",
    },
    intro: {
      h2: "Don't Wait — Every Hour of Delay Costs More",
      paragraphs: [
        "Water that reaches drywall can cause mold within 24–48 hours. Insulation saturation requires full replacement. A fallen tree or major storm breach that goes unaddressed overnight can turn a $1,000 repair into a $10,000+ remediation.",
        "Emergency tarping costs $200–$500 and stops all water intrusion within hours. It's almost always covered by homeowner insurance. Select your state and city below to connect with a licensed emergency roofer now.",
      ],
      cta: "Select Your State Below",
    },
    why: {
      h2: "Why You Should Call an Emergency Roofer Now",
      items: [
        { h3: "Emergency Tarping Is Always Worth It", p: "The cost of emergency tarping ($200–$500) is always less than the interior damage it prevents. And in most cases, it's covered by your homeowner insurance policy as part of the storm damage claim." },
        { h3: "Insurance Claims Require Prompt Action", p: "Most policies have mitigation requirements — you must take reasonable steps to prevent further damage after a storm. Failure to tarp can jeopardize your claim. A licensed roofer documents all protective measures." },
        { h3: "Same-Day Response Is Available", p: "Licensed emergency roofers in most cities can respond within 1–4 hours for tarping, and schedule permanent repair within 1–2 weeks. Call now to secure your slot." },
      ],
    },
    services: {
      h2: "Emergency Roofing Services Available Nationwide",
      intro: "Select your state to find licensed emergency roofers in your city.",
      items: [
        { h3: "Emergency Tarping", description: "Same-day emergency tarping to stop active water intrusion. Typically within 2–4 hours of your call.", range: "$200 – $500", linkLabel: "Call now", href: "/emergency-roof-repair" },
        { h3: "Fallen Tree Removal & Repair", description: "Tree and debris removal, structural assessment, and emergency repair after impact damage.", range: "$500 – $5,000+", linkLabel: "Call now", href: "/emergency-roof-repair" },
        { h3: "Active Leak Repair", description: "Same-day or next-day repair for active leaks — shingles, flashing, boots, and membrane failures.", range: "$300 – $1,500", linkLabel: "Call now", href: "/emergency-roof-repair" },
        { h3: "Storm Damage Assessment", description: "Immediate post-storm inspection with photo documentation for insurance claims.", range: "FREE", linkLabel: "Schedule now", href: "/emergency-roof-repair" },
      ],
    },
    stateGridIntro: {
      h2: "Find Emergency Roof Repair in Your State",
      paragraphs: ["Select your state below to find licensed emergency roofers in your city. Same-day response available."],
      cta: "Select Your State",
    },
    howItWorks: {
      h2: "How Emergency Roof Repair Works",
      steps: [
        { title: "Call Now", text: "Select your state and city to connect with a licensed emergency roofer. Most can respond within 1–4 hours for emergency tarping." },
        { title: "Immediate Protection", text: "Emergency tarping stops all water intrusion within hours. Your roofer documents the damage with photos for your insurance claim." },
        { title: "Permanent Repair Scheduled", text: "After the immediate emergency is addressed, your roofer provides a complete repair or replacement quote. Permanent repairs are typically scheduled within 1–2 weeks." },
      ],
    },
    faq: {
      h2: "Emergency Roof Repair FAQ",
      items: [
        { q: "How fast can an emergency roofer respond?", a: "Most licensed emergency roofers can respond within 1–4 hours for same-day tarping. Urgent situations with active structural damage are often addressed within 2 hours of your call." },
        { q: "Is emergency tarping covered by insurance?", a: "Yes, in most cases. Emergency tarping costs are typically covered as part of your storm damage claim. A licensed contractor documents the tarping and includes it in the claim." },
        { q: "Should I try to tarp my roof myself?", a: "Only if it is completely safe to do so. Wet roofs are extremely slippery and dangerous. A licensed emergency roofer has the equipment and safety gear to do it correctly — and the tarping cost is usually covered by insurance." },
        { q: "What counts as a roofing emergency?", a: "Active leaks during rain, storm damage with exposed roof deck, fallen tree impact, large sections of missing shingles, and any situation where water is actively entering your home are all roofing emergencies." },
      ],
    },
    closing: {
      h2: "Emergency Roof Repair — Call Now",
      paragraphs: ["Don't wait. Select your state below to connect with a licensed emergency roofer in your city. Same-day tarping and response available."],
      cta: "Select Your State",
    },
    internalLinks: {
      heading: "Other roofing services:",
      links: [
        { label: "Storm Damage Repair", href: "/storm-damage-repair" },
        { label: "Roof Repair Quote", href: "/roof-repair" },
        { label: "Free Roof Inspection", href: "/roof-inspection" },
        { label: "Roof Replacement Quote", href: "/roof-replacement" },
      ],
    },
  },
};
