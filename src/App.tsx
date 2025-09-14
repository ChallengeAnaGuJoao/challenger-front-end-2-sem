import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer/>}>
          <Route index element={<Footer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;