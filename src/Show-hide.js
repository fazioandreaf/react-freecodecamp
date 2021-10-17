import React, {useState, useEffect} from 'react';
import './App.css';

const url = 'https://api.github.com/users/QuincyLarso';

function App() {
  const [show, setShow] = useState(0);

  useEffect(()=> {
  },[]);
  
  return (
    <div className='container'>
      <h1>Show/Hide</h1>
      <button className='btn' onClick={()=>setShow(!show)}>Show/Hide</button>
      {show && <Item />}
    </div>
  )
}

const Item = () => {
  const [size,setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',checkSize)
    return () => window.removeEventListener('resize', checkSize)

  },[])

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>window</h1>
      <h1>size: {size}</h1>
    </div>
  )
}

export default App;
