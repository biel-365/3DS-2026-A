import { useState } from "react";
import "./App.css";
import Logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Footer from "./components/Footer/Footer";

const App = () => {

 const [filmes] = useState([
    {
      id: 1,
      titulo: "Série JavaScript",
      sinopse: "Aprenda JavaScript do zero",
      genero: "Educação",
      duracao: 120,
      imagem: ""
    },
    {
      id: 2,
      titulo: "React Avançado",
      sinopse: "Domine React em produção",
      genero: "Educação",
      duracao: 180,
      imagem: ""
    },
    {
      id: 3,
      titulo: "Web Design Moderno",
      sinopse: "Crie interfaces incríveis",
      genero: "Design",
      duracao: 90,
      imagem: ""
    }
  ]);


  return (
    <div id="App">
      <img
        id="Logo"
        src={Logo}
        alt="Logo da Netflix com fundo preto e destaque vermelho para a palavra DEVFLIX, enfatizando a marca de streaming de filmes e séries."
      ></img>

      <div className="search">
        <input
          type="text"
          placeholder="Insira o nome de um filme ou uma série..."
        />
        <img src={lupa} alt="botão de ação para pesquisa!"></img>
      </div>

    <>
    {filmes.map((filme, index) => (
      <div key={index}>
        <h2>{filme.titulo}</h2>
        <h3>{filme.duracao}</h3>
        <h4>{filme.sinopse}</h4>
        <br />
        <br />
      </div>
    ))}
    </>


      <Footer link={"https://github.com/biel-365"}>Gabriel Lopes Aroio</Footer>
    </div>
  );
};

export default App;
