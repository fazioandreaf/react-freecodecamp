import React, {useState} from 'react';
import { data } from './data/data-setStateArray'
import './App.css';

function App() {
  const [value,setValue]=useState(0);
  const reset = () => {
    setValue(0);
  }
  const plus = () => {
    setTimeout(() => {
      setValue((prevState)=> {
        return  prevState + 1;
      });
    }, 2000);
  }
  return (
  <>
  <div className='container'>
    <h2>Regular Counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value - 1)}>-</button>
    <button className='btn' onClick={reset}>reset</button>
    {/* <button className='btn' onClick={()=>setValue(0)}>reset</button> */}
    <button className='btn' onClick={plus}>+</button>
  </div>
  </>
  )
}

export default App;
