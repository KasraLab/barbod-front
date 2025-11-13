from pathlib import Path
text=Path("components/ComparisonSection.tsx").read_text(encoding="utf-8")
for i,line in enumerate(text.splitlines(),1):
    if 150<=i<=170:
        print(f"{i:03}: {line}")
