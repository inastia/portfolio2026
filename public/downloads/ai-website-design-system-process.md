# AI Website Design System Process

Created by Anastasia Bigun  
anastasiabigun.com

Version 1.0  
Last updated September 2026

---

A repeatable workflow for auditing a website built through an AI or no-code site-generation tool, identifying where the design has drifted, making intentional decisions about what should stay or change, and documenting the final system so an AI can follow it consistently in future work.

## **1. Audit the existing site**

### **Start with the live site**

Inspect what the browser actually renders rather than relying only on screenshots or the values you expect to find in the CSS.

Review the whole site for:

* Font family
* Font size
* Font weight
* Line height
* Letter spacing
* Text color
* Background color
* Margin
* Padding

A screenshot can show that something looks inconsistent. The computed values show exactly how those differences are being rendered.

Pull the values across the whole site rather than checking only a few representative sections. Small inconsistencies often accumulate in places you would not think to spot-check.

If you're using an AI with browser access, you can start with this prompt:

> **Open [website URL] in your browser tool. Go through every heading, paragraph, button, and label on the page and pull the actual computed font family, size, weight, line-height, letter-spacing, and color using getComputedStyle, not what the CSS file says, but what the browser actually renders. Do the same for every section's background color and its padding and margin values. Then list every distinct value you find for each property, so I can see exactly where things are inconsistent instead of just where they look off.**

The exact prompt can change depending on the site and the AI tool you're using. The important part is asking for the computed values and reviewing the complete set rather than asking the AI to decide what "looks inconsistent."

### **Establish consistent section names**

Before changing anything visual, name every section consistently.

Use one naming convention for section classes and IDs so both you and the AI have a shared vocabulary for referring to the site.

These names become the hooks for every decision and instruction that follows.

### **Work through one dimension at a time**

Use this sequence:

1. **Section naming**
2. **Typography**
3. **Colors**
4. **Spacing**
5. **Responsive / interactive behavior**

Avoid changing everything simultaneously. Each stage should build on decisions established in the previous one.

For typography, review the complete range of font families, weights, sizes, line heights, letter spacing, colors, and case.

For colors, identify which background and text colors genuinely belong in the system and which are accidental variations.

For spacing, look at recurring relationships between elements as well as section-level padding.

For responsive and interactive behavior, inspect anything that changes by screen size or state, including navigation, carousels, accordions, and similar components.

## **2. Make design decisions**

### **Separate observations from decisions**

For each dimension, first document what currently exists.

Separate findings into:

* **Already consistent** — no decision is necessary.
* **Inconsistent** — a rule needs to be established.
* **Ambiguous** — the difference may be intentional and needs to be evaluated.

Don't automatically replace every irregular value with the most common one.

A dimmed testimonial card might represent an inactive slide. A larger heading might create intentional hierarchy. Different spacing may be necessary because two components serve different roles.

Ask what the difference is doing before removing it.

### **Make inconsistencies visible**

Numbers are useful for diagnosing a system, but they are not always the clearest way to communicate a design problem.

When a difference is difficult to understand from the values alone, create a simple visual comparison. Put comparable elements side by side and annotate the actual differences, such as spacing, type size, or color.

Give the client something concrete to react to rather than relying on design terminology or asking whether something "feels off."

The purpose isn't to prove that one particular value is correct. It's to make the difference visible enough that an intentional decision can be made.

### **Confirm judgment calls before documenting them**

When a decision requires judgment, present the evidence and let the client confirm the direction rather than silently deciding for them.

Once a decision is confirmed, document it precisely.

For each dimension, the working loop is:

**Audit current values → identify meaningful inconsistencies → make the differences visible when needed → determine whether the variation is intentional → confirm the decision → document the rule**

Keep the discussion and the final instruction separate. Don't write a value into the finished system while it is still an unresolved decision.

### **Create detailed instruction files**

As decisions are confirmed, document the implementation details in standalone instruction files for the AI builder.

Depending on the site, these may include:

1. **Section naming convention**
2. **Typography system**
3. **Background / color system**
4. **Spacing system**
5. **Responsive / interactive behavior**

These files contain the detailed implementation instructions, rationale, and section-specific rules. They are different from the compact Design System Template that will become the final source of truth.

## **3. Complete the Design System Template**

Once the audit is finished and the design decisions have been confirmed, complete the `ai-website-design-system-template.md` file.

Transfer the final approved system into it in this order:

1. **Section names**
2. **Typography**
3. **Colors**
4. **Spacing**
5. **Responsive navigation**

Replace every bracketed placeholder with the site's actual values.

Remove the italic instructional notes before handoff.

Keep the completed file compact. Detailed rationale, measurements, exceptions, and implementation instructions should remain in the companion files rather than being duplicated in the source-of-truth file.

The completed Design System Template is the master reference for the site. It should be supplied at the beginning of future AI conversations about the website so the AI has the established vocabulary, typography, colors, spacing, and responsive rules available before making new design decisions.

If a future request falls outside the documented system, the AI should flag the difference rather than silently introduce another one-off value.

## **4. Complete the handoff**

Before considering the system finished, verify that the documented rules match the implemented site.

Where the platform supports reusable tokens or variables, use them rather than repeatedly pasting the same values inline. The goal is not only to establish the correct values but to make those values reusable.

Check responsive behavior at the screen widths you actually intend to support rather than assuming the desktop system adapts correctly.

When implementing multiple instruction files, keep the current site or code state available throughout the implementation so each change builds on the previous one.

### **Completion checklist**

* [ ] Every section has a consistent class and ID naming convention.
* [ ] Typography has been consolidated into intentional reusable roles.
* [ ] Font family, weight, size, line height, letter spacing, color, and case have been accounted for.
* [ ] Background and text colors have been consolidated into an intentional palette.
* [ ] Repeated element-to-element spacing relationships have been defined.
* [ ] Section-level responsive padding has been defined.
* [ ] Responsive and interactive behavior has been tested where relevant.
* [ ] Ambiguous variations have been confirmed as intentional or corrected.
* [ ] Detailed instruction files contain the implementation-specific rules.
* [ ] Every placeholder in the Design System Template has been replaced.
* [ ] Instructional notes have been removed from the completed Design System Template.
* [ ] The Design System Template contains only confirmed decisions.
* [ ] The completed Design System Template matches the implemented site.
* [ ] Reusable values are implemented as reusable tokens or variables where the platform supports them.
* [ ] The completed Design System Template can stand on its own as the source of truth in a new AI conversation.

---

## **Usage**

Free to use and adapt for personal and client projects. Please don't resell or redistribute the template as your own.