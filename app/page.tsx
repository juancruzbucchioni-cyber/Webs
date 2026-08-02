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
    id: "ventas-digitales",
    number: "03",
    title: "Tiendas para Ventas Digitales",
    copy: "Plataformas para vender cuentas, productos digitales, membresías, servicios y contenido online.",
    image: "/categoria-ventas-digitales.png",
  },
  {
    id: "administracion-gastos",
    number: "04",
    title: "Administración de gastos",
    copy: "Sistemas para registrar ingresos, controlar gastos y conocer los resultados de tu negocio.",
    image: "/categoria-gastos.png",
  },
] as const;

const plans = [
  {
    category: "negocios",
    type: "Web Avanzada",
    tag: "MÁS ELEGIDA",
    price: "250.000",
    amount: 250000,
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
      "Medios de pago: efectivo y transferencia",
      "Conexión con Correo Argentino o Andreani para gestionar envíos",
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
      "Hosting privado de regalo durante 1 año",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por la Web Avanzada.",
  },
  {
    category: "negocios",
    type: "Web de Negocio Premium",
    tag: "PREMIUM",
    price: "360.000",
    amount: 360000,
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
      "Hosting privado de regalo durante 1 año",
      "Mantenimiento, ayuda y soporte durante 2 meses",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por la Web de Negocio Premium.",
  },
  {
    category: "importaciones",
    type: "Web Importaciones Basic",
    tag: "IMPORTACIONES",
    price: "200.000",
    amount: 200000,
    color: "blue",
    previews: [
      "/importaciones-gallery-02.png",
      "/importaciones-gallery-01.png",
    ],
    copy: "Una web profesional para empresas y emprendimientos de importación que necesitan presentar sus servicios, exhibir productos y administrar consultas, clientes y oportunidades comerciales desde un solo lugar.",
    features: [
      "Diseño personalizado con los colores e identidad del negocio",
      "Adaptada a celulares, tablets y computadoras",
      "Integración con WhatsApp, Instagram y redes sociales",
      "Categorías y buscador",
      "Medios de pago: efectivo, transferencia y enlace de Mercado Pago",
      "Precios especiales por transferencia",
      "Control y actualización de stock",
      "Capacidad para 230 productos",
      "Registro opcional de costos y ganancias",
      "Administración de clientes y su historial de compras",
      "Creación de ofertas, descuentos y cupones",
      "Mantenimiento y soporte durante 2 meses",
      "Hosting privado de regalo durante 1 año",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por la Web Importaciones Basic.",
  },
  {
    category: "ventas-digitales",
    type: "Web E-commerce Digital",
    tag: "VENTAS DIGITALES",
    price: "230.000",
    amount: 230000,
    color: "blue",
    previews: [
      "/digital-gallery-01.png",
      "/digital-gallery-02.png",
      "/digital-gallery-03.png",
      "/digital-gallery-04.png",
      "/digital-gallery-05.png",
      "/digital-gallery-06.png",
    ],
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
      "Hosting privado de regalo durante 1 año",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por la Web E-commerce Digital.",
  },
  {
    category: "administracion-gastos",
    type: "Dashboard General",
    tag: "ADMINISTRACIÓN",
    price: "50.000",
    amount: 50000,
    monthlyAmount: 12000,
    subscriptionUrl: "https://mpago.la/1LV5gTH",
    color: "blue",
    previews: [
      "/dashboard-gallery-01.png",
      "/dashboard-gallery-02.png",
      "/dashboard-gallery-03.png",
      "/dashboard-gallery-04.png",
      "/dashboard-gallery-05.png",
      "/dashboard-gallery-06.png",
      "/dashboard-gallery-07.png",
      "/dashboard-gallery-08.png",
    ],
    copy: "Una solución práctica para administrar y controlar tu negocio desde un solo lugar, ahorrar tiempo, mantener las cuentas ordenadas y tomar mejores decisiones.",
    features: [
      "Gestión de ventas, productos, gastos y pagos",
      "Cálculo automático de ganancias, costos y márgenes",
      "Estadísticas claras sobre el rendimiento del negocio",
      "Reportes financieros descargables en PDF",
      "Precios especiales según la cantidad vendida",
      "Buscadores, filtros y categorías organizadas",
      "Color principal del sistema a elección",
      "Acceso seguro desde computadora o celular",
      "Información protegida y respaldada en la nube",
      "Interfaz moderna, rápida y fácil de utilizar",
      "Identidad visual de JB incluida",
      "Hosting privado de regalo durante 1 año",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por el Dashboard General.",
  },
  {
    category: "administracion-gastos",
    type: "Dashboard Personalizado",
    tag: "PERSONALIZADO",
    price: "70.000",
    amount: 70000,
    monthlyAmount: 16200,
    subscriptionUrl: "https://mpago.la/1cUK2X1",
    color: "pink",
    previews: [
      "/personalizado-gallery-01.png",
      "/personalizado-gallery-02.png",
      "/personalizado-gallery-03.png",
      "/personalizado-gallery-04.png",
      "/personalizado-gallery-05.png",
      "/personalizado-gallery-06.png",
      "/personalizado-gallery-07.png",
      "/personalizado-gallery-08.png",
    ],
    copy: "Una solución práctica para administrar y controlar tu negocio desde un solo lugar, ahorrar tiempo, mantener las cuentas ordenadas y tomar mejores decisiones.",
    highlight: "Tomamos nuestro sistema y lo adaptamos a cómo funciona TU negocio.",
    features: [
      "Logo y nombre de la empresa",
      "Colores y estética de marca personalizados",
      "Dashboard adaptado a la identidad visual del negocio",
      "Gestión de ventas, productos, gastos y pagos",
      "Cálculo automático de ganancias, costos y márgenes",
      "Estadísticas y gráficos personalizados",
      "Reportes financieros descargables en PDF",
      "Buscadores, filtros y categorías",
      "Módulos personalizados según el tipo de negocio",
      "Campos y funciones adicionales a elección",
      "Acceso desde computadora y celular",
      "Información protegida y respaldada en la nube",
      "Dominio personalizado disponible como adicional",
      "Configuración y puesta en marcha incluida",
      "Soporte prioritario",
      "Identidad visual del cliente integrada en todo el sistema",
      "Hosting privado de regalo durante 1 año",
      "Entrega estimada: 1 semana y media",
    ],
    message: "Hola, buenas. Quería consultar por el Dashboard Personalizado.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<number | null>(null);
  const [paymentMode, setPaymentMode] = useState<"deposit" | "full" | "monthly" | null>(null);
  const [copied, setCopied] = useState("");
  const [showClientForm, setShowClientForm] = useState(false);
  const [clientFormValid, setClientFormValid] = useState(false);
  const [expandedPlans, setExpandedPlans] = useState<number[]>([]);
  const [activeSlides, setActiveSlides] = useState([0, 0, 0, 0, 0, 0]);
  const [lightbox, setLightbox] = useState<{ planIndex: number; imageIndex: number } | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof storeCategories)[number]["id"]>("negocios");
  const [showTermsNotice, setShowTermsNotice] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  useEffect(() => {
    setShowTermsNotice(window.localStorage.getItem("jcb-terms-accepted") !== "true");
  }, []);

  const acceptTerms = () => {
    window.localStorage.setItem("jcb-terms-accepted", "true");
    setShowTermsNotice(false);
    setShowTermsModal(false);
  };

  useEffect(() => {
    if (!showTermsModal) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowTermsModal(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showTermsModal]);

  const selectCategory = (category: (typeof storeCategories)[number]["id"]) => {
    setActiveCategory(category);
    window.setTimeout(() => {
      document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const goToModels = () => {
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    const selectedPlan = plans[paymentPlan];
    const monthlyAmount = "monthlyAmount" in selectedPlan ? selectedPlan.monthlyAmount : null;
    const amount = paymentMode === "deposit" ? Math.round(selectedPlan.amount * 0.35) : paymentMode === "monthly" && monthlyAmount ? monthlyAmount : selectedPlan.amount;
    const message = [
      "Hola, buenas. Ya realicé el pago y quiero comenzar mi página.",
      "",
      `Plan: ${plans[paymentPlan].type}`,
      `Pago: ${paymentMode === "deposit" ? "Seña del 35 %" : paymentMode === "monthly" ? "Primer mes del plan mensual" : "Pago completo"}`,
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
        <a className="brand brand-logo" href="/" aria-label="JCB Development, inicio">
          <img src="/jcb-development.png" alt="JCB Development" />
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#categorias" onClick={() => setMenuOpen(false)}>Categorías</a>
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
          <a className="scroll-cue" href="#categorias"><span>Ver categorías</span><b>↓</b></a>
        </div>
      </section>

      <section className="intro section">
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
          <div className="domain-category-row">
            <a className="category-card domain-category-card" href="#dominio">
              <span className="category-number">05</span>
              <span className="category-image" aria-hidden="true">
                <img src="/categoria-dominio.png" alt="" />
              </span>
              <strong>Dominio privado</strong>
              <small>Una dirección exclusiva y profesional para identificar tu página en internet.</small>
              <b>Ver dominio <span>→</span></b>
            </a>
          </div>
          <a className="category-models-cue" href="#modelos" onClick={goToModels}>
            <span>Ver modelos</span>
            <b>↓</b>
          </a>
        </div>

        <div className="category-content" id="modelos">
          {activeCategory === "negocios" || activeCategory === "importaciones" || activeCategory === "ventas-digitales" || activeCategory === "administracion-gastos" ? (
            <>
              <p className="section-label">{activeCategory === "negocios" ? "SOLUCIONES PARA CADA NEGOCIO" : activeCategory === "importaciones" ? "SOLUCIONES PARA IMPORTACIONES" : activeCategory === "ventas-digitales" ? "SOLUCIONES PARA VENTAS DIGITALES" : "SOLUCIONES PARA ADMINISTRAR TU NEGOCIO"}</p>
              <h2>{activeCategory === "negocios" ? "Elegí la web que necesitás." : activeCategory === "importaciones" ? "Conectá mercados y clientes." : activeCategory === "ventas-digitales" ? "Vendé productos digitales." : "Controlá todos tus números."}<br /><span>Nosotros la hacemos realidad.</span></h2>
              <p className="section-copy">{activeCategory === "negocios" ? "Valores claros para comenzar. Cada proyecto se personaliza con tu identidad, contenido y objetivos." : activeCategory === "importaciones" ? "Una presencia profesional para presentar servicios, productos y oportunidades comerciales de importación." : activeCategory === "ventas-digitales" ? "Una solución completa para organizar tu catálogo, recibir pedidos y hacer crecer tu negocio digital." : "Centralizá ventas, gastos, productos y resultados desde un panel moderno, claro y seguro."}</p>
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
              {"highlight" in plan && <div className="plan-highlight">{plan.highlight}</div>}
              <div className="price"><small>DESDE</small><strong>${plan.price}</strong><span>ARS</span></div>
              {"monthlyAmount" in plan && <div className="monthly-price"><small>O PLAN MENSUAL</small><strong>${plan.monthlyAmount.toLocaleString("es-AR")}</strong><span>ARS / MES</span></div>}
              <ul>
                {(expandedPlans.includes(index) ? plan.features : plan.features.slice(0, 6)).map((feature) => {
                  const isRepeated = feature.startsWith("Incluye todas");
                  const isDelivery = feature.startsWith("Entrega estimada");
                  return (
                    <li className={isRepeated ? "repeated-feature" : isDelivery ? "delivery-feature" : ""} key={feature}>
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
            </>
          ) : null}
          <article className="domain-addon" id="dominio">
            <div className="domain-glow" />
            <div className="domain-icon"><i /><i /><i /></div>
            <div className="domain-content">
              <small>ADICIONAL PARA TODAS LAS CATEGORÍAS</small>
              <h3>Dominio privado</h3>
              <p>Usá una dirección profesional y exclusiva para tu negocio, como <strong>tunegocio.com.ar</strong>. El dominio se abona y renueva una vez por año. El valor depende de la extensión elegida y su disponibilidad.</p>
            </div>
            <div className="domain-price">
              <span>PRECIO</span>
              <strong>AL COSTO</strong>
              <small>Pago anual · Sin recargos</small>
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, buenas. Quería consultar el precio de un dominio privado para ${storeCategories.find((category) => category.id === activeCategory)?.title}.`)}`} target="_blank" rel="noreferrer">
              Consultar precio <span>→</span>
            </a>
          </article>
        </div>
      </section>

      <footer id="contacto">
        <a className="brand brand-logo footer-logo" href="/" aria-label="JCB Development, inicio"><img src="/jcb-development.png" alt="JCB Development" /></a>
        <span>DISEÑO Y DESARROLLO WEB · 2025</span>
        <button className="footer-terms" onClick={() => setShowTermsModal(true)}>Términos y condiciones</button>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      {showTermsNotice && (
        <aside className="terms-notice" aria-label="Aviso de términos y condiciones">
          <button className="terms-link" onClick={() => setShowTermsModal(true)}>Términos y condiciones</button>
          <p>Al continuar, confirmás que leíste y aceptás nuestras condiciones.</p>
          <button className="terms-accept" onClick={acceptTerms}>Aceptar</button>
        </aside>
      )}

      {showTermsModal && (
        <div className="terms-overlay" role="dialog" aria-modal="true" aria-label="Términos y condiciones" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setShowTermsModal(false);
        }}>
          <section className="terms-modal">
            <button className="terms-close" onClick={() => setShowTermsModal(false)} aria-label="Cerrar términos">×</button>
            <p className="section-label">JCB DEVELOPMENT</p>
            <h2>Términos y condiciones</h2>
            <iframe src="/terminos-y-condiciones.txt" title="Términos y condiciones completos" />
            <div className="terms-modal-actions">
              <button onClick={() => setShowTermsModal(false)}>Cerrar</button>
              <button onClick={acceptTerms}>Aceptar términos y condiciones</button>
            </div>
          </section>
        </div>
      )}

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
                  {"monthlyAmount" in plans[paymentPlan] && (
                    <button className="monthly-option" onClick={() => {
                      const selectedPlan = plans[paymentPlan];
                      if ("subscriptionUrl" in selectedPlan) {
                        const subscriptionUrl = selectedPlan.subscriptionUrl;
                        closePayment();
                        window.open(subscriptionUrl, "_blank", "noopener,noreferrer");
                        return;
                      }
                      setPaymentMode("monthly");
                    }}>
                      <span>PLAN MENSUAL</span>
                      <strong>${plans[paymentPlan].monthlyAmount.toLocaleString("es-AR")}</strong>
                      <small>{"subscriptionUrl" in plans[paymentPlan] ? "ARS POR MES · COBRO AUTOMÁTICO CON MERCADO PAGO" : "ARS POR MES"}</small>
                    </button>
                  )}
                </div>
              </>
            ) : showClientForm ? (
              <form className="client-form" onSubmit={submitClientForm} onInput={(event) => setClientFormValid(event.currentTarget.checkValidity())}>
                <div className="payment-total">
                  <span>{paymentMode === "deposit" ? "SEÑA DEL 35 %" : paymentMode === "monthly" ? "PRIMER MES" : "PAGO COMPLETO"}</span>
                  <strong>${(paymentMode === "deposit" ? Math.round(plans[paymentPlan].amount * 0.35) : paymentMode === "monthly" && "monthlyAmount" in plans[paymentPlan] ? plans[paymentPlan].monthlyAmount : plans[paymentPlan].amount).toLocaleString("es-AR")} ARS</strong>
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
                  <span>{paymentMode === "deposit" ? "SEÑA DEL 35 %" : paymentMode === "monthly" ? "PRIMER MES" : "PAGO COMPLETO"}</span>
                  <strong>${(paymentMode === "deposit" ? Math.round(plans[paymentPlan].amount * 0.35) : paymentMode === "monthly" && "monthlyAmount" in plans[paymentPlan] ? plans[paymentPlan].monthlyAmount : plans[paymentPlan].amount).toLocaleString("es-AR")} ARS</strong>
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
