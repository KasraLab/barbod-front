from pathlib import Path
text=Path("components/Logo.tsx").read_text(encoding="utf-8")
text=text.replace("const wordmark = language === 'en' ? 'Barbod' : '?????';","const wordmark = language === 'en' ? 'Barbod' : 'باربد';")
text=text.replace("<div className={${container} relative rounded-[var(--radius-md)] bg-brand-gradient flex items-center justify-center shadow-[var(--shadow-md)] angular-cut overflow-hidden}>", "<div className={`${container} relative rounded-[var(--radius-md)] bg-brand-gradient flex items-center justify-center shadow-[var(--shadow-md)] angular-cut overflow-hidden`}>")
text=text.replace("<span className={${text} font-semibold tracking-tight text-brand-gradient}>{wordmark}</span>", "<span className={`${text} font-semibold tracking-tight text-brand-gradient`}>{wordmark}</span>")
if not text.strip().endswith(');'):
    text=text.rstrip()+"\n  );\n}\n"
Path("components/Logo.tsx").write_text(text, encoding='utf-8')
