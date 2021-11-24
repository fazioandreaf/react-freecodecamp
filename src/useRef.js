import React, {Fragment, useRef, useEffect} from 'react';
import './App.css';

function App() {

	const refContainer= useRef(null);
	const divContainer= useRef(null);
	console.log(refContainer);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(divContainer.current);
	}

	useEffect(() => {
		console.log(refContainer.current);
		refContainer.current.focus();

	}, )
  return (
    <Fragment>
		<div className='container'  onSubmit={handleSubmit}>
			    <form>
				<div>
					<input type="text" ref={refContainer} />
					<button type="submit">submit</button>
				</div>
			</form>
			<div ref={divContainer}>
			HELLO WORLD

			</div>
      </div>
    </Fragment>
  )
}

export default App;
