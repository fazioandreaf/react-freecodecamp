import React, {useState} from 'react';
import './App.css';

function App() {
  // useState('random title');
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // const {value,handler}=useState(1);
  const [text,setText] = useState('random title')
  const handleClick = () => {
    // i call the function inside useState
    (text === 'random title' && text.length !== 0) ? setText('hello people') : setText('random title')
  }
  return (
    <React.Fragment>

    <div className="container">
      <h1>{text}</h1>
      <button type="Button" className='btn' onClick={handleClick}> Change title</button>
    </div>
    </React.Fragment>
  );
}

export default App;
