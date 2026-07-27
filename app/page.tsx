"use client";

import { useEffect, useState } from "react";

const plans = [
  { type: "Landing page", tag: "LANZAMIENTOS", price: "180", color: "purple", copy: "Una página rápida y directa para presentar tu propuesta y convertir visitas en consultas.", features: ["Diseño personalizado", "Adaptada a celulares", "Formulario o WhatsApp"] },
  { type: "Web profesional", tag: "MÁS ELEGIDA", price: "320", color: "blue", copy: "Un sitio completo para mostrar tu empresa, servicios, trabajos y generar nuevos clientes.", features: ["Hasta 5 secciones", "Galería de proyectos", "Optimización básica SEO"] },
  { type: "Tienda online", tag: "E-COMMERCE", price: "480", color: "pink", copy: "Tu catálogo online con una experiencia de compra clara, profesional y preparada para vender.", features: ["Catálogo de productos", "Pagos y envíos", "Panel autoadministrable"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPlan(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = selectedPlan === null ? "" : "hidden";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  return (
    <main>
      <nav className="nav">
        <a className="brand brand-logo" href="#inicio" aria-label="JCB Development, inicio">
          <img src="/jcb-development.png" alt="JCB Development" />
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#modelos" onClick={() => setMenuOpen(false)}>Modelos</a>
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
        <div className="hero-process" id="proceso">
          <p className="section-label">UN PROCESO SIMPLE</p>
          <h1>De tu idea a internet<br /><span>sin complicaciones.</span></h1>
          <div className="hero-steps">
            {[
              ["01", "Nos contás", "Charlamos sobre tu negocio, tus objetivos y la web que imaginás."],
              ["02", "Diseñamos", "Creamos una propuesta visual alineada con tu marca y tus clientes."],
              ["03", "Desarrollamos", "Construimos una experiencia rápida, adaptable y fácil de usar."],
              ["04", "Publicamos", "La dejamos online, configurada y lista para empezar a trabajar."],
            ].map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><i /><h2>{title}</h2><p>{copy}</p></article>
            ))}
          </div>
          <a className="scroll-cue" href="#modelos"><span>Ver modelos</span><b>↓</b></a>
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
              <div className="plan-actions">
                <button onClick={() => setSelectedPlan(index)}>Ver página <span>↗</span></button>
                <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">Presupuesto <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contacto">
        <a className="brand brand-logo footer-logo" href="#inicio" aria-label="JCB Development, inicio"><img src="/jcb-development.png" alt="JCB Development" /></a>
        <span>DISEÑO Y DESARROLLO WEB · 2026</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      {selectedPlan !== null && (
        <div className="demo-overlay" role="dialog" aria-modal="true" aria-label={`Demo de ${plans[selectedPlan].type}`} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedPlan(null);
        }}>
          <div className="demo-modal">
            <div className="demo-toolbar">
              <div className="demo-dots"><i /><i /><i /></div>
              <span>Página seleccionada · {plans[selectedPlan].type}</span>
              <button onClick={() => setSelectedPlan(null)} aria-label="Cerrar demo">×</button>
            </div>
            <div className={`demo-site demo-${selectedPlan}`}>
              {selectedPlan === 0 && (
                <>
                  <div className="demo-nav"><b>AURA</b><span>Experiencia · Servicios · Contacto</span><button>Reservar</button></div>
                  <div className="demo-landing-hero">
                    <small>BIENESTAR · MOVIMIENTO · EQUILIBRIO</small>
                    <h3>Tu mejor versión<br /><em>empieza hoy.</em></h3>
                    <p>Una experiencia diseñada para transformar tu energía y convertir cada visita en una nueva oportunidad.</p>
                    <button>Empezar ahora →</button>
                  </div>
                  <div className="demo-stat-row"><span><b>+500</b> clientes</span><span><b>4.9</b> valoración</span><span><b>7 días</b> disponible</span></div>
                </>
              )}
              {selectedPlan === 1 && (
                <>
                  <div className="demo-nav pro"><b>NEXO<span>.</span></b><span>Estudio · Servicios · Proyectos</span><button>Hablemos</button></div>
                  <div className="demo-pro-hero">
                    <div><small>ESTRATEGIA & DISEÑO</small><h3>Construimos marcas<br />que dejan <em>huella.</em></h3><p>Ideas claras, diseño inteligente y experiencias digitales que hacen crecer negocios.</p><button>Ver proyectos ↗</button></div>
                    <div className="demo-pro-art"><i /><i /><strong>N</strong></div>
                  </div>
                  <div className="demo-services"><span>01 Branding</span><span>02 Diseño web</span><span>03 Estrategia</span></div>
                </>
              )}
              {selectedPlan === 2 && (
                <>
                  <div className="demo-nav shop"><b>MONO</b><span>Nuevo · Tienda · Colecciones</span><button>Carrito (0)</button></div>
                  <div className="demo-shop-head"><small>NUEVA COLECCIÓN</small><h3>Objetos para<br />vivir mejor.</h3><button>Comprar ahora →</button></div>
                  <div className="demo-products">
                    <div><i /><span>Lámpara Nube</span><b>$89</b></div>
                    <div><i /><span>Sillón Uno</span><b>$320</b></div>
                    <div><i /><span>Mesa Lateral</span><b>$145</b></div>
                  </div>
                </>
              )}
            </div>
            <div className="demo-footer">
              <div><strong>{plans[selectedPlan].type}</strong><span>Diseño demostrativo · Se personaliza para tu marca</span></div>
              <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">Quiero una web así <span>→</span></a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
