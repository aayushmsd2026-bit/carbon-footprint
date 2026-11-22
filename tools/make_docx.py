"""Build reflection.docx from data.js  →  run:  python3 tools/make_docx.py"""
import json, re, subprocess, pathlib
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_COLOR_INDEX

root = pathlib.Path(__file__).resolve().parent.parent
S = json.loads(subprocess.check_output(["node", "-e",
    "global.window={};require(process.argv[1]);console.log(JSON.stringify(window.SITE))",
    str(root / "data.js")]))
I, F, A = S["initial"], S["final"], S["author"]
tok = {"initial": f'{I["total"]:.1f}',
       "final": f'{F["total"]:.1f}' if F else "[[final result]]",
       "delta": (f'{F["total"]-I["total"]:+.1f} t' if F else "[[change in t]]"),
       "pct": (f'{(F["total"]-I["total"])/I["total"]*100:.0f}%' if F else "[[%]]")}

d = Document()
st = d.styles["Normal"]; st.font.name = "Georgia"; st.font.size = Pt(11.5)
for s in d.sections: s.left_margin = s.right_margin = Cm(2.3)

def para(text, size=None, bold=False, color=None, italic=False):
    p = d.add_paragraph()
    for i, part in enumerate(re.split(r"\[\[(.*?)\]\]", text)):
        if not part: continue
        r = p.add_run(("✏️ " + part) if i % 2 else part)
        r.bold, r.italic = bold, italic
        if size: r.font.size = Pt(size)
        if color: r.font.color.rgb = RGBColor.from_string(color)
        if i % 2: r.font.highlight_color = WD_COLOR_INDEX.YELLOW
    return p

para("My Carbon Footprint: A 30-Day Sustainability Challenge", 18, True, "1F5C46")
para(f'{A["name"]}{" · " + A["roll"] if A.get("roll") else ""} · {A["programme"]}', 10.5, color="56625B")
para(f'{A["course"]} · Interactive version: https://{A["github"]}.github.io/carbon-footprint/', 10.5, color="56625B")

d.add_heading("Results", level=2)
t = d.add_table(rows=1, cols=3); t.style = "Light Grid Accent 1"
for c, h in zip(t.rows[0].cells, ["Category (t CO₂e/yr)", f'Before ({I["date"]})', f'After ({F["date"]})' if F else "After"]): c.text = h
for k, v in I["categories"].items():
    r = t.add_row().cells; r[0].text = k; r[1].text = f"{v:.1f}"
    r[2].text = f'{F["categories"].get(k, v):.1f}' if F else "–"
r = t.add_row().cells; r[0].text = "TOTAL"; r[1].text = f'{I["total"]:.1f}'; r[2].text = f'{F["total"]:.1f}' if F else "[[pending]]"

d.add_heading(S["reflectionTitle"], level=2)
words = 0
for p in S["reflection"]:
    p = re.sub(r"\{\{(\w+)\}\}", lambda m: tok[m.group(1)], p)
    words += len([w for w in re.sub(r"\[\[.*?\]\]", " ", p).split() if re.search(r"\w", w)])
    para(p).paragraph_format.space_after = Pt(8)
para(f"Word count: {words}", 9.5, color="8A938D", italic=True)

d.add_heading("Evidence: WWF calculator screenshots", level=2)
for src in I["screenshots"][:1] + (F["screenshots"] if F else []):
    d.add_picture(str(root / src), width=Cm(7.5))
d.add_heading("References", level=2)
for ref in S["references"]: para(ref, 9.5)
out = root / "reflection.docx"; d.save(out); print("saved", out, "|", words, "words")
