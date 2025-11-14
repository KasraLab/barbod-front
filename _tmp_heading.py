from pathlib import Path
text=Path('components/ComparisonSection.tsx').read_text(encoding='utf-8')
old="""  const headingContent = (
    <>
      {copy.headingPrefix} <span className=\"text-brand-gradient\">{copy.headingHighlight}</span>
      {language === 'fa' ? '?' : '?'}
    </>
  );
"""
new="""  const questionMark = language === 'fa' ? '؟' : '?';
  const headingContent = (
    <>
      {copy.headingPrefix}{' '}
      <span className=\"text-brand-gradient\">{copy.headingHighlight}</span>
      <span>{questionMark}</span>
    </>
  );
"""
if old not in text:
    raise SystemExit('pattern not found')
text=text.replace(old,new)
Path('components/ComparisonSection.tsx').write_text(text, encoding='utf-8')
