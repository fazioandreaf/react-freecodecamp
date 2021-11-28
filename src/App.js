import React, {Fragment, useState, useReducer, useContext} from 'react';
import './App.css';
import Modal from './Modal';
import { data } from './data/data-setStateArray';
import { reducer } from './reducer';

function App() {
	const defaultState = {};
	const [people, setPeople] = useState(data);
	const [state, dispatch] = useReducer(reducer, defaultState);
	const [name,setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<Fragment>
			<div className='container'>
					<h2>PropDrilling</h2>
			</div>

		</Fragment>
	)
}

export default App;
