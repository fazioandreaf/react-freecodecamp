import React, {useState, useEffect} from 'react';
import './App.css';

const url = 'https://api.github.com/users/QuincyLarso';

function App() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  
  useEffect(()=> {
    fetch(url)
     .then((r) => {
       if(r.status>=200 && r.status <= 299) { return r.json()} 
          else {
            setLoading(false);
            setIsError(true);
            throw new Error(Response.statusText);
          }
      }
      )
     .then((user)=>{
       const {login} = user;
       setUser(login)
       setLoading(false)
     })
     .catch((e)=>console.log(e));
  },[]);
  
  if(loading) {
  return (
    <div className='container'>
      <h2>Loading ...</h2>
    </div>
  )  }
  if(isError) {
  return (
    <div className='container'>
      <h2>Error ...</h2>
    </div>
  )  }

  return (
  <>
    <div className='container'>
      <h1>Multiple return Rendering</h1>
      <h2>{user}</h2>
    </div>
  </>
  )
}

export default App;
