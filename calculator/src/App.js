import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './state/index'

function App() {

  const account = useSelector((state ) => state.account  )
  const dispatch = useDispatch()

  const { addAmount, subtractAmount } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <p>{ account }</p>
      <button onClick={() => addAmount(1)}>ADD</button>
      <button onClick={() => subtractAmount(1)}>SUBTRACT</button>
    </div>
  );
}

export default App;
