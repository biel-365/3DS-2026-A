import Header from "./components/Header/Header";
import GameCardPrincipal from "./components/GameCardPrincipal/GameCardPrincipal";
import "./App.css";
import GameCardSegundario from "./components/GameCardSegundario/GameCardSegundario";

function App() {
  return (
    <>
      <Header />

      <div className="App">
        <div>
          <div className="Titulo">
            PROMOÇÕES
          </div>
          <div className="Cards">
            <GameCardPrincipal />
            <GameCardPrincipal />
            <GameCardPrincipal />
          </div>
        </div>

        <div>
          <div className="Titulo">
            OUTROS JOGOS
          </div>
          
          <GameCardSegundario />
          <GameCardSegundario />
          <GameCardSegundario />
          <GameCardSegundario />
            
        </div>
      </div>
    </>
  );
}

export default App;
