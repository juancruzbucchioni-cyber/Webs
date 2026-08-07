"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const WHATSAPP_NUMBER = "5493534128474";

const plans = [
  {
    name: "Web Avanzada",
    categoryTag: "MÁS ELEGIDA",
    description:
      "Ideal para negocios que quieren vender por internet y administrar productos, pedidos y clientes.",
    price: 250000,
    depositPrice: 87500,
    buttonText: "Adquirir plan →",
    buttonVariant: "outline" as const,
    whatsappMsg: "Hola, buenas. Quería consultar por la Web Avanzada.",
    features: [
      { text: "Hasta 300 productos en catálogo", icon: <Briefcase className="w-5 h-5 text-purple-400" /> },
      { text: "Hosting privado 1 año gratis", icon: <Database className="w-5 h-5 text-purple-400" /> },
      { text: "Integración con WhatsApp & Envíos", icon: <Server className="w-5 h-5 text-purple-400" /> },
    ],
    includes: [
      "Características principales:",
      "Diseño 100% adaptado a celular",
      "Panel de administración de pedidos",
      "Descuentos, ofertas y cupones",
      "Soporte post-entrega por 2 meses",
    ],
  },
  {
    name: "Web Premium",
    categoryTag: "RECOMENDADA",
    description:
      "Una solución completa para negocios que necesitan automatizar ventas y cobros automáticos.",
    price: 360000,
    depositPrice: 126000,
    popular: true,
    buttonText: "Adquirir plan →",
    buttonVariant: "default" as const,
    whatsappMsg: "Hola, buenas. Quería consultar por la Web de Negocio Premium.",
    features: [
      { text: "Todo lo de la Web Avanzada", icon: <Briefcase className="w-5 h-5 text-emerald-400" /> },
      { text: "Cobros automáticos Mercado Pago", icon: <Database className="w-5 h-5 text-emerald-400" /> },
      { text: "Cuentas de clientes & Carritos", icon: <Server className="w-5 h-5 text-emerald-400" /> },
    ],
    includes: [
      "Todo lo de Avanzada, más:",
      "Cobros automáticos con tarjeta y Mercado Pago",
      "Recuperación de carritos abandonados",
      "Notificaciones automáticas de compras",
      "Soporte técnico prioritario",
    ],
  },
  {
    name: "Dashboard Pro",
    categoryTag: "ADMINISTRACIÓN",
    description:
      "Sistema práctico a medida para administrar gastos, ventas y controlar el rendimiento de tu empresa.",
    price: 90000,
    depositPrice: 22000,
    buttonText: "Adquirir plan →",
    buttonVariant: "outline" as const,
    whatsappMsg: "Hola, buenas. Quería consultar por el Dashboard Personalizado.",
    features: [
      { text: "Reportes en PDF y estadísticas", icon: <Briefcase className="w-5 h-5 text-purple-400" /> },
      { text: "Gestión de ingresos y gastos", icon: <Database className="w-5 h-5 text-purple-400" /> },
      { text: "Acceso seguro para 2 usuarios", icon: <Server className="w-5 h-5 text-purple-400" /> },
    ],
    includes: [
      "Incluye funciones de gestión:",
      "Cálculo automático de ganancias y márgenes",
      "Adaptado a la identidad de tu marca",
      "Módulos personalizados a tu negocio",
      "Información protegida en la nube",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-slate-900 border border-purple-500/30 p-1 backdrop-blur-xl">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit sm:h-12 cursor-pointer h-10 rounded-full sm:px-6 px-4 sm:py-2 py-1 text-xs sm:text-sm font-bold transition-colors",
            selected === "0" ? "text-white" : "text-slate-400 hover:text-white"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-purple-500/50 shadow-lg shadow-purple-950/60 bg-gradient-to-r from-purple-700 to-indigo-700"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Pago Completo (ARS)</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-4 sm:py-2 py-1 text-xs sm:text-sm font-bold transition-colors",
            selected === "1" ? "text-white" : "text-slate-400 hover:text-white"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-emerald-500/50 shadow-lg shadow-emerald-950/60 bg-gradient-to-r from-emerald-600 to-teal-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Con Seña 35%
            <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
              Ideal inicio
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [isDeposit, setIsDeposit] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsDeposit(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-16 pb-20 max-w-7xl mx-auto relative text-white"
      ref={pricingRef}
    >
      <div className="flex justify-center pb-8">
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="shrink-0" />
        </TimelineContent>
      </div>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-3 gap-6 mx-auto p-3 sm:p-4 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-2xl"
      >
        {plans.map((plan, index) => (
          <TimelineContent
            as="div"
            key={plan.name}
            animationNum={index + 3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative flex-col flex justify-between h-full p-2 ${
                plan.popular
                  ? "scale-105 border-2 border-purple-500/60 bg-gradient-to-b from-slate-900 via-purple-950/50 to-slate-950 text-white shadow-2xl shadow-purple-950/80"
                  : "border border-white/10 bg-slate-900/60 text-slate-100 hover:border-purple-500/30"
              }`}
            >
              <CardContent className="pt-4">
                <div className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-purple-300 bg-purple-900/40 border border-purple-500/30 px-3 py-1 rounded-full">
                      {plan.categoryTag}
                    </span>
                    {plan.popular && (
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-purple-900/50">
                        Popular ⭐
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline pt-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      $
                      <NumberFlow
                        format={{
                          currency: "ARS",
                        }}
                        value={isDeposit ? plan.depositPrice : plan.price}
                        className="text-3xl sm:text-4xl font-extrabold"
                      />
                    </span>
                    <span
                      className={
                        plan.popular
                          ? "text-purple-200 text-xs font-semibold ml-2"
                          : "text-slate-400 text-xs font-semibold ml-2"
                      }
                    >
                      ARS {isDeposit ? "(Seña 35%)" : "(Total)"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                </div>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-purple-400 mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2.5 font-medium">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs">
                        <span
                          className={
                            plan.popular
                              ? "text-emerald-400 h-5 w-5 bg-emerald-500/20 border border-emerald-400/40 rounded-full grid place-content-center mr-2.5 shrink-0"
                              : "text-purple-400 h-5 w-5 bg-purple-500/20 border border-purple-400/40 rounded-full grid place-content-center mr-2.5 shrink-0"
                          }
                        >
                          <CheckCheck className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full text-center py-3.5 px-4 text-sm font-bold rounded-xl transition-all duration-300 block ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-900/60 hover:brightness-110 border border-purple-400/50"
                      : "bg-slate-800 hover:bg-purple-900/50 text-white border border-white/10 hover:border-purple-500/40"
                  }`}
                >
                  {plan.buttonText}
                </a>
              </CardFooter>
            </Card>
          </TimelineContent>
        ))}
      </TimelineContent>
    </div>
  );
}
