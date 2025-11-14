from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
start=text.index('<motion.h2')
end=text.index('<motion.p', start)
print(text[start:end].encode('unicode_escape').decode())
