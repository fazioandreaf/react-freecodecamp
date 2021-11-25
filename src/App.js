import React, {Fragment, useRef, useEffect, useState, useReducer} from 'react';
import './App.css';
import Modal from './Modal';
import data from './data/data-setStateArray';

function App() {

	const reducer = (state, action) => {};
	
	const defaultState = {
		people: data,
		isModalOpen: true,
		modalContent: 'Hello World'
	}

	const [state, dispatch] = useReducer(reducer, defaultState);
	const [name,setName] = useState('');

	const handleSubmit = (e) => {
	e.preventDefault();
	if(name) {
	} else {
	}

}
	return (
		<Fragment>
			<div className='container'>
				<h2>useReducer</h2>

			</div>
			{state.isModalOpen && <Modal modalContent={state.modalContent} />}
			<form onSubmit={handleSubmit}>
				<div>
					<input
					type='text'
					value={name}
					onChange={(e)=>setName(e.target.value)} />
				</div>
				<button type='submit'> add</button>
			</form>
			{state.people.map((person) => {
				return <div key={person.id}><h4>{person.name}</h4></div>
			})}
		</Fragment>
	)
}

export default App;
