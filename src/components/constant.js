// Icons
import react from "../assets/icons/skills-icon/react-js.svg";
import ts from "../assets/icons/skills-icon/typescript.png";
import js from "../assets/icons/skills-icon/javascript.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import html from "../assets/icons/skills-icon/html.svg";
import css from "../assets/icons/skills-icon/css.svg";
import figma from "../assets/icons/skills-icon/figma.svg";
import git from "../assets/icons/skills-icon/git.png";

// projectImagess
import reactflix from "../assets/images/projectImages/project1_react-flix.png";
import reactorgano from "../assets/images/projectImages/project2_react-organo.png";
import meteora from "../assets/images/projectImages/project3_meteora.png";
import reactweather from "../assets/images/projectImages/project4_react-weather.png";
import tasklist from "../assets/images/projectImages/project5_task-list.png";
import login from "../assets/images/projectImages/project6_react-login.png";
import cinetag from "../assets/images/projectImages/project7_cinetag-react.png";
import spaceapp from "../assets/images/projectImages/project8_space-app.png";
import aprenser from "../assets/images/projectImages/project9_aprenser.png";

export const Projects = {
  ReactFlix: {
    image: reactflix,
    title: "ReactFlix",
    subTitle: "Descubra e explore filmes com React",
    insights: {
      desc: `Catálogo moderno de filmes que permite explorar, buscar e visualizar detalhes como avaliação, orçamento e duração. Utiliza roteamento SPA, consumo da API TMDB, hooks para gerenciamento de estado e componentes reutilizáveis. Desenvolvida com Vite, variáveis de ambiente e CSS modularizado, aplicando boas práticas de acessibilidade e UX.`,
      category:
        "Consumo de API Externa | Roteamento Avançado | Componentização Reutilizável",
      techStack: [react, js, html, css],
      reportLink: "https://react-flix-sandy.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/react_flix",
  },
  ReactOrgano: {
    image: reactorgano,
    title: "Organo em React + TS",
    subTitle: "Gerenciamento de colaboradores com tipagem forte e UI dinâmica.",
    insights: {
      desc: `Aplicação para organizar colaboradores em times, com cadastro via formulário, edição dinâmica e UI customizável. Trabalha tipagem de props, funções e eventos, uso de interfaces, fragmentos React e renderização condicional.`,
      category:
        "Manipulação de Estado | Tipagem de Props e Eventos | Renderização Condicional",
      techStack: [react, ts, figma, git],
      reportLink: "https://organo-azure-theta.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/Organo-migrado-TS",
  },
  Meteora: {
    image: meteora,
    title: "Meteora Context API",
    subTitle: "E-commerce de moda em React",
    insights: {
      desc: `E-commerce fictício que simula um fluxo real de compra, desenvolvido em React com Context API e useReducer para gerenciamento de estado. O projeto em evolução utiliza useMemo para otimização e Vite para build rápido, explorando práticas modernas de componentização e arquitetura em aplicações React.`,
      category: "Gerenciamento Global de Estado | useMemo | Context API",
      techStack: [react, js, git],
      reportLink: "https://meteora-context-api-beta.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/meteora-context-api",
  },
  ReactWeather: {
    image: reactweather,
    title: "React Weather",
    subTitle: "Clima em tempo real",
    insights: {
      desc: `Aplicação em React que consome a API da OpenWeather via Axios para exibir clima atual e previsão de 5 dias. Usa hooks, props, renderização condicional e manipulação de arrays/objetos. Interface responsiva com componentes reutilizáveis e CSS modular.`,
      category:
        "Requisições HTTP com Axios | Componentização | Manipulação de Arrays e Objetos",
      techStack: [react, html, css, js],
      reportLink: "https://react-weather-gabriela.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/react_weather",
  },
  TaskList: {
    image: tasklist,
    title: "Task List",
    subTitle: "Gerencie tarefas com React",
    insights: {
      desc: `Aplicação em React com Tailwind CSS e React Router para criar, concluir, excluir e detalhar tarefas. Persistência com localStorage, formulários controlados, uso de hooks, estilização condicional e componentes reutilizáveis. `,
      category:
        "Persistência em localStorage | Formulários Controlados | Navegação com React Router",
      techStack: [react, tailwind, html, js],
      reportLink: "https://task-list-react-tailwind.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/TaskListReactTailwind",
  },
  Login: {
    image: login,
    title: "React Login",
    subTitle: "Autenticação com estilo e acessibilidade",
    insights: {
      desc: `Interface de autenticaçãoque simula o fluxo de login, registro e recuperação de senha. Construída em React com hooks, roteamento e componentes reutilizáveis. Inclui validação de formulário, feedback visual, acessibilidade, efeitos de glassmorphism e navegação entre páginas com React Router.`,
      category:
        "Feedback Visual e UX | Glassmorphism Design | Componentização Reutilizável",
      techStack: [react, js, html, css],
      reportLink: "https://react-login-blond-omega.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/react-login",
  },
  CineTag: {
    image: cinetag,
    title: "CineTag React",
    subTitle: "Seus vídeos favoritos organizados",
    insights: {
      desc: `Catálogo de vídeos para salvar, organizar e assistir seus favoritos. Aplicação em React com Context API, React Router e CSS Modules. Consome uma API simulada para exibir vídeos, permite favoritar, reproduzir no player integrado e navegar entre páginas, aplicando hooks, roteamento dinâmico e renderização condicional, incluindo tratamento de erros com página 404 personalizada.`,
      category:
        "Consumo de API Simulada | CSS Modules | Ciclo de Vida (useEffect)",
      techStack: [react, js, css, git],
      reportLink: "https://cinetag-praticando-react-com-js.vercel.app/",
    },
    githubLink:
      "https://github.com/gabriela-albuquerque/cinetag-praticando-react-com-js",
  },
  SpaceApp: {
    image: spaceapp,
    title: "SpaceApp",
    subTitle: "Sua galeria interativa do espaço",
    insights: {
      desc: `Aplicação React com styled-components, gerenciamento de estado com hooks e modais para zoom. Possui filtragem por texto e tags, favoritar imagens e interface modular com componentes reutilizáveis e estilizados dinamicamente.`,
      category:
        "Filtragem Dinâmica (texto e tags) | Styled-components | Modal e Interação (zoom e favoritos)",
      techStack: [react, html, css, js],
      reportLink: "https://space-app-componentes-estilizados.vercel.app/",
    },
    githubLink:
      "https://github.com/gabriela-albuquerque/space-app-componentes-estilizados/tree/main",
  },
  Aprenser: {
    image: aprenser,
    title: "Aprenser",
    subTitle: "Landing page otimizada para SEO",
    insights: {
      desc: `Landing page responsiva estruturada com HTML5 e estilizada com CSS3. Inclui uso de tags semânticas, Flexbox, variáveis CSS, cabeçalho fixo com position: sticky e layout otimizado para telas de 1440px, priorizando boas práticas de acessibilidade e SEO.`,
      category:
        "HTML5 Semântico |  Boas práticas de Acessibilidade e SEO | CSS3 Avançado",
      techStack: [html, css, js, git],
      reportLink: "https://projeto-aprenser-bice.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/projeto_aprenser",
  },
};
