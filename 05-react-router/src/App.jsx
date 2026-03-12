import { Route, Routes } from "react-router";
import "./App.css";

import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes> {/* Aqui vai guardar todas as rotas do sistema*/}
        <Route path="/sobre" element={<Sobre />} /> {/*Uma das rotas do sistema*/}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
