import React, { Children } from 'react'

const Footer = ({children}) => {
  return (
    <footer>
      <p>
        Feito com amor por <a href='https://github.com'>{children}</a>
      </p>
    </footer>
  )
}

export default Footer