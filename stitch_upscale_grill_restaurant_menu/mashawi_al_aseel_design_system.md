---
name: "Mashawi Al-Aseel Design System"
description: "Upscale, appetizing design system for authentic charcoal grilled meats restaurant featuring deep charcoal, rich amber, and glowing charcoal fire tones."
---

## Overview

Mashawi Al-Aseel (مشاوي الأصيل) is an upscale authentic charcoal grilled meats dining destination and delivery experience. The visual language conveys warmth, culinary mastery, rich smoky aromatics, and premium hospitality. 

The aesthetic is modern oriental luxury — drawing upon rich dark charcoal backgrounds, radiant ember oranges, and polished warm gold accents to highlight succulent grilled kebabs, kofta, and shish taouk. Typography uses the clean, modern Arabic geometric typeface **Cairo**, fully optimized for RTL readability, crisp micro-interactions, and appetizing imagery presentation.

## Colors

The color palette reflects charcoal grilling — deep dark charcoal surfaces, radiant embers of orange and amber, accompanied by gleaming gold accents representing premium culinary standards.

- **Primary:** Warm glowing charcoal amber-orange, radiating heat and appetizing vibrancy.
- **Secondary:** Rich gold accent representing luxury and culinary excellence.
- **Dark Surface:** Deep volcanic charcoal tones creating dramatic contrast for food photography.
- **Charcoal & Amber Accents:** Subtle glowing ember tones for tags, borders, and interactive highlights.

```yaml
colors:
  amber: "#F59E0B"
  gold: "#EAB308"
  charcoal: "#121214"
  charcoal-light: "#1C1C21"
  ember: "#EA580C"
  light:
    primary: "#C2410C"
    on-primary: "#FFFFFF"
    surface: "#FAFAF9"
    on-surface: "#1C1917"
    surface-container: "#F5F5F4"
    on-surface-container: "#292524"
  dark:
    primary: "#FB923C"
    on-primary: "#431407"
    surface: "#0D0D10"
    on-surface: "#F5F5F4"
    surface-container: "#18181D"
    on-surface-container: "#E7E5E4"
```

## Typography

The typography leverages **Cairo** for all display, headline, body, and label roles. Its balanced geometric proportions and warm Arabic script terminals offer impeccable legibility for menu items, pricing, and appetising descriptions.

```yaml
typography:
  display-lg:
    fontFamily: "Cairo"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 56px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Cairo"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 40px
    letterSpacing: -0.25px
  headline-xl:
    fontFamily: "Cairo"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.25px
  headline-xl-mobile:
    fontFamily: "Cairo"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: 0px
  headline-lg:
    fontFamily: "Cairo"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: 0px
  headline-lg-mobile:
    fontFamily: "Cairo"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 30px
    letterSpacing: 0px
  headline-md:
    fontFamily: "Cairo"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Cairo"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "Cairo"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Cairo"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Cairo"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  label-md:
    fontFamily: "Cairo"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  label-sm:
    fontFamily: "Cairo"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0px
```

## Layout & Spacing

A fluid responsive grid model scaling to a maximum container width of 1280px on desktop screens, with generous guttering and breathable padding. Spacing adheres to an 8px modular scale.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 64px
  page-margin: 24px
```

## Elevation & Depth

Surfaces rely on subtle ambient warm ember glow, dark obsidian layered containers, and delicate ember-tinted borders (`border-amber-500/20` and `border-orange-500/15`). Food cards hover with a smooth upward translation and elevated warm radiance shadow.

## Shapes

Shapes employ softly rounded corners to blend modern refinement with friendly dining warmth.

```yaml
rounded:
  sm: 6px
  DEFAULT: 12px
  md: 16px
  lg: 20px
  xl: 28px
  full: 9999px
```

## Motion & Micro-interaction

Micro-interactions feel smooth and responsive. Card hovers, category tab transitions, and add-to-cart feedback execute briskly.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.16, 1, 0.3, 1)
  surface-exit:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.4, 0, 1, 1)
```

## Voice & Content Strategy

The voice is welcoming, proud of culinary heritage, and tantalizingly descriptive. Copy focuses on natural charcoal grilling (شواء الفحم الطبيعي), freshly minced meat, authentic Levantine and Arabian marinades, and prompt serving.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Tabs** → `@components/tabs.html`: `tabs-horizontal`, `tabs-with-icon`
