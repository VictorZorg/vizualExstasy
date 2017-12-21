/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from "react";
import {Link} from "react-router-dom";

import BarChart from "../../modules/dataDrivenDocuments/barChart/BarChart";
import dataFromFile from "../../data/factory.json";

class FactoryProductionContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			currentFactoryId: 0,
			factoryData: dataFromFile,
			currentFactory: null,
			currentQuotation: null

		}
	}

	componentWillMount() {
		this.chooseCurrentFactory(this.props.match.params.factoryId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.currentFactoryId != nextProps.match.params.factoryId) {
			this.chooseCurrentFactory(nextProps.match.params.factoryId)
		}
	}

	/**
	 * Defines how new factory will be chosen
	 * @param factoryId - factory id
	 */
	chooseCurrentFactory(factoryId) {
		let chosenFactory = this.state.factoryData[factoryId];
		this.setState({
			currentFactory: chosenFactory,
			currentFactoryId: factoryId
		});
		this.chooseQuote(chosenFactory);
	}

	chooseQuote(factory) {
		let quote = {
			text: "Quote: Factory is not chosen.",
			author: "Author: Factory is not chosen."
		};
		if (factory) {
			let chosenQuotation = this.getRandomInt(0, factory.quotation.length - 1);
			quote.text = factory.quotation[chosenQuotation].text;
			quote.author = factory.quotation[chosenQuotation].author;
		}
		this.setState({
			currentQuotation: quote
		})
	}

	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	render() {
		return (
			<div className="factory-container">
				<div className="factory-header">
					<div className="factory-name">
						{
							this.state.currentFactory
								? this.state.currentFactory.name
								: ""
						}
					</div>
					<div className="quote header-element">
						{this.state.currentQuotation.text}
					</div>
					<div className="author header-element">
						{this.state.currentQuotation.author}
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
						<BarChart data={[5, 55, 9, 10, 1, 3]} size={[500, 500]}/>
					</div>
				</div>
			</div>
		)
	}
}

export default FactoryProductionContainer
