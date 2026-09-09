import { trainingDetails, whatsappLink } from '../data';

export default function TrainingsPage({ onNavigate }) {
  return (
    <main className="page-shell">
      <section className="page-header page-hero">
        <span className="eyebrow">Treinamentos</span>
        <h1>Treinamentos normativos para equipes qualificadas</h1>
        <p>{trainingDetails.description}</p>
        <div className="hero-actions">
          <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
          <button type="button" className="button-secondary" onClick={() => onNavigate('servicos')}>Ver serviços</button>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <span>O que entregamos</span>
          <h2>Conteúdo prático, atualizado e alinhado às normas.</h2>
        </div>
        <div className="service-detail-card">
          <ul>
            {trainingDetails.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="section-header">
          <span>Tópicos principais</span>
        </div>
        <div className="service-detail-card">
          <ul>
            {trainingDetails.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section page-card-highlight">
        <h2>Vamos planejar o treinamento da sua equipe?</h2>
        <p>Definimos o melhor formato e a melhor carga horária para a sua operação, levando em conta normas e riscos específicos.</p>
        <div className="page-actions">
          <button type="button" className="button-primary" onClick={() => onNavigate('quote')}>Solicitar orçamento</button>
          <a className="button-secondary button-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
