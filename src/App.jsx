import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Row from './components/Row'

function isLetter(str) {
  return str.length === 1 && !!str.match(/[a-z]/i);
}


function App() {
  const [words, setWords] = useState(["", "", "", "", "", ""]);
  const [status, setStatus] = useState([[], [], [], [], [], []]);
  const [currentGuess, setCurrentGuess] = useState(0);
  let choice = 'hello';
  const input = useRef(null);
  
  function handleKeyPress(e) {
    if(isLetter(e.key) && words[currentGuess].length < 5) {
      setWords(words.map((word, index) => index === currentGuess ? word + e.key.toLowerCase() : word));
    }
    if(e.key === 'Backspace') {
      setWords(words.map((word, index) => index === currentGuess ? word.slice(0, word.length - 1) : word));
    }
    if(e.key === 'Enter') {
      handleSubmit();
    }
  }

  function handleSubmit() {
    if(words[currentGuess].length === 5) {
      const score = check();
      console.log(score);
      if(currentGuess < 5) setCurrentGuess(currentGuess + 1);
      input.current.value = '';
    }
  }
  
  function check() {
    let sum = 0;
    let stat = [0, 0, 0, 0, 0];
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
        if(words[currentGuess][i] === choice[j]) {
          if(i === j) {
            stat[i] = 2;
            break;
          }
          stat[i] = 1;
        }
      }
      sum += stat[i];
    }

    setStatus(status.map((current, index) => index === currentGuess ? stat : current));
    return sum;
  }

  function handleFocus(){
    input.current.focus()
  }

  useEffect(() => {
    handleFocus();
  }, [])


  return (
    <div className="flex gap vert">
      <input type='text' onBlur={handleFocus} ref={input} className='' onKeyDown={handleKeyPress} value={words[currentGuess]} onChange={() => {}} />
      {words.map((word, index) => {
        return <Row word={word} key={index} status={status[index]} />
      })}
    </div>
  )
}

export default App
