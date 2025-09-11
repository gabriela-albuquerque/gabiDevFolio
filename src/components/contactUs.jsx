import { motion } from "motion/react";
import { useState } from "react";
import msgIcon from "../assets/icons/mail.png";
import { Footer } from "./footer";
import { supabase } from "../supabaseClient";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const { error } = await supabase.from("contatos").insert([formData]);

      if (error) {
        throw error;
      }

      setStatus("Mensagem enviada!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Erro:", error);
      setStatus("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <>
      <div id="Contact" className="mt-20">
        <div className="project-title text-7xl md:text-9xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex items-center justify-center">
          <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
          <div className="z-30 animate-pulse flex flex-col gap-y-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Entre
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              em
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="will-change-transform will-change-opacity"
            >
              Contato
            </motion.div>
          </div>
        </div>
        <div className="form md:h-screen py-10 px-3 flex max-md:flex-col mt-10 gap-5">
          <div className="illustration w-full flex justify-center items-center h-1/4 md:h-full">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="w-3/4 max-md:max-w-[20rem] md:w-[30rem]"
              src={msgIcon}
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 py-10 px-3 w-full items-center h-screen md:h-full rounded-xl"
          >
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu Email"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                autoComplete="off"
                className="bg-transparent border-color2 border-b py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
              />
            </div>
            <div className="input-name w-full md:w-3/4">
              <motion.textarea
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                rows={5}
                autoComplete="off"
                className="bg-transparent border-color2 border-b rounded-none py-2 px-3 w-full placeholder:text-color2/60 pl-3 focus:outline-none text-color2 resize-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem"
              />
            </div>
            <button
              type="submit"
              className="bg-color2 text-color3 hover:bg-color2/80 hover:scale-105 transition duration-200 rounded-xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-wide self-center md:w-[15rem]"
            >
              {status === "Enviando..." ? "Enviando..." : "Enviar"}
            </button>
            <p className="text-color2 text-xs">{status}</p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
