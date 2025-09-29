import { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  { 
    question: "O que é o sistema Atende+ ?", 
    answer: (
      <>
        O Atende+ é uma plataforma digital desenvolvida para auxiliar pacientes do IMREA-HCFMUSP a se prepararem para teleatendimentos, permitindo testes de internet, câmera e microfone, além de oferecer suporte automatizado via chatbot. Faça seus 
        <Link className="text-blue-700" to="/teste"> testes. </Link>
      </>
    ),
  },

  { question: "Preciso me cadastrar para usar o Atende+ ?", 
    answer: (
      <>
        Sim, é necessário realizar um cadastro simples para acessar todas as funcionalidades do sistema, garantindo a segurança e o acompanhamento do seu atendimento.
      </>
    ),
  },

  { question: "Como faço para testar minha internet, câmera e microfone ?", 
    answer: (
      <>
        Após fazer login, basta acessar a opção “Faça seus testes agora” no menu principal. O sistema irá guiá-lo para testar cada recurso do seu dispositivo de forma simples e rápida.
      </>
    ),
  },

    { question: "O que acontece se algum teste apresentar problema ?", 
    answer: (
      <>
        Se algum teste identificar um problema técnico, você será automaticamente direcionado para conversar com o chatbot, que irá orientá-lo com soluções passo a passo.
      </>
    ),
  },
  
    { question: "O chatbot pode resolver todos os problemas técnicos ?", 
    answer: (
      <>
        O chatbot está preparado para resolver a maioria dos problemas comuns. Caso o problema persista, ele irá orientá-lo a entrar em contato com o suporte humano do IMREA.
      </>
    ),
  },

    { question: "Preciso pagar para usar o Atende+ ?", 
    answer: (
      <>
        Não. O uso do Atende+ é totalmente gratuito para os pacientes do IMREA-HCFMUSP.
      </>
    ),
  },

    { question: "Meus dados estão seguros na plataforma ?", 
    answer: (
      <>
        Sim. O Atende+ segue todas as normas de segurança e privacidade de dados, conforme a LGPD, garantindo a proteção das suas informações.
      </>
    ),
  },

    { question: "Posso acessar o Atende+ de qualquer dispositivo ?", 
    answer: (
      <>
        Sim. O sistema é compatível com computadores, tablets e smartphones, funcionando nos principais navegadores de internet.
      </>
    ),
  },

    { question: "O que devo fazer se esquecer minha senha ?", 
    answer: (
      <>
        Na tela de login, clique em “Esqueci minha senha” e siga as instruções para redefinir seu acesso de forma segura.
      </>
    ),
  },

];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="my-8 sm:my-12 md:my-16 flex flex-col items-center min-h-[60vh]">
        <section className="px-4 py-6
            sm:px-6 sm:py-8
            md:px-8 md:py-10
            lg:px-12 lg:py-12
            xl:px-16 xl:py-14
            w-full
            max-w-[98vw]
            sm:max-w-[90vw]
            md:max-w-[80vw]
            lg:max-w-[60vw]
            xl:max-w-[50vw]
            mx-auto
            bg-neutral-50
            rounded-[10px]
            shadow-[-4px_10px_34px_-1px_rgba(112,_112,_112,_0.25)]
            transition-all">
          <h2 className="text-center mb-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-900">Perguntas Frequentes</h2>
          <div className="mb-6">
            {faqs.map((faq, idx) => (
              <div className="mb-6" key={idx}>
                <button className="flex items-center gap-2 w-full text-left
                    text-base sm:text-lg md:text-xl
                    font-semibold text-blue-700 cursor-pointer p-0
                    transition-colors duration-300 ease-in-out hover:text-blue-500"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)} aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}>
                  <FaPlus 
                    size={16}
                    className={`
                      flex-shrink-0
                      text-lg
                      transition-transform duration-300
                      ${openIndex === idx ? "rotate-45 text-blue-600" : ""}
                    `}
                  />
                  {faq.question}
                </button>
                {openIndex === idx && (
                  <p 
                    id={`faq-answer-${idx}`}
                    className="
                      ml-4 sm:ml-6 md:ml-8
                      text-sm sm:text-base
                      leading-relaxed mt-2
                      bg-yellow-50 p-3 sm:p-4 rounded-sm
                      transition-all
                    "
                  >
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