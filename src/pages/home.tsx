import hospitalImg from "../assets/hospital-family-visit-animate.svg";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-around min-h-[80vh] bg-[#f7f8fa] px-4 md:px-30 py-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <div>
              <h2 className="font-extrabold text-4xl md:text-6xl text-[#551c41] mb-6">
                Bem-vindo ao Atende+
              </h2>
              <p className="text-lg md:text-xl text-[#2d2d2d] mb-8 max-w-xl">
                Uma solução moderna que utiliza inteligência artificial e testes
                interativos para garantir que você tenha uma experiência de
                atendimento simples, segura e eficiente.
              </p>
              <Link
                to="/teste"
                className="bg-[#0b3d2e] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#145c43] transition"
              >
                Faça seus testes agora
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <img
              src={hospitalImg}
              alt="Hospital moderno"
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="bg-white px-8 py-16">
          <h3 className="text-3xl font-bold text-center text-[#551c41] mb-12">
            O que você encontra no Atende+
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#f7f8fa] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#0b3d2e] mb-3">
                Previsão de Faltas
              </h4>
              <p className="text-[#2d2d2d]">
                Nosso algoritmo analisa os dados de cadastro do paciente e
                indica se existe tendência de ausência, permitindo que a equipe
                esteja preparada com antecedência.
              </p>
            </div>
            <div className="bg-[#f7f8fa] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#0b3d2e] mb-3">
                Testes Interativos
              </h4>
              <p className="text-[#2d2d2d]">
                Conectividade, câmera e microfone são avaliados em poucos
                segundos, registrando resultados que ajudam a melhorar o suporte
                ao paciente.
              </p>
            </div>
            <div className="bg-[#f7f8fa] p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[#0b3d2e] mb-3">
                Suporte Personalizado
              </h4>
              <p className="text-[#2d2d2d]">
                Se for identificado algum obstáculo durante os testes, a equipe
                de atendimento recebe um relatório para oferecer suporte
                individualizado.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-[#f7f8fa] px-8 py-16">
          <h3 className="text-3xl font-bold text-center text-[#551c41] mb-12">
            Por que usar o Atende+?
          </h3>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-[#0b3d2e] mb-4">
                Mais segurança e confiança
              </h4>
              <p className="text-[#2d2d2d] mb-6">
                O Atende+ garante que cada paciente esteja pronto para sua
                consulta online. Com os testes de conexão e dispositivos, você
                evita falhas técnicas no momento mais importante.
              </p>

              <h4 className="text-2xl font-semibold text-[#0b3d2e] mb-4">
                Decisões baseadas em dados
              </h4>
              <p className="text-[#2d2d2d] mb-6">
                Nosso sistema não apenas coleta informações, mas gera
                indicadores que ajudam a identificar quem pode precisar de maior
                suporte, reduzindo riscos e aumentando a eficiência.
              </p>

              <h4 className="text-2xl font-semibold text-[#0b3d2e] mb-4">
                Experiência simplificada
              </h4>
              <p className="text-[#2d2d2d]">
                Tudo em um só lugar: cadastro, testes e acesso à consulta. Você
                economiza tempo, evita frustrações e tem clareza em cada etapa
                do processo.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={hospitalImg}
                alt="Paciente usando sistema digital"
                className="w-full max-w-[450px]"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
