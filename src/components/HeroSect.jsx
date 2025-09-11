/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/Hero-illustration.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";
export const HeroSect = () => {
  const [word, setWord] = useState("projetos Frontend");
  const words = ["projetos Frontend", "interações fluidas", "código eficiente"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div id="Home" className="flex justify-center">
        <div className="hero-section w-full h-[80vh] flex justify-between relative max-w-[60rem]">
          <div className="heroText h-full w-full z-30 flex flex-col md:justify-center">
            <div className="flex flex-col text-white pl-5 tracking-wide md:gap-1">
              <span className="font-semibold text-2xl md:text-4xl">
                Oi! Eu sou Gabriela,
              </span>
              <span className="font-semibold text-2xl md:text-4xl flex ">
                Eu crio&nbsp;
                <motion.span
                  key={word}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="bg-fontBlue text-transparent bg-clip-text overflow-hidden mr-1 will-change-transform will-change-opacity whitespace-nowrap"
                >
                  {word}
                </motion.span>
                <motion.span
                  className="h-full w-[1px] bg-fontBlue whileInView-pulse"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[#989898] font-normal text-[10px] md:text-sm md:w-[50%]"
              >
                Frontend que une código, criatividade e tecnologia para dar vida
                a projetos.
              </motion.span>
            </div>
            <div className="buttons max-sm:absolute bottom-10 w-full flex max-md:flex-col text-white gap-3 text-[10px] tracking-widest pl-4 md:pl-5 mt-5">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href="#Projects"
              >
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-color1 hover:bg-color1Hover w-[12rem] rounded-3xl uppercase text-center font-semibold cursor-pointer py-2"
                >
                  Explore Projetos
                </motion.button>
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href="#Contact"
              >
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-[12rem] uppercase text-center font-semibold cursor-pointer py-2"
                >
                  Entre em contato
                </motion.button>
              </motion.a>
            </div>
            <div className="social-icons w-20 flex justify-center items-center gap-3 h-10 mt-5 ml-5">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=""
                href="https://www.linkedin.com/in/gabrielabalbuquerque/"
                target="_blank"
              >
                <img
                  className="w-7 cursor-pointer hover:scale-125 duration-100 transition-all"
                  src={linkedin}
                  alt=""
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className=""
                href="https://github.com/gabriela-albuquerque"
                target="_blank"
              >
                <img
                  className="w-9 cursor-pointer hover:scale-125 transition-all"
                  src={github}
                  alt=""
                />
              </motion.a>
            </div>
          </div>
          <div className="heroIllustration flex flex-col items-center w-full h-full absolute">
            <motion.img
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="min-w-[20rem] max-sm:w-[25rem] absolute top-10 md:-top-24 sm:-top-10 -right-10 md:w-2/3 md:-right-20 will-change-transform will-change-opacity"
              src={heroIllustration}
              alt=""
            />
            <div className="absolute bottom-[9rem] md:bottom-[4.25rem]">
              <div className="scroll-icon">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-5"
                  src={scrollIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
