/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from "react";
import {Link} from "react-router-dom";
import dataFromFile from "../../data/factories.json";

class MapContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			showFactoryInfo: true,
			factoryId: 0,
			factoriesData: dataFromFile
		}
	}

	showFactory() {
		this.setState({
			showFactoryInfo: true,
			factoryId: 1
		})
	}

	hideFactoryInfo() {
		this.setState({
			showFactoryInfo: false,
			factoryId: null
		})
	}

	/**
	 * Gets data for specified factory
	 * @param factory
	 */
	chooseData(factory) {
		this.setState({
			factoryId: factory,
			showFactoryInfo: true
		})
	}

	renderFactoryPlates() {
		const allFactories = this.state.factoriesData;

		return Object.keys(allFactories).map((factoryId, index) => {
			let factory = allFactories[factoryId];
			return (
				<div
					key={index}
				>
					<button
						className=""
						onClick={e => this.chooseData(factoryId)}
					>
						{factory.name}
					</button>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="map-container view-container">
				<div className="factories">
					{this.renderFactoryPlates()}
				</div>
				<div className="map-area">
					<div className="action">
						{
							this.state.showFactoryInfo
								?
								<button
									onClick={this.hideFactoryInfo.bind(this)}
								>
									Hide
								</button>
								:
								<button
									onClick={this.showFactory.bind(this)}
								>
									Show
								</button>
						}
					</div>
				</div>
				{
					this.state.showFactoryInfo && this.state.factoryId
						? <div className="factory-panel">
						<div className="factory-info">
							<p>Info for factory name:{this.state.factoriesData[this.state.factoryId].name}</p>
							<p>Info for factory brand:{this.state.factoriesData[this.state.factoryId].brand}</p>
							<p>Info for factory country:{this.state.factoriesData[this.state.factoryId].country}</p>
						</div>
						<div className="factory-action-buttons">
							<Link
								className="app-button button-details"
								to={'/factory/' + this.state.factoryId}>
								<img src={require('../../img/details.png')}/>
							</Link>
						</div>
					</div>
						: null
				}
			</div>
		)
	}
}

export default MapContainer
