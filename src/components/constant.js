// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import html from "../assets/icons/skills-icon/html.svg";
import css from "../assets/icons/skills-icon/css.svg";
import figma from "../assets/icons/skills-icon/figma.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";

// projectImagess
import reactflix from "../assets/images/projectImages/project1_react-flix.png";
import insightify from "../assets/images/projectImages/project11.png";
import qz from "../assets/images/projectImages/project2.png";
import tesla from "../assets/images/projectImages/project3.png";
import emd from "../assets/images/projectImages/project4.png";
import algo from "../assets/images/projectImages/project5.png";
import furni from "../assets/images/projectImages/project6.png";
import ftc from "../assets/images/projectImages/project7.png";
import ngo from "../assets/images/projectImages/project8.png";
import metashield from "../assets/images/projectImages/project9.png";

export const Projects = {
  ReactFlix: {
    image: reactflix,
    title: "ReactFlix",
    subTitle: "Explore filmes da API do TMDB",
    insights: {
      desc: ` ReactFlix é uma aplicação web moderna construída com React que consome a API do TMDB), permitindo ao usuário navegar, buscar e visualizar detalhes sobre filmes. O projeto demonstra habilidades avançadas em React, roteamento, consumo de API, manipulação de estados e componentes reutilizáveis.`,
      category: "Aplicação Web, Integração com API, Componentes Reutilizáveis",
      techStack: [js, react],
      reportLink: "https://react-flix-sandy.vercel.app/",
    },
    githubLink: "https://github.com/gabriela-albuquerque/react_flix",
  },
  Insightify: {
    image: insightify,
    title: "Insightify",
    subTitle: "YouTube Comment Analyzer Tool",
    insights: {
      desc: `Insightify is a YouTube comment sentiment and toxicity analysis app built with React Native. It leverages AI and NLP to deliver instant feedback on audience emotion, public demands, and content suggestions. Ideal for creators aiming to understand and improve their engagement.`,
      category: "AI, NLP, React Native, Mobile App",
      techStack: [react, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Insightify.git",
  },
  MetaShield: {
    image: metashield,
    title: "MetaShield",
    subTitle: "AI-Powered Sensitive Document Classification",
    insights: {
      desc: `MetaShield is an AI-powered solution that classifies documents as Sensitive (Y) or Non-Sensitive (N)
                  using only metadata—no content analysis required! It enhances security and compliance with regulations
                  like GDPR, HIPAA, and DPDP by automating document classification.`,
      category: "Cybersecurity, AI/ML, Web Application",
      techStack: [react, tailwind],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/MetaShield.git",
  },
  qzwz: {
    image: qz,
    title: "Quizwhiz Junction",
    subTitle: "Online Quiz Platform",
    insights: {
      desc: `Quizwhiz Junction is an interactive web-based quiz application designed to make learning engaging and enjoyable. It offers a wide range of quizzes across various topics, providing users with real-time feedback and performance tracking through a point-based system.`,
      category: "Education, Interactive Quiz Application, Web Development",
      techStack: [html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Quizwhiz-Junction.git",
  },
  emd: {
    image: emd,
    title: "Emedicine",
    subTitle: "Healthcare E-commerce, Web Application",
    insights: {
      desc: `E-Medicine is an online platform designed to streamline the purchase and management of medicines. The application offers users a convenient way to browse, search, and order medications, ensuring quick access to essential healthcare products. `,
      category: "Healthcare site, Web Development",
      techStack: [react, tailwind, html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/E-medicine.git",
  },
  algo: {
    image: algo,
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
  tesla: {
    image: tesla,
    title: "Tesla",
    subTitle: "A Cloned website",
    insights: {
      desc: `The Tesla Web Project is a visually stunning and responsive landing page inspired by Tesla's innovative brand. The project showcases a sleek design with smooth animations and an intuitive layout, highlighting Tesla's vehicles and technology. Built with modern web development practices, it provides an immersive experience that captures the essence of a cutting-edge automotive brand.`,
      category: "Web Design, Landing Page",
      techStack: [html, css, js],
      reportLink: "",
    },
    githubLink: "https://github.com/IrfanNaikwade28/Web-Project-Tesla.git",
  },
};
