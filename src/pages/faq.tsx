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