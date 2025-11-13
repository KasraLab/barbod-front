from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
old="            {language === 'fa' ? '?' : '?'}"
new="            {language === 'fa' ? '؟' : '?'}"
if text.count(old)==0:
    raise SystemExit('pattern not found')
text=text.replace(old,new,1)
Path("components/ComparisonSection.tsx").write_text(text, encoding='utf-8')
