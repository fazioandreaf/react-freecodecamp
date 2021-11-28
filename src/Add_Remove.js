import React, {Fragment, useState, useReducer} from 'react';
import './App.css';
import Modal from './Modal';
import { data } from './data/data-setStateArray';
import { reducer } from './reducer';

function App() {

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
			const newItem = {
				id: new Date().getTime().toString(),
				name
			}
			dispatch({type: 'ADD_ITEM', payload: newItem})
			setName('');
		} else {
			dispatch({type: 'NO_VALUE'})
		}
	}

	const closeModal = () => {
		dispatch({type: 'CLOSE_MODAL'})
	}

	return (
		<Fragment>
			<div className='container'>
				<h2>useReducer</h2>
			</div>
			{state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
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
				return (
					<div key={person.id} className='item'>
						<h4>{person.name}</h4>
						<button onClick = {()=> dispatch({type: 'REMOVE_ITEM', payload: person.id})}>
							remove
						</button>
					</div>
				)
			})}
		</Fragment>
	)
}

export default App;
