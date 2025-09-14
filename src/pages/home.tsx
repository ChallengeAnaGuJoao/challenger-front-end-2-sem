import hospitalImg from '../assets/hospital-family-visit-animate.svg';
import { Header } from '../components/header';

export function Home() {
    return(
        <>
            <Header/>
            <main>
                <section className='flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] bg-[#f7f8fa] px-8 py-12'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
                        <div>
                            <h2 className="font-extrabold text-4xl md:text-6xl text-[#551c41] mb-6">Bem-vindo ao Atende+</h2>
                            <p className='text-lg md:text-xl text-[#2d2d2d] mb-8 max-w-xl'>
                                Uma solução moderna para te auxiliar da melhor forma em seu atendimento.
                            </p>
                            <button className="bg-[#0b3d2e] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#145c43] transition">
                                Faça seus testes
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0'>
                        <img src={hospitalImg} alt="Hospital moderno" className="w-full max-w-[500px] h-auto" />
                    </div>
                </section>
            </main>
        </>
    )
}