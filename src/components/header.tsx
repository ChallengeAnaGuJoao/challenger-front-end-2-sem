import { useState } from "react";
import { Link } from "react-router-dom";
import atende_mais from '../assets/atende+.png';

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-purple-950 shadow w-full">
            <div className=" w-full mx-auto flex item-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 min-h-[80px]">
                <img src={atende_mais} alt="Logo do projeto" className="max-w-[130px] h-auto" />

                <div className="hidden md:flex gap-5 justify-end items-center">
                    <Link to="/" className="text-yellow-100 hover:underline font-bold text-lg">Home</Link>
                    <Link to="/teste" className="text-yellow-100 hover:underline font-bold text-lg">Teste</Link>
                    <Link to="/integrantes" className="text-yellow-100 hover:underline font-bold text-lg">Integrantes</Link>
                    <Link to="/faq" className="text-yellow-100 hover:underline font-bold text-lg">FAQ</Link>
                    <Link to="/contato" className="text-yellow-100 hover:underline font-bold text-lg">Contato</Link>
                    <Link to="/login" className="text-yellow-100 hover:underline font-bold text-lg">Login</Link>
                    <Link to="/cadastrar" className="text-yellow-100 hover:underline font-bold text-lg">Cadastrar</Link>
                </div>

                <button
                    className="md:hidden text-yellow-100 focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {open && (
                <div className="md:hidden flex flex-col items-center justify-center gap-4 px-4 pb-4">
                    <Link to="/" className="text-yellow-100 hover:underline font-bold text-lg">Home</Link>
                    <Link to="/teste" className="text-yellow-100 hover:underline font-bold text-lg">Teste</Link>
                    <Link to="/integrantes" className="text-yellow-100 hover:underline font-bold text-lg">Integrantes</Link>
                    <Link to="/faq" className="text-yellow-100 hover:underline font-bold text-lg">FAQ</Link>
                    <Link to="/contato" className="text-yellow-100 hover:underline font-bold text-lg">Contato</Link>
                    <Link to="/login" className="text-yellow-100 hover:underline font-bold text-lg">Login</Link>
                    <Link to="/cadastrar" className="text-yellow-100 hover:underline font-bold text-lg">Cadastrar</Link>
                </div>
            )}
        </nav>
    );
}