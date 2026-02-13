import React from 'react'
import styles from "./Botoes.module.css"

const Botoes = ({url, children}) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  )
}

export default Botoes
