/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from "react";
import {Link} from "react-router-dom";

class MapContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			showFactoryInfo: false,
			factoryId: 0
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
			factoryId: 0
		})
	}

	render() {
		return (
			<div className="map-container view-container">
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
					this.state.showFactoryInfo
						? <div className="factory-panel">
						<div className="factory-info">
							Info for factory id:{this.state.factoryId}
						</div>
						<div className="factory-action-buttons">
							<div className="app-button button-launch">
								Launch
							</div>
							<Link
								className="app-button button-details"
								to={'/factory/' + this.state.factoryId}>
								Details
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
