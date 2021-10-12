import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let title='random title';
  const handleClick = () => {
    title = 'hello people'
  }
  return (
    <React.Fragment>

    <div className="container">
      <h1>{title}</h1>
      <button type="Button" className='btn' onClick={handleClick}> Change title</button>
    </div>
    </React.Fragment>
  );
}

export default App;
