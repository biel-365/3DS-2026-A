import './App.css'
import Perfil from './components/Perfil/Perfil'

function App() {

  return (
    <div id='App'>

    <Perfil />


    <div className='perfil'>
      <img src="https://placehold.co/200x200" alt=""/>
      <p> @Seu Nome </p>
    </div>
    <div className='switch'>
      Botão Switch
    </div>
    <div className='botoes'></div>
    <div className='redes-sociais'></div>
    <div className='footer'></div>
    </div>
  )
}

export default App
