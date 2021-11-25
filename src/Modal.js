import React, {useEffect, Fragment} from 'react';
import './App.css';

const Modal = ({modalContent}) => {

	return (
		<Fragment>
				<div className='modal'><p>{modalContent}</p></div>
		</Fragment>
	)
}


export default Modal;
