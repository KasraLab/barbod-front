from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
needle="{copy.headingPrefix}{' '}\n            <span className=\"text-brand-gradient\">{copy.headingHighlight}</span>\n            {language === 'fa' ? '؟' : '?'}"
if needle not in text:
    print('not found')
else:
    print('found')
