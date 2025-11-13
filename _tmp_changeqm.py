from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
text=text.replace("{language === 'fa' ? '?' : '?'}", "{language === 'fa' ? '؟' : '?'}", 1)
Path("components/ComparisonSection.tsx").write_text(text, encoding='utf-8')
