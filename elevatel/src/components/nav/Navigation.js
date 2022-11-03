import React from 'react';
import map from'../../img/map.svg';
import search from'../../img/search.svg';
import alarm from'../../img/alarm.svg';
import './index.css';

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { FetchAPIData } from "../fetchData/Fetch";
import { Map } from './map/Map'


function Navigation() {

	return(
		<div className='navigation'>
			<Tabs>
				<TabList className="navigation-list">
					<Tab ><div><img src={map} alt="map"/><span>Karte</span></div></Tab>
					<Tab ><div><img src={search} alt="search"/><span>Suche</span></div></Tab>
					<Tab ><div><img src={alarm} alt="alarm"/><span>Alarme</span></div></Tab>
				</TabList>
				<TabPanel>
					<FetchAPIData />
					<Map/>
				</TabPanel>
				<TabPanel selectedClassName="map-active">
				
					
				</TabPanel>
				<TabPanel>
					some data
				</TabPanel>
			</Tabs>
      </div>
	  )
  }
  
export {Navigation};