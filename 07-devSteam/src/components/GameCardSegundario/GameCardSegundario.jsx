import style from './GameCardSegundario.module.css'

const GameCardHorizontal = () => {
  return (
    <div className={style.GameCard}>
      <img src='https://placehold.co/400x400' className={style.ImgGame} alt="Capa do Jogo" />
      
      <div className={style.Infos}>
        <div className={style.Textos}>
          <h2 className={style.Nome}>Nome Do Jogo</h2>
          <p className={style.Tags}>Tags</p>
        </div>

        <div className={style.Valores}>
          <div className={style.Preco}>
            R$ 99,90
          </div>
          <button className={style.AddCart}>ADICIONAR AO CARRINHO</button>
        </div>
      </div>
    </div>
  )
}

export default GameCardHorizontal