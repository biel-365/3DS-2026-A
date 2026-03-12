import { Route, Routes } from "react-router";
import "./App.css";

import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import NaoEncontrado from "./pages/NaoEncontrado";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="layout">
      <Header />

      <main className="content">
        <Routes> {/* Aqui vai guardar todas as rotas do sistema*/}
          <Route path="/" element={<Home />} /> {/*Uma das rotas do sistema e o / sozinho indica que vai começar nele, por isso não precisa por Home*/}
          <Route path="/sobre" element={<Sobre />} /> {/*Uma das rotas do sistema*/}
          <Route path="/contato" element={<Contato />} /> {/*Uma das rotas do sistema*/}
          <Route path="*" element={<NaoEncontrado />} /> {/*Uma das rotas do sistema*/}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;