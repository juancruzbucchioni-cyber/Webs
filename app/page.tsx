"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5493534128474";

const plans = [
  {
    type: "Web Avanzada (E‑commerce)",
    tag: "MÁS ELEGIDA",
    price: "180.000",
    amount: 180000,
    color: "blue",
    copy: "Tienda online completa para negocios que buscan vender sus productos, administrar pedidos y controlar sus costos, ventas y ganancias desde un solo lugar.",
    features: [
      "Diseño 100 % personalizado",
      "Adaptada a celulares, tablets y computadoras",
      "Integración con WhatsApp, Instagram y otras redes sociales",
      "Hasta 200 productos",
      "Categorías personalizadas",
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
    message: "Hola, buenas. Quería solicitar un presupuesto por la Web Avanzada (E-commerce).",
  },
  {
    type: "Web Premium (e‑commerce avanzado)",
    tag: "PREMIUM",
    price: "280.000",
    amount: 280000,
    color: "pink",
    copy: "Solución completa para negocios que necesitan una tienda online avanzada, con mayor capacidad, funciones personalizadas y herramientas profesionales para administrar ventas, clientes y productos.",
    features: [
      "Incluye todas las características de la Web Avanzada",
      "Hasta 300 productos",
      "Hasta 3 funciones adicionales personalizadas",
      "Panel de administración avanzado",
      "Sistema de usuarios y cuentas de clientes",
      "Notificaciones automáticas de compras y pedidos",
      "Recuperación de carritos abandonados",
      "Reportes avanzados de ventas, costos y ganancias",
      "Diseño de banners y secciones promocionales",
      "Optimización SEO básica para buscadores",
      "Mayor personalización del diseño y las funciones",
      "Soporte prioritario",
      "Hosting privado incluido durante 3 años",
    ],
    message: "Hola, buenas. Quería solicitar un presupuesto por la Web Premium (E-commerce avanzado).",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<number | null>(null);
  const [paymentMode, setPaymentMode] = useState<"deposit" | "full" | null>(null);
  const [copied, setCopied] = useState("");

  const closePayment = () => {
    setPaymentPlan(null);
    setPaymentMode(null);
    setCopied("");
  };

  const copyValue = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
  };

  return (
    <main>
      <nav className="nav">
        <a className="brand brand-logo" href="#inicio" aria-label="JCB Development, inicio">
          <img src="/jcb-development.png" alt="JCB Development" />
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a>
          <a href="#modelos" onClick={() => setMenuOpen(false)}>Modelos</a>
          <a className="mobile-social-link" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">Contacto</a>
          <a className="mobile-social-link" href="https://www.instagram.com/juan.bucchioni/" target="_blank" rel="noreferrer">Instagram · @juan.bucchioni</a>
        </div>
        <div className="nav-actions">
          <a
            className="nav-contact"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, buenas. Quería consultar por una página web.")}`}
            target="_blank"
            rel="noreferrer"
          >
            Contacto
          </a>
          <a className="nav-instagram" href="https://www.instagram.com/juan.bucchioni/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
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
                <button onClick={() => { setPaymentPlan(index); setPaymentMode(null); }}>Pagar <span>→</span></button>
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

      {paymentPlan !== null && (
        <div className="payment-overlay" role="dialog" aria-modal="true" aria-label="Datos para realizar el pago" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closePayment();
        }}>
          <div className="payment-modal">
            <button className="payment-close" onClick={closePayment} aria-label="Cerrar">×</button>
            <p className="section-label">PAGO POR TRANSFERENCIA</p>
            <h2>{plans[paymentPlan].type}</h2>

            {!paymentMode ? (
              <>
                <p className="payment-intro">Elegí cuánto querés abonar para ver los datos de transferencia.</p>
                <div className="payment-options">
                  <button onClick={() => setPaymentMode("deposit")}>
                    <span>SEÑA DEL 35 %</span>
                    <strong>${Math.round(plans[paymentPlan].amount * 0.35).toLocaleString("es-AR")}</strong>
                    <small>ARS</small>
                  </button>
                  <button onClick={() => setPaymentMode("full")}>
                    <span>PAGO COMPLETO</span>
                    <strong>${plans[paymentPlan].amount.toLocaleString("es-AR")}</strong>
                    <small>ARS</small>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="payment-total">
                  <span>{paymentMode === "deposit" ? "SEÑA DEL 35 %" : "PAGO COMPLETO"}</span>
                  <strong>${(paymentMode === "deposit" ? Math.round(plans[paymentPlan].amount * 0.35) : plans[paymentPlan].amount).toLocaleString("es-AR")} ARS</strong>
                </div>
                <div className="payment-owner">
                  <span>TITULAR DE LA CUENTA</span>
                  <strong>Juan Cruz Bucchioni Moya</strong>
                  <small>Verificá este nombre antes de realizar la transferencia.</small>
                </div>
                <div className="bank-accounts">
                  {[
                    { alias: "bucchio.", cvu: "0000003100070730219551" },
                    { alias: "bucchio", cvu: "0000168300000027027897" },
                  ].map((account, index) => (
                    <article key={account.cvu}>
                      <small>OPCIÓN DE TRANSFERENCIA {index + 1}</small>
                      <p>A nombre de <strong>Juan Cruz Bucchioni Moya</strong></p>
                      <div><span>Alias</span><strong>{account.alias}</strong><button onClick={() => copyValue(`alias-${index}`, account.alias)}>{copied === `alias-${index}` ? "Copiado" : "Copiar"}</button></div>
                      <div><span>CVU</span><strong>{account.cvu}</strong><button onClick={() => copyValue(`cvu-${index}`, account.cvu)}>{copied === `cvu-${index}` ? "Copiado" : "Copiar"}</button></div>
                    </article>
                  ))}
                </div>
                <div className="payment-footer-actions">
                  <button onClick={() => setPaymentMode(null)}>← Cambiar importe</button>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, buenas. Ya realicé la transferencia de ${paymentMode === "deposit" ? "la seña" : "el pago completo"} correspondiente a ${plans[paymentPlan].type}. Adjunto el comprobante.`)}`} target="_blank" rel="noreferrer">Enviar comprobante →</a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
