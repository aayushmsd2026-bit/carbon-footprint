/* =====================================================================
   data.js — EVERYTHING you need to edit lives in this file.
   The website (index.html) reads it and draws all charts automatically.

   ✏️  TO-DO LIST FOR YOU (search for "TODO"):
     1. author → your name, roll number, course teacher
     2. During the 30 days → open the site with  ?edit  at the end of the URL
        (e.g. https://<you>.github.io/carbon-footprint/?edit), tick your habits
        each day, then press "Copy log" and paste it over `log: {}` below.
     3. Add diary entries + photos (put photos in /assets/photos/).
     4. On 22 Dec: redo the WWF calculator with the SAME household assumptions,
        save the screenshot as assets/wwf-final.jpg, and fill `final` below.
     5. Replace every [[ … ]] in the reflection with your own real experience.
        Anything still inside [[ ]] shows up highlighted in yellow on the site,
        so you can't accidentally submit a placeholder.
   ===================================================================== */

window.SITE = {
  author: {
    name: "Your Name",                         // TODO
    programme: "MSc Sustainable Development, Kathmandu University",
    course: "Fundamentals of Sustainable Development",
    roll: "",                                   // TODO (optional)
    github: "aayushmsd2026-bit"
  },

  challenge: { start: "2026-11-23", days: 30 },

  /* ---------- STEP 1 · Initial WWF result (22 Nov 2026) — real data ---------- */
  initial: {
    date: "2026-11-22",
    total: 6.1,
    categories: {           // tonnes CO2e / year, exactly as shown by the calculator
      Food: 2.5, Household: 2.0, Transport: 0.7, Energy: 0.5, Office: 0.4, Waste: 0.1, Water: 0.0
    },
    screenshots: ["assets/wwf-initial-p1.jpg", "assets/wwf-initial-p2.jpg", "assets/wwf-initial-p3.jpg"]
  },

  /* ---------- STEP 4 · Final WWF result — TODO after 22 Dec ----------
     Replace `null` with e.g.:
     final: { date: "2026-12-22", total: 5.6,
              categories: { Food: 2.1, Household: 1.9, Transport: 0.6, Energy: 0.5, Office: 0.4, Waste: 0.1, Water: 0.0 },
              screenshots: ["assets/wwf-final.jpg"] },
  */
  final: null,

  benchmarks: [
    { label: "Global average", value: 4.8, note: "World Bank, 2023 (as shown in WWF calculator)" },
    { label: "1.5 °C-compatible 2030 target", value: 2.3, note: "IPCC, as shown in WWF calculator" },
    { label: "India average", value: 1.9, note: "Our World in Data, 2023 (as shown in WWF calculator)" },
    { label: "Nepal average (approx.)", value: 0.5, note: "Territorial fossil CO₂ per capita, Our World in Data — a narrower measure than a full footprint" }
  ],

  /* ---------- STEP 2 · The five changes ---------- */
  habits: [
    {
      id: "meat", icon: "🥗", short: "Meat-free day",
      title: "Three meat-free days a week",
      target: "Food · 2.5 t",
      why: "Food is my single largest category (41%). Meat — especially mutton and buff — carries many times the emissions of dal, chana or seasonal sag per gram of protein (Poore & Nemecek, 2018).",
      how: "Sunday, Tuesday and Thursday are dal-bhat-tarkari days: rajma, chana, mas or mushroom replace chicken/buff. I tell family on the previous evening so cooking is planned, not improvised."
    },
    {
      id: "move", icon: "🚶", short: "Walk / bus",
      title: "Walk or take the bus for short trips",
      target: "Transport · 0.7 t",
      why: "Most of my trips across the valley are under 5 km — exactly the trips where a ride-hailing motorbike is a habit, not a need.",
      how: "Walk anything under 2 km; Sajha / public bus for 2–8 km; ride-hailing only after dark or with heavy loads. I log kilometres shifted each day."
    },
    {
      id: "power", icon: "🔌", short: "Switch off",
      title: "Switch off at the plug & cook smarter",
      target: "Energy · 0.5 t / LPG",
      why: "Standby loads and an always-on geyser quietly add up, and our LPG is 100% imported. A pressure cooker and a lid on every pot stretch each cylinder.",
      how: "Wi-Fi router, TV and chargers off at the plug at night; geyser only 20 minutes before bathing; lids + pressure cooker for dal, rice and soaking beans overnight."
    },
    {
      id: "waste", icon: "🍚", short: "Zero food waste",
      title: "Zero food waste + compost",
      target: "Food & Waste",
      why: "More than half of Kathmandu’s municipal waste is organic, yet it is trucked to a landfill in Nuwakot. Wasted food also wastes every tonne of emissions used to grow it.",
      how: "Cook to plan, store leftovers for next-day khaja, and put peels and scraps into a bucket compost bin on the roof."
    },
    {
      id: "plastic", icon: "🛍️", short: "No single-use plastic",
      title: "Refuse single-use plastic",
      target: "Household · 2.0 t",
      why: "Plastic barely moves my carbon number — but it is one of the clearest links to my wider ecological footprint (land, rivers, landfill).",
      how: "A cloth jhola and steel bottle in my bag every day; no plastic bags at the tarkari pasal; refill instead of buying bottled water."
    }
  ],

  /* ---------- STEP 3 · 30-day log ----------
     Generated by the tracker (?edit mode → "Copy log"). Format:
     "2026-11-23": { meat: 1, move: 1, power: 1, waste: 0, plastic: 1 }       */
  log: {},

  /* Diary entries — TODO: write a short real note every few days.
     { date: "2026-11-25", title: "First meat-free Tuesday", text: "…", photo: "assets/photos/day3.jpg" }  */
  diary: [],

  /* ---------- STEP 4 · Beyond carbon (ecological footprint) ---------- */
  ecological: [
    {
      icon: "🌾", title: "What’s on my plate → land, water & forests",
      text: "Animal products need several times more land and water per calorie than pulses and grains. Much of Nepal’s poultry feed and rice is now imported from India, so my plate draws on cropland, groundwater and forest frontiers far beyond the valley. Eating more local, plant-rich meals lowers the land my diet demands — land that, as Nepal’s community forests show, can regenerate into biocapacity when pressure is lifted."
    },
    {
      icon: "🧴", title: "What I buy & throw away → landfill, rivers & resources",
      text: "Packaged goods and single-use plastics draw on fossil feedstocks and need land to absorb them at the end of their life — the Banchare Danda landfill in Nuwakot, or the Bagmati when collection fails. These costs fall on host communities and river ecosystems, and almost none of it appears in my carbon number. Refusing, reusing, repairing and composting shrink the land and water needed to absorb my waste."
    }
  ],

  keepHabit: {
    icon: "🥗",
    title: "Three meat-free days a week — for good",
    text: "It is my biggest lever (food is 41% of my footprint), it costs nothing, and because food is shared it quietly changes my whole household’s footprint, not just mine. I will keep Sunday–Tuesday–Thursday as dal days beyond this assignment."
  },

  /* ---------- STEP 5 · Reflection (≈ 600 words) ----------
     Tokens filled automatically: {{initial}} {{final}} {{delta}} {{pct}}
     [[ … ]] = YOU must replace this with your real experience (shown yellow on site). */
  reflectionTitle: "Six tonnes in a valley of hydropower",
  reflection: [
    "When I first completed the WWF India calculator on 22 November 2026, my result was {{initial}} tonnes of CO₂e per year. The number unsettled me. It is above the global average of 4.8 t shown by the calculator, more than two and a half times the 2.3 t per person consistent with limiting warming to 1.5 °C, and over three times the Indian average. As a sustainable development student in Kathmandu, I had quietly assumed my lifestyle was low-carbon by default — Nepal’s per-capita emissions are among the lowest in the world. The calculator showed me that a national average can hide the urban, middle-class consumer I have become.",

    "The breakdown was even more revealing. Food (2.5 t, 41%) and household (2.0 t, 33%) together made up three-quarters of my footprint, while transport — which I expected to dominate — was only 0.7 t. I also learned to read the result critically. The calculator is built for India, where electricity is coal-heavy, while Nepal’s grid is almost entirely hydropower. My 0.5 t for energy is therefore probably an overestimate, which means my real leverage lies even more in what I eat, what I cook with (imported LPG) and what I buy.",

    "Based on this, I chose five changes for 23 November to 22 December: three meat-free days a week; walking or taking the bus for trips under five kilometres; switching appliances off at the plug and cooking with lids and a pressure cooker; planning meals to avoid food waste and composting scraps; and refusing single-use plastic with a cloth jhola and steel bottle. I tracked each habit daily on a 30-day grid on my website and kept short diary notes.",

    "After 30 days, my recalculated footprint was {{final}} t CO₂e per year, a change of {{delta}} ({{pct}}). [[Explain in 1–2 sentences which calculator inputs you changed and why the number moved, or why it barely moved.]] The exercise also exposed the limits of the tool: it rewards eating less meat but is blind to composting or refusing plastic. Metrics shape what we notice, and what we do not measure can easily become what we do not value.",

    "[[Your real experience, 3–4 sentences: Which habit was easiest and which was hardest? What surprised you? e.g. meat-free days at home versus with friends, walking on roads without footpaths, family reactions, how often you actually remembered the jhola. Use your tracker percentages.]] More broadly, I discovered that much of my footprint is locked in by systems rather than willpower: household cooking fuel, what local markets sell, and whether Kathmandu’s roads are safe to walk. This is the structure–agency tension we discuss in class. Individual action matters most when it also builds pressure for better systems — footpaths, reliable electric buses and municipal composting.",

    "Thinking beyond carbon, I see two clear links to my wider ecological footprint. First, my diet: animal products and imported grain demand far more land, water and feed than local pulses and vegetables, so my plate draws on cropland and forests beyond Nepal’s borders. Eating more plant-rich, local food lowers that pressure. Second, my consumption and waste: packaged goods and single-use plastics barely move my carbon number, yet they end up in the Banchare Danda landfill or the Bagmati, burdening land, rivers and the communities who host our waste. Refusing, reusing and composting reduce the land and water needed to absorb what I throw away.",

    "The habit I will continue is three meat-free days a week. It is my biggest lever, it costs nothing, and because meals are shared it quietly lowers my whole household’s footprint. This challenge did not make me perfect, but it replaced a comfortable assumption with evidence — and evidence, I have learned, is where sustainable change begins."
  ],

  references: [
    "WWF India (n.d.). Interactive Carbon Footprint Calculator. https://wwfindiawebgis.in/Carbon%20Footprint%20Calculator/calculator.html",
    "IPCC (2018). Global Warming of 1.5 °C. Special Report. Intergovernmental Panel on Climate Change.",
    "IPCC (2022). Climate Change 2022: Mitigation of Climate Change. WGIII Contribution to AR6 (Ch. 5: Demand, services and social aspects of mitigation).",
    "Poore, J., & Nemecek, T. (2018). Reducing food’s environmental impacts through producers and consumers. Science, 360(6392), 987–992.",
    "FAO (2013). Food Wastage Footprint: Impacts on Natural Resources. Rome: Food and Agriculture Organization.",
    "Wackernagel, M., & Rees, W. (1996). Our Ecological Footprint: Reducing Human Impact on the Earth. New Society Publishers.",
    "Global Footprint Network (n.d.). Ecological Footprint & Earth Overshoot Day. https://www.footprintnetwork.org",
    "Hertwich, E. G., & Peters, G. P. (2009). Carbon footprint of nations: A global, trade-linked analysis. Environmental Science & Technology, 43(16), 6414–6420.",
    "Ritchie, H., Rosado, P., & Roser, M. (2023). CO₂ and Greenhouse Gas Emissions. Our World in Data. https://ourworldindata.org/co2-and-greenhouse-gas-emissions",
    "Nepal Electricity Authority (2024). Annual Report, Fiscal Year 2023/24. Kathmandu: NEA."
  ]
};
