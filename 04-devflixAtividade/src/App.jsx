import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/Design_sem_nome-removebg-preview.png";
import lupa from "./assets/search.svg";

import Footer from "./components/Footer/Footer";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <div id="App">
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
