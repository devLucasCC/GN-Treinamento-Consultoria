import programasELaudosImg from './images/Programas e Laudos.webp';
import treinamentosNormativosImg from './images/Treinamentos Normativos.webp';
import consultoriaImg from './images/Consultoria e Normativa Tecnica.webp';
import projetosTecnicosImg from './images/Projetos Tecnicos.webp';
import eSocialSSTImg from './images/eSocial SST.webp';
import bannerImg from './images/Banner.webp';
import logoImg from './images/logo.webp';
import conformidadeImg from './images/Conformidade.webp';
import segurancaImg from './images/Seguranca.webp';
import confiancaImg from './images/confianca.webp';
import sobreImagemImg from './images/sobre-imagem.webp';
import sobreImagem2Img from './images/sobre-imagem2.webp';
import quemSomosImg from './images/quem-somos.webp';

// TODO: atualizar para o domínio real assim que o site tiver hospedagem definida.
// Usado no <link rel="canonical">, nas tags Open Graph/Twitter (public/index.html)
// e em public/robots.txt e public/sitemap.xml — mantenha os 4 lugares em sincronia.
export const SITE_URL = 'https://www.gntreinamentoseconsultoria.com.br';
export const SITE_NAME = 'GN Treinamentos e Consultoria';

export const WHATSAPP_NUMBER = '5591985010707';

const whatsappMessage = encodeURIComponent(
  'Olá, vim pelo site da GN Treinamentos e Consultoria e gostaria de solicitar um orçamento.'
);

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
export const instagramLink = '#';
export const linkedinLink = '#';
export const emailLink = 'mailto:garcianunes.treinamentos@gmail.com';
export const gnLogoImage = logoImg;
export const bannerImage = bannerImg;
export const aboutHeroImage = sobreImagemImg;
export const aboutHeroImage2 = sobreImagem2Img;
export const aboutWhoWeAreImage = quemSomosImg;

export const serviceCards = [
  {
    title: 'Conformidade',
    description: 'Mantemos sua empresa alinhada às Normas Regulamentadoras, exigências legais e boas práticas de Segurança e Saúde do Trabalho.',
    icon: 'shield-check',
    image: conformidadeImg,
    highlight: 'Normas, laudos e documentação em dia.',
  },
  {
    title: 'Segurança',
    description: 'Atuamos na prevenção de riscos, proteção dos trabalhadores e melhoria das condições dos ambientes de trabalho.',
    icon: 'safety',
    image: segurancaImg,
    highlight: 'Ambientes mais seguros e operações mais controladas.',
  },
  {
    title: 'Confiança',
    description: 'Entregamos soluções técnicas com responsabilidade, transparência e compromisso com resultados seguros.',
    icon: 'handshake',
    image: confiancaImg,
    highlight: 'Relacionamento técnico, claro e responsável.',
  },
];

export const solutions = [
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

export const serviceDetails = [
  {
    title: 'Programas e Laudos',
    description: 'Desenvolvemos programas e laudos técnicos essenciais para conformidade legal e a prevenção de riscos no ambiente de trabalho.',
    bullets: [
      'PGR, PCMSO, LTCAT e LIP para documentar riscos e medidas de controle.',
      'APR e AET para apoiar decisões em atividades de maior risco.',
      'Diagnóstico técnico e orientações para implementação das ações.',
    ],
  },
  {
    title: 'Treinamentos Normativos',
    description: 'Capacitamos equipes com base nas Normas Regulamentadoras vigentes, reduzindo acidentes e melhorando a performance operacional.',
    bullets: [
      'Treinamentos NR-06, NR-10, NR-12, NR-18, NR-20, NR-33, NR-35 e outros.',
      'Aulas presenciais ou in company para equipes de operação, manutenção e gestão.',
      'Material didático e registro de participação para comprovação legal.',
    ],
  },
  {
    title: 'Consultoria e Assessoria Técnica',
    description: 'Oferecemos suporte técnico para avaliação de riscos, correção de não conformidades e melhoria da gestão de SST.',
    bullets: [
      'Auditorias e visitas técnicas para identificação de gaps.',
      'Relatórios e planos de ação para adequações legais e operacionais.',
      'Apoio contínuo para tomada de decisão e acompanhamento de resultados.',
    ],
  },
  {
    title: 'eSocial SST',
    description: 'Gerenciamos a entrega dos eventos de SST no eSocial, com foco em confiabilidade, conformidade e redução de retrabalhos.',
    bullets: [
      'Organização e conferência de eventos S-2210, S-2240, S-2245 e outros.',
      'Validação técnica de informações de saúde e segurança.',
      'Suporte para evitar inconsistências e autuações.',
    ],
  },
  {
    title: 'Projetos Técnicos',
    description: 'Criamos projetos de engenharia e prevenção para sinalização, proteção contra quedas, combate a incêndio e instalações elétricas.',
    bullets: [
      'Projetos de proteção coletiva e coletiva, como linhas de vida e sinalização.',
      'Dimensionamento de sistemas de combate a incêndio e layouts de segurança.',
      'Adequação técnica de instalações elétricas e de segurança do trabalho.',
    ],
  },
];

export const advantages = [
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

export const steps = [
  { title: 'Contato inicial', description: 'Fale conosco e conte sobre as necessidades da sua empresa.' },
  { title: 'Diagnóstico', description: 'Analisamos seu cenário e identificamos riscos e oportunidades.' },
  { title: 'Proposta técnica', description: 'Apresentamos a melhor solução técnica e comercial para você.' },
  { title: 'Execução e entrega', description: 'Implementamos as ações e entregamos com qualidade e prazo.' },
];

export const clients = ['Norte Construções', 'Amazônia Serviços', 'Delta Energia', 'Tapajós Logística', 'Ribeiro Reformas', 'Belém Alimentos', 'Pará Engenharia', 'Nova Era Comércio'];

export const credentials = ['CREA-PA Registro de Pessoa Jurídica', 'IBAMA Cadastro Técnico Federal', 'SISTEMA CONFEA/CREA Empresa Registrada', 'eSocial Gestão de SST Qualificada'];

export const faqItems = [
  { question: 'O que é o PGR e minha empresa precisa elaborar?', answer: 'O PGR é o Programa de Gerenciamento de Riscos. Ele é obrigatório para empresas que desejam documentar e controlar exposições ocupacionais e ambientais.' },
  { question: 'Qual a diferença entre PCMSO e LTCAT?', answer: 'PCMSO trata da saúde do trabalhador, enquanto o LTCAT avalia as condições de exposição para aposentadoria especial e benefícios previdenciários.' },
  { question: 'Os treinamentos atendem quais NRs?', answer: 'Atendemos as principais NRs aplicáveis ao seu segmento, com foco em segurança do trabalho, meio ambiente e legislação vigente.' },
  { question: 'Como funciona a gestão de SST no eSocial?', answer: 'Gerenciamos o envio de eventos de SST ao eSocial com controle técnico e documentação adequada para evitar inconsistências.' },
  { question: 'Vocês atendem empresas de qual porte?', answer: 'Atendemos empresas de pequeno, médio e grande porte, com soluções personalizadas conforme o nível de complexidade do negócio.' },
];

export const aboutSection = {
  title: 'Sobre a GN Treinamentos e Consultoria',
  subtitle: 'Experiência, compromisso e atuação técnica em Segurança e Saúde do Trabalho.',
  description: 'A GN atua com consultoria, assessoria técnica, treinamentos, programas, laudos e suporte ao eSocial SST, apoiando empresas na prevenção de riscos, conformidade legal e fortalecimento da cultura de segurança.',
  whoWeAre: 'A GN Treinamentos e Consultoria é uma empresa especializada em soluções técnicas para Segurança e Saúde do Trabalho, com atuação em treinamentos, programas, laudos, assessoria, consultoria e suporte documental. Nosso trabalho é apoiar empresas que precisam manter suas operações em conformidade, reduzir riscos ocupacionais e capacitar suas equipes para atuar com mais segurança, responsabilidade e eficiência.',
};

export const aboutApproach = [
  {
    title: 'Planejamento',
    description: 'Diagnóstico preciso e soluções alinhadas à realidade da operação.',
  },
  {
    title: 'Prática supervisionada',
    description: 'Treinamentos com foco na vivência real e no desenvolvimento de competências.',
  },
  {
    title: 'Conformidade',
    description: 'Atendimento às normas e regularização de processos de SST.',
  },
  {
    title: 'Excelência operacional',
    description: 'Compromisso com qualidade, melhoria contínua e resultados sustentáveis.',
  },
];

export const aboutDifferentials = [
  { title: 'Atendimento técnico personalizado' },
  { title: 'Treinamentos teóricos e práticos' },
  { title: 'Suporte documental e operacional' },
  { title: 'Atuação em atividades críticas' },
  { title: 'Apoio ao eSocial SST' },
  { title: 'Foco em conformidade e prevenção' },
];

export const experienceSegments = ['Indústria', 'Construção civil', 'Facilities', 'Telecomunicações', 'Alimentos', 'Serviços corporativos', 'Operações de risco'];

export const trainingDetails = {
  title: 'Treinamentos Normativos',
  description: 'Capacitamos equipes com conteúdo prático e alinhado às normas para reduzir riscos e melhorar a cultura de segurança no trabalho.',
  highlights: [
    'Treinamentos NR-06, NR-10, NR-12, NR-18, NR-20, NR-33, NR-35 e outros.',
    'Aulas presenciais e in company para equipes de operação, manutenção e liderança.',
    'Conteúdo focado em práticas reais, casos de uso e exigências de auditorias.',
  ],
  topics: [
    'Treinamento de uso de EPI e uso seguro de máquinas.',
    'NR-10: Segurança em instalações e serviços com eletricidade.',
    'NR-35: Trabalho em altura com proteção e procedimentos.',
    'NR-33: Espaços confinados e procedimentos de entrada segura.',
    'Treinamento de primeiros socorros e resgate em ambiente industrial.',
  ],
};

// Título e descrição de cada "página" da SPA, usados por App.js para atualizar
// document.title e a <meta name="description"> dinamicamente ao navegar.
// (Como o site não usa roteamento por URL, isso afeta a aba do navegador e
// leitores de tela, mas não o que rastreadores/crawlers veem — para isso, ver
// as tags estáticas em public/index.html, que refletem a página inicial.)
export const pageMeta = {
  home: {
    title: 'GN Treinamentos e Consultoria | SST, Laudos e Treinamentos em Belém-PA',
    description: 'Consultoria em Segurança e Saúde do Trabalho (SST) em Belém-PA: laudos, PGR, PCMSO, treinamentos normativos, eSocial SST e projetos técnicos. Solicite um orçamento.',
  },
  sobre: {
    title: 'Sobre a GN | GN Treinamentos e Consultoria',
    description: 'Conheça a GN Treinamentos e Consultoria: especialistas em Segurança e Saúde do Trabalho, engenharia e meio ambiente, com atuação em Belém e região.',
  },
  servicos: {
    title: 'Serviços | GN Treinamentos e Consultoria',
    description: 'Programas e laudos, treinamentos normativos, consultoria técnica, eSocial SST e projetos técnicos para manter sua empresa em conformidade.',
  },
  treinamentos: {
    title: 'Treinamentos Normativos | GN Treinamentos e Consultoria',
    description: 'Treinamentos NR-06, NR-10, NR-12, NR-18, NR-20, NR-33, NR-35 e outros, presenciais ou in company, para equipes mais seguras e qualificadas.',
  },
  esocial: {
    title: 'eSocial SST | GN Treinamentos e Consultoria',
    description: 'Suporte técnico para gestão e envio dos eventos de SST no eSocial: S-2210, S-2240, S-2245, S-2250 e outros, com redução de erros e retrabalho.',
  },
  quote: {
    title: 'Solicitar Orçamento | GN Treinamentos e Consultoria',
    description: 'Solicite uma proposta personalizada em Segurança e Saúde do Trabalho, treinamentos, laudos, consultoria técnica e eSocial SST.',
  },
};

export const esocialDetails = {
  title: 'eSocial SST',
  description: 'Suporte técnico para envio de eventos de SST e gestão dos dados de saúde e segurança no trabalho no eSocial.',
  highlights: [
    'Conferência técnica dos dados enviados ao eSocial.',
    'Organização de informações de saúde e segurança de forma consistente.',
    'Redução de erros e retrabalhos nas declarações de SST.',
  ],
  items: [
    'S-2210: Comunicação de acidente de trabalho.',
    'S-2240: Condições ambientais do trabalho.',
    'S-2245: Treinamentos e capacitações.',
    'S-2250: Trabalhador em condição de risco.',
  ],
};
