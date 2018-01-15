/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from "react";
import {Link} from "react-router-dom";

import BarChart from "../../modules/dataDrivenDocuments/barChart/BarChart";
import CarTable from "../../modules/dataDrivenDocuments/carsTable/CarTable";
import dataFromFile from "../../data/factories.json";
import DodgeMain from "../../data/DodgeMain.json";
import GeneralMotorsFairfaxAssemblyPlant from "../../data/GeneralMotorsFairfaxAssemblyPlant.json";
import InternationalHarvester from "../../data/InternationalHarvester.json";
import JeffersonNorthAssembly from "../../data/JeffersonNorthAssembly.json";
import KenoshaEngine from "../../data/KenoshaEngine.json";
import LansingCarAssembly from "../../data/LansingCarAssembly.json";
import LeedsAssembly from "../../data/LeedsAssembly.json";
import LosAngelesAssembly from "../../data/LosAngelesAssembly.json";
import LynchRoadAssembly from "../../data/LynchRoadAssembly.json";
import SanJoseAssemblyPlant from "../../data/SanJoseAssemblyPlant.json";
import VanNuysAssembly from "../../data/VanNuysAssembly.json";

class FactoryProductionContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			currentFactoryId: 0,
			factoryData: dataFromFile,
			currentFactory: [],
			currentQuotation: [],
			currentCarsData: [],
			currentCar: [],
			allFactoryData: {
				dodgemain: DodgeMain,
				generalmotorsfairfaxassemblyplant: GeneralMotorsFairfaxAssemblyPlant,
				internationalharvester: InternationalHarvester,
				jeffersonnorthassembly: JeffersonNorthAssembly,
				kenoshaengine: KenoshaEngine,
				lansingcarassembly: LansingCarAssembly,
				leedsassembly: LeedsAssembly,
				losangelesassembly: LosAngelesAssembly,
				lynchroadassembly: LynchRoadAssembly,
				sanjoseassemblyplant: SanJoseAssemblyPlant,
				vannuysassembly: VanNuysAssembly
			}
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
			currentFactoryId: factoryId,
		});
		this.chooseQuote(chosenFactory);
		this.chooseData(chosenFactory)
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

	/**
	 * Gets data for specified factory
	 * @param factory
	 */
	chooseData(factory) {
		let jsonName = factory.name.replace(/\s/g, '').toLowerCase();
		//TODO: Change on another method!!! ==================================================================================================
		// console.log(jsonName);
		// console.log(this.state.allFactoryData[jsonName]);

		// axios.post('http://localhost:8008/src/data/' + jsonName + '.json')
		// 	.then(function (response) {
		// 		console.log("axios");
		// 		console.log(response);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
		let newFactoryData = this.state.allFactoryData[jsonName];
		this.setState({
			currentCarsData: newFactoryData,
			currentCar: newFactoryData[0] ? newFactoryData[0] : []
		})
	}

	/**
	 * Chooses car from current list
	 * Necessary for ROSE working
	 * @param car
	 */
	chooseCar(car) {
		let index = this.state.currentCarsData.indexOf(car);
		this.setState({
			currentCar: car
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
					<div
						className="factory-production-table"
						id="production-table"
					>
						<CarTable
							carData={this.state.currentCarsData}
							chooseCar={this.chooseCar.bind(this)}
						/>
					</div>
					<div className="factory-production-rose">
						<BarChart
							data={[5, 55, 9, 10, 1, 3]}
							size={[500, 500]}
							car={this.state.currentCar}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default FactoryProductionContainer
