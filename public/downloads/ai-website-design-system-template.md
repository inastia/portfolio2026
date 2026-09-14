# AI Website Design System Template

Created by Anastasia Bigun  
anastasiabigun.com

Version 1.0  
Last updated September 2026

---

# **[Client Site Name] — Design System (Source of Truth)**

*Copy this file per client, replace every bracketed placeholder with values pulled from that client's live site, and delete these italic notes before handoff.*

## **Standing instruction**

*Paste this at the start of any AI conversation about the site.*

Please treat everything below as the definitive design system for this website. Treat these exact values as the source of truth for this conversation and apply them automatically to anything I ask you to build or change from now on — new sections, new pages, edits to existing content, all of it. If I ever ask for something that doesn't fit one of these values (a new color, a new font size, different spacing), please tell me that before making the change, rather than inventing a new one-off value on your own. The goal is that this site never drifts back into having several slightly-different versions of the same style doing the same job — every new thing we add should reuse what's already defined here.

## **Section names**

*List every section top to bottom as it appears on the page, in a consistent naming pattern (pick one prefix/convention and apply it everywhere).*

`[nav-name]` (Menu) · `[section-1-name]` (`[id]`) · `[section-2-name]` (`[id]`) · ... · `[footer-name]`

👉 Example:

*`nah-nav` (Menu) · `nah-hero` (`hero`) · `nah-intro` (`intro`) · `nah-services` (`services`) · `nah-process` (`process`) · `nah-about` (`about`) · `nah-difference` (`difference`) · `nah-reviews` (`reviews`) · `nah-faq` (`faq`) · `nah-visit` (`visit`) · `nah-final` (`final`) · `nah-footer` (Footer)*

## **Typography scale**

*Aim for roughly 8-12 total styles covering every real role on the site (display, section headline, subheadline, card title, body-large, body, quote, label/kicker, nav/button, caption) — resist keeping a style that only one element on the whole site actually uses.*

| Style | Family | Weight | Size | Line height | Letter spacing | Case |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Display | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| H2 — Section headline | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| H3 — Subsection headline | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| H4 — Card title | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| Body — Large | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| Body — Standard | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| Quote | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| Kicker / eyebrow label | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| Nav / button label | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |
| Caption / fine print | [font] | [weight] | [size]px | [line-height] | [letter-spacing] | [case] |

## **Color tokens**

*Keep this to as few colors as the site can honestly work with — three or four backgrounds and a small handful of text colors is usually enough. Pair every background with the text color(s) it should be used with.*

* `bg-[name]` `#[HEX]` — [when to use it]
* `bg-[name]` `#[HEX]` — [when to use it]
* `bg-[name]` `#[HEX]` — [reserved for: e.g. exactly one accent section]
* `bg-[name]` `#[HEX]` — [reserved for: e.g. footer/persistent brand elements]
* `text-[name]` `#[HEX]` — [heading color on which background(s)]
* `text-[name]` `#[HEX]` — [body color on which background(s)]
* `text-onDark` `#[HEX]` — [text color for dark backgrounds]
* `accent` `#[HEX]` — [emphasis/highlight color]

## **Spacing scale**

*Separate element-to-element rhythm (fixed at every screen size) from section-level outer padding (should shrink on smaller screens).*

* **Label → heading:** [X]px
* **Heading → paragraph:** [X]px
* **Subheading margins:** [X]px top / [X]px bottom
* **Paragraph → paragraph** (when one directly follows another): [X]px
* **Section outer padding — standard:** [X]px (large) / [X]px (medium) / [X]px (small)
* **Section outer padding — footer:** [X]px (large) / [X]px (medium) / [X]px (small)

## **Responsive navigation**

*Only needed if the current nav breaks or disappears below a certain width — check this directly by resizing the browser rather than assuming it's handled.*

Below [X]px, the nav becomes [behavior]. [Interaction and styling details.]

👉 Example:

*Below 1024px, the nav becomes a hamburger icon. Tapping it opens a full-screen, centered overlay in the site's light-nude background (`#F8F4EE`), with the nav links stacked vertically 32px apart and the primary CTA button moved to the bottom of that list as the sixth item.*

---

*Full rationale, exact measurements, and step-by-step implementation instructions for each area above should live in companion files (naming convention, typography, colors, spacing, responsive/interactive behavior) — this file is the compact summary and standing reference, not the full detail.*

## **Usage**

Free to use and adapt for personal and client projects. Please don't resell or redistribute the template as your own.