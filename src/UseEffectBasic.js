import React, {useState, useEffect} from 'react';
import './App.css';
// every trigger rerender the component and relunch the UseEffect
function App() {
  const [value, setValue] = useState(0);
  // WE CAN T CALL hooks conditionaly
  // if(value>0){
    useEffect(()=> {
      console.log('inside use effect');
      // change the title of the page
      if(value>=1){
        document.title = `New Messages (${value})`
      }
      // this is a dependency arraym he triger the useeffect when the 'value' change its state
    }, [value]);
  // }
    console.log('outside use effect');
  return (
  <>
    <div className='container'>
      <h1>UseEffect Basics</h1>
      <h2>{value}</h2>
      <button className='btn' onClick={() => { setValue ( value + 1 ) }}>+</button>
    </div>

  </>
  )
}

export default App;
