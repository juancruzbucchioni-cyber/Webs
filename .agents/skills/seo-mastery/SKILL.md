---
name: seo-mastery
description: Organic search engine optimization (SEO), Open Graph social previews, Schema.org JSON-LD structured data, keyword strategy, and technical web indexing.
---

# SEO Mastery Skill

This skill provides comprehensive instructions for optimizing websites for organic search engines (Google, Bing) and social media sharing platforms.

## Core SEO Rules

### 1. Title Tags & Meta Descriptions
- **Title Tag**: Include target keyword + brand name (50-60 characters).
  - *Example*: `Diseño Web & Tiendas Online en Argentina | JCB Development`
- **Meta Description**: Compelling summary with call to action (140-160 characters).
  - *Example*: `Creamos sitios web y tiendas online ultrarrápidas, adaptadas a celular y con hosting de regalo. ¡Pedí tu presupuesto hoy!`

### 2. Open Graph & Social Cards
Include meta tags for WhatsApp, Instagram, Facebook, and Twitter link previews:
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="JCB Development | Diseño Web & Tiendas Online" />
<meta property="og:description" content="Diseño y desarrollo de sitios web ultrarrápidos adaptados 100% para celular." />
<meta property="og:image" content="https://tu-dominio.com/og-preview.jpg" />
<meta property="og:url" content="https://tu-dominio.com/" />
```

### 3. Structured Data (Schema.org JSON-LD)
Embed structured data script for Google Rich Results:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JCB Development",
  "image": "https://tu-dominio.com/jcb-development.png",
  "description": "Diseño y desarrollo de páginas web y tiendas online a medida.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AR"
  },
  "priceRange": "$$"
}
```

### 4. Heading Structure Hierarchy
- Exactly one `<h1>` tag per page containing primary intent.
- Logical `<h2>` for major sections and `<h3>` for sub-cards.
