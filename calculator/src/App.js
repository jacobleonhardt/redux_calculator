import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './state/index'

function App() {

  const account = useSelector((state ) => state.account  )
  const dispatch = useDispatch()

  const { addAmount, subtractAmount, multiplyAmount, divideAmount, resetAmount } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{ account }</h1>
      <button onClick={() => addAmount(1)}>ADD</button>
      <button onClick={() => subtractAmount(1)}>SUBTRACT</button>
      <button onClick={() => multiplyAmount(2)}>DOUBLE</button>
      <button onClick={() => divideAmount(2)}>HALF</button>
      <button onClick={() => resetAmount()}>RESET</button>
    </div>
  );
}

export default App;
