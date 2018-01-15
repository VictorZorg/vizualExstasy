import React, {Component} from "react";
import {scaleLinear} from "d3-scale";
import {max} from "d3-array";
import {select} from "d3-selection";

class BarChart extends Component {
	constructor(props) {
		super(props)
		this.createBarChart = this.createBarChart.bind(this)
	}

	componentDidMount() {
		this.createBarChart()
	}

	componentDidUpdate() {
		this.createBarChart()
	}


	createBarChart() {

		let data = [];
		Object.keys(this.props.car).map(key => {
			let carProperty = this.props.car[key];
			if (Number.isInteger(carProperty) && carProperty < 300) {
				data.push(carProperty)
			}
		});

		console.log(data);

		const node = this.node;
		const dataMax = max(data);
		const yScale = scaleLinear()
			.domain([0, dataMax])
			.range([0, this.props.size[1]]);
		select(node)
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect');

		select(node)
			.selectAll('rect')
			.data(data)
			.exit()
			.remove();

		select(node)
			.selectAll('rect')
			.data(data)
			.style('fill', '#fe9922')
			.attr('x', (d, i) => i * 25)
			.attr('y', d => this.props.size[1] - yScale(d)
			)
			.attr('height', d => yScale(d))
			.attr('width', 25)
	}

	render() {
		return <svg ref={node => this.node = node}>
		</svg>
	}
}
export default BarChart
