---
name: Devsiter Styling Rules
description: Strict guidelines for colors, Tailwind v4 constraints, and handling custom CSS for the Devsiter project.
---

# Styling & Theme Guidelines

This skill dictates how to enforce aesthetic consistency and optimal CSS architecture for the Devsiter web agency.

- **Strict Theme Adherence:** Use **ONLY** the predefined theme colors provided in the project. 
- **Extending the Theme:** If a new color is absolutely necessary for the design, **DO NOT** use raw hex/rgb values inline or in Tailwind classes (e.g., `bg-[#123456]`). Instead, define the new color as a custom variable inside `src/app/globals.css` and map it into the Tailwind configuration block.
- **Global Layout Constraints:** All major sections and layout elements MUST use the custom `.container` or `.container-narrow` classes defined in `globals.css` to prevent infinite stretching on ultra-widescreen monitors. Do not manually declare boundaries like `max-w-7xl mx-auto`.
- **Tailwind CSS First:** Always prioritize using Tailwind CSS utility classes for layout, typography, animations (where simple), and all foundational styling.
- **Latest Canonical Tailwind v4 Syntax:** Use the latest canonical syntax over arbitrary brackets whenever building for Tailwind. For instance, prefer natively generated dynamic values like `z-[100]` without the brackets: `z-100`. Avoid arbitrary strings if canonical equivalents exist.
- **Custom CSS Usage:** Create dedicated CSS files (such as `.module.css` files and put them in styles folder inside src then import in global CSS file) **ONLY when strictly needed**. This is primarily reserved for massive, complex animations or intricate styling behaviors where Tailwind utility classes are insufficient or would result in completely unreadable components.
