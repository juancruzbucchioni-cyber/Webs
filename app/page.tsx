"use client";

import { useState, type FormEvent } from "react";

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
  const [showClientForm, setShowClientForm] = useState(false);
  const [clientFormValid, setClientFormValid] = useState(false);

  const closePayment = () => {
    setPaymentPlan(null);
    setPaymentMode(null);
    setCopied("");
    setShowClientForm(false);
    setClientFormValid(false);
  };

  const copyValue = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
  };

  const submitClientForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (paymentPlan === null || paymentMode === null) return;
    const data = new FormData(event.currentTarget);
    const amount = paymentMode === "deposit" ? Math.round(plans[paymentPlan].amount * 0.35) : plans[paymentPlan].amount;
    const message = [
      "Hola, buenas. Ya realicé el pago y quiero comenzar mi página.",
      "",
      `Plan: ${plans[paymentPlan].type}`,
      `Pago: ${paymentMode === "deposit" ? "Seña del 35 %" : "Pago completo"}`,
      `Importe: $${amount.toLocaleString("es-AR")} ARS`,
      "",
      "DATOS PARA CREAR LA PÁGINA",
      `Nombre y apellido: ${data.get("name")}`,
      `Ciudad y provincia: ${data.get("location")}`,
      `WhatsApp del negocio: ${data.get("phone")}`,
      `Correo electrónico: ${data.get("email")}`,
      `Nombre de la página o negocio: ${data.get("business")}`,
      `Actividad del negocio: ${data.get("activity")}`,
      `Instagram: ${data.get("instagram") || "No informado"}`,
      `Colores: ${data.get("colors")}`,
      `Página de referencia: ${data.get("reference") || "No informada"}`,
      `Aclaraciones: ${data.get("notes") || "Sin aclaraciones"}`,
      "",
      "Adjunto por WhatsApp el comprobante y el logo del negocio.",
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
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
            ) : showClientForm ? (
              <form className="client-form" onSubmit={submitClientForm} onInput={(event) => setClientFormValid(event.currentTarget.checkValidity())}>
                <div className="payment-total">
                  <span>{paymentMode === "deposit" ? "SEÑA DEL 35 %" : "PAGO COMPLETO"}</span>
                  <strong>${(paymentMode === "deposit" ? Math.round(plans[paymentPlan].amount * 0.35) : plans[paymentPlan].amount).toLocaleString("es-AR")} ARS</strong>
                </div>
                <div className="form-heading">
                  <small>INFORMACIÓN DE LA PÁGINA</small>
                  <h3>Datos para crear tu página</h3>
                  <p>Completá esta información y luego adjuntá el comprobante y el logo en WhatsApp.</p>
                </div>
                <div className="form-grid">
                  <label><span>Nombre y apellido</span><input name="name" required /></label>
                  <label><span>Ciudad y provincia</span><input name="location" required /></label>
                  <label><span>Número de WhatsApp del negocio</span><input name="phone" type="tel" required /></label>
                  <label><span>Correo electrónico</span><input name="email" type="email" required /></label>
                  <label><span>Nombre de la página o negocio</span><input name="business" required /></label>
                  <label><span>¿A qué se dedica tu negocio?</span><input name="activity" required /></label>
                  <label><span>Instagram del negocio</span><input name="instagram" placeholder="@usuario" /></label>
                  <label><span>Colores que querés para la página</span><input name="colors" required /></label>
                  <label><span>Página de referencia que te guste</span><input name="reference" type="url" placeholder="https://..." /></label>
                  <label className="form-wide"><span>Logo del negocio</span><input name="logo" type="file" accept="image/*,.pdf" /><small>El archivo se adjunta manualmente cuando se abra WhatsApp.</small></label>
                  <label className="form-wide"><span>Información o aclaraciones adicionales</span><textarea name="notes" rows={4} /></label>
                </div>
                <label className="form-check"><input type="checkbox" required /> <span>Confirmo que los datos ingresados son correctos.</span></label>
                <div className="form-actions">
                  <button type="button" onClick={() => { setShowClientForm(false); setClientFormValid(false); }}>← Volver</button>
                  {clientFormValid && <button type="submit">Enviar comprobante →</button>}
                </div>
              </form>
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
                  <button className="paid-button" onClick={() => { setShowClientForm(true); setClientFormValid(false); }}>Ya pagué →</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
