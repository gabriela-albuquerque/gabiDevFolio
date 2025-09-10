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
import furni from "../assets/images/projectImages/project6.png";
import ftc from "../assets/images/projectImages/project7.png";
import ngo from "../assets/images/projectImages/project8.png";

export const Projects = {
  ReactFlix: {
    image: reactflix,
    title: "ReactFlix",
    subTitle: "Descubra e explore filmes com React",
    insights: {
      desc: ` Aplicação em React com roteamento SPA, consumo da API TMDB, hooks para gerenciamento de estado e componentes reutilizáveis. Desenvolvida com Vite, variáveis de ambiente e CSS modularizado, aplicando boas práticas de acessibilidade e UX.`,
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
      reportLink: "https://organo-migrado-ts.vercel.app/",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Insightify.git",
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
    githubLink: "https://github.com/IrfanNaikwade28/Quizwhiz-Junction.git",
  },
  emd: {
    image: tasklist,
    title: "Task List",
    subTitle: "Gerencie tarefas com React",
    insights: {
      desc: `Aplicação em React com Tailwind CSS e React Router para criar, concluir, excluir e detalhar tarefas. Persistência com localStorage, formulários controlados, uso de hooks, estilização condicional e componentes reutilizáveis. `,
      category:
        "Persistência com localStorage | Formulários Controlados | Navegação com React Router",
      techStack: [react, tailwind, html, js],
      reportLink: "https://task-list-react-tailwind.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/TaskListReactTailwind",
  },
  algo: {
    // image: algo,
    title: "Algorithm Analyzer",
    subTitle: "CMD based tool",
    insights: {
      desc: `AlgoAnalyzer is an interactive platform designed to help users understand and visualize the functioning of various algorithms and data structures. The application provides step-by-step visual representations, making complex concepts easier to grasp.`,
      category: "Education, Data Structures & Algorithms, Visualization Tool",
      techStack: [],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/AlgoAnalyzer.git",
  },
  furni: {
    image: furni,
    title: "Furni",
    subTitle: "Ecommerce for Furniture",
    insights: {
      desc: `Furni Web is a modern e-commerce platform for furniture, showcasing a sleek and responsive design built using Tailwind CSS. The application offers an intuitive user interface, seamless navigation, and visually appealing layouts to enhance the shopping experience.`,
      category: "E-commerce, Web Design, Responsive Web Application",
      techStack: [html, css, js],
      reportLink: "",
    },
    githubLink:
      "https://github.com/IrfanNaikwade28/Furni-Web-using-Tailwind.git",
  },
  ngo: {
    image: ngo,
    title: "NGO Portfolio",
    subTitle: "village Portfolio",
    insights: {
      desc: `The NGO Portfolio is a professional website designed to showcase the mission, vision, and activities of a non-governmental organization. It provides an engaging platform to highlight initiatives, achievements, and opportunities for involvement. `,
      category: "Portfolio Website, Web Development",
      techStack: [react, tailwind, figma, html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/NGO-Portfolio.git",
  },
  ftc: {
    image: ftc,
    title: "Flip the Card",
    subTitle: "Card Game on web",
    insights: {
      desc: `Flip the Card is an engaging and interactive card-matching game designed for fun and cognitive skill enhancement. The game challenges users to match pairs of cards through memory and concentration. With its visually appealing design and smooth functionality, Flip the Card offers an entertaining experience while encouraging mental agility.`,
      category: "Game, Web Development, Interactive Application",
      techStack: [html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Flip-the-Card.git",
  },
};
