import React, {useState, useEffect} from 'react';
import './App.css';

const url = 'https://api.github.com/users';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    // call sett user we generate a infinity loop
    setUsers(users);
  }

  useEffect(()=> {
    getUsers();
  },[]);

  return (
  <>
    <div className='container'>
      <h1>Fetch Data</h1>
      <h2>Github Users</h2>
      <ul className='users'>
        {
          users.map((user)=> {
            const {id,avatar_url,html_url,login} = user;
            return (
              <li key={id}>
              <img src={avatar_url} alt={login}/>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
            );
          }
          )
        }
      </ul>
    </div>

  </>
  )
}

export default App;
