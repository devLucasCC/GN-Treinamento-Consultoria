import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TrainingsPage from './pages/TrainingsPage';
import ESocialPage from './pages/ESocialPage';
import QuotePage from './pages/QuotePage';
import { whatsappLink, instagramLink, linkedinLink, emailLink, gnLogoImage, pageMeta } from './data';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollTarget, setScrollTarget] = useState(null);

  const goToPage = (page, target = null) => {
    setCurrentPage(page);
    setScrollTarget(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Atualiza o título da aba e a meta description a cada navegação interna.
  // Não afeta o que buscadores/crawlers indexam (o site é uma SPA sem rota por
  // URL), mas melhora a aba do navegador, o histórico e leitores de tela.
  useEffect(() => {
    const meta = pageMeta[currentPage] || pageMeta.home;
    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'sobre':
        return <AboutPage onNavigate={goToPage} />;
      case 'servicos':
        return <ServicesPage onNavigate={goToPage} />;
      case 'treinamentos':
        return <TrainingsPage onNavigate={goToPage} />;
      case 'esocial':
        return <ESocialPage onNavigate={goToPage} />;
      case 'quote':
        return <QuotePage onBack={() => goToPage('home')} />;
      default:
        return <HomePage onNavigate={goToPage} scrollTarget={scrollTarget} clearScrollTarget={() => setScrollTarget(null)} />;
    }
  };

  return (
    <div className="App">
      <header className="topbar">
        <div className="topbar-info">
          <span>(91) 98501-0707</span>
          <span>garcianunes.treinamentos@gmail.com</span>
          <span>Belém · Pará</span>
        </div>
        <div className="topbar-actions">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da GN">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram da GN">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da GN">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </header>

      <div className="navbar">
        <div className="brand brand-large">
          <div className="brand-mark brand-mark-large">
            <img src={gnLogoImage} alt="GN Treinamentos e Consultoria" />
          </div>
          <div>
            <span className="brand-name">Treinamentos</span>
            <span className="brand-subtitle">e Consultoria</span>
          </div>
        </div>
        <nav>
          <button type="button" className="nav-link" onClick={() => goToPage('home')}>Início</button>
          <button type="button" className="nav-link" onClick={() => goToPage('sobre')}>Sobre</button>
          <button type="button" className="nav-link" onClick={() => goToPage('servicos')}>Serviços</button>
          <button type="button" className="nav-link" onClick={() => goToPage('treinamentos')}>Treinamentos</button>
          <button type="button" className="nav-link" onClick={() => goToPage('esocial')}>eSocial SST</button>
        </nav>
        <button type="button" className="button-primary" onClick={() => goToPage('quote')}>Solicitar orçamento</button>
      </div>

      {renderPage()}

      <footer className="footer footer-about-footer">
        <div className="footer-brand">
          <div className="brand-mark footer-mark footer-mark-large">
            <img src={gnLogoImage} alt="GN Treinamentos e Consultoria" loading="lazy" />
          </div>
          <p>Consultoria e assessoria em Segurança e Saúde do Trabalho, Engenharia, Treinamentos Normativos, eSocial SST e Meio Ambiente.</p>
        </div>
        <div className="footer-links footer-contact-grid">
          <div>
            <h4>Contato</h4>
            <span>CNPJ: 00.000.000/0000-00</span>
            <span>WhatsApp: (91) 98501-0707</span>
            <a href={emailLink}>garcianunes.treinamentos@gmail.com</a>
            <span>Conjunto Tapajós, Rua Andorra, n° 06, Belém - Pará</span>
          </div>
          <div>
            <h4>Documentos</h4>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
