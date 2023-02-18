import { useState } from 'react'
import './App.css'
import Game from './Game'
import Menu from './Menu';

function App() {

  const [scene, setScene] = useState('menu');

  function startGame() {
    setScene('game');
  }

  function gameOver() {
    setScene('gameover');
  }

  
  if(scene === 'game') return <Game />
  else return <Menu startGame={startGame}/>
}

export default App
