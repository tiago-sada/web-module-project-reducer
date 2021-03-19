import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer , { initialState } from './reducers/index'
import { addOne, applyNumber, changeOperation, clearDisplay } from './actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  // const handleDigit = (e, digit) => {
  //   return dispatch(applyNumber(digit))
  // }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => dispatch(addOne())} value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => dispatch(applyNumber(1))}/>
              <CalcButton value={2} onClick={(e) => dispatch(applyNumber(2))}/>
              <CalcButton value={3} onClick={(e) => dispatch(applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => dispatch(applyNumber(4))}/>
              <CalcButton value={5} onClick={(e) => dispatch(applyNumber(5))}/>
              <CalcButton value={6} onClick={(e) => dispatch(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => dispatch(applyNumber(7))}/>
              <CalcButton value={8} onClick={(e) => dispatch(applyNumber(8))}/>
              <CalcButton value={9} onClick={(e) => dispatch(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => dispatch(changeOperation("+"))}/>
              <CalcButton value={"*"} onClick={(e) => dispatch(changeOperation("*"))}/>
              <CalcButton value={"-"} onClick={(e) => dispatch(changeOperation("-"))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={(e) => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
