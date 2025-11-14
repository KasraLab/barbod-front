from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
old="          >\r\n            {copy.headingPrefix}{' '}<span className=\"text-brand-gradient\">{copy.headingHighlight}</span>{language === 'fa' ? '?' : '?'}\r\n          </motion.h2>"
new="          >\r\n            {copy.headingPrefix}{' '}\r\n            <span className=\"text-brand-gradient\">{copy.headingHighlight}</span>\r\n            {language === 'fa' ? '؟' : '?'}\r\n          </motion.h2>"
if old not in text:
    raise SystemExit('pattern not found')
Path('components/ComparisonSection.tsx').write_text(text.replace(old,new,1), encoding='utf-8')
