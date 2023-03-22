import './App.css';
import Die from './Die'
import React, {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import ReactConfetti from 'react-confetti';

function App() {

  function generateNewDye(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }


  function allNewDice(){
      const newArray = []
      for(let i = 0; i < 20; i++){
        newArray.push(generateNewDye())
      }
    return newArray
  }

  

  const [dieNum, setDieNums] = useState(allNewDice())

  function holdDie(id){
    setDieNums(oldDieNum => oldDieNum.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }


  const allDyesElements = dieNum.map(item => {  
    return <Die holdDie={holdDie} isHeld={item.isHeld} id={item.id} value={item.value} key={item.id} />
  })


  function rollDye(){
    setDieNums(oldDieNum => oldDieNum.map(die => {
      return die.isHeld ? die : generateNewDye()
    }))
  }

  const [tenzies, setTenzies] = useState(true)

  useEffect(() => {
    const allHeld = dieNum.every(die => die.isHeld)
    const firstValue = dieNum[0].value
    const allValues = dieNum.every(die => die.value === firstValue)
    if(allValues && allHeld){
      setTenzies(true)
    }
  },[dieNum])

  function reiniciar(){
    setTenzies(false)
    setDieNums(allNewDice())
  }

  return (
    <main className="container">
      <h1 className='title'>TENZIE!</h1>
      <div className='div'>
        <div className="display-div">
          {allDyesElements}
        </div>
      </div>
      <button className='btn' onClick={rollDye} type='button'>ROLL!!!</button>
      <div className='win'>
        {tenzies && <h3 class="animate-charcter top">You Win!</h3>}
        {tenzies && <h3 class="animate-charcter bottom">Congratulations!</h3>}
      </div>
      {tenzies && <button type='button' className='btn-reiniciar' onClick={reiniciar}>JOGAR NOVAMENTE</button>}
      {tenzies && <ReactConfetti />}
    </main>
  );
}

export default App;
