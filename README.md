# 🌱 5.8 Tonnes in a Valley of Hydropower

**My Carbon Footprint: a 30-day sustainability challenge.** Fundamentals of Sustainable Development · MSc Sustainable Development, Kathmandu University

An interactive, infographic-style write-up of my 30-day challenge: my WWF India carbon footprint (5.8 t CO₂e/yr), the five lifestyle changes I made, a daily habit tracker, before/after comparison, links to my wider ecological footprint, and my reflection.

**🔗 Live site:** https://aayushmsd2026-bit.github.io/carbon-footprint/

## What's inside

| Assignment requirement | Where on the site |
|---|---|
| Initial & final footprint + screenshots | Hero, **Step 1**, **Step 4 · Results**, **Evidence** |
| Changes selected & how implemented | **Step 2** cards + "what could this add up to?" simulator |
| Record of progress | **Step 3**: 30-day tracker grid + diary/photos |
| Discoveries about lifestyle & consumption | Step 1 callouts + reflection |
| Two links to wider ecological footprint | **Beyond carbon** |
| One habit to continue | "The habit I'm keeping" |
| 500–700 word reflection | **Step 5** (live word counter) · also `reflection.docx` |

## Files

```
index.html          the website (no build step, no frameworks)
data.js             ALL content: results, habits, daily log, diary, reflection
assets/             WWF screenshots + photos/
tools/make_docx.py  regenerates reflection.docx from data.js
```

## Updating during the 30 days

1. Open the live site with `?edit` on the end of the URL, then tap squares to tick off each day's habits.
2. Press **Copy log**, paste it over `log: {}` in `data.js`, and commit.
3. Add diary entries (`diary: [...]`) and photos (`assets/photos/`).
4. On day 30, re-run the WWF calculator, save `assets/wwf-final.jpg`, and fill in `final:` in `data.js`.
5. Replace every `[[ … ]]` in the reflection (they show highlighted yellow until you do), then run `python3 tools/make_docx.py`.

Emission factors used in the simulator are indicative and cited in the site's *Method notes*.
