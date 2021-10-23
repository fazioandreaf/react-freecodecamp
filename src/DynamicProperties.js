import React, {useState} from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({firstName:'', email:'', age: 0});
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age) {
      const newPerson = {...person,id:new Date().getTime().toString()};
      setPeople([...people, newPerson])
      setPerson({firstName: '', email: '', age: 0})
    }
  }

  const handleChange = (e) => {
    const name= e.target.name;
    const value= e.target.value;
    setPerson({...person, [name]: value})
  }

  return (
    <div className="container" style={{marginTop: '2rem'}}>
      <h1>Forms</h1>
      <article>
        <form className='form' >
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type="text"
              id='firstName'
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
              />
          </div>
          <div className='form-control'>
            <label htmlFor='email' style={{marginTop: '2rem'}}>Email: </label>
            <input
              type="text"
              id='email'
              name="email"
              value={person.email}
              onChange={handleChange}
              />
          </div>
          <div className='form-control'>
            <label htmlFor='age' style={{marginTop: '2rem'}}>Age: </label>
            <input
              type="text"
              id='age'
              name="age"
              value={person.age}
              onChange={handleChange}
              />
          </div>
          <button type='submit' onClick={handleSubmit}>Add Person</button>
        </form>
        <div>
          {
            people.map((elem,i)=>{
              const {id, firstName, email, age}= elem;
              return (
              <div className='item' key={id}>
                <h4>{firstName}</h4>
                <span>{age}</span>
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
