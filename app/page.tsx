"use client";

import { useState } from "react";

const plans = [
  { type: "Landing page", tag: "LANZAMIENTOS", price: "180", color: "purple", copy: "Una página rápida y directa para presentar tu propuesta y convertir visitas en consultas.", features: ["Diseño personalizado", "Adaptada a celulares", "Formulario o WhatsApp"] },
  { type: "Web profesional", tag: "MÁS ELEGIDA", price: "320", color: "blue", copy: "Un sitio completo para mostrar tu empresa, servicios, trabajos y generar nuevos clientes.", features: ["Hasta 5 secciones", "Galería de proyectos", "Optimización básica SEO"] },
  { type: "Tienda online", tag: "E-COMMERCE", price: "480", color: "pink", copy: "Tu catálogo online con una experiencia de compra clara, profesional y preparada para vender.", features: ["Catálogo de productos", "Pagos y envíos", "Panel autoadministrable"] },
];

const showcase = [
  { name: "Nómade", type: "Tienda de indumentaria", className: "nomade" },
  { name: "Nexo", type: "Estudio creativo", className: "nexo" },
  { name: "Forma", type: "Catálogo de muebles", className: "forma" },
  { name: "Pulso", type: "Landing de fitness", className: "pulso" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#inicio" aria-label="Norte Web, inicio">
          <span className="mini-logo">N</span><b>NORTE</b>
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#modelos" onClick={() => setMenuOpen(false)}>Modelos</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a>
        </div>
        <a className="nav-contact" href="#contacto">Contacto</a>
        <button className="menu-button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </nav>

      <section className="hero" id="inicio">
        <div className="aurora aurora-left" />
        <div className="aurora aurora-right" />
        <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="hero-content">
          <div className="hero-primary">
            <div className="hero-logo" aria-label="Norte"><span className="logo-top" /><span className="logo-left" /><span className="logo-right" /></div>
            <p className="eyebrow">DISEÑO · DESARROLLO · RESULTADOS</p>
            <h1>Potenciá tu <span>presencia online</span></h1>
            <p className="hero-copy">Creamos páginas web modernas, rápidas y pensadas para convertir visitantes en clientes.</p>
            <a className="glow-button" href="#modelos">Ver modelos <b>→</b></a>
            <a className="scroll-cue" href="#modelos"><span>Explorar</span><b>↓</b></a>
          </div>
          <aside className="hero-contact" id="contacto">
            <div className="contact-logo">N</div>
            <p className="section-label">EMPECEMOS</p>
            <h2>¿Tenés una idea?<br /><span>Hagámosla despegar.</span></h2>
            <p>Contanos qué necesitás y recibí un presupuesto personalizado sin compromiso.</p>
            <a className="glow-button large" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">Hablar por WhatsApp <b>→</b></a>
          </aside>
        </div>
      </section>

      <section className="intro section" id="modelos">
        <p className="section-label">SOLUCIONES PARA CADA NEGOCIO</p>
        <h2>Elegí la web que necesitás.<br /><span>Nosotros la hacemos realidad.</span></h2>
        <p className="section-copy">Valores claros para comenzar. Cada proyecto se personaliza con tu identidad, contenido y objetivos.</p>
        <div className="plans">
          {plans.map((plan, index) => (
            <article className={`plan-card ${plan.color}`} key={plan.type}>
              <div className="plan-glow" />
              <div className="plan-head"><span>0{index + 1}</span><small>{plan.tag}</small></div>
              <div className="plan-icon"><i /><i /></div>
              <h3>{plan.type}</h3>
              <p>{plan.copy}</p>
              <div className="price"><small>DESDE</small><strong>${plan.price}</strong><span>USD</span></div>
              <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
              <a href="#contacto">Pedir presupuesto <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase section" id="proyectos">
        <p className="section-label">TRABAJOS SELECCIONADOS</p>
        <h2>Diseños que no pasan<br /><span>desapercibidos.</span></h2>
        <div className="showcase-grid">
          {showcase.map((item, index) => (
            <article className={`work-card ${item.className}`} key={item.name}>
              <div className="mock-window">
                <div className="mock-bar"><i /><i /><i /><span>{item.name.toLowerCase()}.com</span></div>
                <div className="mock-content"><small>{item.type}</small><strong>{item.name}</strong><em>DESCUBRIR ↗</em></div>
              </div>
              <div className="work-meta"><span>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.type}</p></div><b>↗</b></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="proceso">
        <div className="process-glow" />
        <p className="section-label">UN PROCESO SIMPLE</p>
        <h2>De tu idea a internet<br /><span>sin complicaciones.</span></h2>
        <div className="steps">
          {[
            ["01", "Nos contás", "Charlamos sobre tu negocio, tus objetivos y la web que imaginás."],
            ["02", "Diseñamos", "Creamos una propuesta visual alineada con tu marca y tus clientes."],
            ["03", "Desarrollamos", "Construimos una experiencia rápida, adaptable y fácil de usar."],
            ["04", "Publicamos", "La dejamos online, configurada y lista para empezar a trabajar."],
          ].map(([number, title, copy]) => (
            <article className="step" key={number}><span>{number}</span><div className="step-dot" /><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio"><span className="mini-logo">N</span><b>NORTE</b></a>
        <span>DISEÑO Y DESARROLLO WEB · 2026</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
