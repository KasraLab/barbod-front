from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
idx=text.index('{copy.headingPrefix}')
print(repr(text[idx-20:idx+80]))
