import React, {useState, useEffect} from 'react';
import './App.css';

const url = 'https://api.github.com/users/QuincyLarso';

function App() {
  // const [text, setText] = useState('');
  const [text, setText] = useState(1);
  const [isError, setIsError] = useState(0);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  
  useEffect(()=> {
  },[]);
  
  return (
    <div className='container'>
      <h1>{firstValue}</h1>
      <h1>{text || 'John doe'}</h1>
      <h1>{text && <h1>ola</h1>}</h1>
      <h1 style={{marginBottom: 30}}>{secondValue}</h1>
      <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
    </div>
  )
}

export default App;
