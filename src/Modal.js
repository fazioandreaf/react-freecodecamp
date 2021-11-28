import React, { Fragment, useEffect} from 'react';
import './App.css';

const Modal = ({modalContent, closeModal}) => {

	useEffect(() => {
		setTimeout(() => {
			closeModal()
		}, 3000);

	})

	return (
		<Fragment>
				<div className='modal'><p>{modalContent}</p></div>
		</Fragment>
	)
}


export default Modal;
