import { useState } from 'react'
import './App.css'
import Botoes from './components/Botoes/Botoes'
import Footer from './components/Footer/Footer'
import Perfil from './components/Perfil/Perfil'
import RedesSociais from './components/RedesSociais/RedesSociais'
import Switch from './components/Switch/Switch'
import accelerator from "./assets/CJtnHVR5.jpg";

function App() {

  const[IsLight,setIsLight] = useState(true)

  const troca = () => {
    setIsLight(!IsLight);
  };

  return (

    <div id='App' className={IsLight ? "light" : ""}>

    <Perfil fotoPerfil={accelerator}>Gabriel Lopes Aroio</Perfil>


   <Switch troca={troca} isLight={IsLight} />

    <div id="Botoes">
    <ul>
     <Botoes url={"https://www.youtube.com/@Biel_365"}>Inscreva-se</Botoes>
     <Botoes url={"https://www.roblox.com/pt/users/866990816/profile"}>Roblox</Botoes>
     <Botoes url={"https://chatgpt.com/"}>Chat GPT</Botoes>
     <Botoes url={"https://discord.com/"}>Discord</Botoes> 
    </ul>
    </div>

    <div id="RedesSociais">
      <RedesSociais url={"https://github.com"} icon={"logo-github"}></RedesSociais>
      <RedesSociais url={"https://youtube.com"} icon={"logo-youtube"}></RedesSociais>
      <RedesSociais url={"https://br.linkedin.com/"} icon={"logo-linkedin"}></RedesSociais>
      <RedesSociais url={"https://instagram.com"} icon={"logo-instagram"}></RedesSociais>
    </div>
    

    <Footer> Gabriel Lopes Aroio </Footer>
    </div>
  )
}

export default App
