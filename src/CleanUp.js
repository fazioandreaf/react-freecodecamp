import React, {useState, useEffect} from 'react';
import './App.css';
// every trigger rerender the component and relunch the UseEffect
function App() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth)
  }
    useEffect(()=> {
      window.addEventListener('resize',checkSize)
      return () => {
        window.removeEventListener('resize', checkSize)
      }
    },[]);
  // }
  return (
  <>
    <div className='container'>
      <h1>UseEffect Cleanup</h1>
      <h2>{size}</h2>
      <button className='btn' onClick={() => { setSize ( window.innerWidth) }}>+</button>
    </div>

  </>
  )
}

export default App;
