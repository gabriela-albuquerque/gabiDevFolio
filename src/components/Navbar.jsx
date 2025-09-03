import logo from "../assets/icons/logo_esmaecido2.png";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex w-full justify-center">
        <nav className="flex h-[20vh] w-full justify-between px-5 py-10 max-w-[60rem]">
          <div className="logo">
            <img className="w-24 md:w-28" src={logo} alt="" />
          </div>
          <div onClick={() => setToggle(!toggle)} className="menu md:hidden">
            <img className="w-8" src={menu} alt="" />
          </div>
          <div className="menu-items hidden md:flex gap-8 text-xs text-white uppercase z-30">
            <a
              href="#Home"
              className="menu-item cursor-pointer hover:text-white/60"
            >
              Início
            </a>
            <a
              href="#Projects"
              className="menu-item cursor-pointer hover:text-white/60"
            >
              Projetos
            </a>
            <a
              href="#About"
              className="menu-item cursor-pointer hover:text-white/60"
            >
              Sobre mim
            </a>
            <a href="" className="menu-item cursor-pointer hover:text-white/60">
              Experiência
            </a>
            <a href="" className="menu-item cursor-pointer hover:text-white/60">
              Educação
            </a>
          </div>
        </nav>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col items-center fixed top-0 w-full h-screen rounded-md bg-black/30 z-50 backdrop-blur-md gap-y-20`}
      >
        <div className="close">
          <img
            onClick={() => setToggle(!toggle)}
            className="w-10 absolute right-4 top-8"
            src={close}
            alt=""
          />
        </div>
        <div className="text text-white uppercase text-3xl font-extralight flex flex-col gap-10 h-full">
          <a
            onClick={() => setToggle(!toggle)}
            href="#Home"
            className="menu-item cursor-pointer"
          >
            Início
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#Projects"
            className="menu-item cursor-pointer"
          >
            Projetos
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#About"
            className="menu-item cursor-pointer"
          >
            Sobre mim
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#"
            className="menu-item cursor-pointer"
          >
            Experiência
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#"
            className="menu-item cursor-pointer"
          >
            Educação
          </a>
          <a
            onClick={() => setToggle(!toggle)}
            href="#Contact"
            className="buttons w-full flex flex-col items-center text-white mt-3 gap-3 text-[11px] tracking-widest"
          >
            <button className="text-[#80FFD2] border-2 border-[#80FFD2] hover:bg-[#80FFD2] hover:text-[#161B23] rounded-3xl w-[70vw] py-2 uppercase text-center font-semibold cursor-pointer">
              Entrar em Contato
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
