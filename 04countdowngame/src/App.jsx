import { useState } from 'react'
import './App.css'
import Players from './Components/Players'
import TimerChallenge from './Components/TimerChallenge'

function App() {

  return (
    <>
      <h2>  </h2>
      <Players/>
      <div id="challenges">
        <TimerChallenge  title='Easy' targetTime={1}/>
        <TimerChallenge title='Not Easy' targetTime={5} />
        <TimerChallenge title='Getting tough' targetTime={10} />
        <TimerChallenge title='Pros only' targetTime={15}/>
      </div>
    </>
  )
}

export default App
