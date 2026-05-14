import style from './GameCardSegundario.module.css'

const GameCardHorizontal = (props) => {
  return (
    <div className={style.GameCard}>

      <div className="row g-0 w-100">

        <div className="col-12 col-md-4">
          <img
            src={props.imagem}
            className={style.ImgGame}
            alt="Capa do Jogo"
          />
        </div>

        <div className="col-12 col-md-8">
          <div className={style.Infos}>

            <div>
              <h2 className={style.Nome}>{props.titulo}</h2>
              <p className={style.Tags}>{props.categoria}</p>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

              <div className={style.Preco}>
                R$ {props.preco}
              </div>

              <button className={style.AddCart}>
                ADICIONAR AO CARRINHO
              </button>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default GameCardHorizontal