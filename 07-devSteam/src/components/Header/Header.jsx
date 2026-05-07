import style from "./Header.module.css"
import Carticon from '@mui/icons-material/ShoppingCart' 

const Header = () => {
  return (
    <header className={style.header}>

      <div className={style.ladoEsquerdo}>

        <img
          src="/logo.png"
          alt="logo"
          className={style.logo}
        />

        <h1 className={style.titulo}>
          DevSteam
        </h1>

      </div>

      <input
        type="text"
        placeholder="Buscar"
        className={style.barraPesquisa}
      />

    <div className={style.cartIcon}>
      <Carticon sx={{ fontSize: 45 }} />
    </div>

    </header>
  )
}

export default Header