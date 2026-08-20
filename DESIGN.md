---
name: dekhlo.link
description: An editorial boutique window for turning everyday garment photos into polished, share-ready posts.
colors:
  ink: "#12110f"
  paper: "#f7f3e8"
  mint: "#4de6a5"
  lilac: "#c8a7ff"
  paper-deep: "#eee8d8"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.05rem, 12.7vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 12vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.83rem"
    fontWeight: 700
    lineHeight: 1.15
rounded:
  sm: "8px"
  md: "16px"
  circle: "50%"
  full: "999px"
spacing:
  2xs: "8px"
  xs: "12px"
  sm: "16px"
  md: "18px"
  lg: "28px"
  xl: "32px"
  2xl: "48px"
  section-mobile: "92px"
  section-desktop: "130px"
components:
  navigation-bar:
    backgroundColor: "color-mix(in srgb, #f7f3e8 94%, transparent)"
    textColor: "{colors.ink}"
    padding: "0 16px"
    height: "72px"
  header-chat:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "9px 14px"
    height: "44px"
  header-chat-hover:
    backgroundColor: "color-mix(in srgb, {colors.mint} 78%, {colors.paper})"
    textColor: "{colors.ink}"
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "color-mix(in srgb, {colors.mint} 78%, {colors.paper})"
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  transform-frame:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.md}"
    width: "min(100%, 560px)"
  demo-caption:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "14px 2px 0"
  process-feature:
    backgroundColor: "color-mix(in srgb, {colors.mint} 23%, {colors.paper})"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "34px"
  faq-item:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "24px 50px 24px 0"
---

# Design System: dekhlo.link

## Overview

**Creative North Star: "Editorial Boutique Window"**

The system presents dekhlo.link like a small fashion storefront set on warm paper: high-contrast black editorial type, clean garment imagery, open-corner Mint and Lilac marks, and crisp rules that feel drawn rather than decorated. It is friendly, tailored, and direct, with generous breathing room and a low information density instead of a corporate or technical interface.

Fraunces carries the expressive voice while Manrope keeps every explanation and action practical. Most surfaces remain flat and paper-led; depth is reserved for the interactive comparison control. Mint marks action and the polished outcome, while Lilac provides transformation emphasis and larger editorial color fields.

**Key Characteristics:**

- Warm paper canvases with near-black ink and two optimistic accents.
- Oversized, tightly set serif statements paired with compact sans-serif utility copy.
- Crisp outlines, open corners, pill actions, and a circular comparison handle.
- Spacious mobile-first layouts that become structured editorial grids on larger screens.
- Purposeful motion centered on transformation, with a complete reduced-motion fallback.

## Colors

The palette behaves like a boutique window display: warm neutrals hold the product, Mint invites action, and Lilac supplies an editorial flash.

### Primary

- **Fresh Mint:** The primary action and outcome color, used for WhatsApp entry points, the ready-state label, the process strip, and selected step markers.

### Secondary

- **Editorial Lilac:** The transformation and emphasis color, used for the hero underline, open-corner details, hover states, numbered markers, and the large benefits field.

### Neutral

- **Boutique Ink:** The default text, outline, icon, primary-button, closing-section, and footer color.
- **Warm Paper:** The page canvas, inverse text, labels, control surfaces, and light logo tiles.
- **Deep Paper:** A slightly denser warm neutral reserved for the transformation frame while media is loading or exposed.

### Named Rules

**The Two-Accent Rule.** Mint signals action and a ready outcome; Lilac signals editorial emphasis and transformation. Only Mint behaves as an interactive accent. Their contrast is intentional, so avoid introducing additional accent hues.

### Color Modes

The page follows the system color preference. Light mode uses Warm Paper and Boutique Ink directly. Dark mode swaps those semantic surface and text roles while keeping Mint and Lilac recognisable. Every section remains inside the active page theme, so no individual section creates an isolated light or dark inversion.

## Typography

**Display Font:** Fraunces (with Georgia and serif fallbacks)
**Body Font:** Manrope (with Arial and sans-serif fallbacks)

**Character:** Fraunces gives the brand a confident fashion-editorial voice without becoming precious. Manrope makes the promise, instructions, labels, and actions feel contemporary, helpful, and easy to scan.

### Hierarchy

- **Display** (700, fluid `3.05rem-5rem`, 0.98 line-height): Hero-scale promises; the desktop hero uses a narrower responsive override to preserve the side-by-side composition.
- **Headline** (700, fluid section-scale type, 0.96 line-height): Major section statements, always balanced and tightly tracked.
- **Title** (700, `1.15rem`, 1.3 line-height): Step and benefit headings.
- **Body** (400, `1rem`, 1.6 line-height): Default reading copy; explanatory blocks stay intentionally narrow at roughly 31-43rem.
- **Label** (700, compact sans-serif): Buttons, chips, navigation actions, and short annotations.

### Named Rules

**The Two-Voice Rule.** Fraunces speaks only in large editorial statements; Manrope handles reading, labels, steps, FAQs, and actions.

## Layout

The system is mobile-first and single-column by default. A centered shell is capped at 1220px, with 16px side gutters on compact screens and 32px side gutters from 700px upward. Section rhythm is generous: core editorial sections use 92px top spacing and 100px bottom spacing on mobile, then settle into 130px vertical spacing on desktop.

At 700px, explanatory and FAQ groups become two-column grids, the three-step process becomes a ruled three-column row, and the footer distributes across three columns. At 960px, the header becomes sticky, the hero becomes a two-column editorial spread with a minimum 440px media column, and major grid gaps expand. At 420px and below, the header action shortens and the hero emphasis is allowed to wrap.

The design relies on alignment, whitespace, and 1-1.5px rules rather than nested cards. Keep body copy to comfortable reading widths and let large headings occupy short, deliberate line lengths.

## Elevation & Depth

The visual system is flat by default. Layering comes from Paper, Lilac, Mint, product imagery, and crisp outlines; cards and page sections do not float. The transformation handle is the single lifted control, using a compact ambient shadow (`0 8px 18px rgba(18, 17, 15, 0.16)`) and an Ink hairline. Its focus state adds a 4px Mint halo. The desktop header uses a translucent Paper layer with a 12px backdrop blur rather than a drop shadow.

### Shadow Vocabulary

- **Comparator Hairline** (`0 0 0 1px rgba(18, 17, 15, 0.28)`): Defines the draggable divider against both photographs.
- **Comparator Lift** (`0 8px 18px rgba(18, 17, 15, 0.16)`): Lifts only the circular drag handle.
- **Comparator Focus** (`0 0 0 4px #4de6a5, 0 8px 18px rgba(18, 17, 15, 0.16)`): Makes keyboard focus unmistakable without changing the control's form.

### Named Rules

**The Flat-Window Rule.** Surfaces stay flat and outlined; shadow belongs to the comparator handle and its focus treatment, not to content cards.

## Shapes

The form language combines crisp editorial frames with friendly controls. Structural containers use straight 1-1.5px Ink rules; the transformation media frame uses a firm 2px outline and a restrained 16px radius. Buttons are fully pill-shaped, while the comparator handle is circular. Small brand tiles use an 8px radius.

The signature open-window motif is an incomplete, heavy corner rather than a closed box. On the transformation frame it appears as 86px Mint and Lilac corners with an 18px stroke and a softened 28px outer bend. Preserve its openness: it should frame content without enclosing it.

## Components

### Buttons

- **Shape:** Fully rounded, outlined pills with a 56px minimum touch height.
- **Primary:** Boutique Ink fill with Warm Paper text and a right-pointing line arrow; horizontal padding expands from 20px to 26px at 700px.
- **Light:** Fresh Mint fill with Boutique Ink text on dark sections, retaining the Paper border.
- **Hover / Focus:** Buttons lift 3px and swap to Editorial Lilac on hover. All keyboard focus uses a 3px outline with a 4px offset; inverse sections switch the outline to Warm Paper.
- **Header Action:** A compact 44px Mint pill with a 1.5px Ink outline; it lifts 2px and changes to Lilac on hover.

### Chips

- **Style:** Compact, bold Manrope labels on Warm Paper with a 1px Ink border and full pill radius.
- **State:** The polished-result label switches its background to Fresh Mint; the phone-photo label stays Paper.

### Cards / Containers

- **Corner Style:** Most content groups are open and square; only the media frame and small brand tiles use rounded corners.
- **Background:** Warm Paper is the light canvas, Lilac can form a full-width editorial field, and Deep Paper marks the closing surface without inverting the page theme.
- **Shadow Strategy:** Flat by default; refer to Elevation & Depth for the comparator-only exception.
- **Border:** Thin Ink rules separate steps, benefits, FAQs, the process strip, and navigation.
- **Internal Padding:** Repeated content rows use approximately 28px vertical padding, increasing modestly in desktop grids.

### Inputs / Fields

- **Style:** The implemented input is the invisible range control covering the transformation frame; the visible affordance is the divider and 46px circular handle.
- **Focus:** The frame receives a 3px Ink outline with a 4px offset, and the handle gains the Mint focus halo.
- **Behavior:** The comparison auto-loops across a nine-second CSS cycle, pauses during pointer or keyboard interaction, pauses offscreen and in hidden tabs, and waits 4.5 seconds before resuming. Reduced-motion mode disables the loop and presents an even split.

### Navigation

The header is a single-row brand-and-action bar with a fine bottom rule. It is 72px high on mobile and 80px on desktop, becomes sticky at 960px, and uses a subtly translucent page backdrop with a solid reduced-transparency fallback. The supplied logo artwork is authoritative; do not recreate it with live type. Below 420px, the WhatsApp label shortens without changing the action.

### Transformation Comparator

The signature component is a 4:5 garment frame with before and after imagery, a movable vertical divider, captions below the photograph, and Mint/Lilac open corners. It should remain large enough to read as product proof, be directly draggable across nearly the entire width, expose useful accessible value text, and label conceptual imagery honestly.

### FAQ Rows

FAQ items are flat disclosure rows separated by 1.5px Ink rules. The summary uses bold Manrope, generous right space, and a plus sign that rotates 45 degrees when open. Keyboard focus is an inset 3px Ink outline over a faint Lilac wash.

## Do's and Don'ts

### Do:

- **Do** use the supplied dekhlo logo and open-window mark without redrawing or re-typesetting them.
- **Do** pair oversized Fraunces statements with compact, readable Manrope copy.
- **Do** use Mint for primary action and ready-state cues, and Lilac for transformation emphasis and editorial fields.
- **Do** preserve visible Ink focus states, comfortable touch targets, and the static 50% comparator state for reduced motion.
- **Do** favor open layouts, crisp rules, and honest product imagery over dense interface chrome.

### Don't:

- **Don't** add generic app screenshots, dashboard chrome, glass cards, or floating gradient panels to express the brand.
- **Don't** introduce extra accent colors, soft gray UI palettes, or pervasive shadows that weaken Paper, Ink, Mint, and Lilac.
- **Don't** use Fraunces for paragraphs, controls, labels, or utility copy.
- **Don't** round every section into a card; reserve pills, circles, and the 16px media radius for their established roles.
- **Don't** let decorative treatment obscure garment detail or imply that a concept image is verified customer work.
