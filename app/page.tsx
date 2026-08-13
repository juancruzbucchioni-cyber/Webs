"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DestinationCard } from "@/components/ui/card-21";

const WHATSAPP_NUMBER = "5493534128474";
const MERCADO_PAGO_LINK = "https://link.mercadopago.com.ar/jcbdevelopment";

const storeCategories = [
  {
    id: "negocios",
    number: "01",
    title: "Tiendas para Negocios",
    copy: "Catálogos y tiendas online para vender y administrar tu negocio.",
    image: "/categoria-negocios.webp",
  },
  {
    id: "importaciones",
    number: "02",
    title: "Tiendas para Importaciones",
    copy: "Soluciones pensadas para productos importados, pedidos y reservas.",
    image: "/categoria-importaciones.webp",
  },
  {
    id: "ventas-digitales",
    number: "03",
    title: "E-commerce",
    copy: "Plataformas para vender cuentas, productos digitales, membresías, servicios y contenido online.",
    image: "/categoria-ventas-digitales.webp",
  },
  {
    id: "administracion-gastos",
    number: "04",
    title: "Administración de gastos",
    copy: "Sistemas para registrar ingresos, controlar gastos y conocer los resultados de tu negocio.",
    image: "/categoria-gastos.webp",
  },
  {
    id: "estudios",
    number: "05",
    title: "Webs para Estudios",
    copy: "Webs institucionales para estudios jurídicos, contables, médicos, arquitectura y consultorías.",
    image: "/categoria-estudios.webp",
  },
  {
    id: "dominio",
    number: "06",
    title: "Dominio privado",
    copy: "Una dirección exclusiva y profesional para identificar tu página en internet.",
    image: "/categoria-dominio.webp",
    isLink: true,
    href: "#dominio",
  },
] as const;

const plans = [
  {
    category: "negocios",
    type: "Web Avanzada",
    tag: "MÁS ELEGIDA",
    price: "255.000",
    amount: 255000,
    color: "blue",
    previews: [
      "/avanzada-gallery-01.png",
      "/avanzada-gallery-02.png",
      "/avanzada-gallery-03.png",
      "/avanzada-gallery-04.png",
    ],
    copy: "Ideal para negocios que quieren comenzar a vender por internet y administrar sus productos, pedidos y clientes fácilmente.",
    features: [
      "Diseño 100 % adaptado a celulares, tablets y computadoras",
      "Capacidad para 300 productos (carga inicial de 30 incluida)",
      "Buscador, categorías, filtros y carrito de compras",
      "Integración directa con WhatsApp, Instagram y redes sociales",
      "Panel de administración para gestionar pedidos y stock",
      "Conexión con Correo Argentino o Andreani para envíos",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web Avanzada.",
  },
  {
    category: "negocios",
    type: "Web de Negocio Premium",
    tag: "PREMIUM",
    price: "370.000",
    amount: 370000,
    color: "pink",
    previews: [
      "/premium-gallery-01.png",
      "/premium-gallery-02.png",
      "/premium-gallery-03.png",
      "/premium-gallery-04.png",
      "/premium-gallery-05.png",
      "/premium-gallery-06.png",
    ],
    copy: "Una solución completa para negocios que necesitan automatizar sus ventas, ofrecer una mejor experiencia de compra y administrar toda la operación.",
    features: [
      "Incluye todas las características de la Web Avanzada",
      "Cobros automáticos con tarjetas mediante Mercado Pago",
      "Sistema de usuarios y cuentas de clientes",
      "Notificaciones automáticas y recuperación de carritos",
      "Reportes avanzados de ventas, costos y ganancias",
      "Hasta 3 funciones personalizadas a medida de tu negocio",
      "Soporte prioritario y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web de Negocio Premium.",
  },
  {
    category: "importaciones",
    type: "Web Importaciones Basic",
    tag: "IMPORTACIONES",
    price: "205.000",
    amount: 205000,
    color: "blue",
    previews: [
      "/importaciones-gallery-02.png",
      "/importaciones-gallery-01.png",
    ],
    copy: "Una web profesional para empresas de importación que necesitan presentar sus servicios, exhibir productos y administrar consultas.",
    features: [
      "Diseño profesional optimizado para comex e importaciones",
      "Capacidad para 230 productos con control de stock",
      "Pagos por efectivo, transferencia y enlace de Mercado Pago",
      "Administración de clientes, consultas y oportunidades",
      "Creación de ofertas, descuentos y cupones promocionales",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web Importaciones Basic.",
  },
  {
    category: "ventas-digitales",
    type: "Web E-commerce Digital",
    tag: "VENTAS DIGITALES",
    price: "255.000",
    amount: 255000,
    color: "blue",
    previews: [
      "/digital-gallery-01.png",
      "/digital-gallery-02.png",
      "/digital-gallery-03.png",
      "/digital-gallery-04.png",
      "/digital-gallery-05.png",
      "/digital-gallery-06.png",
    ],
    copy: "Una tienda profesional para vender cuentas, productos digitales, membresías, servicios y contenido online desde un catálogo claro.",
    features: [
      "Diseño optimizado para productos digitales, cuentas y membresías",
      "Capacidad para 300 productos con catálogo por categorías",
      "Carrito de compras y precios por cantidad o promocionales",
      "Integración con WhatsApp, Instagram y comunidad o grupo privado",
      "Panel para administrar productos, categorías y stock",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web E-commerce Digital.",
  },
  {
    category: "administracion-gastos",
    type: "Dashboard General",
    tag: "ADMINISTRACIÓN",
    price: "85.000",
    amount: 85000,
    monthlyAmount: 30000,
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
      "1 Tienda y 3 Usuarios",
      "Catálogo, Productos y Categorías directos desde tu página",
      "Gastos, Ventas, Pagos, Estadísticas y Reportes Mensuales",
      "Precios especiales y color del sistema a elección",
      "Información protegida y respaldada en la nube",
      "Identidad visual de JB incluida",
    ],
    message: "Hola, buenas. Quería consultar por el Dashboard General.",
  },
  {
    category: "administracion-gastos",
    type: "Dashboard Personalizado",
    tag: "PERSONALIZADO",
    price: "150.000",
    amount: 150000,
    monthlyAmount: 60000,
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
      "Acceso para 3 Tiendas y 7 Usuarios",
      "Estética y colores de marca adaptados a tu negocio",
      "Gestión de ventas, productos, gastos y pagos",
      "Estadísticas y gráficos personalizados descargables en PDF",
      "Módulos y funciones adicionales a medida",
      "Información respaldada en la nube con soporte prioritario",
      "Hosting privado de regalo durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por el Dashboard Personalizado.",
  },
  {
    category: "estudios",
    type: "Web para Estudios & Consultoras",
    tag: "ESTUDIOS",
    price: "225.000",
    amount: 225000,
    color: "purple",
    previews: [
      "/estudios-gallery-01.png",
    ],
    copy: "Sitio web institucional profesional para estudios jurídicos, contables, médicos, arquitectura y consultorías en general. Diseñado para administrar consultas, coordinar contacto por WhatsApp y presentar tu firma.",
    features: [
      "Diseño institucional 100 % adaptado a celulares, tablets y computadoras",
      "Formulario para administración de consultas generales directo al mail",
      "Botón directo para recepción de consultas por WhatsApp",
      "Muestra de honorarios / precios opcional (a elección de tu estudio)",
      "Sección de presentación de especialidades, servicios y equipo profesional",
      "Incluye 2 adicionales estándares a elección (Turnero online, Cotizador a medida, Preguntas frecuentes o Blog)",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web para Estudios & Consultoras.",
  },
];

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para administrar mi web?",
    answer: "Para nada. Te entregamos un panel de administración ultra sencillo e intuitivo desde donde podés actualizar productos, precios, ofertas y ver tus pedidos sin saber nada de programación."
  },
  {
    question: "¿Cómo funcionan los medios de pago y la seña?",
    answer: "Podés comenzar tu proyecto abonando una seña del 35% por transferencia bancaria o Mercado Pago. El saldo restante se cancela una vez que revisás la web terminada y está lista para publicar."
  },
  {
    question: "¿En cuánto tiempo está lista mi página web?",
    answer: "El tiempo estimado de desarrollo y entrega es de 1 semana a 1 semana y media. Durante este proceso te enviamos avances periódicos por WhatsApp para que veas la evolución de tu sitio."
  },
  {
    question: "¿Qué incluye el soporte post-entrega de 2 meses?",
    answer: "Te brindamos 2 meses enteros de acompañamiento técnico, ayuda para resolver cualquier duda, soporte en el panel y hasta 2 rondas de ajustes de contenido sin ningún costo adicional."
  },
  {
    question: "¿Puedo usar mi propio dominio si ya tengo uno?",
    answer: "¡Sí, totalmente! Si ya compraste tu dominio (por ejemplo en NIC Argentina o GoDaddy), lo vinculamos a tu nueva web sin ningún costo extra."
  }
];

const typingPhrases = [
  "Tiendas de Negocios",
  "Webs de Importaciones",
  "Sistemas de Gestión & Gastos",
  "Plataformas E-Commerce",
];

const clientProjects = [
  {
    name: "Motosport Neuquén",
    flag: "🏍️",
    stats: "Negocio de motos, repuestos, accesorios de competición y catálogo interactivo.",
    image: "/motosport-neuquen-hero.png",
    previewIndex: 1,
    themeColor: "115 90% 35%",
    actionText: "Ver Sitio Web 🌐",
    href: "https://motosportneuquen.com/",
  },
  {
    name: "Speedy Repuestos",
    flag: "🏍️",
    stats: "Negocio de motos, repuestos, accesorios de competición y catálogo interactivo.",
    image: "/avanzada-gallery-01.png",
    previewIndex: 0,
    themeColor: "220 80% 32%",
    actionText: "Ver Sitio Web 🌐",
    href: "https://speedy.kazzu.workers.dev/",
  },
  {
    name: "SDT DROPS",
    flag: "⚡",
    stats: "E-Commerce de Productos, termos, celulares, remeras, etc.",
    image: "/digital-gallery-01.png",
    previewIndex: 3,
    themeColor: "280 75% 35%",
    actionText: "Ver Sitio Web 🌐",
    href: "https://sdtdrops.com/",
  },
  {
    name: "Control de Gastos & Ventas",
    flag: "📊",
    stats: "Sistema web autogestionable para administrar ventas, gastos y reportes del negocio.",
    image: "/dashboard-gallery-01.png",
    previewIndex: 4,
    themeColor: "320 70% 32%",
    actionText: "Ver Dashboard 📊",
    href: "https://dashboard-estadisticas-7pn.pages.dev/",
  },
];

function TypingEffect() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIdx];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIdx < currentPhrase.length) {
          setCharIdx((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setCharIdx((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, isDeleting ? 35 : 75);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  return (
    <span className="typing-phrase">
      {typingPhrases[phraseIdx].substring(0, charIdx)}
      <span className="typing-cursor">|</span>
    </span>
  );
}

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
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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
          <a href="#clientes" onClick={() => setMenuOpen(false)}>Clientes</a>
          <a href="#categorias" onClick={() => setMenuOpen(false)}>Categorías</a>
          <a className="mobile-social-link" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">Contacto</a>
          <a className="mobile-social-link" href="https://www.instagram.com/jcb_development/" target="_blank" rel="noreferrer">Instagram · @jcb_development</a>
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
          <a className="nav-instagram" href="https://www.instagram.com/jcb_development/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <button className="menu-button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-bg-media">
          <img src="https://mfgdppcitpollcnqukpt.supabase.co/storage/v1/object/public/product-images/Creating_dynamic_logo_transition_202608060124-ezgif.com-video-to-webp-converter.webp" alt="" />
        </div>
        <div className="aurora aurora-left" />
        <div className="aurora aurora-right" />
        <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="hero-process" id="proceso">
          <p className="section-label">UN PROCESO SIMPLE</p>
          <h1>De tu idea a internet<br /><span>sin complicaciones.</span></h1>
          <div className="hero-typing-wrapper">
            <span>Desarrollamos </span>
            <TypingEffect />
          </div>
          <div className="hero-steps-container">
            <div className="timeline-line-track">
              <motion.div
                className="timeline-line-fill"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              />
            </div>

            <div className="hero-steps">
              {[
                ["01", "Nos contás", "Charlamos sobre tu negocio, tus objetivos y la web que imaginás."],
                ["02", "Diseñamos", "Creamos una propuesta visual alineada con tu marca y tus clientes."],
                ["03", "Desarrollamos", "Construimos una experiencia rápida, adaptable y fácil de usar."],
                ["04", "Publicamos", "La dejamos online, configurada y lista para empezar a trabajar."],
              ].map(([number, title, copy], idx) => (
                <motion.article
                  className="step-card"
                  key={number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="step-number">{number}</span>
                  <div className="step-node-wrapper">
                    <span className="step-node-dot" />
                  </div>
                  <h2 className="step-title">{title}</h2>
                  <p className="step-copy">{copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
          <a className="scroll-cue" href="#categorias"><span>Ver categorías</span><b>↓</b></a>
        </div>
      </section>

      <section className="metrics-bar-section">
        <div className="metrics-grid">
          <motion.div className="metric-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <strong>+35</strong>
            <span>Webs entregadas</span>
          </motion.div>
          <motion.div className="metric-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <strong>100%</strong>
            <span>Adaptadas a celular</span>
          </motion.div>
          <motion.div className="metric-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <strong>7 a 10 Días</strong>
            <span>Tiempo de entrega</span>
          </motion.div>
          <motion.div className="metric-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <strong>1 Año Gratis</strong>
            <span>Hosting privado de regalo</span>
          </motion.div>
        </div>
      </section>

      <section className="client-projects-section section" id="clientes">
        <h2>Nuestros Clientes</h2>
        <p className="section-copy">Conocé algunos de los sitios web y sistemas de gestión que desarrollamos para distintos negocios.</p>

        <div className="client-projects-grid">
          {clientProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-[420px] w-full"
            >
              <DestinationCard
                imageUrl={project.image}
                location={project.name}
                flag={project.flag}
                stats={project.stats}
                actionText={project.actionText}
                themeColor={project.themeColor}
                href={project.href}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="intro section">
        <div className="category-selector" id="categorias">
          <p className="section-label">TIPOS DE TIENDAS ONLINE</p>
          <h2>Elegí una categoría.</h2>
          <p className="category-intro">Seleccioná el tipo de proyecto que más se adapta a tu negocio.</p>
          <div className="category-grid">
            {storeCategories.filter(c => !("isLink" in c && c.isLink)).map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  className={`category-card ${isActive ? "active" : ""}`}
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  aria-pressed={isActive}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span className="category-number">{category.number}</span>
                  <span className="category-image" aria-hidden="true">
                    <img src={category.image} alt="" />
                  </span>
                  <strong>{category.title}</strong>
                  <small>{category.copy}</small>
                  <b className="category-cta">
                    {isActive ? "Categoría seleccionada" : "Ver categoría"} <span className="cta-arrow">→</span>
                  </b>
                </motion.button>
              );
            })}
          </div>

          <div className="domain-category-row">
            {storeCategories.filter(c => "isLink" in c && c.isLink).map((category) => (
              <motion.a
                className="category-card domain-category-card"
                key={category.id}
                href={category.href}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span className="category-number">{category.number}</span>
                <span className="category-image" aria-hidden="true">
                  <img src={category.image} alt="" />
                </span>
                <strong>{category.title}</strong>
                <small>{category.copy}</small>
                <b className="category-cta">
                  Ver dominio <span className="cta-arrow">→</span>
                </b>
              </motion.a>
            ))}
          </div>
          <a className="category-models-cue" href="#modelos" onClick={goToModels}>
            <span>Ver modelos</span>
            <b>↓</b>
          </a>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="category-content"
            key={activeCategory}
            id="modelos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeCategory === "negocios" || activeCategory === "importaciones" || activeCategory === "ventas-digitales" || activeCategory === "administracion-gastos" || activeCategory === "estudios" ? (
              <>
                <p className="section-label">
                  {activeCategory === "negocios"
                    ? "SOLUCIONES PARA CADA NEGOCIO"
                    : activeCategory === "importaciones"
                    ? "SOLUCIONES PARA IMPORTACIONES"
                    : activeCategory === "ventas-digitales"
                    ? "SOLUCIONES E-COMMERCE"
                    : activeCategory === "administracion-gastos"
                    ? "SOLUCIONES PARA ADMINISTRAR TU NEGOCIO"
                    : "SOLUCIONES PARA ESTUDIOS & CONSULTORÍAS"}
                </p>
                <h2>
                  {activeCategory === "negocios"
                    ? "Elegí la web que necesitás."
                    : activeCategory === "importaciones"
                    ? "Conectá mercados y clientes."
                    : activeCategory === "ventas-digitales"
                    ? "Vendé productos digitales."
                    : activeCategory === "administracion-gastos"
                    ? "Controlá todos tus números."
                    : "Potenciá tu estudio profesional."}
                  <br />
                  <span>Nosotros la hacemos realidad.</span>
                </h2>
                <p className="section-copy">
                  {activeCategory === "negocios"
                    ? "Valores claros para comenzar. Cada proyecto se personaliza con tu identidad, contenido y objetivos."
                    : activeCategory === "importaciones"
                    ? "Una presencia profesional para presentar servicios, productos y oportunidades comerciales de importación."
                    : activeCategory === "ventas-digitales"
                    ? "Una solución completa para organizar tu catálogo, recibir pedidos y hacer crecer tu negocio digital."
                    : activeCategory === "administracion-gastos"
                    ? "Centralizá ventas, gastos, productos y resultados desde un panel moderno, claro y seguro."
                    : "Webs institucionales para estudios jurídicos, contables, médicos, arquitectura y consultorías. Administración de consultas y contacto directo por WhatsApp."}
                </p>
                <div className="plans">
                  {plans.map((plan, index) => plan.category === activeCategory && (
                    <motion.article
                      className={`plan-card ${plan.type.includes("Premium") ? "premium-card" : "standard-card"}`}
                      key={plan.type}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.1 }}
                    >
                      <div className="plan-glow" />
                      <div className="plan-head">
                        <span className="plan-badge">{plan.tag}</span>
                      </div>

                      <div className="plan-title-block">
                        <h3>{plan.type}</h3>
                        <p className="plan-description">{plan.copy}</p>
                      </div>

                      <figure className="plan-preview">
                        <button className="preview-open" onClick={() => setLightbox({ planIndex: index, imageIndex: activeSlides[index] })} aria-label={`Ampliar ejemplo visual de ${plan.type}`}>
                          <motion.img
                            key={activeSlides[index]}
                            src={plans[index].previews[activeSlides[index]]}
                            alt={`Ejemplo visual ${activeSlides[index] + 1} de ${plan.type}`}
                            initial={{ opacity: 0.6, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
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

                      {"highlight" in plan && <div className="plan-highlight">{plan.highlight}</div>}

                      <div className="price-block">
                        <small>DESDE</small>
                        <strong>${plan.price}</strong>
                        <span>ARS</span>
                      </div>

                      {"monthlyAmount" in plan && (
                        <div className="monthly-price">
                          <small>O PLAN MENSUAL</small>
                          <strong>${plan.monthlyAmount.toLocaleString("es-AR")}</strong>
                          <span>ARS / MES</span>
                        </div>
                      )}

                      <div className="features-wrapper">
                        <ul className="features-list">
                          {plan.features.map((feature) => {
                            const isRepeated = feature.startsWith("Incluye todas");
                            return (
                              <li className={isRepeated ? "repeated-feature" : ""} key={feature}>
                                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="plan-actions">
                        <motion.button
                          onClick={() => { setPaymentPlan(index); setPaymentMode(null); }}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {plan.type.includes("Premium") ? "Adquirir Premium →" : plan.type.includes("Avanzada") ? "Adquirir Web Avanzada →" : "Adquirir →"}
                        </motion.button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </>
            ) : null}
            <motion.article
              className="domain-addon"
              id="dominio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.article>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="services-360-section section" id="servicios">
        <p className="section-label">SOLUCIONES DIGITALES 360°</p>
        <h2>Servicios integrales para potenciar tu marca</h2>
        <p className="section-copy">Cubrimos todas las necesidades de tu negocio desde la idea inicial hasta las ventas.</p>

        <div className="services-360-grid">
          {[
            {
              icon: "🎨",
              title: "Identidad & Branding",
              desc: "Diseño de logotipo único, paleta de colores, tipografía y kit de marca para destacar frente a la competencia."
            },
            {
              icon: "💻",
              title: "Diseño Web A Medida",
              desc: "Páginas institucionales y catálogos ultrarrápidos, optimizados 100% para celular con animaciones de alta gama."
            },
            {
              icon: "🛒",
              title: "Tiendas E-Commerce",
              desc: "Plataformas con carrito de compras, catálogo interactivo, cálculo de envíos y cobros con Mercado Pago."
            },
            {
              icon: "📊",
              title: "Sistemas Autogestionables",
              desc: "Paneles de control a medida para gestionar productos, stock, clientes, ventas y reportes financieros."
            },
            {
              icon: "🚀",
              title: "SEO & Posicionamiento Google",
              desc: "Optimizamos tu sitio web para que aparezca en los primeros lugares cuando busquen tu producto o rubro."
            },
            {
              icon: "🔒",
              title: "Hosting Privado & Soporte 2 Meses",
              desc: "Servidores seguros con certificado SSL de regalo durante 1 año y 2 meses de acompañamiento directo."
            }
          ].map((service, idx) => (
            <motion.article
              className="service-card-360"
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="why-us-section section">
        <p className="section-label">DIFERENCIA DE CALIDAD</p>
        <h2>¿Por qué elegir JCB Development?</h2>
        <p className="section-copy">No entregamos plantillas genéricas. Desarrollamos sitios ultrarrápidos, personalizados a medida para vender más.</p>

        <div className="comparison-grid">
          <motion.div
            className="comparison-card traditional"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3>Plantillas / Webs genéricas</h3>
            <ul>
              <li><span>✕</span> Sitios lentos y pesados</li>
              <li><span>✕</span> Diseños repetidos igual a tu competencia</li>
              <li><span>✕</span> Difíciles de navegar en celulares</li>
              <li><span>✕</span> Sin soporte post-entrega ni acompañamiento</li>
              <li><span>✕</span> Costos ocultos de mantenimiento</li>
            </ul>
          </motion.div>
          <motion.div
            className="comparison-card jcb"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="jcb-badge">RECOMENDADO</div>
            <h3>JCB Development</h3>
            <ul>
              <li><span>✓</span> Carga ultra rápida en menos de 1 segundo</li>
              <li><span>✓</span> Diseños personalizados con tu identidad</li>
              <li><span>✓</span> Experiencia optimizada 100 % para celular</li>
              <li><span>✓</span> Mantenimiento y soporte directo durante 2 meses</li>
              <li><span>✓</span> Hosting privado de regalo durante 1 año</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="faq-section section" id="faq">
        <p className="section-label">RESOLVÉ TUS DUDAS</p>
        <h2>Preguntas frecuentes</h2>
        <p className="section-copy">Todo lo que necesitás saber antes de comenzar tu proyecto web.</p>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div
              className="faq-item"
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                className={`faq-trigger ${activeFaq === index ? "open" : ""}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                aria-expanded={activeFaq === index}
              >
                <span>{faq.question}</span>
                <b aria-hidden="true">{activeFaq === index ? "−" : "+"}</b>
              </button>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    className="faq-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contacto">
        <a className="brand brand-logo footer-logo" href="/" aria-label="JCB Development, inicio"><img src="/jcb-development.png" alt="JCB Development" /></a>
        <span>DISEÑO Y DESARROLLO WEB · 2025</span>
        <button className="footer-terms" onClick={() => setShowTermsModal(true)}>Términos y condiciones</button>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      <AnimatePresence>
        {showTermsNotice && (
          <motion.aside
            className="terms-notice"
            aria-label="Aviso de términos y condiciones"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button className="terms-link" onClick={() => setShowTermsModal(true)}>Términos y condiciones</button>
            <p>Al continuar, confirmás que leíste y aceptás nuestras condiciones.</p>
            <button className="terms-accept" onClick={acceptTerms}>Aceptar</button>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            className="terms-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Términos y condiciones"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setShowTermsModal(false);
            }}
          >
            <motion.section
              className="terms-modal"
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            >
              <button className="terms-close" onClick={() => setShowTermsModal(false)} aria-label="Cerrar términos">×</button>
              <p className="section-label">JCB DEVELOPMENT</p>
              <h2>Términos y condiciones</h2>
              <iframe src="/terminos-y-condiciones.txt" title="Términos y condiciones completos" />
              <div className="terms-modal-actions">
                <button onClick={() => setShowTermsModal(false)}>Cerrar</button>
                <button onClick={acceptTerms}>Aceptar términos y condiciones</button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {paymentPlan !== null && (
          <motion.div
            className="payment-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Datos para realizar el pago"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closePayment();
            }}
          >
            <motion.div
              className="payment-modal"
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
            >
              <button className="payment-close" onClick={closePayment} aria-label="Cerrar">×</button>
              <p className="section-label">PAGO POR TRANSFERENCIA</p>
              <h2>{plans[paymentPlan].type}</h2>

              {!paymentMode ? (
                <>
                  <p className="payment-intro">Elegí cuánto querés abonar para ver los datos de transferencia.</p>
                  <div className="payment-options">
                    <motion.button onClick={() => setPaymentMode("deposit")} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <span>SEÑA DEL 35 %</span>
                      <strong>${Math.round(plans[paymentPlan].amount * 0.35).toLocaleString("es-AR")}</strong>
                      <small>ARS</small>
                    </motion.button>
                    <motion.button onClick={() => setPaymentMode("full")} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <span>PAGO COMPLETO</span>
                      <strong>${plans[paymentPlan].amount.toLocaleString("es-AR")}</strong>
                      <small>ARS</small>
                    </motion.button>
                    {"monthlyAmount" in plans[paymentPlan] && (
                      <motion.button
                        className="monthly-option"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          const selectedPlan = plans[paymentPlan];
                          if ("subscriptionUrl" in selectedPlan) {
                            const subscriptionUrl = selectedPlan.subscriptionUrl;
                            closePayment();
                            window.open(subscriptionUrl, "_blank", "noopener,noreferrer");
                            return;
                          }
                          setPaymentMode("monthly");
                        }}
                      >
                        <span>PLAN MENSUAL</span>
                        <strong>${plans[paymentPlan].monthlyAmount.toLocaleString("es-AR")}</strong>
                        <small>{"subscriptionUrl" in plans[paymentPlan] ? "ARS POR MES · COBRO AUTOMÁTICO CON MERCADO PAGO" : "ARS POR MES"}</small>
                      </motion.button>
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
                  <div className="payment-methods-grid">
                    <div className="mercado-pago-option">
                      <div>
                        <span>PAGO ONLINE</span>
                        <strong>Mercado Pago</strong>
                        <small>Al abrir el link, ingresá exactamente el importe indicado arriba.</small>
                      </div>
                      <a href={MERCADO_PAGO_LINK} target="_blank" rel="noreferrer">Pagar con Mercado Pago <span>→</span></a>
                    </div>
                    <div className="bank-accounts">
                      {[
                        { alias: "bucchio", cvu: "0000168300000027027897" },
                      ].map((account, index) => (
                        <article key={account.cvu}>
                          <small>TRANSFERENCIA A LEMON</small>
                          <p>A nombre de <strong>Juan Cruz Bucchioni Moya</strong></p>
                          <div><span>Alias</span><strong>{account.alias}</strong><button onClick={() => copyValue(`alias-${index}`, account.alias)}>{copied === `alias-${index}` ? "Copiado" : "Copiar"}</button></div>
                          <div><span>CVU</span><strong>{account.cvu}</strong><button onClick={() => copyValue(`cvu-${index}`, account.cvu)}>{copied === `cvu-${index}` ? "Copiado" : "Copiar"}</button></div>
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className="payment-footer-actions">
                    <button onClick={() => setPaymentMode(null)}>← Cambiar importe</button>
                    <button className="paid-button" onClick={() => { setShowClientForm(true); setClientFormValid(false); }}>Ya pagué →</button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la página"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setLightbox(null);
            }}
          >
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar imagen">×</button>
            {plans[lightbox.planIndex].previews.length > 1 && <button className="lightbox-arrow prev" onClick={() => setLightbox((current) => current ? { ...current, imageIndex: (current.imageIndex - 1 + plans[current.planIndex].previews.length) % plans[current.planIndex].previews.length } : null)} aria-label="Imagen anterior">‹</button>}
            <motion.img
              key={lightbox.imageIndex}
              src={plans[lightbox.planIndex].previews[lightbox.imageIndex]}
              alt={`Vista ampliada ${lightbox.imageIndex + 1} de ${plans[lightbox.planIndex].type}`}
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.7, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            />
            {plans[lightbox.planIndex].previews.length > 1 && <button className="lightbox-arrow next" onClick={() => setLightbox((current) => current ? { ...current, imageIndex: (current.imageIndex + 1) % plans[current.planIndex].previews.length } : null)} aria-label="Imagen siguiente">›</button>}
            <span className="lightbox-counter">{lightbox.imageIndex + 1} / {plans[lightbox.planIndex].previews.length}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
