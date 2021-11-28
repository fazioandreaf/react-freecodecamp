import React, {Fragment, useState, useReducer} from 'react';
import './App.css';
import Modal from './Modal';
import { data } from './data/data-setStateArray';
import { reducer } from './reducer';

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
				<section>
					<h2>PropDrilling</h2>
						<List people={people} removePerson={removePerson} />
				</section>
			</div>

		</Fragment>
	)
}

const List = ({people, removePerson}) => {
	return <>
		{people.map((person) => {
			return <SinglePerson key={person.id} {...person} removePerson={removePerson} />
		})}
	</>
}

const SinglePerson = ({id, name, removePerson}) => {
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
