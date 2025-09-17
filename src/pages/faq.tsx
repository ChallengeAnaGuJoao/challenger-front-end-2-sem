import { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  { 
    question: "Para que servem os testes?", 
    answer: (
      <>
        Os testes ao serem realizados vão auxiliar o paciente a ter um melhor atendimento. Se ainda não fez seus testes, faça&nbsp;
        <a href="http://localhost:5173/teste" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8" }}>
          aqui
        </a>
        <Link to="/teste">aqui</Link>
      </>
    ),
  },

  { question: "O que é preciso para participar de uma teleconsulta?", 
    answer: (
      <ul className="list-disc pl-5">
        <li className="p-1.5">Ter uma consulta agendada</li>
        <li className="p-1.5">Acesso à internet</li>
        <li className="p-1.5">Download do aplicativo Portal do Paciente HC</li>
        <li className="p-1.5">Cadastro no Portal do Paciente HC</li>
        <li className="p-1.5">Ter aceito o Termo de Consentimento pelo Portal do Paciente HC</li>
        <li className="p-1.5">Acesso a um smartphone com câmera frontal (preferencialmente) ou computador/ notebook com webcam</li>
        <li className="p-1.5">Navegador Google Chrome</li>
      </ul>
    ),
  },

  { question: "O que é preciso para uma boa teleconsulta?", 
    answer: (
      <ul className="list-disc pl-5">
        <li className="p-1.5">A câmera do seu celular ou computador deverá ser habilitada para que o profissional possa te ver.</li>
        <li className="p-1.5">Você pode solicitar ajuda a algum parente ou amigo caso tenha alguma dificuldade com tecnologia</li>
        <li className="p-1.5">O ambiente deve estar iluminado e com pouco barulho para seu médico te ver e ouvir bem</li>
      </ul>
    ),
  },

    { question: "A minha câmera precisa estar ligada?", 
    answer: (
      <>
        Em alguns tipos de consulta não é obrigatório, mas é importante o seu médico te ver para uma melhor avaliação.
      </>
    ),
  },

];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        <section className="p-[2rem] w-[70%] m-[0_auto] bg-neutral-50 rounded-[10px] shadow-[-4px_10px_34px_-1px_rgba(112,_112,_112,_0.25)]">
          <h2 className="text-center mb-[2rem] text-[2rem] font-semibold text-purple-900">Perguntas Frequentes</h2>
          <div className="mb-[1.5rem]">
            {faqs.map((faq, idx) => (
              <div className="mb-[1.5rem]" key={idx}>
                <button className="flex items-center gap-[0.8rem] w-full text-left text-[1.2rem] font-semibold text-blue-700 cursor-pointer p-[0] transition-colors duration-300 ease-in-out hover:text-blue-500"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                  <FaPlus className="text-[1.1rem] transition-transform-0.3"/>
                  {faq.question}
                </button>
                  {openIndex === idx && (
                  <p className="ml-[2rem] text-base leading-[1.5] mt-[0.5rem] bg-yellow-50 p-[0.8rem_1rem] rounded-sm">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}