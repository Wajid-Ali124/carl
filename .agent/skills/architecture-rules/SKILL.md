---
name: Devsiter Architecture Rules
description: Dictates the proper file structure, separation of concerns, and component scopes for the Devsiter web app.
---

# Architecture & Structure Guidelines

This skill enforces strict modularity and separation of concerns to keep the Next.js codebase maintainable and highly reusable.

- **Component Reusability:** Never build one-off UI elements if they can be abstracted and generalized. Build modular, scalable components to avoid duplicating code across different pages.
- **Directory Organization:** Place all new files inside the `src/components/` directory, following a strict separation of scope:
  - `src/components/ui/` - For small, universally reusable elements (Buttons, Inputs, Cards, Tags).
  - `src/components/layout/` - For structure-level elements meant to frame pages (Navbar, Footer, Sidebar).
  - `src/components/sections/` - For larger, page-level visual chunks (Hero Banner, Testimonial Slider, CTA section) that combine multiple UI elements.
- **Page-Specific Isolation:** Page-specific components that will NEVER be used elsewhere should be grouped locally (e.g., inside `src/components/[pageName]/` if necessary) or explicitly commented, but standard sections should always be built for reuse.
- **Separation of CSS (When Applicable):** If a component truly requires custom CSS (for extreme animations, etc.), keep it perfectly scoped using CSS Modules (`[Component].module.css`) placed directly inside its respective component folder next to the `.tsx` file. Do not pollute `globals.css` with component-specific CSS.
