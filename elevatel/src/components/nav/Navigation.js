import React from 'react';
import map from'../../img/map.svg';
import search from'../../img/search.svg';
import alarm from'../../img/alarm.svg';
import './index.css';

class Navigation extends React.Component {
	render() {
	  return <div className='navigation'>
			<ul>
				<li><a href="#"><img  src={map} alt="map"/></a><span>Karte</span></li>
				<li><a href="#"><img  src={search} alt="map"/></a><span>Suche</span></li>
				<li><a href="#"><img  src={alarm} alt="alarm"/></a><span>Alarme</span></li>
			</ul>
		
      </div>;
	}
  }
  
export {Navigation};