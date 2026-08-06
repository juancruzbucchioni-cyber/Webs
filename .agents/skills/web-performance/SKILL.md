---
name: web-performance
description: High-performance web optimization rules for 100/100 Google PageSpeed scores, WebP/AVIF image pipeline, hardware acceleration, lazy loading, and Core Web Vitals.
---

# Web Performance Skill

This skill provides guidelines for building ultra-fast websites that load in under 1 second, achieving 95-100 scores on Google PageSpeed Insights.

## Performance Checklist

### 1. Image Optimization Pipeline
- **Format**: Convert all PNG/JPG images to WebP or AVIF formats.
- **Sizing**: Serve properly sized responsive images with `srcset` and `sizes` attributes.
- **Lazy Loading**: Set `loading="lazy"` on all offscreen images below the fold.
- **Eager Loading**: Set `loading="eager"` and `fetchpriority="high"` for Hero section images to optimize LCP (Largest Contentful Paint).

### 2. CSS & Animation Acceleration
- **GPU Rendering**: Use `transform: translate3d(0, 0, 0)` and `will-change: transform` for heavy animated elements.
- **Avoid Heavy Blend Modes on Mobile**: Disable heavy background videos or complex `mix-blend-mode` overlays on small mobile viewports (`max-width: 800px`).
- **Font Display**: Use `font-display: swap` for Google Fonts to prevent FOIT (Flash of Unstyled Text).

### 3. Core Web Vitals Optimization
- **LCP (Largest Contentful Paint)**: Keep under 2.5s by inlining critical CSS and preloading key hero assets.
- **FID / INP (Interaction to Next Paint)**: Keep main thread execution lightweight; defer non-critical JavaScript.
- **CLS (Cumulative Layout Shift)**: Always specify `width` and `height` attributes on `<img>` tags and container skeletons to prevent layout jumping.
