import React, { Children } from 'react'
import "./Footer.module.css"

const Footer = ({children}) => {
  return (
    <footer>
      <p>
        Feito com 💖 por <a href='https://github.com'>{children}</a>
      </p>
    </footer>
  )
}

export default Footer