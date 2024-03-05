import logo from './logo.svg';
import './App.css';
import React,{useReducer} from 'react'
import ComponentA1 from './component/ComponentA1';
import ComponentB1 from './component/ComponentB1';
import ComponentC1 from './component/ComponentC1';

// ReactJS Playlist - https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&pp=iAQB

// useReducer with useContext - https://www.youtube.com/watch?v=BCD2irXaVoE



export const CountContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      <h5>Below Count Operations done using useReducer with useContext, Refer ComponentA1, ComponentB1, ComponentC1, ComponentD1, ComponentE1, ComponentF1 & App.js for coding</h5>
      Count - {count}
      <ComponentA1/>
      <ComponentB1/>
      <ComponentC1/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
