import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";
import { Loading } from "./components/loading";
import { NotFound } from "./pages/not-found";


const Home = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Home }))
);

const Teste = lazy(() =>
  import("./pages/teste").then((m) => ({ default: m.Teste }))
);

const Integrantes = lazy(() =>
  import("./pages/integrantes").then((m) => ({ default: m.Integrantes }))
);

const Faq = lazy(() =>
  import("./pages/faq").then((m) => ({ default: m.Faq }))
);

const Contato = lazy(() =>
  import("./pages/contato").then((m) => ({ default: m.Contato }))
);

const Login = lazy(() =>
  import("./pages/login").then((m) => ({ default: m.Login }))
);

const SignUp = lazy(() =>
  import("./pages/SignUp").then((m) => ({ default: m.SignUp }))
);

const About = lazy(() =>
  import("./pages/about").then((m) => ({ default: m.About }))
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/cadastrar" element={<SignUp />} />
            <Route path="/faq/:id?" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;