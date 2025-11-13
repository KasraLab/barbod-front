from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
old="            {language === 'fa' ? '\u061f' : '?'}\n          "
new="            {language === 'fa' ? '؟' : '?'}\n          </motion.h2>\n\n          "
if old not in text:
    raise SystemExit('pattern not found')
text=text.replace(old,new,1)
Path("components/ComparisonSection.tsx").write_text(text, encoding='utf-8')
