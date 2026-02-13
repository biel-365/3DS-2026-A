import React from 'react'
import styles from "./Perfil.module.css"

const Perfil = ({children, fotoPerfil}) => {
  return (
    <div>
      <div className={styles.Perfil}>
      <img src={fotoPerfil} alt=""/>
      <p> @{children} </p>
    </div>
    </div>
  )
}

export default Perfil
 