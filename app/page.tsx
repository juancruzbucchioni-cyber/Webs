"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5493534128474";

const plans = [
  {
    type: "Web básica (catálogo)",
    tag: "BÁSICO",
    price: "110.000",
    color: "purple",
    copy: "Web destinada a mostrar y administrar productos, sin un sistema de venta directa integrado.",
    features: [
      "Diseño personalizado",
      "Adaptada a celulares",
      "Integración con WhatsApp, Instagram y otras redes",
      "Hasta 100 productos",
      "Página básica de administración",
      "Categorías personalizadas",
      "Registro de costos y ganancias",
      "Hosting privado incluido durante 8 meses",
    ],
    message: "Hola, buenas. Quería consultar por el plan Web básica (catálogo).",
  },
  {
    type: "Web profesional (e‑commerce)",
    tag: "PROFESIONAL",
    price: "180.000",
    color: "blue",
    copy: "Tienda online completa para negocios que buscan vender sus productos de forma profesional, administrar pedidos y llevar un mejor control de sus costos y ganancias.",
    features: [
      "Incluye todas las características del Plan Básico",
      "Carrito de compras y gestión de pedidos",
      "Conexión directa con Mercado Pago",
      "Registro de costos, ventas y ganancias",
      "Control de stock automático",
      "Panel de anotaciones internas para el local",
      "Registro y administración de clientes",
      "Creación de descuentos y cupones",
      "Estadísticas de ventas y productos más vendidos",
      "Estados de pedidos: pendiente, pagado, enviado y entregado",
      "Panel de administración profesional",
      "Hosting privado incluido durante 2 años",
    ],
    message: "Hola, buenas. Quería consultar por el plan Web profesional (e-commerce).",
  },
  {
    type: "Web Premium (e‑commerce avanzado)",
    tag: "PREMIUM",
    price: "250.000",
    color: "pink",
    copy: "Solución completa para negocios que necesitan una tienda online avanzada, con mayor capacidad, funciones personalizadas y herramientas profesionales para administrar ventas, clientes y productos.",
    features: [
      "Incluye todas las características del Plan Profesional",
      "Hasta 350 productos",
      "Hasta 3 funciones adicionales personalizadas",
      "Panel de administración avanzado",
      "Sistema de usuarios y cuentas de clientes",
      "Notificaciones automáticas de compras y pedidos",
      "Recuperación de carritos abandonados",
      "Reportes avanzados de ventas, costos y ganancias",
      "Diseño de banners y secciones promocionales",
      "Optimización SEO para buscadores",
      "Hosting privado incluido durante 3 años",
    ],
    message: "Hola, buenas. Quería consultar por el plan Web Premium (e-commerce avanzado).",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <div className="price"><small>DESDE</small><strong>${plan.price}</strong><span>ARS</span></div>
              <ul>
                {plan.features.map((feature) => {
                  const isRepeated = feature.startsWith("Incluye todas");
                  return (
                    <li className={isRepeated ? "repeated-feature" : ""} key={feature}>
                      <span>✓</span>{feature}
                    </li>
                  );
                })}
              </ul>
              <div className="plan-actions">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.message)}`} target="_blank" rel="noreferrer">
                  Presupuesto <span>→</span>
                </a>
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
    </main>
  );
}
