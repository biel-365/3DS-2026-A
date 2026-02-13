import './App.css'
import Botoes from './components/Botoes/Botoes'
import Footer from './components/Footer/Footer'
import Perfil from './components/Perfil/Perfil'
import RedesSociais from './components/RedesSociais/RedesSociais'
import Switch from './components/Switch/Switch'

function App() {

  return (
    <div id='App'>

    <Perfil fotoPerfil={"https://placehold.co/200"}>Gabriel Lopes Aroio</Perfil>

   <Switch />
   

    <ul>
     <Botoes url={""}>Inscreva-se</Botoes>
     <Botoes url={""}>Minha Playlist</Botoes>
     <Botoes url={""}>Me Pague um Café!</Botoes>
     <Botoes url={""}>Saiba Mais do curso DEV</Botoes> 
    </ul>

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
