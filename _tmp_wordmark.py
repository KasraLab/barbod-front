from pathlib import Path
text=Path("components/Logo.tsx").read_text(encoding="utf-8")
import re
text=re.sub(r"const wordmark = language === 'en' \? 'Barbod' : '.*?';","const wordmark = language === 'en' ? 'Barbod' : 'باربد';", text)
Path("components/Logo.tsx").write_text(text, encoding='utf-8')
