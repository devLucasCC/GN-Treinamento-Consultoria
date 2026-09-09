import { serviceDetails, whatsappLink } from '../data';

export default function ServicesPage({ onNavigate }) {
  return (
    <main className="page-shell">
      <section className="page-header page-hero">
        <span className="eyebrow">Serviços</span>
        <h1>Soluções completas para sua empresa</h1>
        <p>Conheça cada serviço que a GN oferece e veja como podemos ajudar sua empresa a se manter segura, em conformidade e pronta para operar com eficiência.</p>
        <div className="hero-actions">
          <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
          <button type="button" className="button-secondary" onClick={() => onNavigate('sobre')}>Sobre a GN</button>
        </div>
      </section>

      <section className="page-section service-detail-list">
        {serviceDetails.map((service) => (
          <article key={service.title} className="service-detail-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="page-section page-card-highlight">
        <h2>Pronto para uma proposta personalizada?</h2>
        <p>Conte sua necessidade e a GN vai indicar a melhor solução técnica e comercial para sua empresa.</p>
        <div className="page-actions">
          <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
          <a className="button-secondary button-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
