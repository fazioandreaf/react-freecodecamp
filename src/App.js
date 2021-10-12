import React, {useState} from 'react';
import { data } from './data/data-setStateArray'
import './App.css';

function App() {
  const [person,setPerson] = useState({
    name:'Peter',
    age: 23,
    message:'Lorem impsum,'
  });
  const changeMessage = () => {
    // setPerson({...person,message:'new beatiful message'})
    setMessage('beatiful message')
  }
  // const {name,age,message} = person;
  const [age,setAge] = useState('Peter')
  const [name,setName] = useState(23)
  const [message,setMessage] = useState('Lorem impsum')

  return (
  <>
  <div className='container'>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change message </button>
  </div>
  </>
  )
}

export default App;
