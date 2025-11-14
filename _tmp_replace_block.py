from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
old="          <motion.h2\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n            className=\"text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight\"\n          >\n            {copy.headingPrefix}{' '}\n            <span className=\"text-brand-gradient\">{copy.headingHighlight}</span>\n            {language === 'fa' ? '?' : '?'}\n          <motion.p"
new="          <motion.h2\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n            className=\"text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight\"\n          >\n            {copy.headingPrefix}{' '}\n            <span className=\"text-brand-gradient\">{copy.headingHighlight}</span>\n            {language === 'fa' ? '؟' : '?'}\n          </motion.h2>\n\n          <motion.p"
if old not in text:
    raise SystemExit('pattern not found')
text=text.replace(old,new,1)
Path("components/ComparisonSection.tsx").write_text(text,encoding='utf-8')
