from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
start=text.index("  const questionMark")
end=text.index("  return (", start)
print(text[start:end].encode('unicode_escape').decode())
