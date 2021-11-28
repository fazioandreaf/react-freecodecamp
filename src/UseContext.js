import React, {Fragment, useState, useReducer, useContext} from 'react';
import './App.css';
import Modal from './Modal';
import { data } from './data/data-setStateArray';
import { reducer } from './reducer';

const PersonContext = React.createContext();
function App() {


	const defaultState = {

	}
	const [people, setPeople] = useState(data);
	const [state, dispatch] = useReducer(reducer, defaultState);
	const [name,setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const removePerson = (id) => {
		setPeople((person)=>{
			return person.filter((person) => person.id !== id);
		})
	}

	return (
		<Fragment>
			<div className='container'>
				<PersonContext.Provider value={{removePerson, people}}>
					<h2>PropDrilling</h2>
						<List removePerson={removePerson} />
				</PersonContext.Provider>
			</div>

		</Fragment>
	)
}

const List = () => {
	const {mainData} = useContext(PersonContext);

	return <>
		{mainData.people.map((person) => {
			return <SinglePerson key={person.id} {...person} />
		})}
	</>
}

const SinglePerson = ({id, name}) => {
	const {removePerson} = useContext(PersonContext);

	return <>
		<div className='item'>
			<h4>
				{name}
			</h4>
			<button onClick={()=> removePerson(id)}>Remove</button>
		</div>
	</>
}

export default App;
