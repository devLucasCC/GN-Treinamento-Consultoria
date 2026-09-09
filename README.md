# GN Treinamento Consultoria

Site inicial em React.js.

## Como usar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

## Analytics (Google Analytics 4)

O site já vem com a integração de GA4 pronta em `src/analytics.js`, mas ela só
é ativada quando a variável de ambiente `REACT_APP_GA_MEASUREMENT_ID` está
definida — sem ela, nada é carregado e o site funciona normalmente.

1. Crie uma propriedade em [analytics.google.com](https://analytics.google.com)
   (Admin > Criar propriedade) e adicione um fluxo de dados do tipo "Web".
2. Copie o **Measurement ID** do fluxo (formato `G-XXXXXXXXXX`).
3. Copie `.env.example` para `.env` e preencha `REACT_APP_GA_MEASUREMENT_ID`
   com esse ID. Em produção (Vercel/Netlify/etc.), defina a mesma variável nas
   configurações de ambiente do serviço de hospedagem.
4. Rode `npm run build` — o GA4 só carrega em build de produção, nunca em
   `npm start`, para não misturar acessos de desenvolvimento com dados reais.
5. No painel do GA4, em **Admin > Eventos**, marque o evento `generate_lead`
   como **key event** (conversão) — ele é disparado a cada envio do
   formulário de orçamento ([src/pages/QuotePage.js](src/pages/QuotePage.js)).

## Estrutura de arquivos

- `public/index.html` - página HTML principal
- `src/index.js` - ponto de entrada React
- `src/App.js` - componente principal
- `src/App.css` - estilos do App
- `src/index.css` - estilos globais
