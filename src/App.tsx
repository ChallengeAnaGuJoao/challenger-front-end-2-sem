import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Header />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;