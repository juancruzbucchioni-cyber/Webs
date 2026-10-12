"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DestinationCard } from "@/components/ui/card-21";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle,
  Copy,
  CheckCheck,
  CreditCard,
  ShieldCheck,
  Clock,
  Smartphone,
  Server,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "5493534128474";
const MERCADO_PAGO_LINK = "https://link.mercadopago.com.ar/jcbdevelopment";

interface Plan {
  id: string;
  type: string;
  tag: string;
  isPopular?: boolean;
  price: string;
  amount: number;
  previews: string[];
  copy: string;
  features: string[];
  message: string;
}

const plans: Plan[] = [
  {
    id: "web-institucional",
    type: "Web Institucional",
    tag: "SERVICIOS & FIRMAS",
    price: "180.000",
    amount: 180000,
    previews: ["/estudios-gallery-01.png", "/importaciones-gallery-01.png"],
    copy: "Para profesionales, estudios jurídicos/contables, consultoras, importadores y empresas de servicios.",
    features: [
      "Diseño institucional 100% adaptado a dispositivos móviles",
      "Formulario para recepción de consultas directo a tu mail",
      "Botón directo para recepción de consultas a WhatsApp",
      "Presentación de especialidades, servicios y equipo profesional",
      "Incluye adicionales a elección (Preguntas Frecuentes, Cotizador o Blog)",
      "Muestra de honorarios o servicios opcional a elección",
      "Hosting gratis por 1 año y soporte por 2 meses",
    ],
    message: "Hola Juan Cruz, quería consultar por la Web Institucional ($180.000 ARS) con entrega en 24 hs.",
  },
  {
    id: "tienda-ecommerce",
    type: "Tienda E-Commerce",
    tag: "MÁS ELEGIDA",
    isPopular: true,
    price: "200.000",
    amount: 200000,
    previews: [
      "/avanzada-gallery-01.png",
      "/avanzada-gallery-02.png",
      "/avanzada-gallery-03.png",
      "/digital-gallery-01.png",
    ],
    copy: "Tienda online completa con carrito, catálogo, buscador, control de stock y funciones a medida.",
    features: [
      "Carrito de compras, buscador, categorías y filtros",
      "Capacidad para 300 productos (carga inicial de 30 incluida)",
      "Hasta 2 funciones personalizadas a medida de tu negocio",
      "Panel de administración para gestionar pedidos y stock",
      "Integración directa con WhatsApp, Instagram y redes sociales",
      "Apta para productos físicos, indumentaria, repuestos o digitales",
      "Hosting gratis por 1 año y soporte por 2 meses",
    ],
    message: "Hola Juan Cruz, quería consultar por la Tienda E-Commerce ($200.000 ARS) con entrega en 24 hs.",
  },
  {
    id: "web-premium",
    type: "Web Premium",
    tag: "AUTOMATIZADA",
    isPopular: true,
    price: "270.000",
    amount: 270000,
    previews: [
      "/premium-gallery-01.png",
      "/premium-gallery-02.png",
      "/premium-gallery-03.png",
      "/premium-gallery-04.png",
    ],
    copy: "Automatización total de ventas con cobros con tarjeta por Mercado Pago, cuentas de clientes y reportes.",
    features: [
      "Cobros automáticos con tarjetas mediante Mercado Pago",
      "Sistema de usuarios y cuentas para clientes",
      "Reportes avanzados de ventas, costos y ganancias",
      "Notificaciones automáticas y recuperación de carritos",
      "Hasta 3 funciones personalizadas a medida de tu negocio",
      "Incluye todas las características de la Tienda E-Commerce",
      "Soporte prioritario y Hosting gratis por 1 año",
    ],
    message: "Hola Juan Cruz, quería consultar por la Web Premium ($270.000 ARS) con entrega en 24 hs.",
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
    question: "¿En cuánto tiempo entregan la página web?",
    answer:
      "¡Tu página web se entrega en tan solo 24 horas! Trabajamos con un desarrollo ultra ágil y enfocado para que tu negocio esté online y listo para vender al día siguiente.",
  },
  {
    question: "¿Cómo es la forma de pago y seña?",
    answer:
      "Empezamos tu proyecto con solo una seña del 35% por transferencia bancaria o Mercado Pago. El 65% restante se abona una vez que la web está terminada, aprobada por vos y lista para publicar.",
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
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({});
  const [paymentPlan, setPaymentPlan] = useState<Plan | null>(null);
  const [paymentMode, setPaymentMode] = useState<"deposit" | "full">("deposit");
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

  const toggleExpand = (planId: string) => {
    setExpandedPlans((prev) => ({ ...prev, [planId]: !prev[planId] }));
  };

  return (
    <main className="min-h-screen bg-[#040306] text-[#f4f4f6]">
      {/* ─── Sticky Navbar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[74px] sm:h-[82px] px-6 lg:px-16 flex items-center justify-between bg-[#040306]/90 backdrop-blur-md border-b border-white/[0.08]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center group cursor-pointer transition-transform py-1"
          aria-label="JCB Development, ir al inicio"
        >
          <img
            src="/jcb-logo-clean.png"
            alt="JCB Development"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all group-hover:scale-105 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          />
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
              "Hola Juan Cruz, quería consultar para hacer una página web para mi negocio en 24 horas."
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

      {/* ─── Hero Section ─── */}
      <section className="clean-hero-section">
        <div className="clean-hero-badge">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span>Tu Página Web Lista en 24 Horas</span>
        </div>

        <h1 className="clean-hero-title">
          Tu negocio online, moderno y <span>listo para vender.</span>
        </h1>

        <p className="clean-hero-subtitle">
          Creamos tiendas online, catálogos y páginas web ultrarrápidas a medida.
          100% adaptadas a celulares, con hosting de regalo y tu página web online en 24 horas.
        </p>

        <div className="clean-hero-actions">
          <a href="#modelos" className="btn-primary-glow">
            <span>Ver Modelos y Precios</span>
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola Juan Cruz, quería consultar para tener mi página web lista en 24 horas."
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
              <Clock className="w-3.5 h-3.5" /> Entrega en 24 Hs
            </span>
            <span className="text-xs text-zinc-400 text-center">Tu web lista en tiempo récord</span>
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

      {/* ─── Modelos & Precios (4 Modelos Directos, 0 Fricción) ─── */}
      <section className="py-16 px-4" id="modelos">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-1.5">
            PRECIOS TRANSPARENTES · ENTREGA EN 24 HORAS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Elegí tu página web
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Sin rodeos ni opciones repetidas. Podés comenzar cualquier proyecto abonando la seña del 35%.
          </p>
        </div>

        {/* 3 Cards Grid (Alineadas en 3 columnas en escritorio, súper limpias y balanceadas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 items-stretch">
          {plans.map((plan) => {
            const depositAmount = Math.round(plan.amount * 0.35);
            const isExpanded = !!expandedPlans[plan.id];

            const initialFeaturesCount = 3;
            const displayedFeatures = isExpanded
              ? plan.features
              : plan.features.slice(0, initialFeaturesCount);

            return (
              <article
                key={plan.id}
                className={`clean-plan-card flex flex-col ${plan.isPopular ? "featured-card" : ""}`}
              >
                {/* Header */}
                <div className="clean-card-header">
                  <span className={`clean-badge ${plan.isPopular ? "featured" : ""}`}>
                    {plan.tag}
                  </span>
                  {plan.type.includes("Premium") && (
                    <span className="text-[10px] font-bold text-pink-400 bg-pink-950/60 border border-pink-800/60 px-2 py-0.5 rounded-full">
                      Cobros Tarjeta
                    </span>
                  )}
                </div>

                <h3 className="clean-plan-title">{plan.type}</h3>
                <p className="clean-plan-copy">{plan.copy}</p>

                {/* Price block */}
                <div className="clean-price-box">
                  <div className="clean-price-amount">
                    <small>TOTAL</small>
                    <strong>${plan.price}</strong>
                    <span>ARS</span>
                  </div>

                  <div className="clean-price-note">
                    <span>💡 Seña 35% para iniciar:</span>
                    <strong className="text-white">${depositAmount.toLocaleString("es-AR")} ARS</strong>
                  </div>
                </div>

                {/* Features list compacta */}
                <ul className="clean-features-list">
                  {displayedFeatures.map((feature, idx) => (
                    <li key={idx}>
                      <Check className="clean-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón para expandir o contraer detalles */}
                {plan.features.length > initialFeaturesCount && (
                  <button
                    onClick={() => toggleExpand(plan.id)}
                    className="self-start text-[11px] font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 mb-3 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-3 h-3" />
                        <span>Ver menos</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3 h-3" />
                        <span>+ Ver {plan.features.length - initialFeaturesCount} detalles más</span>
                      </>
                    )}
                  </button>
                )}

                {/* Botones de acción anclados al fondo */}
                <div className="clean-card-actions mt-auto">
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
                    <CreditCard className="w-3 h-3 text-purple-400" />
                    <span>Datos de Transferencia / Seña</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Dominio Privado Card */}
        <div className="max-w-4xl mx-auto mt-12 p-5 rounded-2xl bg-zinc-900/60 border border-purple-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-lg shrink-0">
              🌐
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                ADICIONAL DISPONIBLE
              </span>
              <h4 className="text-base font-bold text-white">Dominio Privado (.com o .com.ar)</h4>
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
            className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-xs font-bold text-white transition-all flex items-center gap-2"
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

      {/* ─── Proceso en 3 Pasos ─── */}
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
              En solo 24 horas revisás tu web terminada y lista para publicar con hosting gratis y soporte.
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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 cursor-pointer group hover:opacity-90 transition-opacity"
            aria-label="Volver al inicio"
          >
            <img src="/jcb-logo-clean.png" alt="JCB Development" className="h-8 sm:h-9 w-auto object-contain" />
            <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">· Desarrollo Web Profesional</span>
          </a>

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
                  href={MERCADO_PAGO_LINK}
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
                    paymentMode === "deposit" ? "Seña 35%" : "Pago Completo"
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
