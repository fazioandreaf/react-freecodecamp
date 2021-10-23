import React, {useState} from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    (firstName.length && email.length) ? setPeople((people)=> [...people,{firstName, email}] ) : console.log('empty values');
    setFirstName('');
    setEmail('');
    console.log(people);
  }


  return (
    <div className="container" style={{marginTop: '2rem'}}>
      <h1>Forms</h1>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type="text"
              id='firstName'
              name="firstName"
              value={firstName}
              // event object
              onChange={(e)=> setFirstName(e.target.value)}
              />
            <label htmlFor='email' style={{marginTop: '2rem'}}>Email: </label>
            <input
              type="text"
              id='email'
              name="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />
          </div>
          <button type='submit'>Add Person</button>
        </form>
        <div>
          {
            people.map((elem,i)=>{
              const {id,firstName,email}= elem;
              return (
              <div className='item' key={id}>
                <h4>{firstName}</h4>
                <span>{email}</span>
              </div>
              )
            })
          }
        </div>
      </article>
    </div>
  )
}

export default App;
