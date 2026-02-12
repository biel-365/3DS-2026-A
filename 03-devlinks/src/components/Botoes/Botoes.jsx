import React from 'react'

const Botoes = ({url, children}) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  )
}

export default Botoes
