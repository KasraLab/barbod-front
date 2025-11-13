from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
old="            {language === 'fa' ? '?' : '?'}\n          <motion.p"
new="            {language === 'fa' ? '؟' : '?'}\n          </motion.h2>\n\n          <motion.p"
if old not in text:
    raise SystemExit('pattern not found')
text=text.replace(old,new,1)
Path("components/ComparisonSection.tsx").write_text(text, encoding='utf-8')
