import styles from "./Header.module.css"
import Carticon from '@mui/icons-material/ShoppingCart' 

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.ladoEsquerdo}>

        <img
          src="/logo.png"
          alt="logo"
          className={styles.logo}
        />

        <h1 className={styles.titulo}>
          DevSteam
        </h1>

      </div>

      <input
        type="text"
        placeholder="Buscar"
        className={styles.barraPesquisa}
      />

     <Carticon className={styles.Carticon}/>

    </header>
  )
}

export default Header