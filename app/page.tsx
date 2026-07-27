"use client";

import { useState } from "react";

const projects = [
  { category: "E-commerce", title: "NÓMADE", eyebrow: "INDUMENTARIA", accent: "coral", price: "desde $480 USD", description: "Tienda online editorial, catálogo completo y checkout listo para vender.", mock: "01" },
  { category: "Landing", title: "VERDE", eyebrow: "CAFÉ DE ESPECIALIDAD", accent: "lime", price: "desde $180 USD", description: "Una landing de alto impacto para campañas, lanzamientos y reservas.", mock: "02" },
  { category: "Servicios", title: "NEXO", eyebrow: "ESTUDIO CREATIVO", accent: "blue", price: "desde $320 USD", description: "Sitio profesional para presentar servicios, casos y captar consultas.", mock: "03" },
  { category: "Catálogo", title: "FORMA", eyebrow: "MUEBLES & OBJETOS", accent: "sand", price: "desde $390 USD", description: "Catálogo visual administrable con fichas de producto y WhatsApp.", mock: "04" },
  { category: "Landing", title: "PULSO", eyebrow: "ENTRENAMIENTO", accent: "pink", price: "desde $210 USD", description: "Página veloz para convertir visitas en pruebas y membresías.", mock: "05" },
  { category: "Servicios", title: "CLARO", eyebrow: "ARQUITECTURA", accent: "violet", price: "desde $350 USD", description: "Portfolio sobrio con proyectos, estudio y formulario de contacto.", mock: "06" },
];

const filters = ["Todos", "Landing", "E-commerce", "Servicios", "Catálogo"];

export default function Home() {
  const [active, setActive] = useState("Todos");
  const visible = active === "Todos" ? projects : projects.filter((item) => item.category === active);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#inicio" aria-label="Norte Studio, inicio">
          <span className="brand-mark">N</span>NORTE<span className="brand-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#trabajos">Trabajos</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
        </div>
        <a className="nav-cta" href="#contacto">Hablemos <span>↗</span></a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
        </div>
        <p className="kicker"><span /> DISEÑO WEB · DESARROLLO · ESTRATEGIA</p>
        <h1>Webs que hacen<br />crecer tu <em>negocio.</em></h1>
        <p className="hero-copy">Diseño experiencias digitales únicas para marcas que quieren destacarse, vender más y dejar una impresión que dure.</p>
        <div className="hero-actions">
          <a className="button primary" href="#trabajos">Ver proyectos <span>↓</span></a>
          <a className="text-link" href="#contacto">Pedir presupuesto <span>↗</span></a>
        </div>
        <div className="hero-meta">
          <span>Disponible para nuevos proyectos</span>
          <span>Buenos Aires · Trabajamos online</span>
        </div>
      </section>

      <section className="marquee" aria-label="Servicios destacados">
        <div>LANDINGS <span>✦</span> TIENDAS ONLINE <span>✦</span> SITIOS CORPORATIVOS <span>✦</span> CATÁLOGOS <span>✦</span> DISEÑO A MEDIDA <span>✦</span></div>
      </section>

      <section className="work section" id="trabajos">
        <div className="section-head">
          <div>
            <p className="kicker"><span /> TRABAJOS SELECCIONADOS</p>
            <h2>Una web para cada<br /><em>tipo de negocio.</em></h2>
          </div>
          <p>Explorá modelos, funcionalidades y valores estimados. Cada proyecto se adapta a tu marca y objetivos.</p>
        </div>
        <div className="filters" role="group" aria-label="Filtrar proyectos">
          {filters.map((filter) => (
            <button className={active === filter ? "active" : ""} onClick={() => setActive(filter)} key={filter}>{filter}</button>
          ))}
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.accent}`}>
                <span className="project-index">/{project.mock}</span>
                <div className="browser">
                  <div className="browser-bar"><i /><i /><i /><b>{project.title.toLowerCase()}.com</b></div>
                  <div className="browser-content">
                    <small>{project.eyebrow}</small>
                    <strong>{project.title}</strong>
                    <span>VER COLECCIÓN ↗</span>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div><span>{project.category}</span><h3>{project.title}</h3></div>
                <p>{project.description}</p>
                <strong>{project.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="servicios">
        <p className="kicker"><span /> QUÉ PODEMOS CREAR</p>
        <div className="services-layout">
          <h2>Todo lo que tu marca<br />necesita para <em>crecer.</em></h2>
          <div className="service-list">
            {[
              ["01", "Landing page", "Una página enfocada en presentar y convertir."],
              ["02", "Sitio institucional", "Tu empresa, servicios y diferencial en una experiencia completa."],
              ["03", "Tienda online", "Catálogo, pagos, envíos y una compra simple desde cualquier dispositivo."],
              ["04", "Diseño a medida", "Una solución única para una idea que no entra en ninguna plantilla."],
            ].map(([n, title, copy]) => (
              <div className="service-row" key={n}>
                <span>{n}</span><h3>{title}</h3><p>{copy}</p><b>↗</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="proceso">
        <div className="section-head">
          <div><p className="kicker"><span /> CÓMO TRABAJAMOS</p><h2>Simple, claro<br />y <em>sin vueltas.</em></h2></div>
          <p>Te acompaño desde la primera idea hasta la publicación, con comunicación directa en cada etapa.</p>
        </div>
        <div className="steps">
          {[
            ["01", "Nos conocemos", "Me contás sobre tu negocio, tus objetivos y lo que necesitás."],
            ["02", "Definimos", "Armamos alcance, propuesta visual, tiempos y presupuesto cerrado."],
            ["03", "Creamos", "Diseño y desarrollo tu web. Vas viendo los avances y dando feedback."],
            ["04", "Publicamos", "La dejamos online, optimizada y lista para recibir clientes."],
          ].map(([n, title, copy]) => <div className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </section>

      <section className="contact" id="contacto">
        <p className="kicker light"><span /> ¿TENÉS UNA IDEA?</p>
        <h2>Hagámosla<br /><em>realidad.</em></h2>
        <p>Contame qué necesitás y recibí una propuesta clara, sin compromiso.</p>
        <a className="button light-button" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">Pedir presupuesto por WhatsApp <span>↗</span></a>
        <div className="contact-foot"><span>NORTE STUDIO © 2026</span><span>Instagram · Behance · WhatsApp</span></div>
      </section>
    </main>
  );
}
