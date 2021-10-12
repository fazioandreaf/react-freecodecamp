import React, {useState} from 'react';
import { data } from './data/data-setStateArray'
import './App.css';

function App() {
  const [people,setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return <>
    <h2>useState Array example</h2>
  {
    people.map((person)=>{
      const {id,name} = person;
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={()=> removeItem(id)}>Remove this person</button>
        </div>
      )
    })
  }
  <button className='btn' onClick={() => setPeople([])}>
    clear items
  </button>
  </>

}

export default App;
