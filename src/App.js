import './App.css';
import programasELaudosImg from './images/Programas e Laudos.png';
import treinamentosNormativosImg from './images/Treinamentos Normativos.png';
import consultoriaImg from './images/Consultória e Normativa Tecnica.png';
import projetosTecnicosImg from './images/Projetos Tecnicos.png';
import eSocialSSTImg from './images/eSocial SST.png';
import bannerImg from './images/Banner.png';

const navLinks = ['Início', 'Sobre', 'Serviços', 'Treinamentos', 'eSocial SST', 'Empresas Atendidas', 'Contato'];

const serviceCards = [
  {
    title: 'Conformidade',
    description: 'Mantemos sua empresa alinhada às Normas Regulamentadoras, exigências legais e boas práticas de Segurança e Saúde do Trabalho.',
    icon: 'shield-alt',
  },
  {
    title: 'Segurança',
    description: 'Atuamos na prevenção de riscos, proteção dos trabalhadores e melhoria das condições dos ambientes de trabalho.',
    icon: 'safety',
  },
  {
    title: 'Confiança',
    description: 'Entregamos soluções técnicas com responsabilidade, transparência e compromisso com resultados seguros.',
    icon: 'handshake',
  },
];

const solutions = [
  {
    title: 'Programas e Laudos',
    subtitle: 'Elaboramos PGR, PCMSO, LTCAT, LIP, APR e AET para identificar riscos, orientar medidas preventivas e manter sua empresa em conformidade.',
    image: programasELaudosImg,
  },
  {
    title: 'Treinamentos Normativos',
    subtitle: 'Capacitações presenciais e in company conforme as NRs, preparando equipes para atuar com segurança, responsabilidade e prevenção.',
    image: treinamentosNormativosImg,
  },
  {
    title: 'Consultoria e Assessoria Técnica',
    subtitle: 'Apoio especializado para avaliar riscos, corrigir não conformidades e fortalecer a gestão de SST da sua empresa.',
    image: consultoriaImg,
  },
  {
    title: 'eSocial SST',
    subtitle: 'Organização, conferência e envio dos eventos de SST ao eSocial, com suporte técnico para reduzir inconsistências.',
    image: eSocialSSTImg,
  },
  {
    title: 'Projetos Técnicos',
    subtitle: 'Projetos de sinalização, prevenção contra quedas, prevenção contra incêndios, instalações elétricas e adequações técnicas.',
    image: projetosTecnicosImg,
  },
];

const advantages = [
  {
    title: 'Atendimento técnico especializado',
    caption: 'Orientação profissional para entender riscos, documentos e exigências específicas da sua empresa.',
    highlight: 'Análise técnica de riscos e exigências SST',
    icon: 'fa-user-tie',
  },
  {
    title: 'Soluções completas em SST',
    caption: 'Programas, laudos, treinamentos, consultoria e eSocial SST em um só lugar.',
    highlight: 'Integração de serviços para entregas consistentes',
    icon: 'fa-check-circle',
  },
  {
    title: 'Apoio à conformidade legal',
    caption: 'Suporte para manter sua empresa alinhada às Normas Regulamentadoras aplicáveis.',
    highlight: 'Conformidade com as exigências regulatórias',
    icon: 'fa-gavel',
  },
  {
    title: 'Atuação em Belém e região',
    caption: 'Atendimento local para empresas de diferentes segmentos no Pará.',
    highlight: 'Suporte regional com conhecimento local',
    icon: 'fa-map-marker-alt',
  },
  {
    title: 'Treinamentos e laudos integrados',
    caption: 'Mais praticidade para regularizar documentos e capacitar equipes com organização.',
    highlight: 'Documentação e capacitação juntos',
    icon: 'fa-file-alt',
  },
];

const steps = [
  { title: 'Contato inicial', description: 'Fale conosco e conte sobre as necessidades da sua empresa.' },
  { title: 'Diagnóstico', description: 'Analisamos seu cenário e identificamos riscos e oportunidades.' },
  { title: 'Proposta técnica', description: 'Apresentamos a melhor solução técnica e comercial para você.' },
  { title: 'Execução e entrega', description: 'Implementamos as ações e entregamos com qualidade e prazo.' },
];

const clients = ['Norte Construções', 'Amazônia Serviços', 'Delta Energia', 'Tapajós Logística', 'Ribeiro Reformas', 'Belém Alimentos', 'Pará Engenharia', 'Nova Era Comércio'];

const credentials = ['CREA-PA Registro de Pessoa Jurídica', 'IBAMA Cadastro Técnico Federal', 'SISTEMA CONFEA/CREA Empresa Registrada', 'eSocial Gestão de SST Qualificada'];

const faqItems = [
  { question: 'O que é o PGR e minha empresa precisa elaborar?', answer: 'O PGR é o Programa de Gerenciamento de Riscos. Ele é obrigatório para empresas que desejam documentar e controlar exposições ocupacionais e ambientais.' },
  { question: 'Qual a diferença entre PCMSO e LTCAT?', answer: 'PCMSO trata da saúde do trabalhador, enquanto o LTCAT avalia as condições de exposição para aposentadoria especial e benefícios previdenciários.' },
  { question: 'Os treinamentos atendem quais NRs?', answer: 'Atendemos as principais NRs aplicáveis ao seu segmento, com foco em segurança do trabalho, meio ambiente e legislação vigente.' },
  { question: 'Como funciona a gestão de SST no eSocial?', answer: 'Gerenciamos o envio de eventos de SST ao eSocial com controle técnico e documentação adequada para evitar inconsistências.' },
  { question: 'Vocês atendem empresas de qual porte?', answer: 'Atendemos empresas de pequeno, médio e grande porte, com soluções personalizadas conforme o nível de complexidade do negócio.' },
];

function App() {
  return (
    <div className="App">
      <header className="topbar">
        <div className="topbar-info">
          <span>(91) 98501-0707</span>
          <span>garcianunes.treinamentos@gmail.com</span>
          <span>Belém · Pará</span>
        </div>
        <div className="topbar-actions">
          <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </header>

      <div className="navbar">
        <div className="brand">
          <div className="brand-mark">GN</div>
          <div>
            <span className="brand-name">Treinamentos</span>
            <span className="brand-subtitle">e Consultoria</span>
          </div>
        </div>
        <nav>
          {navLinks.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </nav>
        <button className="button-primary">Solicitar orçamento</button>
      </div>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">GN Treinamentos e Consultoria</span>
            <h1>Conformidade, Segurança e Confiança para sua empresa</h1>
            <p>A GN Treinamentos e Consultoria auxilia empresas na gestão de Segurança e Saúde do Trabalho com laudos, programas, treinamentos normativos, consultoria técnica, engenharia e suporte ao eSocial SST.</p>
            <div className="hero-actions">
              <button className="button-primary">Solicitar orçamento</button>
              <button className="button-secondary">Conhecer serviços</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <img src={bannerImg} alt="Banner" className="hero-banner" />
              <div className="hero-tag">Soluções em SST</div>
            </div>
          </div>
        </section>

        <section className="service-cards">
          {serviceCards.map((card) => (
            <article key={card.title} className="service-card">
              <div className={`service-icon icon-${card.icon}`} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </section>

        <section className="solutions">
          <div className="section-header">
            <span>Nossas soluções</span>
            <h2>Soluções completas para a gestão de SST, engenharia e meio ambiente.</h2>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <article key={item.title} className="solution-card">
                <img src={item.image} alt={item.title} />
                <div className="solution-copy">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div className="solution-card-footer">
                  <a className="button-secondary button-link" href="/saiba-mais.html">Saiba mais</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="advantages">
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

        <section className="process">
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

        <section className="clients-footer">
          <div className="section-header no-margin">
            <span>Empresas atendidas</span>
          </div>
          <div className="client-grid">
            {clients.map((client) => (
              <div key={client} className="client-box">{client}</div>
            ))}
          </div>
        </section>

        <section className="credentials-faq">
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

        <section className="cta-banner">
          <div>
            <h2>Precisa regularizar sua empresa ou treinar sua equipe?</h2>
            <p>Fale com nossos especialistas e receba uma proposta personalizada.</p>
          </div>
          <div className="cta-buttons">
            <button className="button-secondary">Falar no WhatsApp</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-mark footer-mark">GN</div>
          <p>Consultoria e assessoria em Segurança e Saúde do Trabalho, Engenharia, Treinamentos Normativos, eSocial SST e Meio Ambiente.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Links rápidos</h4>
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Contato</a>
          </div>
          <div>
            <h4>Contato</h4>
            <span>(91) 98501-0707</span>
            <span>garcianunes.treinamentos@gmail.com</span>
            <span>Conjunto Tapajós, Rua Andorra, n° 06, Belém - Pará</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
