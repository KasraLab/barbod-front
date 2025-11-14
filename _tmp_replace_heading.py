from pathlib import Path
path=Path("components/ComparisonSection.tsx")
text=path.read_text(encoding="utf-8")
text=text.replace('{copy.headingPrefix} <span className="text-brand-gradient">{copy.headingHighlight}</span>؟', '{copy.headingPrefix} <span className="text-brand-gradient">{copy.headingHighlight}</span>{"؟"}')
path.write_text(text, encoding="utf-8")
