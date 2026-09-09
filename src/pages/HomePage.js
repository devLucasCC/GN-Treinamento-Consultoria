import { useEffect, useRef } from 'react';
import { serviceCards, solutions, advantages, steps, clients, credentials, faqItems, whatsappLink, bannerImage } from '../data';

export default function HomePage({ onNavigate, scrollTarget, clearScrollTarget }) {
  const solutionsRef = useRef(null);

  useEffect(() => {
    if (scrollTarget === 'solutions' && solutionsRef.current) {
      solutionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      clearScrollTarget();
    }
  }, [scrollTarget, clearScrollTarget]);
  return (
    <main>
      <section className="hero page-hero">
        <div className="hero-copy">
          <span className="eyebrow">GN Treinamentos e Consultoria</span>
          <h1>Conformidade, Segurança e Confiança para sua empresa</h1>
          <p>A GN Treinamentos e Consultoria auxilia empresas na gestão de Segurança e Saúde do Trabalho com laudos, programas, treinamentos normativos, consultoria técnica, engenharia e suporte ao eSocial SST.</p>
          <div className="hero-actions">
            <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
            <button type="button" className="button-secondary" onClick={() => onNavigate('servicos', 'solutions')}>Conhecer serviços</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img src={bannerImage} alt="Banner" className="hero-banner" fetchpriority="high" />
            <div className="hero-tag">Soluções em SST</div>
          </div>
        </div>
      </section>

      <section className="service-cards page-section">
        {serviceCards.map((card) => (
          <article key={card.title} className="service-card">
            <div className={`service-icon ${card.image ? 'service-image-wrapper' : `icon-${card.icon}`}`}>
              {card.image ? <img src={card.image} alt={card.title} className="service-card-image" loading="lazy" /> : null}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {card.highlight && <span className="service-highlight">{card.highlight}</span>}
          </article>
        ))}
      </section>

      <section className="solutions page-section" ref={solutionsRef}>
        <div className="section-header">
          <span>Nossas soluções</span>
          <h2>Soluções completas para a gestão de SST, engenharia e meio ambiente.</h2>
        </div>
        <div className="solution-grid">
          {solutions.map((item) => (
            <article key={item.title} className="solution-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="solution-copy">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <div className="solution-card-footer">
                <button type="button" className="button-secondary button-link" onClick={() => onNavigate('servicos')}>
                  Saiba mais
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="advantages page-section">
        <div className="section-header">
          <span>Por que escolher a GN?</span>
        </div>
        <div className="advantage-carousel">
          <div className="advantage-track">
            {[...advantages, ...advantages].map((item, index) => (
              <article key={`${item.title}-${index}`} className="advantage-card">
                <div className="advantage-card-header">
                  <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.caption}</p>
                <span className="advantage-highlight">{item.highlight}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process page-section">
        <div className="section-header">
          <span>Como funciona</span>
          <h2>Um processo simples, transparente e eficiente.</h2>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="process-step">
              <div className="step-number">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="clients-footer page-section">
        <div className="section-header no-margin">
          <span>Empresas atendidas</span>
        </div>
        <div className="client-grid">
          {clients.map((client) => (
            <div key={client} className="client-box">{client}</div>
          ))}
        </div>
      </section>

      <section className="credentials-faq page-section">
        <div className="credential-column">
          <div className="section-header">
            <span>Credenciamentos</span>
          </div>
          <div className="credential-grid">
            {credentials.map((item) => (
              <div key={item} className="credential-card">{item}</div>
            ))}
          </div>
        </div>
        <div className="faq-column">
          <div className="section-header">
            <span>Perguntas frequentes</span>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner page-section">
        <div>
          <h2>Precisa regularizar sua empresa ou treinar sua equipe?</h2>
          <p>Fale com nossos especialistas e receba uma proposta personalizada.</p>
        </div>
        <div className="cta-buttons">
          <button type="button" className="button-secondary button-link cta-whatsapp-button" onClick={() => onNavigate('quote')}>
            Solicitar orçamento
          </button>
          <a className="button-secondary button-link cta-whatsapp-button" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
