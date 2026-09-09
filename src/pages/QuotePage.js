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

const initialFormData = {
  nome: '',
  empresa: '',
  whatsapp: '',
  cidade: '',
  servico: '',
  mensagem: '',
};

// Formata o telefone enquanto o usuário digita: (91) 98501-0707 (celular,
// 11 dígitos) ou (91) 3241-1234 (fixo, 10 dígitos).
function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateField(name, value) {
  switch (name) {
    case 'nome':
      if (!value.trim()) return 'Informe seu nome.';
      if (value.trim().length < 3) return 'Informe um nome válido.';
      return '';
    case 'empresa':
      if (!value.trim()) return 'Informe o nome da empresa.';
      return '';
    case 'whatsapp':
      if (!value.trim()) return 'Informe um número de WhatsApp.';
      if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(value.trim())) {
        return 'Número incompleto. Use o formato (91) 98501-0707.';
      }
      return '';
    case 'servico':
      if (!value) return 'Selecione um serviço.';
      return '';
    default:
      return '';
  }
}

const requiredFields = ['nome', 'empresa', 'whatsapp', 'servico'];

function validateAll(data) {
  const nextErrors = {};
  requiredFields.forEach((field) => {
    const message = validateField(field, data[field]);
    if (message) nextErrors[field] = message;
  });
  return nextErrors;
}

export default function QuotePage({ onBack }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  // idle -> formulário normal | success -> WhatsApp abriu | blocked -> pop-up bloqueado
  const [status, setStatus] = useState('idle');
  const [pendingUrl, setPendingUrl] = useState('');
  const [pendingMessage, setPendingMessage] = useState('');
  const [copyState, setCopyState] = useState('idle'); // idle | copied | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue = name === 'whatsapp' ? formatPhone(value) : value;

    setFormData((currentData) => ({
      ...currentData,
      [name]: nextValue,
    }));

    if (touched[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: validateField(name, nextValue),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((currentTouched) => ({ ...currentTouched, [name]: true }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setCopyState('idle');
    setStatus('idle');
  };

  const handleCopyMessage = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(pendingMessage);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = pendingMessage;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2500);
    } catch (error) {
      setCopyState('error');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);
    setTouched(
      requiredFields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
    );

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

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

    setPendingUrl(url);
    setPendingMessage(message);

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

    // Abrimos sem noopener/noreferrer para conseguir a referência da janela e
    // detectar bloqueio de pop-up — e neutralizamos "opener" manualmente logo
    // em seguida, o que dá a mesma proteção de segurança do noopener.
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }

    const isBlocked = !newWindow || newWindow.closed || typeof newWindow.closed === 'undefined';

    if (isBlocked) {
      setStatus('blocked');
      return;
    }

    setStatus('success');
    // Alguns bloqueadores fecham a aba logo depois de abri-la; uma segunda
    // checagem pouco depois cobre esse caso.
    setTimeout(() => {
      if (newWindow.closed) {
        setStatus('blocked');
      }
    }, 600);
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
        {status === 'success' && (
          <div className="quote-form quote-result quote-result-success" role="status">
            <div className="quote-result-icon quote-result-icon-success" aria-hidden="true">
              <i className="fas fa-check"></i>
            </div>
            <h2>Solicitação enviada!</h2>
            <p>Abrimos o WhatsApp em outra aba com sua mensagem pronta — é só conferir e enviar por lá para concluir.</p>
            <div className="quote-result-actions">
              <a className="button-primary" href={pendingUrl} target="_blank" rel="noopener noreferrer">Abrir WhatsApp novamente</a>
              <button type="button" className="button-secondary" onClick={handleReset}>Enviar outra solicitação</button>
            </div>
          </div>
        )}

        {status === 'blocked' && (
          <div className="quote-form quote-result quote-result-blocked" role="alert">
            <div className="quote-result-icon quote-result-icon-warning" aria-hidden="true">
              <i className="fas fa-triangle-exclamation"></i>
            </div>
            <h2>Não conseguimos abrir o WhatsApp automaticamente</h2>
            <p>Isso costuma acontecer por causa do bloqueador de pop-up do navegador. Sua solicitação não foi perdida — continue por uma das opções abaixo:</p>
            <div className="quote-result-actions">
              <a className="button-primary" href={pendingUrl} target="_blank" rel="noopener noreferrer">Abrir WhatsApp manualmente</a>
              <button type="button" className="button-secondary" onClick={handleCopyMessage}>
                {copyState === 'copied' ? 'Mensagem copiada!' : 'Copiar mensagem'}
              </button>
            </div>
            {copyState === 'error' && (
              <p className="field-error">Não foi possível copiar automaticamente. Selecione o texto abaixo e copie manualmente (Ctrl+C).</p>
            )}
            <label className="quote-result-message-label">
              Mensagem que seria enviada
              <textarea
                className="quote-result-message"
                value={pendingMessage}
                readOnly
                rows="6"
                onFocus={(event) => event.target.select()}
              />
            </label>
            <button type="button" className="quote-result-link-back" onClick={() => setStatus('idle')}>
              Voltar e editar os dados
            </button>
          </div>
        )}

        {status === 'idle' && (
          <form className="quote-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <label>
                Nome completo
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Seu nome"
                  required
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? 'erro-nome' : undefined}
                  className={errors.nome ? 'input-error' : ''}
                />
                {errors.nome && <span className="field-error" id="erro-nome" role="alert">{errors.nome}</span>}
              </label>
              <label>
                Empresa
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Nome da empresa"
                  required
                  aria-invalid={Boolean(errors.empresa)}
                  aria-describedby={errors.empresa ? 'erro-empresa' : undefined}
                  className={errors.empresa ? 'input-error' : ''}
                />
                {errors.empresa && <span className="field-error" id="erro-empresa" role="alert">{errors.empresa}</span>}
              </label>
              <label>
                WhatsApp
                <input
                  type="tel"
                  inputMode="numeric"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="(91) 98501-0707"
                  required
                  aria-invalid={Boolean(errors.whatsapp)}
                  aria-describedby={errors.whatsapp ? 'erro-whatsapp' : undefined}
                  className={errors.whatsapp ? 'input-error' : ''}
                />
                {errors.whatsapp && <span className="field-error" id="erro-whatsapp" role="alert">{errors.whatsapp}</span>}
              </label>
              <label>
                Cidade
                <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Belém, Ananindeua, Marituba..." />
              </label>
              <label className="form-full">
                Serviço desejado
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-invalid={Boolean(errors.servico)}
                  aria-describedby={errors.servico ? 'erro-servico' : undefined}
                  className={errors.servico ? 'input-error' : ''}
                >
                  <option value="">Selecione uma opção</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.servico && <span className="field-error" id="erro-servico" role="alert">{errors.servico}</span>}
              </label>
              <label className="form-full">
                Mensagem
                <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Descreva brevemente a necessidade da empresa." rows="6" />
              </label>
            </div>
            <p className="privacy-note">Ao enviar, você será direcionado ao WhatsApp da GN para concluir a solicitação.</p>
            <button type="submit" className="button-primary">Enviar solicitação pelo WhatsApp</button>
          </form>
        )}

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
