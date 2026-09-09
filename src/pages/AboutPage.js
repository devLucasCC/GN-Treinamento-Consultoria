import { serviceCards, whatsappLink, aboutSection, aboutApproach, aboutDifferentials, experienceSegments, aboutHeroImage, aboutHeroImage2, aboutWhoWeAreImage, clients } from '../data';

export default function AboutPage({ onNavigate }) {
  return (
    <main className="page-shell about-page">
      <section className="about-hero page-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">Sobre a GN Treinamentos e Consultoria</span>
          <h1>{aboutSection.subtitle}</h1>
          <p>{aboutSection.description}</p>
          <div className="hero-actions">
            <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
            <button type="button" className="button-secondary" onClick={() => onNavigate('servicos')}>Ver serviços</button>
          </div>
        </div>
        <div className="about-hero-images">
          <div className="about-hero-image about-hero-image-main">
            <img src={aboutHeroImage} alt="Atuação técnica da GN" />
          </div>
          <div className="about-hero-image about-hero-image-accent">
            <img src={aboutHeroImage2} alt="Treinamento em campo" />
          </div>
        </div>
      </section>

      <section className="about-who-we-are page-section">
        <div className="section-header">
          <span>Quem somos</span>
          <h2>A GN Treinamentos e Consultoria é especialista em soluções técnicas de SST.</h2>
        </div>
        <div className="who-we-are-grid">
          <div className="who-we-are-copy">
            <p>{aboutSection.whoWeAre}</p>
          </div>
          <div className="who-we-are-photo">
            <img src={aboutWhoWeAreImage} alt="Equipe GN em ação" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="about-pillars page-section">
        <div className="section-header">
          <span>Nossos pilares</span>
          <h2>Soluções técnicas desenvolvidas para unir conformidade, prevenção e confiança operacional.</h2>
        </div>
        <div className="service-card-grid smaller-pillar-cards">
          {serviceCards.map((card) => (
            <article key={card.title} className="service-card service-card-pillars">
              <div className={`service-icon ${card.image ? 'service-image-wrapper' : `icon-${card.icon}`}`}>
                {card.image ? <img src={card.image} alt={card.title} className="service-card-image" loading="lazy" /> : null}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-approach page-section">
        <div className="section-header">
          <span>Nossa abordagem</span>
          <h2>Atendimento técnico focado em resultados e conformidade.</h2>
        </div>
        <div className="approach-grid">
          {aboutApproach.map((item) => (
            <article key={item.title} className="approach-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-differentials page-section">
        <div className="section-header">
          <span>Diferenciais da GN</span>
          <h2>Capacidade técnica, atendimento personalizado e suporte completo em SST.</h2>
        </div>
        <div className="differentials-grid">
          {aboutDifferentials.map((item) => (
            <article key={item.title} className="differential-card">
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="about-experience page-section">
        <div className="section-header">
          <span>Experiência e credibilidade</span>
          <h2>A GN constrói credibilidade por meio de atendimento técnico, treinamentos práticos e soluções alinhadas às exigências de SST.</h2>
        </div>
        <p className="page-text">A GN constrói credibilidade por meio de atendimento técnico, treinamentos práticos e soluções alinhadas às exigências de Segurança e Saúde do Trabalho.</p>
        <div className="experience-grid">
          {experienceSegments.map((segment) => (
            <div key={segment} className="experience-segment">{segment}</div>
          ))}
        </div>
        <div className="clients-footer about-clients">
          <div className="section-header no-margin">
            <span>Empresas atendidas</span>
          </div>
          <div className="client-grid">
            {clients.map((client) => (
              <div key={client} className="client-box">{client}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-card-highlight about-cta">
        <h2>Pronto para elevar a segurança e a conformidade da sua empresa?</h2>
        <p>Conte para a GN sobre os desafios da sua operação e receba uma proposta técnica feita sob medida.</p>
        <div className="page-actions">
          <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
          <a className="button-secondary button-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
