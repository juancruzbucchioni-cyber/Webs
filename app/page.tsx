"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DestinationCard } from "@/components/ui/card-21";
import {
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Copy,
  CheckCheck,
  CreditCard,
  Maximize2,
  ChevronLeft,
  ShieldCheck,
  Clock,
  Smartphone,
  Server,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "5493534128474";
const MERCADO_PAGO_LINK = "https://link.mercadopago.com.ar/jcbdevelopment";

const filterCategories = [
  { id: "all", label: "Todos los Modelos" },
  { id: "negocios", label: "Tiendas Online" },
  { id: "catalogos", label: "Catálogos" },
  { id: "ventas-digitales", label: "E-Commerce" },
  { id: "administracion-gastos", label: "Sistemas & Gestión" },
  { id: "estudios", label: "Estudios & Consultoras" },
  { id: "importaciones", label: "Importaciones" },
] as const;

type CategoryId = (typeof filterCategories)[number]["id"];

interface Plan {
  category: string;
  type: string;
  tag: string;
  isPopular?: boolean;
  price: string;
  amount: number;
  monthlyAmount?: number;
  subscriptionUrl?: string;
  highlight?: string;
  previews: string[];
  copy: string;
  features: string[];
  message: string;
}

const plans: Plan[] = [
  {
    category: "negocios",
    type: "Web Avanzada",
    tag: "MÁS ELEGIDA",
    isPopular: true,
    price: "250.000",
    amount: 250000,
    previews: [
      "/avanzada-gallery-01.png",
      "/avanzada-gallery-02.png",
      "/avanzada-gallery-03.png",
      "/avanzada-gallery-04.png",
    ],
    copy: "Ideal para negocios que quieren comenzar a vender por internet y administrar productos, pedidos y clientes fácilmente.",
    features: [
      "Diseño 100% adaptado a celulares, tablets y computadoras",
      "Capacidad para 300 productos (carga inicial de 30 incluida)",
      "Buscador, categorías, filtros y carrito de compras",
      "Integración directa con WhatsApp, Instagram y redes sociales",
      "Panel de administración para gestionar pedidos y stock",
      "Conexión con Correo Argentino o Andreani para envíos",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web Avanzada ($250.000 ARS).",
  },
  {
    category: "catalogos",
    type: "Catálogo Basic",
    tag: "100% A MEDIDA",
    isPopular: true,
    price: "120.000",
    amount: 120000,
    previews: ["/catalogos-gallery-01.png"],
    copy: "Exhibición de productos personalizada sin botón de compra directa. Diseñada para mostrar stock y derivar consultas por WhatsApp o Mail.",
    features: [
      "Diseño 100% personalizado y adaptado a tu marca",
      "Carga inicial completa de TODOS tus productos incluida",
      "Modo Catálogo exclusivo (consultas directas a WhatsApp)",
      "Panel intuitivo para subir, editar y ordenar productos",
      "Fichas de producto completas con múltiples fotos y detalles",
      "Capacidad para 180 productos con categorías a medida",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por el Catálogo Basic ($120.000 ARS).",
  },
  {
    category: "negocios",
    type: "Web de Negocio Premium",
    tag: "PREMIUM",
    price: "320.000",
    amount: 320000,
    previews: [
      "/premium-gallery-01.png",
      "/premium-gallery-02.png",
      "/premium-gallery-03.png",
      "/premium-gallery-04.png",
      "/premium-gallery-05.png",
      "/premium-gallery-06.png",
    ],
    copy: "Solución completa para negocios que necesitan automatizar ventas con cobros automáticos de tarjetas y cuentas de clientes.",
    features: [
      "Incluye todas las características de la Web Avanzada",
      "Cobros automáticos con tarjetas mediante Mercado Pago",
      "Sistema de usuarios y cuentas de clientes",
      "Notificaciones automáticas y recuperación de carritos",
      "Reportes avanzados de ventas, costos y ganancias",
      "Hasta 3 funciones personalizadas a medida de tu negocio",
      "Soporte prioritario y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web de Negocio Premium ($320.000 ARS).",
  },
  {
    category: "ventas-digitales",
    type: "Web E-commerce Digital",
    tag: "VENTAS DIGITALES",
    price: "250.000",
    amount: 250000,
    previews: [
      "/digital-gallery-01.png",
      "/digital-gallery-02.png",
      "/digital-gallery-03.png",
      "/digital-gallery-04.png",
      "/digital-gallery-05.png",
      "/digital-gallery-06.png",
    ],
    copy: "Tienda profesional para vender cuentas, productos digitales, membresías, servicios y contenido online.",
    features: [
      "Diseño optimizado para productos digitales y membresías",
      "Capacidad para 300 productos con catálogo por categorías",
      "Carrito de compras y precios promocionales por cantidad",
      "Integración con WhatsApp, Instagram y grupos privados",
      "Panel para administrar productos, categorías y stock",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web E-commerce Digital ($250.000 ARS).",
  },
  {
    category: "administracion-gastos",
    type: "Dashboard General",
    tag: "ADMINISTRACIÓN",
    price: "80.000",
    amount: 80000,
    monthlyAmount: 28000,
    subscriptionUrl: "https://mpago.la/1LV5gTH",
    previews: [
      "/dashboard-gallery-01.png",
      "/dashboard-gallery-02.png",
      "/dashboard-gallery-03.png",
      "/dashboard-gallery-04.png",
    ],
    copy: "Sistema práctico para administrar y controlar ventas, gastos y stock desde un solo lugar sin planillas complicadas.",
    features: [
      "1 Tienda y 3 Usuarios del sistema",
      "Catálogo, productos y categorías autogestionables",
      "Control de gastos, ventas, pagos y reportes mensuales",
      "Estadísticas en tiempo real de tu negocio",
      "Información protegida y respaldada en la nube",
      "Color del sistema y estética a elección",
    ],
    message: "Hola, buenas. Quería consultar por el Dashboard General ($80.000 ARS o $28.000/mes).",
  },
  {
    category: "administracion-gastos",
    type: "Dashboard Personalizado",
    tag: "A MEDIDA",
    price: "150.000",
    amount: 150000,
    monthlyAmount: 50000,
    subscriptionUrl: "https://mpago.la/1cUK2X1",
    previews: [
      "/personalizado-gallery-01.png",
      "/personalizado-gallery-02.png",
      "/personalizado-gallery-03.png",
      "/personalizado-gallery-04.png",
    ],
    copy: "Tomamos nuestro sistema y lo adaptamos 100% a la operativa y necesidades específicas de tu empresa.",
    highlight: "Adaptado al flujo y necesidades exactas de TU negocio.",
    features: [
      "Acceso para 3 Tiendas y 7 Usuarios",
      "Estética y colores de marca adaptados a tu negocio",
      "Gestión de ventas, productos, gastos y pagos",
      "Estadísticas y gráficos personalizados descargables en PDF",
      "Módulos y funciones adicionales desarrolladas a medida",
      "Hosting privado y soporte prioritario incluido",
    ],
    message: "Hola, buenas. Quería consultar por el Dashboard Personalizado ($150.000 ARS o $50.000/mes).",
  },
  {
    category: "estudios",
    type: "Web para Estudios & Consultoras",
    tag: "ESTUDIOS",
    price: "200.000",
    amount: 200000,
    previews: ["/estudios-gallery-01.png"],
    copy: "Web institucional profesional para estudios jurídicos, contables, médicos, arquitectura y consultorías.",
    features: [
      "Diseño institucional 100% adaptado a dispositivos móviles",
      "Formulario para recepción de consultas directo a tu mail",
      "Botón directo para derivación de consultas a WhatsApp",
      "Presentación de especialidades, servicios y equipo profesional",
      "Muestra de honorarios o precios opcional a tu elección",
      "Incluye 2 adicionales a elección (Turnero, FAQ o Cotizador)",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web para Estudios & Consultoras ($200.000 ARS).",
  },
  {
    category: "importaciones",
    type: "Web Importaciones Basic",
    tag: "IMPORTACIONES",
    price: "200.000",
    amount: 200000,
    previews: ["/importaciones-gallery-01.png", "/importaciones-gallery-02.png"],
    copy: "Sitio web profesional para empresas de importación: presentación de servicios, catálogo de productos y recepción de pedidos.",
    features: [
      "Diseño profesional optimizado para comex e importaciones",
      "Capacidad para 230 productos con control de stock",
      "Pagos por transferencia, efectivo o enlace de Mercado Pago",
      "Administración de clientes, consultas y oportunidades",
      "Creación de promociones, descuentos y cupones",
      "Mantenimiento por 2 meses y Hosting gratis durante 1 año",
    ],
    message: "Hola, buenas. Quería consultar por la Web Importaciones Basic ($200.000 ARS).",
  },
];

const clientProjects = [
  {
    name: "Motosport Neuquén",
    flag: "🏍️",
    stats: "Negocio de motos, repuestos, accesorios de competición y catálogo interactivo.",
    image: "/motosport-neuquen-hero.png",
    themeColor: "115 90% 35%",
    actionText: "Ver Sitio Web 🌐",
    href: "https://motosportneuquen.com/",
  },
  {
    name: "Speedy Repuestos",
    flag: "🏍️",
    stats: "Venta de repuestos, accesorios y catálogo interactivo de stock.",
    image: "/avanzada-gallery-01.png",
    themeColor: "220 80% 32%",
    actionText: "Ver Sitio Web 🌐",
    href: "https://speedy.kazzu.workers.dev/",
  },
  {
    name: "SDT DROPS",
    flag: "⚡",
    stats: "E-Commerce de productos, tecnología y envíos a todo el país.",
    image: "/digital-gallery-01.png",
    themeColor: "280 75% 35%",
    actionText: "Ver Sitio Web 🌐",
    href: "https://sdtdrops.com/",
  },
  {
    name: "Control de Gastos & Ventas",
    flag: "📊",
    stats: "Sistema web autogestionable para administrar ventas, gastos y reportes.",
    image: "/dashboard-gallery-01.png",
    themeColor: "320 70% 32%",
    actionText: "Ver Dashboard 📊",
    href: "https://dashboard-estadisticas-7pn.pages.dev/",
  },
];

const faqs = [
  {
    question: "¿Cómo es la forma de pago y seña?",
    answer:
      "Empezamos tu proyecto con solo una seña del 35% por transferencia bancaria o Mercado Pago. El 65% restante se abona una vez que la web está terminada, aprobada por vos y lista para publicar.",
  },
  {
    question: "¿En cuánto tiempo entregan la página web?",
    answer:
      "El plazo estimado de desarrollo es de 7 a 10 días. Te vamos enviando avances por WhatsApp para que vayas viendo exactamente cómo va quedando.",
  },
  {
    question: "¿Es fácil de usar si no sé nada de tecnología?",
    answer:
      "100% fácil. Te entregamos un panel de administración muy sencillo para que puedas cambiar precios, fotos y cargar productos en segundos desde tu celular o computadora.",
  },
  {
    question: "¿Qué incluye el soporte post-entrega de 2 meses?",
    answer:
      "Tenés 2 meses enteros de acompañamiento directo para consultarnos dudas, resolver cualquier inconveniente y realizar ajustes de contenido sin costo extra.",
  },
  {
    question: "¿Puedo usar mi propio dominio (.com o .com.ar)?",
    answer:
      "¡Sí! Si ya tenés un dominio registrado lo conectamos sin cargo. Y si todavía no tenés, te ayudamos a registrarlo al costo oficial sin ningún recargo.",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [activeSlideMap, setActiveSlideMap] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ planType: string; imageIndex: number } | null>(null);
  const [paymentPlan, setPaymentPlan] = useState<Plan | null>(null);
  const [paymentMode, setPaymentMode] = useState<"deposit" | "full" | "monthly">("deposit");
  const [copiedField, setCopiedField] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showTermsNotice, setShowTermsNotice] = useState(false);

  useEffect(() => {
    setShowTermsNotice(window.localStorage.getItem("jcb-terms-accepted") !== "true");
  }, []);

  const acceptTerms = () => {
    window.localStorage.setItem("jcb-terms-accepted", "true");
    setShowTermsNotice(false);
    setShowTermsModal(false);
  };

  const copyToClipboard = async (field: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2200);
  };

  const filteredPlans =
    selectedCategory === "all"
      ? plans
      : plans.filter((p) => p.category === selectedCategory);

  const getSlideIndex = (planType: string) => activeSlideMap[planType] || 0;

  const handlePrevSlide = (plan: Plan, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = getSlideIndex(plan.type);
    const next = (current - 1 + plan.previews.length) % plan.previews.length;
    setActiveSlideMap((prev) => ({ ...prev, [plan.type]: next }));
  };

  const handleNextSlide = (plan: Plan, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = getSlideIndex(plan.type);
    const next = (current + 1) % plan.previews.length;
    setActiveSlideMap((prev) => ({ ...prev, [plan.type]: next }));
  };

  return (
    <main className="min-h-screen bg-[#040306] text-[#f4f4f6]">
      {/* ─── Sticky Navbar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] px-6 lg:px-16 flex items-center justify-between bg-[#040306]/85 backdrop-blur-md border-b border-white/[0.08]">
        <a href="/" className="flex items-center gap-2" aria-label="JCB Development">
          <img src="/jcb-development.png" alt="JCB Development" className="h-9 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-zinc-400">
          <a href="#modelos" className="hover:text-white transition-colors">
            Modelos & Precios
          </a>
          <a href="#clientes" className="hover:text-white transition-colors">
            Trabajos Reales
          </a>
          <a href="#proceso" className="hover:text-white transition-colors">
            Cómo Trabajamos
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Preguntas Frecuentes
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/jcb_development/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-purple-500/40 transition-all"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, buenas. Quería consultar para hacer una página web para mi negocio."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-lg shadow-purple-900/30 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Directo</span>
          </a>
        </div>
      </nav>

      {/* ─── Hero Section (Ultra Clean & Fast) ─── */}
      <section className="clean-hero-section">
        <div className="clean-hero-badge">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span>Desarrollo Web & Sistemas a Medida</span>
        </div>

        <h1 className="clean-hero-title">
          Tu negocio online, moderno y <span>listo para vender.</span>
        </h1>

        <p className="clean-hero-subtitle">
          Creamos tiendas online, catálogos interactivos y sistemas de gestión ultrarrápidos.
          100% adaptados a celulares, con hosting de regalo y entrega en 7 a 10 días.
        </p>

        <div className="clean-hero-actions">
          <a href="#modelos" className="btn-primary-glow">
            <span>Ver Modelos y Precios</span>
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola Juan Cruz, quería consultar por el desarrollo de una web para mi negocio."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp-hero"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4 pt-4 border-t border-white/[0.08]">
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02]">
            <span className="flex items-center gap-1.5 text-xs text-purple-400 font-bold mb-1">
              <Clock className="w-3.5 h-3.5" /> 7 a 10 Días
            </span>
            <span className="text-xs text-zinc-400 text-center">Entrega garantizada</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02]">
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold mb-1">
              <Smartphone className="w-3.5 h-3.5" /> 100% Celular
            </span>
            <span className="text-xs text-zinc-400 text-center">Adaptado a todo dispositivo</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02]">
            <span className="flex items-center gap-1.5 text-xs text-pink-400 font-bold mb-1">
              <Server className="w-3.5 h-3.5" /> 1 Año Gratis
            </span>
            <span className="text-xs text-zinc-400 text-center">Hosting privado con SSL</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02]">
            <span className="flex items-center gap-1.5 text-xs text-cyan-400 font-bold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 2 Meses
            </span>
            <span className="text-xs text-zinc-400 text-center">Soporte post-entrega</span>
          </div>
        </div>
      </section>

      {/* ─── Modelos & Precios (Cero fricción, 1 Click) ─── */}
      <section className="py-20 px-4" id="modelos">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-2">
            PRECIOS TRANSPARENTES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Elegí la solución para tu negocio
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Sin precios ocultos ni formularios engorrosos. Podés iniciar cualquier proyecto con el 35% de seña.
          </p>
        </div>

        {/* Quick Filter Pills */}
        <div className="clean-filter-wrapper">
          <div className="clean-filter-bar">
            {filterCategories.map((cat) => {
              const count =
                cat.id === "all"
                  ? plans.length
                  : plans.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`clean-filter-pill ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="clean-filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="clean-plans-grid">
          {filteredPlans.map((plan) => {
            const slideIndex = getSlideIndex(plan.type);
            const currentImg = plan.previews[slideIndex] || plan.previews[0];
            const depositAmount = Math.round(plan.amount * 0.35);

            return (
              <article
                key={plan.type}
                className={`clean-plan-card ${plan.isPopular ? "featured-card" : ""}`}
              >
                {/* Header */}
                <div className="clean-card-header">
                  <span className={`clean-badge ${plan.isPopular ? "featured" : ""}`}>
                    {plan.tag}
                  </span>
                  {plan.category === "catalogos" && (
                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded-full">
                      Carga 100% Incluida
                    </span>
                  )}
                </div>

                <h3 className="clean-plan-title">{plan.type}</h3>
                <p className="clean-plan-copy">{plan.copy}</p>

                {/* Preview Thumbnail */}
                <div className="clean-preview-box group">
                  <img
                    src={currentImg}
                    alt={plan.type}
                    onClick={() =>
                      setLightbox({ planType: plan.type, imageIndex: slideIndex })
                    }
                  />

                  {plan.previews.length > 1 && (
                    <div className="clean-preview-controls">
                      <button
                        onClick={(e) => handlePrevSlide(plan, e)}
                        className="clean-preview-nav-btn"
                        aria-label="Foto anterior"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => handleNextSlide(plan, e)}
                        className="clean-preview-nav-btn"
                        aria-label="Foto siguiente"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() =>
                      setLightbox({ planType: plan.type, imageIndex: slideIndex })
                    }
                    className="clean-preview-zoom-btn flex items-center gap-1"
                  >
                    <Maximize2 className="w-2.5 h-2.5" /> Ampliar
                  </button>
                </div>

                {/* Price block */}
                <div className="clean-price-box">
                  <div className="clean-price-amount">
                    <small>VALOR TOTAL</small>
                    <strong>${plan.price}</strong>
                    <span>ARS</span>
                  </div>

                  <div className="clean-price-note">
                    <span>💡 Empezá con seña del 35%:</span>
                    <strong className="text-white">${depositAmount.toLocaleString("es-AR")} ARS</strong>
                  </div>

                  {plan.monthlyAmount && (
                    <div className="clean-monthly-tag">
                      <span>O Plan Mensual:</span>
                      <strong>${plan.monthlyAmount.toLocaleString("es-AR")} ARS / mes</strong>
                    </div>
                  )}
                </div>

                {/* Features list */}
                <ul className="clean-features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check className="clean-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* 1-Click Action Buttons */}
                <div className="clean-card-actions">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      plan.message
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="clean-btn-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir por WhatsApp →</span>
                  </a>

                  <button
                    onClick={() => {
                      setPaymentPlan(plan);
                      setPaymentMode("deposit");
                    }}
                    className="clean-btn-payment"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-purple-400" />
                    <span>Datos de Transferencia / Seña</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dominio Privado Card */}
        <div className="max-w-4xl mx-auto mt-16 p-6 rounded-2xl bg-zinc-900/60 border border-purple-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-lg shrink-0">
              🌐
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                ADICIONAL DISPONIBLE
              </span>
              <h4 className="text-lg font-bold text-white">Dominio Privado (.com o .com.ar)</h4>
              <p className="text-xs text-zinc-400 max-w-lg mt-0.5">
                Una dirección exclusiva para tu negocio. Lo registramos y configuramos a tu nombre al costo oficial sin ningún recargo extra.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, buenas. Quería consultar el valor para registrar un dominio privado para mi página."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-xs font-bold text-white transition-all flex items-center gap-2"
          >
            <span>Consultar Dominio</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </section>

      {/* ─── Showcase de Clientes Reales ─── */}
      <section className="py-20 px-4 border-t border-white/[0.06]" id="clientes">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-2">
            CASOS DE ÉXITO
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Nuestros Clientes
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Hacé click en cualquier proyecto para ver la web funcionando en vivo en internet.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientProjects.map((project) => (
            <div key={project.name} className="h-[400px] w-full">
              <DestinationCard
                imageUrl={project.image}
                location={project.name}
                flag={project.flag}
                stats={project.stats}
                actionText={project.actionText}
                themeColor={project.themeColor}
                href={project.href}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Proceso en 3 Pasos (Sin Vueltas) ─── */}
      <section className="py-20 px-4 border-t border-white/[0.06] bg-zinc-950/40" id="proceso">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-2">
            SIMPLE Y ÁGIL
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Cómo trabajamos
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            3 pasos directos desde tu idea hasta tener tu página online vendiendo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-white/[0.08] relative">
            <span className="text-3xl font-extrabold text-purple-500/40 font-mono">01</span>
            <h4 className="text-xl font-bold text-white mt-3 mb-2">Elegís tu modelo</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Nos escribís por WhatsApp contándonos sobre tu negocio, tus productos y el estilo visual que te gusta.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-purple-500/30 relative shadow-lg shadow-purple-900/10">
            <span className="text-3xl font-extrabold text-fuchsia-400/50 font-mono">02</span>
            <h4 className="text-xl font-bold text-white mt-3 mb-2">Seña del 35% y diseño</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Con la seña inicial ponemos manos a la obra. Diseñamos la web con tus colores, logo y productos.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-white/[0.08] relative">
            <span className="text-3xl font-extrabold text-cyan-500/40 font-mono">03</span>
            <h4 className="text-xl font-bold text-white mt-3 mb-2">Publicación y entrega</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              En 7 a 10 días revisás la web terminada, se cancela el saldo y la publicamos con hosting gratis y soporte.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Preguntas Frecuentes ─── */}
      <section className="py-20 px-4 border-t border-white/[0.06]" id="faq">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-2">
            DUDAS FRECUENTES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Todo claro antes de empezar tu proyecto.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-zinc-900/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm md:text-base font-semibold text-zinc-200 hover:text-white"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-purple-400" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/[0.04] pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6 border-t border-white/[0.08] bg-[#020204] text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/jcb-development.png" alt="JCB Development" className="h-7 w-auto object-contain" />
            <span>· Desarrollo Web Profesional</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-purple-400 transition-colors"
            >
              Términos y Condiciones
            </button>
            <a
              href="https://www.instagram.com/jcb_development/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Instagram @jcb_development
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <span>© {new Date().getFullYear()} JCB Development. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

      {/* ─── 1-Step Payment Modal (Simple & Direct) ─── */}
      <AnimatePresence>
        {paymentPlan && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setPaymentPlan(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="clean-modal-box"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                    DATOS DE PAGO Y TRANSFERENCIA
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{paymentPlan.type}</h3>
                </div>
                <button
                  onClick={() => setPaymentPlan(null)}
                  className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center text-lg"
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>

              {/* Selector Seña vs Total */}
              <div className="clean-modal-tabs">
                <button
                  onClick={() => setPaymentMode("deposit")}
                  className={`clean-modal-tab ${paymentMode === "deposit" ? "active" : ""}`}
                >
                  Seña 35% (${Math.round(paymentPlan.amount * 0.35).toLocaleString("es-AR")})
                </button>
                <button
                  onClick={() => setPaymentMode("full")}
                  className={`clean-modal-tab ${paymentMode === "full" ? "active" : ""}`}
                >
                  Pago Completo (${paymentPlan.amount.toLocaleString("es-AR")})
                </button>
                {paymentPlan.monthlyAmount && (
                  <button
                    onClick={() => setPaymentMode("monthly")}
                    className={`clean-modal-tab ${paymentMode === "monthly" ? "active" : ""}`}
                  >
                    Mensual (${paymentPlan.monthlyAmount.toLocaleString("es-AR")})
                  </button>
                )}
              </div>

              {/* Account details */}
              <div className="clean-bank-card">
                <div className="text-[11px] font-bold text-purple-400 mb-3 flex items-center justify-between">
                  <span>TRANSFERENCIA BANCARIA / LEMON</span>
                  <span className="text-zinc-500 font-normal">Sin comisiones</span>
                </div>

                <div className="clean-copy-row">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">TITULAR</span>
                    <strong className="text-xs text-white">Juan Cruz Bucchioni Moya</strong>
                  </div>
                </div>

                <div className="clean-copy-row">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">ALIAS</span>
                    <strong className="text-sm font-mono text-purple-300">bucchio</strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard("alias", "bucchio")}
                    className="clean-copy-btn flex items-center gap-1.5"
                  >
                    {copiedField === "alias" ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Alias</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="clean-copy-row">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">CVU</span>
                    <strong className="text-xs font-mono text-zinc-300">
                      0000168300000027027897
                    </strong>
                  </div>
                  <button
                    onClick={() => copyToClipboard("cvu", "0000168300000027027897")}
                    className="clean-copy-btn flex items-center gap-1.5"
                  >
                    {copiedField === "cvu" ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar CVU</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mercado Pago Button */}
              <div className="mb-4">
                <a
                  href={
                    paymentMode === "monthly" && paymentPlan.subscriptionUrl
                      ? paymentPlan.subscriptionUrl
                      : MERCADO_PAGO_LINK
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-bold transition-all"
                >
                  <span>Pagar online con Mercado Pago</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Botón enviar comprobante */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hola Juan Cruz, ya realicé el pago (${
                    paymentMode === "deposit"
                      ? "Seña 35%"
                      : paymentMode === "monthly"
                      ? "Plan Mensual"
                      : "Pago Completo"
                  }) para comenzar la web: ${paymentPlan.type}. Te adjunto el comprobante.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="clean-btn-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Avisar y Enviar Comprobante por WhatsApp →</span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Lightbox Modal ─── */}
      <AnimatePresence>
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl"
              aria-label="Cerrar vista ampliada"
            >
              ×
            </button>
            {(() => {
              const currentPlan = plans.find((p) => p.type === lightbox.planType);
              if (!currentPlan) return null;
              return (
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  src={currentPlan.previews[lightbox.imageIndex]}
                  alt={currentPlan.type}
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                />
              );
            })()}
          </div>
        )}
      </AnimatePresence>

      {/* ─── Términos y Condiciones Modal ─── */}
      <AnimatePresence>
        {showTermsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setShowTermsModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-zinc-950 border border-purple-500/30 rounded-2xl p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Términos y Condiciones</h3>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center text-lg"
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
              <iframe
                src="/terminos-y-condiciones.txt"
                title="Términos y condiciones completos"
                className="w-full h-[55vh] rounded-lg border border-white/10 bg-zinc-900"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700"
                >
                  Cerrar
                </button>
                <button
                  onClick={acceptTerms}
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-bold hover:bg-purple-500"
                >
                  Aceptar Términos
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Aviso Flotante Términos ─── */}
      <AnimatePresence>
        {showTermsNotice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="terms-notice"
          >
            <button
              className="terms-link"
              onClick={() => setShowTermsModal(true)}
            >
              Términos y condiciones
            </button>
            <p>Al continuar navegando, confirmás que leíste y aceptás nuestras condiciones.</p>
            <button className="terms-accept" onClick={acceptTerms}>
              Aceptar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
