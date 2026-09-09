// Integração mínima com o Google Analytics 4 (gtag.js).
//
// Só é ativada quando as duas condições são verdadeiras:
//   1. REACT_APP_GA_MEASUREMENT_ID está definida (veja .env.example);
//   2. o app está rodando em produção (build de produção), para não
//      poluir os dados reais com acessos de desenvolvimento/localhost.
//
// Sem a variável de ambiente configurada, todas as funções abaixo viram
// no-ops silenciosos — não há erro nem script carregado.
const MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
const isEnabled = Boolean(MEASUREMENT_ID) && process.env.NODE_ENV === 'production';

let initialized = false;

export function initAnalytics() {
  if (initialized || !isEnabled) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  // send_page_view: false porque as "páginas" desta SPA trocam por estado
  // do React, sem mudar a URL — os page_view são disparados manualmente
  // por trackPageView() a cada navegação (veja App.js).
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });

  initialized = true;
}

export function trackPageView(pagePath, pageTitle) {
  if (!initialized) return;
  window.gtag('event', 'page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

// Evento genérico. Nunca envie dados pessoais (nome, telefone, e-mail, etc.)
// nos parâmetros — o GA4 proíbe o envio de PII.
export function trackEvent(eventName, params = {}) {
  if (!initialized) return;
  window.gtag('event', eventName, params);
}
