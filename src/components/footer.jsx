import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
export const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full my-20">
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="nav-items w-full flex justify-center gap-5 text-white text-center text-xs font-light uppercase mt-5">
          <a href="#Home" className="nav-option cursor-pointer">
            Início
          </a>
          <a href="#Projects" className="nav-option cursor-pointer">
            Projetos
          </a>
          <a href="#About" className="nav-option cursor-pointer">
            Sobre Mim
          </a>
          {/* <a
            onClick={() => alert("Seção em Desenvolvimento")}
            className="nav-option cursor-pointer"
          >
            Experiência
          </a>
          <a
            onClick={() => alert("Seção em Desenvolvimento")}
            className="nav-option cursor-pointer"
          >
            Educação
          </a> */}
        </div>
        <div className="icons w-full flex justify-center mt-5 items-center gap-5">
          <div className="icon">
            <a
              className=""
              href="https://github.com/gabriela-albuquerque"
              target="_blank"
            >
              <img
                className="cursor-pointer hover:scale-105"
                src={github}
                alt=""
              />
            </a>
          </div>
          <div className="icon">
            <a
              className=""
              href="https://www.linkedin.com/in/gabrielabalbuquerque/"
              target="_blank"
            >
              <img
                className="cursor-pointer hover:scale-105"
                src={linkedin}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="text-white font-extralight text-xs text-center mt-5">
          <div className="title">
            ©2025 Gabriela Albuquerque. Todos os direitos reservados.
          </div>
          <div className="title">🚀Construindo realidades com código</div>
          <div className="title">Obrigada pela visita!.</div>
        </div>
      </div>
    </>
  );
};
