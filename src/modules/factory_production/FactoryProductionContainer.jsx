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
		if (this.state.currentFactoryId !== nextProps.match.params.factoryId) {
			this.chooseCurrentFactory(nextProps.match.params.factoryId)
		}
	}

	/**
	 * Defines how new factory will be chosen
	 * @param factoryId - factory id
	 */
	chooseCurrentFactory(factoryId) {
		//TODO: REMOVE!!! ==================================================================================================
		if (factoryId === 0) {
			factoryId = 1
		}
		let chosenFactory = this.state.factoryData[factoryId];
		this.setState({
			currentFactory: chosenFactory,
			currentFactoryId: factoryId
		});
		this.chooseQuote(chosenFactory);
	}

	/**
	 * Chooses random quotation from factory
	 * @param factory
	 */
	chooseQuote(factory) {
		let quote = {
			text: "Quote: Factory is not chosen.",
			author: "Author: Factory is not chosen."
		};
		if (factory) {
			let chosenQuotation = FactoryProductionContainer.getRandomInt(0, factory.quotation.length - 1);
			quote.text = factory.quotation[chosenQuotation].text;
			quote.author = factory.quotation[chosenQuotation].author;
		}
		this.setState({
			currentQuotation: quote
		})
	}

	static getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	renderFactoryPlates() {
		const allFactories = this.state.factoryData;
		let chosenFactory = this.state.currentFactoryId;

		return Object.keys(allFactories).map((factoryId, index) => {
			let factory = allFactories[factoryId];
			console.log(factory);
			return (
				<div
					className={
						factoryId === chosenFactory
							? "factory-plate factory-plate-chosen"
							: "factory-plate"
					}
					key={index}
				>
					<Link
						className="app-button button-details"
						to={'/factory/' + factoryId}>
						{factory.name}
					</Link>
				</div>
			)
		})
	}


	render() {
		return (
			<div className="factory-container">
				<div className="factory-selection">
					{
						this.renderFactoryPlates()
					}
				</div>
				<div className="factory-header">
					<div className="quote header-element">
						{this.state.currentQuotation.text}
					</div>
					<div className="author header-element">
						{this.state.currentQuotation.author}
					</div>
				</div>
				<div className="factory-content">
					<div className="factory-production-table">
						TABLE
					</div>
					<div className="factory-production-rose">
						<BarChart
							data={[5, 55, 9, 10, 1, 3]}
							size={[500, 500]}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default FactoryProductionContainer
