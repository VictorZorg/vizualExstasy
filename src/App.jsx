import React from 'react';
import 'normalize.css';
import 'index.scss';
import {
	Route,
	Switch,
} from 'react-router-dom'
import Script from 'react-load-script'

import Header from "./modules/common/Header";
import MainContainer from './modules/main/Main.jsx'
import MapContainer from './modules/map/MapContainer'
import FactoryProductionContainer from './modules/factory_production/FactoryProductionContainer.jsx'


export default class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<div className="content-container">
					<Header/>
					<Switch>
						<Route exact path='/' component={MainContainer}/>
						<Route path='/map' component={MapContainer}/>
						<Route path='/factory/:factoryId' component={FactoryProductionContainer}/>
					</Switch>
				</div>
			</div>
		)
	}
}
