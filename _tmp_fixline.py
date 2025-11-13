from pathlib import Path
path=Path("components/ComparisonSection.tsx")
text=path.read_text(encoding="utf-8")
old="                      <div className={\x07bsolute inset-0 bg-gradient-to-br  blur-3xl opacity-65 pointer-events-none} aria-hidden=\"true\" />"
if old not in text:
    raise SystemExit('corrupted line not found')
new="                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-3xl opacity-65 pointer-events-none`} aria-hidden=\"true\" />"
path.write_text(text.replace(old,new,1), encoding='utf-8')
