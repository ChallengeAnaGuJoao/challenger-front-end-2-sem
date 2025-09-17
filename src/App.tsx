import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home";
import { Integrantes } from "./pages/integrantes";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/login";
import { Faq } from "./pages/faq";




function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;