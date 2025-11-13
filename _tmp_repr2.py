from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
segment=text.split('{copy.headingPrefix}{\' \'}',1)[1]
print(repr(segment[:80]))
