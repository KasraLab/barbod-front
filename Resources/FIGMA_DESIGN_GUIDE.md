# 🎨 راهنمای جامع طراحی Figma برای پروژه Barbod

> **راهنمای کامل طراحی تمامی کامپوننت‌ها، صفحات و المان‌های پروژه Barbod در Figma**

---

## 📋 فهرست مطالب

1. [تنظیمات اولیه پروژه](#تنظیمات-اولیه-پروژه)
2. [سیستم طراحی (Design System)](#سیستم-طراحی)
3. [راهنمای طراحی کامپوننت‌ها](#راهنمای-طراحی-کامپوننتها)
4. [راهنمای طراحی صفحات](#راهنمای-طراحی-صفحات)
5. [افکت‌های 3D و انیمیشن](#افکتهای-3d-و-انیمیشن)
6. [گرافیک‌های دیجیتال](#گرافیکهای-دیجیتال)
7. [RTL و فونت فارسی](#rtl-و-فونت-فارسی)
8. [Export و Handoff](#export-و-handoff)

---

## 🚀 تنظیمات اولیه پروژه

### 1. ساخت پروژه جدید در Figma

```
1. وارد Figma شوید (figma.com)
2. New Design File → نام: "Barbod - Biometric Verification"
3. تنظیم Canvas:
   - Direction: RTL
   - Font: Vazirmatn (از Google Fonts)
```

### 2. نصب پلاگین‌های ضروری

از منوی **Plugins → Browse plugins in Community**:

```
✓ RTL-Mirroring - برای پشتیبانی RTL
✓ 3D Transforms - برای افکت‌های سه‌بعدی
✓ Blush - برای illustration های آماده
✓ Mesh Gradient - برای gradient های پیشرفته
✓ Noise & Texture - برای pattern ها
✓ Iconify - دسترسی به Lucide Icons
✓ Content Reel - برای محتوای تستی
✓ Contrast - چک accessibility
```

### 3. ساختار فایل

```
📁 Barbod Project
├── 🎨 Design System
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Shadows
│   ├── Components
│   └── Icons
├── 📱 Pages
│   ├── Home
│   ├── Solutions
│   ├── Docs
│   ├── Status
│   └── Pricing
├── 🧩 Components
│   ├── Navigation
│   ├── Hero
│   ├── Features
│   ├── Pricing
│   ├── Biometric
│   └── UI Elements
└── 🎬 3D Elements
    ├── Floating Cards
    ├── Cubes
    ├── Particles
    └── Backgrounds
```

---

## 🎨 سیستم طراحی

### رنگ‌ها (Color Palette)

#### 1. ساخت Color Styles در Figma

**مسیر:** Assets Panel → Local Styles → + → Color Style

**Dark Theme (پیش‌فرض):**

```css
/* Background Colors */
--bg-base: #0A1220
--bg-dim: #070D16
--surface-elevated: #0F172A
--surface-card: #1E293B

/* Text Colors */
--text-primary: #E6F0FF
--text-secondary: #A9B4C8
--text-tertiary: #6B7A92
--text-inverse: #0A1220

/* Brand Colors */
--brand-cyan: #0EA5E9
--brand-azure: #3B82F6
--brand-indigo: #1E40AF
--brand-teal: #14B8A6
--accent-cyan: #06B6D4

/* Status Colors */
--success: #10B981
--warning: #F59E0B
--danger: #EF4444
--info: #3B82F6

/* Border Colors */
--border-hairline: #1E293B
--border-subtle: #2D3A4F
--outline-focus: #38BDF8
```

**Light Theme:**

```css
--bg-base: #FFFFFF
--bg-dim: #F5F8FF
--surface-elevated: #FFFFFF
--surface-card: #F8FAFC

--text-primary: #0A1220
--text-secondary: #5B6B85
--text-tertiary: #8895AA

--border-hairline: #E2E8F0
--border-subtle: #CBD5E1
```

#### 2. ساخت Gradient Styles

**Brand Gradient (اصلی):**
- Type: Linear
- Angle: 135°
- Stops:
  - 0%: #0EA5E9 (Cyan)
  - 50%: #3B82F6 (Azure)
  - 100%: #1E40AF (Indigo)

**Secondary Gradients:**
```
Teal Gradient: 90° → #14B8A6 → #06B6D4
Purple Gradient: 135° → #6366F1 → #8B5CF6
Success Gradient: 135° → #10B981 → #14B8A6
```

---

### تایپوگرافی (Typography)

#### 1. نصب فونت Vazirmatn

```
1. دانلود از: github.com/rastikerdar/vazirmatn
2. نصب تمام weight ها (100-900)
3. در Figma: Text → Font → Vazirmatn
```

#### 2. Text Styles

**Headings:**

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|-------------|----------------|
| H1 | Vazirmatn | 72px | 700 | 80px | -0.01em |
| H2 | Vazirmatn | 60px | 700 | 68px | -0.01em |
| H3 | Vazirmatn | 48px | 600 | 56px | -0.01em |
| H4 | Vazirmatn | 36px | 600 | 44px | -0.01em |
| H5 | Vazirmatn | 24px | 600 | 32px | -0.01em |
| H6 | Vazirmatn | 20px | 600 | 28px | -0.01em |

**Body Text:**

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| Body Large | Vazirmatn | 18px | 400 | 28px |
| Body Regular | Vazirmatn | 16px | 400 | 24px |
| Body Small | Vazirmatn | 14px | 400 | 20px |
| Caption | Vazirmatn | 12px | 400 | 16px |

**Code:**
- Font: JetBrains Mono
- Size: 14px
- Weight: 400
- Direction: LTR

---

### فاصله‌گذاری (Spacing System)

**Auto Layout Spacing:**

```
xs:  4px   (var(--spacing-xs))
sm:  8px   (var(--spacing-sm))
md:  12px  (var(--spacing-md))
lg:  16px  (var(--spacing-lg))
xl:  24px  (var(--spacing-xl))
2xl: 32px  (var(--spacing-2xl))
3xl: 40px  (var(--spacing-3xl))
4xl: 56px  (var(--spacing-4xl))
5xl: 72px  (var(--spacing-5xl))
```

**استفاده در Figma:**
1. انتخاب Frame/Component
2. Auto Layout (Shift+A)
3. تنظیم Padding و Gap با مقادیر بالا

---

### گوشه‌های گرد (Border Radius)

```css
sm: 4px   (--radius-sm)
md: 8px   (--radius-md)
lg: 12px  (--radius-lg)
xl: 16px  (--radius-xl)
```

**ساخت Radius Style:**
- Corner Radius: رقم مورد نظر
- نام: "Radius/SM", "Radius/MD", ...

---

### سایه‌ها (Shadows)

#### Effect Styles

**Shadow SM:**
- Type: Drop Shadow
- X: 0, Y: 1
- Blur: 2
- Color: #000000, 30%

**Shadow MD:**
- X: 0, Y: 4
- Blur: 6
- Color: #000000, 40%

**Shadow LG:**
- X: 0, Y: 10
- Blur: 15
- Color: #000000, 50%

**Shadow XL:**
- X: 0, Y: 20
- Blur: 25
- Color: #000000, 60%

**Glow Effect (برای افکت نئون):**
- Type: Drop Shadow
- X: 0, Y: 0
- Blur: 40
- Color: #0EA5E9, 60%

---

## 🧩 راهنمای طراحی کامپوننت‌ها

### 1. Button Component

#### ساخت Master Component

**Variant Properties:**
- Variant: Primary, Secondary, Tertiary
- Size: SM (32px), MD (40px), LG (48px)
- State: Default, Hover, Active, Disabled

**ساخت مرحله به مرحله:**

```
1. Frame جدید → نام: "Button"
2. Auto Layout (Shift+A)
3. تنظیمات:
   - Horizontal Padding: 24px (MD), 32px (LG)
   - Vertical Padding: 8px (SM), 12px (MD), 16px (LG)
   - Gap: 8px
   - Border Radius: 8px
   - Fill: Brand Gradient (Primary) / Transparent (Secondary)
   - Border: 1px, Brand Azure (Secondary only)

4. اضافه کردن Text:
   - Content: "متن دکمه"
   - Style: Body Regular
   - Color: Text Inverse (Primary) / Brand Azure (Secondary)

5. اضافه کردن Icon (اختیاری):
   - Plugin → Iconify → Lucide → انتخاب آیکون
   - Size: 20px
   - Color: همرنگ متن

6. Create Component (Ctrl+Alt+K)
7. Add Variants برای state های مختلف
```

**States:**

| State | Fill Opacity | Border | Shadow |
|-------|--------------|--------|--------|
| Default | 100% | Normal | None |
| Hover | 100% | Normal | Shadow MD |
| Active | 90% | Normal | Shadow SM |
| Disabled | 50% | 50% opacity | None |

#### Angular Cut (گوشه بریده)

```
1. Vector Tool (V)
2. رسم Polygon با نقاط:
   - Top-left: (24, 0)
   - Top-right: (Width-24, 0)
   - Cut point: (Width, 24)
   - Bottom-right: (Width, Height)
   - Bottom-left: (0, Height)
   - Top-left: (0, 0)
3. استفاده به عنوان Mask
```

---

### 2. Card Component

**Variants:**
- Type: Elevated, Flat, Outlined
- Size: SM, MD, LG

**ساخت:**

```
1. Frame → Width: 320px, Height: Auto
2. Fill: Surface Elevated
3. Border: 1px, Border Hairline
4. Corner Radius: 12px
5. Effect: Shadow MD
6. Auto Layout:
   - Padding: 24px
   - Gap: 16px
   - Vertical: Auto

7. محتوا:
   - Header (Icon + Title)
   - Body (Description)
   - Footer (Button)
```

**با Angular Cut:**
- استفاده از clip-path مشابه Button
- نقطه برش: گوشه راست بالا (24px)

---

### 3. Input Component

**States:**
- Default
- Focused
- Error
- Disabled

```
1. Frame → Width: 320px, Height: 40px
2. Auto Layout
3. Fill: Surface Card
4. Border: 1px, Border Subtle
5. Radius: 8px
6. Padding: 12px

محتوا:
- Icon (اختیاری) - 20px
- Placeholder Text - Text Secondary
- Cursor (در حالت Focused)

Focus State:
- Border: 2px, Outline Focus
- Shadow: 0 0 0 3px rgba(56, 189, 248, 0.1)
```

---

### 4. Badge Component

**Variants:**
- Type: Default, Success, Warning, Danger, Info
- Size: SM, MD

```
1. Frame (Auto Layout)
2. Padding: 4px 8px (SM), 6px 12px (MD)
3. Radius: 4px (SM), 6px (MD)
4. Fill: Brand Azure 20% opacity
5. Text: Brand Azure, 12px (SM), 14px (MD)

Variants رنگی:
- Success: bg-success/20, text-success
- Warning: bg-warning/20, text-warning
- Danger: bg-danger/20, text-danger
```

---

### 5. Navbar Component

**ساخت:**

```
Frame: 1440px × 72px

Structure:
├── Container (Auto Layout)
│   ├── Logo
│   ├── Navigation Links (Auto Layout)
│   │   ├── Link: "راه‌کارها"
│   │   ├── Link: "مستندات"
│   │   ├── Link: "قیمت‌گذاری"
│   │   └── Link: "وضعیت سیستم"
│   └── Actions (Auto Layout)
│       ├── Search Icon
│       ├── Theme Toggle
│       ├── Language Toggle
│       └── Button: "شروع کنید"

تنظیمات:
- Position: Fixed (در اجرا)
- Fill: Surface Elevated + Blur
- Backdrop Filter: blur(20px)
- Border Bottom: 1px, Border Hairline
- Padding: 16px 64px
- Gap: 32px
```

---

### 6. Logo Component

**ساخت لوگو Barbod:**

```
1. Text: "باربُد"
   - Font: Vazirmatn
   - Weight: 700
   - Size: 28px

2. افکت Gradient:
   - Text Fill: Brand Gradient
   - (در Figma: Select Text → Fill → Gradient)

3. Icon (اختیاری):
   - شکل هندسی ساده (مثلث یا shield)
   - Fill: Brand Gradient
   - Size: 32px × 32px

4. Composition:
   - Auto Layout Horizontal
   - Gap: 12px
   - Align: Center
```

**Variations:**
- Full (Icon + Text)
- Icon Only (برای mobile)
- Monochrome (single color)

---

## 📄 راهنمای طراحی صفحات

### صفحه Home (صفحه اصلی)

#### 1. Hero Section با افکت 3D

**Frame Size:** 1440px × 900px (Desktop)

**ساخت گام به گام:**

```
بخش 1: Background
──────────────
1. Frame: Hero-BG
2. Fill: bg-base (#0A1220)

3. Gradient Orbs (3 عدد):
   - Circle 1:
     * Size: 384px × 384px
     * Position: Top-left 25%
     * Fill: Radial Gradient (Brand Cyan → Transparent)
     * Blur: 120px
     * Opacity: 30%
   
   - Circle 2:
     * Position: Bottom-right 25%
     * Fill: Radial Gradient (Brand Indigo → Transparent)
     * Blur: 120px
     * Opacity: 30%
     * Animation Delay: 1s (در code)
   
   - Circle 3:
     * Position: Center
     * Fill: Radial Gradient (Brand Azure → Transparent)
     * Blur: 120px
     * Opacity: 30%
     * Animation Delay: 2s

4. Grid Pattern:
   - Rectangle: Full size
   - Fill: None
   - Stroke: Brand Azure, 0.3 opacity
   - Pattern: 60px × 60px grid
   - Rotation: Perspective effect (در code)

بخش 2: 3D Floating Cards
────────────────────────
Card 1 (Top-Left):
1. Frame: 256px × 320px
2. Position: 10% from left, 25% from top
3. Layers:
   - Glow Layer (Back):
     * Rectangle: Same size
     * Fill: Gradient (Cyan → Azure)
     * Blur: 40px
     * Opacity: 20%
   
   - Card Layer (Front):
     * Rectangle با Angular Cut
     * Fill: Surface Elevated
     * Border: 1px, Brand Azure
     * Shadow: 0 25px 50px rgba(59,130,246,0.5)
     * Padding: 24px
     
     محتوا:
     - Circle: 48px, Brand Gradient, 50% opacity
     - Divider Lines (2 خط):
       * Width: Full & 75%
       * Height: 12px
       * Fill: Brand Azure, 30% opacity

Card 2 (Top-Right):
- مشابه Card 1 با تغییرات:
  * Size: 288px × 288px
  * Position: 10% from right, 33% from top
  * Circle در وسط: 128px
  * Animation: Ping effect

Rotating Cubes (5 عدد):
- برای هر کیوب:
  1. Frame: 80px × 80px
  2. 6 Face (جلو، عقب، چپ، راست، بالا، پایین)
  3. هر Face:
     - Rectangle: 80px × 80px
     - Fill: Brand Gradient, 10% opacity
     - Border: 1px, Brand color
  4. Arrange در perspective 3D

بخش 3: Content (متن و دکمه‌ها)
──────────────────────────────
Container:
- Width: 896px (max-width)
- Align: Center
- Auto Layout Vertical
- Gap: 32px

1. Badge:
   - Auto Layout
   - Padding: 8px 16px
   - Radius: Full (999px)
   - Fill: Surface Card + Blur
   - Border: 1px, Border Subtle
   - Icon: Sparkles (Lucide)
   - Text: "سیستم احراز هویت هوشمند"

2. Heading:
   - Style: H1
   - Text: "احراز هویت دیجیتال"
   - Line 2: "در عرض ثانیه‌ها" (با Gradient)

3. Subtitle:
   - Style: Body Large
   - Color: Text Secondary
   - Max Width: 768px
   - Line Height: 1.6

4. CTA Buttons:
   - Auto Layout Horizontal
   - Gap: 16px
   - Button 1: Primary, LG, "شروع رایگان"
   - Button 2: Secondary, LG, "مشاهده دمو"

5. Stats Row:
   - Grid: 3 columns
   - Gap: 32px
   - هر آیتم:
     * Value: H3 با Gradient
     * Label: Caption, Text Secondary

بخش 4: Scroll Indicator
────────────────────────
- Position: Bottom center
- Shape: Rounded rectangle (24px × 40px)
- Border: 2px, Brand Azure
- Dot inside: 6px circle
- Animation: Bounce (در code)
```

#### حالت Responsive (Mobile: 375px)

```
تغییرات:
- Hero height: 667px
- Stack layout (vertical)
- 3D Cards: Hidden یا کوچکتر
- Heading: H2 (48px)
- Stats: 1 column
- Buttons: Full width, stacked
```

---

#### 2. Trust Section

**Frame:** 1440px × 400px

```
Container:
- Background: Surface Elevated
- Border Top: 1px, Border Hairline
- Padding: 80px 0

Content:
- Auto Layout: 4 columns
- Gap: 64px
- Center aligned

هر Stat:
1. Value (Large):
   - Text: "۹۹.۴٪" / "<۲s" / "۹۹.۹٪" / "+۲۵۰"
   - Style: H2
   - Fill: Brand Gradient
   - Animation: Count up (در code)

2. Label:
   - Text: "دقت" / "زمان پاسخ" / "آپتایم" / "شرکت‌های فعال"
   - Style: Body Small
   - Color: Text Secondary

3. Icon (بالای value):
   - Size: 40px
   - Color: Brand Azure
   - Examples: Target, Zap, Shield, Building
```

---

#### 3. Features3D Section

**Frame:** 1440px × Auto

**Grid Layout:**

```
Container:
- Padding: 160px 64px
- Background: bg-base

Header:
- Center aligned
- Max Width: 768px
- Badge + Heading + Description

Feature Cards Grid:
- Layout: 3 columns × 2 rows
- Gap: 32px
- Perspective: 1000px (برای 3D effect)

هر Feature Card:
──────────────
Size: 384px × 320px

Layers:
1. Glow (hover effect):
   - Position: Absolute, -4px offset
   - Gradient: مطابق feature color
   - Blur: 40px
   - Opacity: 0 (20% در hover)

2. Card Container:
   - Fill: Surface Elevated
   - Border: 1px, Border Hairline (→ Brand Azure در hover)
   - Radius: 12px
   - Angular Cut: راست بالا
   - Shadow: SM (→ MD در hover)
   - Padding: 32px

3. Background Pattern:
   - Circle: 128px
   - Fill: Feature color, 5% opacity
   - Position: راست بالا

4. 3D Icon Container:
   Structure:
   - Frame: 64px × 64px
   - Layers (stacked in Z):
     * Layer 3 (Back): Gradient, 20% opacity, translateZ(10px)
     * Layer 2 (Mid): Gradient, 30% opacity, translateZ(5px)
     * Layer 1 (Front): Surface Card + Icon, translateZ(0)

5. Content:
   - Title: H5
   - Description: Body Regular, Text Secondary
   - Line Height: 1.6

6. Hover Indicator:
   - Height: 4px
   - Width: 0 (→ 100% در hover)
   - Background: Feature Gradient
   - Position: Bottom

Features:
1. تشخیص چهره - Icon: Scan - Color: Cyan
2. تست زنده‌بودن - Icon: Eye - Color: Azure
3. OCR هوشمند - Icon: FileCheck - Color: Indigo
4. امنیت پیشرفته - Icon: Shield - Color: Success
5. سرعت بالا - Icon: Zap - Color: Warning
6. حریم خصوصی - Icon: Lock - Color: Teal
```

**Stats Display (در انتهای section):**

```
Container:
- Width: Full
- Padding: 48px
- Border Radius: 12px
- Fill: Surface Card
- Border: 1px, Border Hairline

Background:
- Circle: 384px
- Fill: Brand Gradient
- Blur: 100px
- Opacity: 10%
- Position: Center

Stats Grid:
- Layout: 3 columns
- Gap: 32px

هر Stat:
- Emoji: 64px
- Value: H3, Brand Gradient
- Label: Caption, Text Secondary
- Hover: Scale 1.1 + Rotate
```

---

#### 4. Pricing3D Section

**Frame:** 1440px × Auto

**ساخت:**

```
Container:
- Padding: 160px 64px
- Background: bg-base + Orbs

Background Orbs:
- 2 Circles (384px)
- Positions: Top-left 25%, Bottom-right 25%
- Blur: 150px
- Opacity: 10%

Pricing Cards:
──────────────
Layout: 3 columns
Gap: 32px
Perspective: 2000px

Card Structure (برای هر پلن):
────────────────────────────

Size: 384px × Auto

1. Glow Layer:
   - Inset: -8px
   - Gradient: Plan gradient
   - Blur: 80px
   - Opacity: 0 (→ 30% در hover)

2. Popular Badge (فقط برای پلن حرفه‌ای):
   - Position: Top center, -16px offset
   - Padding: 6px 16px
   - Radius: Full
   - Fill: Brand Gradient
   - Text: "محبوب‌ترین", Text Inverse

3. Card Container:
   - Fill: Surface Card (پلن محبوب) / Surface Elevated (بقیه)
   - Border: 2px, Brand Azure (محبوب) / 1px, Border Hairline
   - Radius: 12px
   - Shadow: XL (محبوب) / MD
   - Padding: 32px

4. Background Pattern:
   - Circle: 192px
   - Fill: Plan color, 5% opacity
   - Position: راست بالا

5. Icon (3D):
   مشابه Features:
   - Size: 56px
   - Layers: 2 gradient + 1 solid
   - Icons: Zap, Rocket, Building2

6. Plan Name:
   - Text: "استارتاپ" / "حرفه‌ای" / "سازمانی"
   - Style: H4

7. Description:
   - Style: Body Small
   - Color: Text Secondary

8. Price:
   - Auto Layout Horizontal
   - Price Number: H2, Brand Gradient
   - Period: Body Regular, Text Secondary

9. Features List:
   - Auto Layout Vertical
   - Gap: 16px
   
   هر Feature:
   - Auto Layout Horizontal
   - Gap: 12px
   - Icon: Check in circle (20px, plan color)
   - Text: Body Small, Text Secondary

10. CTA Button:
    - Variant: Primary (محبوب) / Secondary
    - Size: LG
    - Full Width
    - Shadow: LG (محبوب)

Plans:
─────
1. استارتاپ (رایگان):
   - Color: Teal
   - Icon: Zap
   - Features: 6 items

2. حرفه‌ای (۲,۴۹۰,۰۰۰/ماه):
   - Color: Azure
   - Icon: Rocket
   - Features: 8 items
   - Highlighted: true
   - Transform: translateY(-32px)

3. سازمانی (سفارشی):
   - Color: Indigo
   - Icon: Building2
   - Features: 9 items
```

**Bottom Note:**

```
Container:
- Margin Top: 64px
- Center aligned

Content:
- Text: Guarantee text
- Checkmarks: 3 items
- Style: Caption, Text Tertiary
```

---

#### 5. Biometric Components

##### LivenessCheck Component

**Frame:** 400px × 600px

```
Structure:
├── Camera Preview (360px × 480px)
│   ├── Video Feed placeholder
│   ├── Face Oval Overlay
│   └── Challenge Indicator
├── Instruction Panel
│   ├── Icon (animated)
│   ├── Instruction Text
│   └── Progress Bar
└── Controls
    ├── Cancel Button
    └── Status Indicator

Face Oval:
- Shape: Ellipse
- Size: 240px × 320px
- Stroke: 3px
- Color: Brand Azure (default) / Success (detected) / Warning (error)
- Dash: 10, 5 (animated rotation)

Challenge Icons:
- TurnLeft: Arrow-Left
- TurnRight: Arrow-Right
- Blink: Eye-Off
- Smile: Smile icon
- Size: 48px
- Color: Brand Azure

Progress Bar:
- Width: 100%
- Height: 4px
- Fill: Brand Gradient
- Animation: Width 0 → 100%

States:
1. Waiting: Gray overlay + "در انتظار"
2. Challenge: Instruction visible + Oval highlight
3. Processing: Spinner + "در حال پردازش..."
4. Success: Green check + "موفق"
5. Fail: Red X + "ناموفق"
```

##### SelfieCapture Component

**Frame:** 400px × 600px

```
Similar structure to LivenessCheck:

Camera View:
- Full bleed
- Face detection grid overlay

Quality Indicators:
Position: راست بالا
Auto Layout Vertical
Gap: 8px

Indicators:
- ✓ نور مناسب (Success)
- ⚠ خیلی تاریک (Warning)
- ⚠ تابش نور (Warning)
- ⚠ خارج از کادر (Danger)

Capture Button:
- Size: 80px circle
- Fill: White
- Inner Circle: 68px, Brand Gradient
- Position: Bottom center
- Shadow: LG

Preview Mode:
- Captured image
- Retake button (Secondary)
- Confirm button (Primary)
```

##### DocumentCapture Component

**Frame:** 600px × 800px

```
Layout:
├── Document Type Selector
├── Camera View with Guide
└── Action Buttons

Type Selector:
- Auto Layout Horizontal
- Gap: 12px
- Options:
  * گذرنامه (Passport icon)
  * کارت ملی (ID Card icon)
  * گواهینامه (License icon)
- Active state: Brand Gradient background

Document Guide:
- Rectangle outline
- Size: Based on document type
- Corners: 4 corner brackets (L-shaped)
- Color: Brand Azure (detecting) / Success (aligned)
- Dash animation

Quality Warnings:
- "مدرک کج است" (Skew warning)
- "تابش نور" (Glare warning)
- Position: Top

OCR Result Display:
- Card container
- Extracted fields:
  * نام و نام خانوادگی
  * شماره ملی/گذرنامه
  * تاریخ تولد
  * محل صدور
- Edit button per field
```

##### VoiceVerification Component

**Frame:** 400px × 500px

```
Layout:
├── Passphrase Display
├── Waveform Visualization
├── Record Button
└── Status Display

Passphrase Card:
- Padding: 24px
- Fill: Surface Card
- Border: 1px, Border Hairline
- Radius: 12px
- Text: Large, Center aligned
- Example: "پنج، سه، هشت، یک، نه"

Waveform:
- Height: 120px
- Width: 100%
- Bars: 50 vertical bars
- Color: Brand Azure
- Animation: Height based on audio level

Record Button:
- Size: 96px circle
- States:
  * Default: Gray outline + Mic icon
  * Recording: Red fill + pulsing animation
  * Recorded: Brand Gradient + Play icon

Timer:
- Style: H4
- Color: Brand Azure (recording) / Text Secondary
- Format: "00:00"

Similarity Meter (after verification):
- Progress bar
- Width: 100%
- Height: 8px
- Fill: Gradient (Danger → Warning → Success)
- Label: "میزان تشابه: ۹۲٪"
```

---

## 🎬 افکت‌های 3D و انیمیشن

### راهنمای ساخت افکت‌های 3D در Figma

#### 1. Perspective & 3D Transforms

**استفاده از پلاگین "3D Transforms":**

```
1. نصب پلاگین 3D Transforms
2. انتخاب Layer/Frame
3. Plugins → 3D Transforms
4. تنظیمات:
   - Rotate X: -30° to 30°
   - Rotate Y: -30° to 30°
   - Rotate Z: 0° to 360°
   - Translate Z: 0 to 100px
   - Perspective: 1000px
```

**Layers در 3D:**

برای ایجاد depth:
```
Layer 1 (Back): 
- Opacity: 20%
- Blur: 2px
- Offset: 10px

Layer 2 (Mid):
- Opacity: 30%
- Blur: 1px
- Offset: 5px

Layer 3 (Front):
- Opacity: 100%
- Sharp
- Offset: 0px
```

#### 2. Floating Animation Setup

**در Figma (برای نمایش):**

```
1. Duplicate layer 3 بار
2. Position frames:
   - Frame 1: Y = 0 (start)
   - Frame 2: Y = -20 (middle)
   - Frame 3: Y = 0 (end)

3. Prototype:
   - Frame 1 → Frame 2: Smart Animate, 3s, Ease In-Out
   - Frame 2 → Frame 3: Smart Animate, 3s, Ease In-Out
   - Frame 3 → Frame 1: Smart Animate, 0s, Instant
   - Loop: Yes
```

**Export برای Developer:**
- ذکر animation در annotation:
  ```
  Animation: Float
  Duration: 6s
  Ease: ease-in-out
  Loop: infinite
  Transform: translateY(0) → translateY(-20px) → translateY(0)
  ```

#### 3. Particle Background

**ساخت در Figma:**

```
1. Frame: 1440px × 900px
2. Fill: bg-base

Particles:
- تعداد: ~50 دایره
- Size: 2-6px (random)
- Color: Brand Azure, 20-40% opacity
- Distribution: Random placement
- Blur: 1-2px

Network Lines:
- بین particles نزدیک به هم
- Stroke: 1px
- Color: Brand Azure, 10% opacity
- Length: Max 150px

در Component:
- Name: "Particle Background"
- Instance: Absolute position, Full bleed
```

**Animation Notes:**
```
کد: Canvas-based animation
- Particle movement: Random walk
- Connection lines: Dynamic based on distance
- Mouse interaction: Particles move away from cursor
```

#### 4. Gradient Mesh

**ساخت با پلاگین "Mesh Gradient":**

```
1. Rectangle: 1440px × 900px
2. Plugin → Mesh Gradient
3. تنظیمات:
   - Grid: 4×4
   - Colors: Brand Cyan, Azure, Indigo
   - Randomize: 20%
   - Blur: 100px
4. Opacity: 30%
5. Blend Mode: Screen
```

#### 5. Glassmorphism Effect

**Recipe:**

```
Layer Stack (از پایین به بالا):
1. Background: Anything
2. Blur Layer:
   - Fill: White, 5% opacity
   - Effect: Background Blur, 20px
3. Border:
   - Stroke: 1px
   - Color: White, 10% opacity
4. Content: Text, icons, etc.

در Figma:
- Background blur در حال حاضر supported نیست
- استفاده از Layer Blur + Low opacity fill
```

---

## 🖼️ گرافیک‌های دیجیتال

### 1. Hero Illustration

**Concept:** Abstract biometric + 3D elements

**ساخت:**

```
Canvas: 1200px × 800px

Elements:
1. Face Silhouette (Abstract):
   - Pen tool: نیم‌رخ چهره
   - Fill: Gradient (Cyan → Azure)
   - Opacity: 30%
   - Blur: 10px

2. Scan Lines:
   - 10-15 خط horizontal
   - Width: Varied
   - Stroke: 2px, Brand Azure
   - Opacity: 40%
   - Animation: Slide right (در code)

3. Data Points:
   - Small circles (8px)
   - Fill: Brand Cyan
   - Glow: 20px blur
   - Position: On face contour
   - Animation: Pulse

4. 3D Grid (perspective):
   - Grid: 20×20
   - Stroke: 1px, Brand Azure, 20%
   - Transform: rotateX(60deg)
   - Position: Below face

5. Floating Fingerprint:
   - Icon: Fingerprint (Lucide)
   - Size: 120px
   - Fill: Brand Gradient
   - Opacity: 40%
   - Animation: Rotate slowly

6. Particle Glow:
   - 30-40 small dots
   - Size: 3-8px
   - Color: White
   - Opacity: 60%
   - Blur: 2px

Composition:
- Center aligned
- Z-index layering:
  * Grid (back)
  * Face silhouette
  * Scan lines
  * Data points
  * Fingerprint
  * Particles (front)
```

### 2. Feature Icons (Custom)

**Style Guide:**

```
Size: 64px × 64px (export to 256px for retina)
Stroke: 2px
Color: Single color or gradient
Style: Geometric, minimal

Icon Creation:
1. Grid: 64×64, 4px increments
2. Pen Tool: Draw paths
3. Stroke: 2px, Round cap, Round join
4. Fill: None (outline style)
5. Details: Minimal, clear at small sizes

Examples:
- Face Recognition: Circle + Face mesh
- Liveness: Eye + Sparkle
- Document: Rectangle + Text lines
- Voice: Microphone + Wave
- Security: Shield + Lock
- API: Code brackets + Arrow

Export:
- SVG: Outline stroke
- PNG: 256px, transparent background
```

### 3. Isometric Illustrations

**ساخت Isometric Grid در Figma:**

```
1. Plugin → Isometric
2. یا manual:
   - Rotate: 30°
   - Shear: 30°

Isometric Card Example:
1. Rectangle: 200×140 (front face)
2. Duplicate: Shear + Position (top face)
3. Duplicate: Shear + Position (side face)
4. Colors: Different shades
5. Shadow: Below card

Elements:
- Isometric phone/tablet
- Isometric document
- Isometric server
- Isometric shield
```

---

## 🌐 RTL و فونت فارسی

### تنظیمات RTL در Figma

#### 1. فعال‌سازی RTL

```
فعلاً Figma RTL native support ندارد
راه‌حل‌ها:

A. پلاگین RTL-Mirroring:
   1. نصب پلاگین
   2. انتخاب Frame/Page
   3. Run plugin → Mirror selection

B. Manual RTL:
   - Text alignment: Right
   - Auto Layout direction: Reverse
   - Icons: Mirror horizontally (برای directional icons)
```

#### 2. نصب و استفاده از فونت Vazirmatn

```
در Figma:
1. Text → Font → Type "Vazirmatn"
2. اگر نصب نیست:
   - دانلود از GitHub
   - نصب فونت در سیستم
   - Refresh Figma

Weights موجود:
- Thin: 100
- ExtraLight: 200
- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700
- ExtraBold: 800
- Black: 900

استفاده:
- Headings: 600-700
- Body: 400-500
- Captions: 400
```

#### 3. Layout Guidelines

```
RTL Considerations:

1. Navigation:
   - Links: Right-aligned
   - Logo: Right side
   - Menu icon: Left side

2. Cards:
   - Icon: Right side
   - Text: Right-aligned
   - Actions: Left side

3. Forms:
   - Labels: Right-aligned
   - Input text: Right-to-left
   - Icons: Right side (prefix), Left side (suffix)

4. Breadcrumbs:
   - Separator: ← (not →)
   - Order: Home ← Category ← Page

5. Tables:
   - Headers: Right-aligned
   - Data: Right-aligned (RTL text)
   - Actions column: Left side

6. Charts:
   - Labels: Right-aligned
   - Legend: Right side
```

#### 4. Dual Language Support

**Component Variants:**

```
برای هر component:
- Property: Language (FA, EN)
- FA Variant:
  * Text: Persian
  * Direction: RTL
  * Font: Vazirmatn
- EN Variant:
  * Text: English
  * Direction: LTR
  * Font: Inter/System

Example: Button Component
├── Primary
│   ├── FA (text: "شروع کنید")
│   └── EN (text: "Get Started")
└── Secondary
    ├── FA
    └── EN
```

---

## 📤 Export و Handoff

### 1. Export Settings

#### برای Assets

**Icons:**
```
Format: SVG
- Outline stroke: ✓
- Include "id" attribute: ✓
- Simplify stroke: ✓
- Size: Original (64px)
```

**Images:**
```
Format: PNG
- Scale: 2x (for Retina)
- Compression: Lossy (80%)
- Max file size: 500KB

Format: WebP (alternative)
- Scale: 2x
- Quality: 85%
```

**Illustrations:**
```
Format: SVG (vector)
- Clean up: ✓
- Flatten transforms: ✓

Format: PNG (raster fallback)
- Scale: 2x
- Transparent background
```

#### برای Components

```
Export as:
- Code snippets (با پلاگین)
- React components (Figma to Code)
- CSS tokens

پلاگین‌های مفید:
- "Figma to Code" (HTML/React/Vue)
- "Design Tokens" (برای variables)
```

### 2. Developer Handoff

#### استفاده از Figma Inspect

```
1. Dev Mode را فعال کنید
2. Share with developers:
   - Can view + Dev mode
   - Link: Share URL

در Dev Mode:
- دسترسی به:
  * All spacing values
  * Color codes
  * Font specs
  * CSS code
  * Assets export
```

#### Annotations

**اضافه کردن یادداشت‌های توسعه:**

```
استفاده از Sticky Notes:
- Color coded:
  * Red: Important/Required
  * Yellow: Nice to have
  * Blue: Info
  * Green: Done

Annotation Examples:
"این دکمه باید 3D tilt effect داشته باشد در hover"
"Animation: Float 6s infinite ease-in-out"
"RTL: Icon باید mirror شود"
"برای mobile: stack vertically"
```

#### Component Documentation

**برای هر Component:**

```
1. Name: واضح و consistent
2. Description: کاربرد و context
3. Properties:
   - List all variants
   - Default values
   - States
4. Behavior:
   - Interactions
   - Animations
   - Responsive behavior
5. Code reference:
   - مسیر فایل
   - Props interface
```

### 3. Design Tokens Export

**استفاده از پلاگین "Design Tokens":**

```
1. نصب پلاگین
2. Generate tokens from:
   - Color Styles → colors.json
   - Text Styles → typography.json
   - Effect Styles → shadows.json

Format:
{
  "color": {
    "brand": {
      "cyan": { "value": "#0EA5E9" },
      "azure": { "value": "#3B82F6" },
      "indigo": { "value": "#1E40AF" }
    }
  }
}

Import در CSS:
استفاده از Style Dictionary
```

### 4. Responsive Specs

**Breakpoints:**

```
در Figma - Create Frames:
├── Desktop: 1440px
├── Laptop: 1024px
├── Tablet: 768px
└── Mobile: 375px

برای هر breakpoint:
- Layout changes
- Font size adjustments
- Spacing changes
- Hidden/visible elements

Annotation Format:
"@1024px: 2 columns"
"@768px: Stack vertically, font-size: 32px"
"@375px: Hide decorative elements"
```

---

## 📋 چک‌لیست نهایی

### قبل از Handoff

```
□ تمام Styles تعریف شده (Colors, Text, Effects)
□ همه Components با Variants کامل
□ Naming Convention consistent است
□ RTL layout برای تمام صفحات
□ Responsive frames برای breakpoints اصلی
□ Annotations برای interactions و animations
□ Asset export settings تنظیم شده
□ Dev Mode فعال و Share شده
□ Prototypes برای user flows
□ Accessibility (contrast ratios) چک شده
```

### Quality Checks

```
□ Contrast Ratio:
  - AA (4.5:1) برای Body text
  - AAA (7:1) برای Small text
  پلاگین: "Contrast"

□ Consistency:
  - Spacing: از scale system
  - Colors: از defined palette
  - Typography: از Text Styles
  - Icons: consistent size و style

□ Mobile Friendly:
  - Touch targets: حداقل 44×44px
  - Readable text: حداقل 14px
  - Adequate spacing: حداقل 8px

□ Performance:
  - Image sizes: <500KB
  - Total assets: Optimized
  - Font subsets: فقط characters مورد نیاز
```

---

## 🔗 منابع و لینک‌های مفید

### آموزش‌های Figma

```
رسمی:
- Figma Learn: figma.com/resources/learn-design
- YouTube Figma: youtube.com/@Figma

فارسی:
- یوتیوب: جستجو "آموزش Figma فارسی"
- Aparat: "طراحی UI در Figma"

پیشرفته:
- Advanced Prototyping
- Auto Layout Mastery
- Component Architecture
```

### Community Resources

```
Figma Community:
- community.figma.com

Search Keywords:
- "Dark theme dashboard"
- "Biometric interface"
- "Fintech design system"
- "3D components"

Useful Files:
- JetBrains Design System
- Stripe Dashboard
- Vercel Design
```

### پلاگین‌های ضروری

```
Design:
- Iconify (icons)
- Unsplash (images)
- Remove BG (background removal)
- Arc (organic shapes)

Development:
- Figma to Code
- Design Tokens
- CSS Gen
- Lorem Ipsum (Persian)

3D & Effects:
- 3D Transforms
- Mesh Gradient
- Noise & Texture
- Blobs

Accessibility:
- Contrast
- Stark
- A11y Checklist
```

### Inspiration

```
Websites:
- dribbble.com/search/fintech-dark
- behance.net/search/biometric
- awwwards.com
- landingfolio.com

Specific:
- jibit.ir (reference)
- stripe.com
- vercel.com
- linear.app (dark UI excellence)
```

---

## 🎯 نکات پایانی

### Best Practices

```
1. Component-First Approach:
   - همه چیز را component کنید
   - استفاده مجدد > تکرار

2. Naming Convention:
   - واضح و descriptive
   - Hierarchical: Component/Variant/State
   - Example: "Button/Primary/Hover"

3. Organization:
   - Pages: By section (Home, Components, etc.)
   - Layers: Group related items
   - Naming: Clear labels

4. Version Control:
   - Save versions regularly
   - نام‌گذاری: "v1.0 - Initial Design"
   - Branch برای experiments

5. Collaboration:
   - Comments برای feedback
   - Shared libraries
   - Clear documentation
```

### Common Mistakes to Avoid

```
❌ استفاده از hardcoded values به جای styles
✅ Use color/text styles consistently

❌ تکرار components بدون variant
✅ Create comprehensive variants

❌ نادیده گرفتن constraints در responsive
✅ Set proper constraints for scaling

❌ Export در quality پایین
✅ Always 2x for Retina, optimized

❌ فراموش کردن states (hover, active, disabled)
✅ Design all interactive states
```

---

**تاریخ آخرین بروزرسانی:** November 2025
**نسخه:** 1.0.0
**پروژه:** Barbod - Biometric Verification Platform

برای سوالات یا پیشنهادات، از بخش Comments در Figma استفاده کنید.
