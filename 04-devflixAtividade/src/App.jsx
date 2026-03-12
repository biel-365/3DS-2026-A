import { useEffect, useState } from "react";
import "./App.css";

import solzinho from "./assets/solzinho.png";
import luazinha from "./assets/luazinha.png";

import logo from "./assets/Bielflix certo.png";
import lupa from "./assets/search.svg";

import Footer from "./components/Footer/Footer";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //Alimentando a variavel movies
    setMovies(data.Search);
  };

  useEffect(() => {
    (async () => {
      await searchMovies("Avengers"); // a pesquisa real do site dos filmes e séries
    })();
  }, []);

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

  return (
    <div id="App">
    
    <div className="top-gradient"></div>

   <div className="theme-toggle" onClick={toggleTheme}>
  <div className={`toggle-track ${theme}`}>
    <div className="toggle-thumb">
      <img
        src={theme === "light" ? solzinho : luazinha}
        alt="Tema"
        className="theme-icon"
      />
    </div>
  </div>
</div>

      <img
        id="Logo"
        src={logo}
        alt="Logotipo do serviço de streaming Devflix, com letras vermelhas e fundo preto, promovendo conteúdo de séries, filmes e entretenimento online."
      />

      <div className="search">
        <input
          onKeyDown={(pesquisou) =>
            pesquisou.key === "Enter" && searchMovies(search)
          }
          onChange={(pesquisou) => setSearch(pesquisou.target.value)}
          type="text"
          placeholder="Pesquise por um filme ou série..."
        />
        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="Botão de ação para pesquisa!"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😡 Puxa vida... Cadê o filme??? 💔</h2>
      )}

      <Footer link={"https://github.com/biel-365"}>Gabriel Lopes Aroio</Footer>
    </div>
  );
};

export default App;
