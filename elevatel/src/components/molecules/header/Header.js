import React from 'react';
import mainLogo from'../../img/logo.png';
import './index.css';

class Header extends React.Component {
	render() {
	  return <div className='header'>
		<a href="#"><img  src={mainLogo} alt="elevatel"/></a>
      </div>;
	}
  }
  
  export {Header};