import re
from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
pattern=r"(\s*<motion\.h2[\s\S]*?className=\"text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight\"\n\s*>\n)\s*{copy\.headingPrefix}\{' '\}\n\s*<span className=\"text-brand-gradient\">{copy.headingHighlight}</span>\n\s*{language === 'fa' \? '\?' : '\?'}\n\s*<motion\.p"
match=re.search(pattern,text)
if not match:
    raise SystemExit('pattern not found')
new=f"{match.group(1)}            {{copy.headingPrefix}}{{' '}}\n            <span className=\"text-brand-gradient\">{{copy.headingHighlight}}</span>\n            {{language === 'fa' ? '؟' : '?' }}\n          </motion.h2>\n\n          <motion.p"
text=text[:match.start()]+new+text[match.end():]
Path("components/ComparisonSection.tsx").write_text(text, encoding='utf-8')
