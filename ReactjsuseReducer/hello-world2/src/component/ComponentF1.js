import React, { useContext } from "react";
import { CountContext } from "../App";

// useReducer with useContext - https://www.youtube.com/watch?v=BCD2irXaVoE

function ComponentF1(){
    const countContext=useContext(CountContext)
    return(
        <div>
            ComponentF1 - {countContext.countState}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            
        </div>
    )
}

export default ComponentF1