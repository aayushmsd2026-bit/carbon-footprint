/* =====================================================================
   data.js — EVERYTHING you need to edit lives in this file.
   The website (index.html) reads it and draws all charts automatically.

   ✏️  TO-DO LIST (search for "TODO"):
     1. author.name / roll.
     2. Every night from 23 Nov → open the site with  ?edit  on the URL
        (https://aayushmsd2026-bit.github.io/carbon-footprint/?edit),
        tick what you actually did, press "Copy log", paste over `log: {}`.
     3. Add a diary entry + photo for each prompt in `diaryPrompts`
        (photos go in assets/photos/). Only write what really happened.
     4. On 22 Dec: re-run the WWF calculator with the SAME household inputs,
        changing only what you really changed (e.g. meat days). Save the
        screenshot as assets/wwf-final.jpg and fill `final` below.
     5. Replace every [[ … ]] in the reflection with your real experience.
        Anything still inside [[ ]] shows highlighted yellow on the site.
   ===================================================================== */

window.SITE = {
  author: {
    name: "Your Name",                         // TODO
    programme: "MSc Sustainable Development, Kathmandu University",
    course: "Fundamentals of Sustainable Development",
    roll: "",                                   // TODO (optional)
    github: "aayushmsd2026-bit"
  },

  challenge: { start: "2026-11-23", days: 30 },   // Mon 23 Nov → Tue 22 Dec 2026

  /* ---------- STEP 1 · Baseline WWF result (corrected inputs) ---------- */
  initial: {
    date: "2026-11-22",
    total: 5.8,
    categories: { Food: 2.5, Household: 2.0, Transport: 0.7, Energy: 0.3, Office: 0.2, Waste: 0.0, Water: 0.0 },
    screenshots: ["assets/wwf-initial-p1.jpg", "assets/wwf-initial-p2.jpg", "assets/wwf-initial-p3.jpg"]
  },

  /* My first try gave 6.1 t. I re-entered my household (4 people, not the
     tenants) and my electricity bill more carefully → 5.8 t. Kept for honesty. */
  firstAttempt: {
    total: 6.1,
    categories: { Food: 2.5, Household: 2.0, Transport: 0.7, Energy: 0.5, Office: 0.4, Waste: 0.1, Water: 0.0 },
    screenshots: ["assets/wwf-first-attempt-p1.jpg"]
  },

  /* ---------- STEP 4 · Final WWF result — TODO on 22 Dec ----------
     final: { date: "2026-12-22", total: X.X,
              categories: { Food: , Household: , Transport: , Energy: , Office: , Waste: , Water: },
              screenshots: ["assets/wwf-final.jpg"] },                        */
  final: null,

  benchmarks: [
    { label: "Global average", value: 4.8, note: "World Bank, 2023 (as shown in WWF calculator)" },
    { label: "1.5 °C-compatible 2030 target", value: 2.3, note: "IPCC, as shown in WWF calculator" },
    { label: "India average", value: 1.9, note: "Our World in Data, 2023 (as shown in WWF calculator)" },
    { label: "Nepal average (approx.)", value: 0.5, note: "Territorial fossil CO₂ per capita, Our World in Data — a narrower measure than a full footprint" }
  ],

  /* What my lifestyle already gets right — so the challenge targets what's left */
  strengths: [
    { icon: "🚌", text: "Bus to work every day, Kaushaltar ↔ Babarmahal. No car, no motorbike, no flights in 12 months." },
    { icon: "🌱", text: "Wet waste already composted at home; the rest is separated for collectors." },
    { icon: "☀️", text: "Solar water heater: no electric geyser." },
    { icon: "🥛", text: "Almost no dairy, and mostly local, seasonal food." }
  ],

  /* ---------- STEP 2 · The five changes ----------
     days: weekdays the habit applies (0 = Sun … 6 = Sat). Omit = every day. */
  habits: [
    {
      id: "meat", icon: "🫘", short: "Meat swap", days: [3, 5],
      title: "Two fewer meat days: Dal Wednesday & Veg Friday",
      target: "Food · 2.5 t",
      why: "Food is 43% of my footprint, and the calculator's own top advice was to cut meat by 1–2 days a week. My weekly mutton meal alone is ≈0.25 t a year: more than my two chicken days and four eggs combined (Poore & Nemecek, 2018).",
      how: "Wednesday's mutton becomes rajma or chana masu-style curry; Friday's chicken becomes a mushroom or seasonal-sag tarkari. Thursday chicken, Monday and Tuesday eggs stay, so the change is realistic for my family's kitchen."
    },
    {
      id: "dhido", icon: "🌾", short: "Dhido / roti night", days: [2, 6],
      title: "Dhido or roti instead of rice, two dinners a week",
      target: "Food · rice methane & water",
      why: "Flooded rice paddies release methane, and rice needs far more water than millet. Kodo (finger millet) dhido is our own hill food: drought-tolerant, grown in Nepal, and much lower in emissions per meal.",
      how: "Tuesday and Saturday dinners: kodo dhido or wheat roti with gundruk, dal and tarkari. Millet flour is from the local pasal, so it's no extra cost or effort."
    },
    {
      id: "cook", icon: "🍳", short: "Induction first",
      title: "Induction first, LPG last, and plugs off at night",
      target: "Household · LPG + Energy 0.3 t",
      why: "We already own an induction stove. Every LPG cylinder is imported fossil fuel (≈42 kg CO₂ each), while our electricity is mostly Nepali hydropower. Nepal's own clean-cooking campaign promotes the same switch.",
      how: "Dal, rice and tea on induction with the pressure cooker and lids; LPG only for big batches or power cuts. Wi-Fi router, TV and chargers off at the plug at night. I note the date our current cylinder runs out."
    },
    {
      id: "buy", icon: "🛍️", short: "Buy nothing new",
      title: "Buy-nothing-new month, with a jhola and bottle",
      target: "Household · 2.0 t",
      why: "My laptop is new this year, and my online orders add up. The calculator's Household slice reflects what we buy as much as how we live. Most of a product's emissions happen before it reaches me.",
      how: "No new clothes, gadgets or online orders for 30 days, except food and real essentials. Repair or borrow first. A cloth jhola and steel bottle in my office bag, so no plastic bags or bottled water."
    },
    {
      id: "water", icon: "🪣", short: "Save tanker water",
      title: "Bucket, not tap: stretch our tanker water",
      target: "Water · ecological",
      why: "Our monthly tanker for both flats comes largely from the valley's groundwater, which is being pumped faster than it recharges. Water barely shows in my carbon number (0.0 t), but it's a direct pull on Kathmandu's aquifers.",
      how: "Bucket bath, not a running tap. Rice and vegetable washing water goes to the plants. Fix the dripping tap. I note the tanker date to see whether it lasts longer than a month."
    }
  ],

  /* ---------- STEP 3 · Week-by-week plan ---------- */
  plan: [
    { range: "23 – 29 Nov", title: "Week 1 · Set the baseline",
      items: ["Photograph the NEA meter reading and note the LPG cylinder start date and last tanker date", "Agree the new Wednesday/Friday menu with family", "First Dal Wednesday (25 Nov) and first Veg Friday (27 Nov)", "Put jhola and bottle in the office bag"] },
    { range: "30 Nov – 6 Dec", title: "Week 2 · Cook on induction",
      items: ["Pressure-cook dal and rice on induction every day", "Router, TV and chargers off at night", "Start bucket baths and reuse washing water on the plants", "Try kodo dhido on Tuesday and Saturday"] },
    { range: "7 – 13 Dec", title: "Week 3 · Mid-point check",
      items: ["Count tracker % per habit and be honest about misses", "Repair or borrow something instead of buying it", "Ask the tenants if they want to share our compost or reuse greywater", "Fix the dripping tap"] },
    { range: "14 – 20 Dec", title: "Week 4 · Make it stick",
      items: ["Cook a full dhido-gundruk dinner for the family", "Note which habits feel automatic and which still need effort", "Draft the reflection while it's fresh"] },
    { range: "21 – 22 Dec", title: "Days 29–30 · Measure again",
      items: ["Photograph the NEA meter again; check the LPG cylinder and tanker", "Re-run the WWF calculator with the same household inputs", "Screenshot the result and update this site"] }
  ],

  /* ---------- 30-day log — filled from the tracker (?edit → Copy log) ----------
     "2026-11-23": { meat: 1, dhido: 0, cook: 1, buy: 1, water: 1 }          */
  log: {},

  /* Diary prompts: the site shows these until you write a real entry for that date */
  diaryPrompts: [
    { date: "2026-11-23", prompt: "Day 1: photo of the NEA meter and the LPG cylinder. What are the starting numbers?" },
    { date: "2026-11-25", prompt: "First Dal Wednesday: what did you cook, and how did the family react?" },
    { date: "2026-11-28", prompt: "First dhido night: photo of the plate. Easier or harder than expected?" },
    { date: "2026-12-04", prompt: "Induction week: how many meals on induction? Did the LPG last longer?" },
    { date: "2026-12-10", prompt: "Mid-point: tracker percentages, and the hardest habit so far" },
    { date: "2026-12-16", prompt: "Buy-nothing-new: what did you want to buy, and what did you do instead?" },
    { date: "2026-12-22", prompt: "Day 30: meter reading, cylinder and tanker status, and the new WWF result" }
  ],
  /* Real entries: { date: "2026-11-25", title: "…", text: "…", photo: "assets/photos/day3.jpg" } */
  diary: [],

  /* ---------- STEP 4 · Beyond carbon ---------- */
  ecological: [
    {
      icon: "🍛", title: "My plate: meat and paddy rice → land, water and feed",
      text: "Mutton needs grazing land, and chicken needs maize and soy feed, much of it imported from India. Flooded paddies need large amounts of water. Meat days and three rice meals a day pull on cropland, pasture and rivers well beyond the valley. Swapping two meat meals for pulses and two rice dinners for hill millet lowers the land and water my diet demands, and supports Nepali farmers growing resilient crops."
    },
    {
      icon: "💧", title: "My tap: tanker water → Kathmandu's groundwater",
      text: "When the tap runs dry we buy a tanker, and that water is mostly pumped from the valley's aquifers. Their levels are falling as the city grows faster than the ground can recharge. It shows as 0.0 t in my carbon footprint, but it's a direct draw on a shared, slow-to-renew resource. Bucket baths, reusing washing water and fixing leaks stretch each tanker and ease that pressure."
    }
  ],

  keepHabit: {
    icon: "🫘",
    title: "Dal Wednesday, for good",
    text: "Swapping one mutton meal a week is my single biggest lever (≈0.25 t a year). It costs less than mutton and changes my whole family's footprint, not just mine. It's simple enough to keep for years, not weeks."
  },

  /* ---------- STEP 5 · Reflection (≈ 600 words) ----------
     Tokens filled automatically: {{initial}} {{final}} {{delta}} {{pct}}
     [[ … ]] = YOU must replace with your real experience (shown yellow on site). */
  reflectionTitle: "5.8 tonnes in a valley of hydropower",
  reflection: [
    "My first attempt at the WWF India calculator gave 6.1 tonnes of CO₂e a year. When I re-entered my household (four of us, not our tenants) and our electricity use more carefully, it became {{initial}} t. That correction was my first lesson: a footprint is only as good as the data behind it. Even the corrected figure is above the global average of 4.8 t and about two and a half times the 2.3 t per person consistent with 1.5 °C. Nepal's per-capita emissions are among the lowest in the world, so I had assumed I was low-carbon by default. The calculator showed me that a national average can hide an urban, middle-class lifestyle.",

    "The breakdown surprised me. I commute by bus, own no vehicle, compost our wet waste and heat water with solar, yet food (2.5 t) and household (2.0 t) made up almost four-fifths of my total. I also read the result critically. The calculator assumes India's coal-heavy electricity, while Nepal's grid is mostly hydropower. My own rough food estimate is closer to 1.2 t, which suggests the tool treats any non-vegetarian diet coarsely. Even so, the direction was clear: my real levers were on my plate, in my kitchen and in what I buy.",

    "I chose five changes for 23 November to 22 December, built around my actual week: Dal Wednesday and Veg Friday, replacing my mutton and one chicken meal; kodo dhido or roti instead of rice two dinners a week; cooking on induction first and LPG last, with plugs off at night; a buy-nothing-new month with a jhola and bottle; and bucket baths and reused washing water to stretch our tanker. I tracked each habit on a 30-day grid on my website, with photos of the meter, cylinder and meals as evidence.",

    "After 30 days my recalculated footprint was {{final}} t CO₂e per year, a change of {{delta}} ({{pct}}). [[Explain in 1–2 sentences which calculator inputs you changed (e.g. meat days per week) and why the number moved, or why it barely moved.]] The tool rewards eating less meat but cannot see dhido nights, a longer-lasting LPG cylinder or a tanker that stretches further. What we do not measure can easily become what we do not value.",

    "[[Your real experience, 3–4 sentences, using your tracker percentages: which habit was easiest and which was hardest? What surprised you? e.g. family reactions to Dal Wednesday, whether the LPG cylinder lasted longer, what you wanted to buy and didn't.]] More broadly, I learned that much of my footprint is set by systems rather than willpower: imported cooking gas, what the market sells, and whether the city supplies enough water. Individual action matters most when it also creates demand for better systems, such as reliable piped water, clean electric cooking and support for local millet farmers.",

    "Beyond carbon, two everyday choices connect directly to my wider ecological footprint. The first is my plate. Mutton and chicken depend on grazing land and imported feed, and paddy rice needs a lot of water and emits methane. Choosing pulses and hill millet lowers the land and water my diet demands. The second is water. Our tanker is mostly pumped from Kathmandu's falling groundwater, which my carbon number counts as zero. Bucket baths, reusing water and fixing leaks reduce our draw on an aquifer the whole valley shares.",

    "The habit I will keep is Dal Wednesday. It is my biggest single lever, it saves money, and because meals are shared it lowers my family's footprint as well as mine. This challenge did not make me perfect. It replaced a comfortable assumption with evidence, and that is where sustainable change begins."
  ],

  references: [
    "WWF India (n.d.). Interactive Carbon Footprint Calculator. https://wwfindiawebgis.in/Carbon%20Footprint%20Calculator/calculator.html",
    "IPCC (2018). Global Warming of 1.5 °C. Special Report. Intergovernmental Panel on Climate Change.",
    "IPCC (2022). Climate Change 2022: Mitigation of Climate Change. WGIII Contribution to AR6 (Ch. 5: Demand, services and social aspects of mitigation).",
    "Poore, J., & Nemecek, T. (2018). Reducing food’s environmental impacts through producers and consumers. Science, 360(6392), 987–992.",
    "Wackernagel, M., & Rees, W. (1996). Our Ecological Footprint: Reducing Human Impact on the Earth. New Society Publishers.",
    "Global Footprint Network (n.d.). Ecological Footprint & Earth Overshoot Day. https://www.footprintnetwork.org",
    "Hertwich, E. G., & Peters, G. P. (2009). Carbon footprint of nations: A global, trade-linked analysis. Environmental Science & Technology, 43(16), 6414–6420.",
    "Ritchie, H., Rosado, P., & Roser, M. (2023). CO₂ and Greenhouse Gas Emissions. Our World in Data. https://ourworldindata.org/co2-and-greenhouse-gas-emissions",
    "Nepal Electricity Authority (2024). Annual Report, Fiscal Year 2023/24. Kathmandu: NEA."
  ]
};
