import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div id="App">
      <img
        className="logo"
        src={logo}
        alt="Logo da Netflix com fundo preto e destaque vermelho para a palavra DEVFLIX, enfatizando a marca de streaming de filmes e séries."
      ></img>

      <div className="search">
        <input
          type="text"
          placeholder="Insira o nome de um filme ou uma série..."
        />
        <img src={lupa} alt="botão de ação para pesquisa!"></img>
      </div>

      <Footer link={"https://github.com/biel-365"}>Gabriel Lopes Aroio</Footer>
    </div>
  );
};

export default App;
