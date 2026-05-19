---
name: Vector Engineering Lab
colors:
  surface: '#faf9f6'
  surface-dim: '#dadad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f1'
  surface-container: '#eeeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#424844'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f1f1ee'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#476555'
  primary: '#062418'
  on-primary: '#ffffff'
  primary-container: '#1d3a2c'
  on-primary-container: '#84a492'
  inverse-primary: '#adceba'
  secondary: '#4c5e86'
  on-secondary: '#ffffff'
  secondary-container: '#bccefd'
  on-secondary-container: '#46577f'
  tertiary: '#341618'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d2b2c'
  on-tertiary-container: '#c19192'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9ead6'
  primary-fixed-dim: '#adceba'
  on-primary-fixed: '#032014'
  on-primary-fixed-variant: '#304d3e'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b4c6f4'
  on-secondary-fixed: '#041a3f'
  on-secondary-fixed-variant: '#34466d'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#eebaba'
  on-tertiary-fixed: '#301314'
  on-tertiary-fixed-variant: '#623d3e'
  background: '#faf9f6'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-label:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2.5rem
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1280px
---

## Brand & Style

This design system embodies the concept of "High-End Technology Minimalism." It is designed to evoke the atmosphere of a world-class engineering laboratory: a space defined by absolute precision, quiet confidence, and intellectual rigor. The aesthetic avoids unnecessary ornamentation, focusing instead on structural clarity and the beauty of functional data.

The target audience consists of senior engineers, AI researchers, and technical leaders who value speed, clarity, and tool-like reliability. The UI should feel like a high-performance instrument—airy enough to allow for deep focus, yet dense enough to convey sophisticated technical capability. The emotional response is one of calm authority and mathematical exactness.

## Colors

The palette is strictly curated to emphasize a "Premium Light" environment. The primary canvas is pure white (#FFFFFF), providing an expansive sense of space, while light gray (#F8FAFC) is used strategically for structural grouping and subtle layering.

**Forest Green (#1D3A2C)** acts as the primary signal for action and intelligence. It is used for high-priority CTA buttons, success states, and primary technical icons. **Navy Blue (#0A1F44)** provides the grounding weight, used for primary typography, navigational headers, and structural accents. These deep, saturated tones against the stark white background create a high-contrast environment that feels both academic and cutting-edge. Functional colors (alerts/warnings) should follow a desaturated, professional spectrum to avoid breaking the minimalist harmony.

## Typography

This design system exclusively utilizes the **Geist** typeface to leverage its technical, developer-centric DNA. The typographic hierarchy is built on extreme clarity and legibility. 

Display and headline levels use tighter letter-spacing and medium weights to appear engineered and sharp. Body text maintains a generous line height (1.5x - 1.6x) to facilitate long-form technical reading without fatigue. A specific "label-md" style is employed for metadata and utility headers, utilizing uppercase and increased tracking to differentiate information tiers. Large headlines are downscaled on mobile devices to maintain visual balance while preserving the distinctively tight tracking of the typeface.

## Layout & Spacing

The layout is governed by a **fixed-grid** philosophy on desktop and a **fluid-grid** approach on mobile. The system uses a strict 4px baseline grid to ensure mathematical alignment across all components, reflecting the precision of an engineering laboratory.

- **Desktop:** A 12-column grid with 24px gutters. Content is centered with a max-width of 1280px to prevent excessive line lengths.
- **Mobile:** A 4-column grid with 16px margins.
- **Rhythm:** Vertical spacing relies on "Airy Minimalism," meaning sections are separated by significant white space (xl or larger) to allow information to breathe and to reduce cognitive load during complex tasks.

## Elevation & Depth

To maintain the high-end laboratory feel, depth is communicated through **low-contrast outlines** and **tonal layering** rather than traditional shadows. 

The background is predominantly #FFFFFF. Elements that require focus or containment sit on #F8FAFC surfaces with a subtle 1px border (#E2E8F0). When absolute separation is required, use a single, highly-diffused ambient shadow: `0 4px 20px rgba(10, 31, 68, 0.04)`. This creates a sense of "floating precision" without the clutter of heavy skeuomorphism. Interactive elements use subtle tonal shifts (e.g., a background moving from white to #F1F5F9) to indicate hover states.

## Shapes

The "Round Four" corner radius is the structural signature of this design system. A constant 0.5rem (8px) radius is applied to standard buttons, input fields, and small cards. This specific radius provides a "softened technical" look—it feels modern and approachable but retains enough structural integrity to appear professional.

- **Small Components:** 0.5rem (e.g., buttons, inputs).
- **Large Containers:** 1rem (e.g., feature cards, modals).
- **Extreme Elements:** Full pill-shapes are reserved only for status indicators (tags/chips) to distinguish them from actionable buttons.

## Components

- **Buttons:** Primary buttons use a solid Forest Green (#1D3A2C) fill with white Geist text. Secondary buttons use a Navy Blue (#0A1F44) outline with 1px thickness. All buttons use the 0.5rem radius.
- **Input Fields:** Minimalist design with a 1px #E2E8F0 border and #F8FAFC background. On focus, the border transitions to Navy Blue (#0A1F44) with no outer glow.
- **Cards:** Cards should be border-only or have a very subtle #F8FAFC fill. No heavy shadows. Use 1rem corner radius for large containers.
- **Chips/Tags:** Used for technical metadata. These are pill-shaped, using a light Navy Blue tint for the background and Navy Blue for the text.
- **Lists:** Data-heavy lists should use "Geist Mono" for numerical values to ensure perfect vertical alignment, reinforcing the engineering laboratory aesthetic.
- **Selection Controls:** Checkboxes and radio buttons use the Forest Green accent for checked states to signify a "valid" or "active" selection.