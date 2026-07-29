"use client";

import { useEffect, useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "5493534128474";

const storeCategories = [
  {
    id: "negocios",
    number: "01",
    title: "Tiendas para Negocios",
    copy: "Catálogos y tiendas online para vender y administrar tu negocio.",
    image: "/categoria-negocios.png",
  },
  {
    id: "importaciones",
    number: "02",
    title: "Tiendas para Importaciones",
    copy: "Soluciones pensadas para productos importados, pedidos y reservas.",
    image: "/categoria-importaciones.png",
  },
  {
    id: "cursos",
    number: "03",
    title: "Tiendas para Cursos",
    copy: "Plataformas para presentar, vender y organizar tus cursos online.",
    image: "/categoria-cursos.png",
  },
  {
    id: "ventas-digitales",
    number: "04",
    title: "Tiendas para Ventas Digitales",
    copy: "Plataformas para vender cuentas, productos digitales, membresías, servicios y contenido online.",
    image: "/categoria-ventas-digitales.png",
  },
] as const;

const plans = [
  {
    category: "negocios",
    type: "Web Avanzada",
    tag: "MÁS ELEGIDA",
    price: "220.000",
    amount: 220000,
    color: "blue",
    previews: [
      "/avanzada-gallery-01.png",
      "/avanzada-gallery-02.png",
      "/avanzada-gallery-03.png",
      "/avanzada-gallery-04.png",
    ],
    copy: "Ideal para negocios que quieren comenzar a vender por internet y administrar sus productos, pedidos y clientes fácilmente.",
    features: [
      "Diseño personalizado con los colores e identidad del negocio",
      "Adaptada a celulares, tablets y computadoras",
      "Integración con WhatsApp, Instagram y redes sociales",
      "Capacidad para 300 productos",
      "Carga inicial de hasta 30 productos",
      "Categorías, buscador y filtros personalizados",
      "Carrito o bolsa de compras",
      "Registro de datos del comprador",
      "Pedidos organizados desde un panel administrativo",
      "Medios de pago: efectivo, transferencia y enlace de Mercado Pago",
      "Precios especiales por transferencia",
      "Control y actualización de stock",
      "Registro opcional de costos y ganancias",
      "Administración de clientes y su historial de compras",
      "Creación de ofertas, descuentos y cupones",
      "Métricas básicas de ventas, pedidos y productos",
      "Estados de pedidos y anotaciones internas",
      "Configuración básica para buscadores",
      "Hasta dos rondas de cambios antes de la entrega",
      "Mantenimiento, ayuda y soporte durante 2 meses",
      "Hosting privado incluido durante 2 años",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por la Web Avanzada.",
  },
  {
    category: "negocios",
    type: "Web de Negocio Premium",
    tag: "PREMIUM",
    price: "300.000",
    amount: 300000,
    color: "pink",
    previews: [
      "/premium-gallery-01.png",
      "/premium-gallery-02.png",
      "/premium-gallery-03.png",
      "/premium-gallery-04.png",
      "/premium-gallery-05.png",
      "/premium-gallery-06.png",
    ],
    copy: "Una solución completa para negocios que necesitan automatizar sus ventas, ofrecer una mejor experiencia de compra y administrar toda la operación desde un panel profesional.",
    features: [
      "Incluye todas las características de la Web Avanzada",
      "Pagos automáticos con tarjetas de crédito y débito mediante Mercado Pago",
      "Sistema de usuarios y cuentas de clientes",
      "Notificaciones automáticas de compras y cambios en pedidos",
      "Recuperación de carritos abandonados",
      "Reportes avanzados de ventas, costos y ganancias",
      "Herramientas avanzadas para clientes, promociones y seguimiento de pedidos",
      "Diseño de banners y secciones promocionales",
      "Hasta 3 funciones adicionales personalizadas",
      "Optimización SEO básica para buscadores",
      "Mayor personalización visual y funcional",
      "Soporte prioritario",
      "Hosting privado incluido durante 3 años",
      "Mantenimiento, ayuda y soporte durante 2 meses",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por la Web de Negocio Premium.",
  },
  {
    category: "ventas-digitales",
    type: "Web E-commerce Digital",
    tag: "VENTAS DIGITALES",
    price: "350.000",
    amount: 350000,
    color: "blue",
    previews: ["/categoria-ventas-digitales.png"],
    copy: "Una tienda profesional para vender cuentas, productos digitales, membresías, servicios y contenido online desde un catálogo claro y fácil de administrar.",
    features: [
      "Diseño 100 % personalizado para tu marca",
      "Adaptada a celulares, tablets y computadoras",
      "Catálogo organizado por categorías",
      "Buscador y filtros de productos",
      "Sección de productos destacados y más vendidos",
      "Carrito de compras",
      "Productos con imagen, descripción, precio y disponibilidad",
      "Precios normales, promocionales y por cantidad",
      "Control y actualización de stock",
      "Integración con WhatsApp e Instagram",
      "Botón para comunidad o grupo privado",
      "Formulario de contacto personalizado",
      "Panel para administrar productos y categorías",
      "Hasta 300 productos digitales",
      "Configuración básica para buscadores",
      "Hasta dos rondas de cambios antes de la entrega",
      "Mantenimiento, ayuda y soporte durante 2 meses",
      "Hosting privado incluido durante 2 años",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por la Web E-commerce Digital.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<number | null>(null);
  const [paymentMode, setPaymentMode] = useState<"deposit" | "full" | null>(null);
  const [copied, setCopied] = useState("");
  const [showClientForm, setShowClientForm] = useState(false);
  const [clientFormValid, setClientFormValid] = useState(false);
  const [expandedPlans, setExpandedPlans] = useState<number[]>([]);
  const [activeSlides, setActiveSlides] = useState([0, 0, 0]);
  const [lightbox, setLightbox] = useState<{ planIndex: number; imageIndex: number } | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof storeCategories)[number]["id"]>("negocios");

  const selectCategory = (category: (typeof storeCategories)[number]["id"]) => {
    setActiveCategory(category);
    window.setTimeout(() => {
      document.getElementById("category-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const changeSlide = (planIndex: number, direction: number) => {
    setActiveSlides((current) => {
      const next = [...current];
      next[planIndex] = (next[planIndex] + direction + plans[planIndex].previews.length) % plans[planIndex].previews.length;
      return next;
    });
  };

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") setLightbox((current) => current ? { ...current, imageIndex: (current.imageIndex - 1 + plans[current.planIndex].previews.length) % plans[current.planIndex].previews.length } : null);
      if (event.key === "ArrowRight") setLightbox((current) => current ? { ...current, imageIndex: (current.imageIndex + 1) % plans[current.planIndex].previews.length } : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

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
      "IMPORTANTE: A continuación adjunto manualmente por WhatsApp el comprobante de pago y el logo del negocio.",
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
          <a href="/" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#categorias" onClick={() => setMenuOpen(false)}>Categorías</a>
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
        <div className="category-selector" id="categorias">
          <p className="section-label">TIPOS DE TIENDAS ONLINE</p>
          <h2>Elegí una categoría.</h2>
          <p className="category-intro">Seleccioná el tipo de proyecto que más se adapta a tu negocio.</p>
          <div className="category-grid">
            {storeCategories.map((category) => (
              <button
                className={`category-card ${activeCategory === category.id ? "active" : ""}`}
                key={category.id}
                onClick={() => selectCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                <span className="category-number">{category.number}</span>
                <span className="category-image" aria-hidden="true">
                  <img src={category.image} alt="" />
                </span>
                <strong>{category.title}</strong>
                <small>{category.copy}</small>
                <b>{activeCategory === category.id ? "Categoría seleccionada" : "Ver categoría"} <span>→</span></b>
              </button>
            ))}
          </div>
        </div>

        <div className="category-content" id="category-content">
          {activeCategory === "negocios" || activeCategory === "ventas-digitales" ? (
            <>
              <p className="section-label">{activeCategory === "negocios" ? "SOLUCIONES PARA CADA NEGOCIO" : "SOLUCIONES PARA VENTAS DIGITALES"}</p>
              <h2>{activeCategory === "negocios" ? "Elegí la web que necesitás." : "Vendé productos digitales."}<br /><span>Nosotros la hacemos realidad.</span></h2>
              <p className="section-copy">{activeCategory === "negocios" ? "Valores claros para comenzar. Cada proyecto se personaliza con tu identidad, contenido y objetivos." : "Una solución completa para organizar tu catálogo, recibir pedidos y hacer crecer tu negocio digital."}</p>
              <div className="plans">
          {plans.map((plan, index) => plan.category === activeCategory && (
            <article className={`plan-card ${plan.color}`} key={plan.type}>
              <div className="plan-glow" />
              <div className="plan-head"><span>0{index + 1}</span><small>{plan.tag}</small></div>
              <h3>{plan.type}</h3>
              <figure className="plan-preview">
                <button className="preview-open" onClick={() => setLightbox({ planIndex: index, imageIndex: activeSlides[index] })} aria-label={`Ampliar ejemplo visual de ${plan.type}`}>
                  <img src={plan.previews[activeSlides[index]]} alt={`Ejemplo visual ${activeSlides[index] + 1} de ${plan.type}`} />
                </button>
                {plan.previews.length > 1 && (
                  <>
                    <button className="preview-arrow prev" onClick={() => changeSlide(index, -1)} aria-label="Imagen anterior">‹</button>
                    <button className="preview-arrow next" onClick={() => changeSlide(index, 1)} aria-label="Imagen siguiente">›</button>
                    <div className="preview-dots">
                      {plan.previews.map((_, dotIndex) => <button key={dotIndex} className={activeSlides[index] === dotIndex ? "active" : ""} onClick={() => setActiveSlides((current) => current.map((value, planNumber) => planNumber === index ? dotIndex : value))} aria-label={`Ver imagen ${dotIndex + 1}`} />)}
                    </div>
                  </>
                )}
              </figure>
              <p>{plan.copy}</p>
              <div className="price"><small>DESDE</small><strong>${plan.price}</strong><span>ARS</span></div>
              <ul>
                {(expandedPlans.includes(index) ? plan.features : plan.features.slice(0, 6)).map((feature) => {
                  const isRepeated = feature.startsWith("Incluye todas");
                  return (
                    <li className={isRepeated ? "repeated-feature" : ""} key={feature}>
                      <span>✓</span>{feature}
                    </li>
                  );
                })}
              </ul>
              <button
                className={`features-toggle ${expandedPlans.includes(index) ? "expanded" : ""}`}
                onClick={() => setExpandedPlans((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])}
                aria-expanded={expandedPlans.includes(index)}
              >
                {expandedPlans.includes(index) ? "Ver menos características" : "Ver todas las características"}
                <span>↓</span>
              </button>
              <div className="plan-actions">
                <button onClick={() => { setPaymentPlan(index); setPaymentMode(null); }}>Adquirir <span>→</span></button>
              </div>
            </article>
          ))}
              </div>
              {activeCategory === "negocios" && <article className="domain-addon">
          <div className="domain-glow" />
          <div className="domain-icon"><i /><i /><i /></div>
          <div className="domain-content">
            <small>ADICIONAL</small>
            <h3>Dominio privado</h3>
            <p>Usá una dirección profesional y exclusiva para tu negocio, como <strong>tunegocio.com.ar</strong>. El dominio se abona y renueva una vez por año. El valor depende de la extensión elegida y su disponibilidad.</p>
          </div>
          <div className="domain-price">
            <span>PRECIO</span>
            <strong>AL COSTO</strong>
            <small>Pago anual · Sin recargos</small>
          </div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, buenas. Quería consultar el precio de un dominio privado para mi página web.")}`} target="_blank" rel="noreferrer">
            Consultar precio <span>→</span>
          </a>
              </article>}
            </>
          ) : (
            <article className="category-coming-soon">
              <div className="coming-soon-glow" />
              <p className="section-label">NUEVA CATEGORÍA</p>
              <img
                className="coming-soon-image"
                src={storeCategories.find((category) => category.id === activeCategory)?.image}
                alt=""
              />
              <h2>{storeCategories.find((category) => category.id === activeCategory)?.title}</h2>
              <p>Estamos preparando los modelos y planes de esta categoría. Podés consultarnos ahora y diseñamos una propuesta personalizada para tu proyecto.</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, buenas. Quería consultar por la categoría ${storeCategories.find((category) => category.id === activeCategory)?.title}.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Consultar esta categoría <span>→</span>
              </a>
            </article>
          )}
        </div>
      </section>

      <footer id="contacto">
        <a className="brand brand-logo footer-logo" href="#inicio" aria-label="JCB Development, inicio"><img src="/jcb-development.png" alt="JCB Development" /></a>
        <span>DISEÑO Y DESARROLLO WEB · 2025</span>
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
                  <label className="form-wide"><span>Información o aclaraciones adicionales</span><textarea name="notes" rows={4} /></label>
                </div>
                <div className="whatsapp-attachment-notice">
                  <strong>Logo y comprobante</strong>
                  <span>Cuando se abra WhatsApp, adjuntá manualmente el logo del negocio y el comprobante de pago usando el ícono del clip 📎.</span>
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

      {lightbox && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Vista ampliada de la página" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setLightbox(null);
        }}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar imagen">×</button>
          {plans[lightbox.planIndex].previews.length > 1 && <button className="lightbox-arrow prev" onClick={() => setLightbox((current) => current ? { ...current, imageIndex: (current.imageIndex - 1 + plans[current.planIndex].previews.length) % plans[current.planIndex].previews.length } : null)} aria-label="Imagen anterior">‹</button>}
          <img src={plans[lightbox.planIndex].previews[lightbox.imageIndex]} alt={`Vista ampliada ${lightbox.imageIndex + 1} de ${plans[lightbox.planIndex].type}`} />
          {plans[lightbox.planIndex].previews.length > 1 && <button className="lightbox-arrow next" onClick={() => setLightbox((current) => current ? { ...current, imageIndex: (current.imageIndex + 1) % plans[current.planIndex].previews.length } : null)} aria-label="Imagen siguiente">›</button>}
          <span className="lightbox-counter">{lightbox.imageIndex + 1} / {plans[lightbox.planIndex].previews.length}</span>
        </div>
      )}
    </main>
  );
}
