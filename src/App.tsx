import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home";
import { Integrantes } from "./pages/integrantes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="/integrantes" element={<Integrantes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;