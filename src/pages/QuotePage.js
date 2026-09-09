import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data';
import { trackEvent } from '../analytics';

const services = [
  'Programas e Laudos',
  'Treinamentos Normativos',
  'Consultoria e Assessoria Técnica',
  'eSocial SST',
  'Projetos Técnicos',
  'Meio Ambiente',
  'Outro',
];

export default function QuotePage({ onBack }) {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    cidade: '',
    servico: '',
    mensagem: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Olá, vim pelo site da GN Treinamentos e Consultoria e gostaria de solicitar um orçamento.

Nome: ${formData.nome}
Empresa: ${formData.empresa}
WhatsApp: ${formData.whatsapp}
Cidade: ${formData.cidade}
Serviço desejado: ${formData.servico}

Mensagem:
${formData.mensagem}`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Evento de conversão: "generate_lead" é o evento recomendado do GA4 para
    // captação de leads. Marque-o como conversão (key event) no painel do
    // GA4 em Admin > Eventos. Só enviamos o serviço escolhido (uma opção fixa
    // do <select>, não texto livre) — nunca nome, WhatsApp ou mensagem, que
    // são dados pessoais e não devem ir para o GA4.
    trackEvent('generate_lead', {
      service: formData.servico,
      method: 'whatsapp',
      form_location: 'quote_page',
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="quote-page">
      <section className="quote-hero">
        <button type="button" className="button-secondary" onClick={onBack}>
          Voltar para o início
        </button>
        <span className="eyebrow">Solicitar orçamento</span>
        <h1>Conte para a GN o que sua empresa precisa</h1>
        <p>Preencha os dados abaixo para solicitar uma proposta de laudos, treinamentos, consultoria, eSocial SST ou projetos técnicos.</p>
      </section>

      <section className="quote-layout">
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Nome completo
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required />
            </label>
            <label>
              Empresa
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nome da empresa" required />
            </label>
            <label>
              WhatsApp
              <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="(91) 99999-9999" required />
            </label>
            <label>
              Cidade
              <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Belém, Ananindeua, Marituba..." />
            </label>
            <label className="form-full">
              Serviço desejado
              <select name="servico" value={formData.servico} onChange={handleChange} required>
                <option value="">Selecione uma opção</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </label>
            <label className="form-full">
              Mensagem
              <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Descreva brevemente a necessidade da empresa." rows="6" />
            </label>
          </div>
          <p className="privacy-note">Ao enviar, você será direcionado ao WhatsApp da GN para concluir a solicitação.</p>
          <button type="submit" className="button-primary">Enviar solicitação pelo WhatsApp</button>
        </form>

        <aside className="quote-card">
          <h2>Atendimento GN</h2>
          <p>Nossa equipe analisa sua solicitação e orienta o melhor caminho para regularização, treinamento ou suporte técnico em SST.</p>
          <div className="quote-info-list">
            <span><strong>WhatsApp:</strong> (91) 98501-0707</span>
            <span><strong>E-mail:</strong> garcianunes.treinamentos@gmail.com</span>
            <span><strong>Atendimento:</strong> Belém e região</span>
            <span><strong>Serviços:</strong> Laudos, treinamentos, consultoria, eSocial SST e projetos técnicos</span>
          </div>
          <a className="button-secondary button-link" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">Chamar direto no WhatsApp</a>
        </aside>
      </section>
    </main>
  );
}
