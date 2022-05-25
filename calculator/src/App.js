import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './state/index'

function App() {

  const account = useSelector((state ) => state.account  )
  const dispatch = useDispatch()

  const { addAmount, subtractAmount, multiplyAmount, divideAmount, resetAmount } = bindActionCreators(actionCreators, dispatch)

  const checkForNegative = account < 0 ? "App__total__negative" : "App__total"

  return (
    <div className="App">
      <h1 className={checkForNegative}>{ account }</h1>
      <div className='App__buttons' >
        <button onClick={() => addAmount(1)}>ADD</button>
        <button onClick={() => subtractAmount(1)}>SUBTRACT</button>
        <button onClick={() => multiplyAmount(2)}>DOUBLE</button>
        <button onClick={() => divideAmount(2)}>HALF</button>
      </div>
      <div className='App__button-reset'>
        <button onClick={() => resetAmount()}>RESET</button>
      </div>
    </div>
  );
}

export default App;
