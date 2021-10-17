import React from 'react';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ciao');
  }


  return (
    <div className="container" style={{marginTop: '2rem'}}>
      <h1>Forms</h1>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input type="text" id='firstName' name="firstName"></input>
            <label htmlFor='email' style={{marginTop: '2rem'}}>Email: </label>
            <input type="text" id='email' name="email"></input>
          </div>
          <button type='submit'>Add Person</button>
        </form>
      </article>
    </div>
  )
}

export default App;
