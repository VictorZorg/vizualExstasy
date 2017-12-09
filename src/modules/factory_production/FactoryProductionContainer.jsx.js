/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from "react";
import {Link} from "react-router-dom";

class FactoryProductionContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			currentFactoryId: 0
		}
	}

	componentWillMount() {
		this.setState({
			currentFactoryId: this.props.match.params.factoryId
		})
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			currentFactoryId: nextProps.match.params.factoryId
		})
	}

	render() {
		console.log(this.props.match.params.factoryId);
		return (
			<div className="factory-container">
				<div className="factory-header">
					<div className="quote header-element">
						Quote for factory id:{this.state.currentFactoryId}
					</div>
					<div className="author header-element">
						Author
					</div>
				</div>
				<div className="factory-selection">
					<div className="factory-plate">
						<Link
							className="app-button button-details"
							to={'/factory/1'}>
							First
						</Link>
					</div>
					<div className="factory-plate">
						<Link
							className="app-button button-details"
							to={'/factory/2'}>
							Second
						</Link>
					</div>
					<div className="factory-plate">
						<Link
							className="app-button button-details"
							to={'/factory/3'}>
							Third
						</Link>
					</div>
					<div className="factory-plate">
						<Link
							className="app-button button-details"
							to={'/factory/4'}>
							Fourth
						</Link>
					</div>
					<div className="factory-plate">
						<Link
							className="app-button button-details"
							to={'/factory/5'}>
							Fifth
						</Link>
					</div>
					<div className="factory-plate">
						<Link
							className="app-button button-details"
							to={'/factory/6'}>
							Sixth
						</Link>
					</div>
				</div>
				<div className="factory-content">
					<div className="factory-production-table">
						TABLE
					</div>
					<div className="factory-production-rose">
						ROSE
					</div>
				</div>
			</div>
		)
	}
}

export default FactoryProductionContainer
