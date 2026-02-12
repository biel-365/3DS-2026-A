import React from 'react'

const RedesSociais = ({url, icon}) => {
  return (
    <a href={url}>
        <ion-icon name={icon}></ion-icon>
    </a>
  )
}

export default RedesSociais
