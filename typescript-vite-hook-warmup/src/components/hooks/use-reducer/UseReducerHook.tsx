import React, { useReducer } from 'react'
import countReducer from './countReducer'

function UseReducerHook() {
    const [state, dispatch] = useReducer(countReducer, {
        count: 0,
        error: null
    })
  
    return (
    <div className='text-2x text-center'>UseReducerHook
        <h2 className='mt-4 text-3xl'>Count: {state.count}</h2>
        {state.error && <h3 className="text-red-700">{state.error}</h3>}
        <button onClick={() => dispatch({type: "INCREMENT"})} className='mt-6 mr-2 bg-blue-500 p-3 rounded-sm hover:bg-blue-300'>Increment Count</button>
        <button onClick={() => dispatch({type: "DECREMENT"})} className='mt-6 ml-2 bg-red-500 p-3 rounded-sm hover:bg-red-300'>Decrement Count</button>
    </div>
  )
}

export default UseReducerHook