import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home";
import { Integrantes } from "./pages/integrantes";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/login";
import { Contato } from "./pages/contato";
import { Teste } from "./pages/teste";
import { Faq } from "./pages/faq";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/cadastrar" element={<SignUp />} />
          <Route path="/faq/:id?" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/teste" element={<Teste />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;