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

	return (
		<Fragment>
			<div className='container'>
				<section>
					<h2>PropDrilling</h2>
				</section>
			</div>

		</Fragment>
	)
}

export default App;
