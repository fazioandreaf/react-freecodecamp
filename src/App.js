import React, {Fragment, useRef, useEffect, useState} from 'react';
import './App.css';
import Modal from './Modal';
import data from './data/data-setStateArray';

function App() {

const [people,setPeople] = useState(data);
const [name,setName] = useState('');
const [showModal,setShowModal] = useState(false);

const handleSubmit = (e) => {
	e.preventDefault();
	if(name) {
		setShowModal(true);
		setPeople([...people,{id:new Date().getTime().toString(),name}])
		setName('');
	} else {
		setShowModal(true);
	}

}
	return (
		<Fragment>
			<div className='container'>
				<h2>useReducer</h2>

			</div>
			{showModal && <Modal/>}
			<form onSubmit={handleSubmit}>
				<div>
					<input 
					type='text'
					value={name}
					onChange={(e)=>setName(e.target.value)} />
				</div>
				<button type='submit'> add</button>
			</form>
			{people.map((person) => {
				return <div key={person.id}><h4>{person.name}</h4></div>
			})}
		</Fragment>
	)
}

export default App;
