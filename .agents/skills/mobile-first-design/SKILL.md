---
name: mobile-first-design
description: Mobile-first responsive UI patterns, touch target scaling (>=44px), mobile navigation drawer systems, swipe gestures, and smartphone UX optimization.
---

# Mobile-First Design Skill

This skill provides guidelines and code patterns for building smartphone-optimized user interfaces.

## Touch Target & Sizing Rules

### 1. Minimum Touch Targets (44px Rule)
Every interactive element (button, link, form input, checkbox) must have a minimum height and width of 44x44 pixels to ensure comfortable tapping without mis-clicks.

```css
button, a.btn, input, select {
  min-height: 44px;
  padding: 12px 20px;
}
```

### 2. Mobile Typography Scale
Never use font sizes under 12px for body copy on mobile viewports.
- **Hero Title**: `clamp(32px, 8vw, 56px)`
- **Section Titles**: `clamp(24px, 6vw, 36px)`
- **Body Copy**: `14px - 16px` (line-height: `1.6`)
- **Labels / Badges**: `11px - 12px` (font-weight: `700`)

### 3. Mobile Navigation Drawer Pattern
Slide-out drawer with blur backdrop:
```tsx
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-purple-500/30 bg-slate-950/95 p-6 backdrop-blur-2xl shadow-2xl"
    >
      <nav className="flex flex-col gap-4 text-center font-bold">
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#categorias" onClick={() => setMenuOpen(false)}>Modelos</a>
        <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>Preguntas Frecuentes</a>
      </nav>
    </motion.div>
  )}
</AnimatePresence>
```

### 4. Horizontal Touch Scroll Containers
For multi-card grids on mobile, use horizontal scroll snaps:
```css
.mobile-scroll-row {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 16px;
  padding-bottom: 12px;
}
.mobile-scroll-row > * {
  scroll-snap-align: start;
  flex: 0 0 85%;
}
```
