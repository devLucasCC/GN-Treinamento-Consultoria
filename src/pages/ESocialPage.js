import { esocialDetails, whatsappLink } from '../data';

export default function ESocialPage({ onNavigate }) {
  return (
    <main className="page-shell">
      <section className="page-header page-hero">
        <span className="eyebrow">eSocial SST</span>
        <h1>Gestão técnica de eSocial SST</h1>
        <p>{esocialDetails.description}</p>
        <div className="hero-actions">
          <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
          <button type="button" className="button-secondary" onClick={() => onNavigate('servicos')}>Ver serviços</button>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <span>Eventos atendidos</span>
        </div>
        <div className="service-detail-card">
          <ul>
            {esocialDetails.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <span>O que garantimos</span>
        </div>
        <div className="service-detail-card">
          <ul>
            {esocialDetails.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section page-card-highlight">
        <h2>Precisa de apoio no eSocial SST?</h2>
        <p>Contamos com experiência para padronizar os envios e reduzir erros em sua gestão de SST.</p>
        <div className="page-actions">
          <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
          <a className="button-secondary button-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
