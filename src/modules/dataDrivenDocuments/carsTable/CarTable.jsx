import React, {Component} from "react";
import * as d3 from "d3";
import up from "./up.png";
import down from "./down.png";

class CarTable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cars: this.props.carData ? this.props.carData : ["carOne", "carTwo", "Zapor"],
			sort: true
		}
	}

	componentDidMount() {
		this.drawTable();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			cars: nextProps.carData
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.cars !== nextProps.cars
	}

	componentDidUpdate() {
		this.drawTable();
	}

	drawTable() {
		let self = this;
		let data = this.state.cars;
		const columns = Object.keys(data[0]);
		let sort = self.state.sort;

		if (d3.select(this.refs.arc).select("table")) {
			console.log("Already exists")
			d3.select(this.refs.arc).select("table").remove();
		}

		let table = d3.select(this.refs.arc).append("table");
		let thead = table.append("thead")
			.attr("class", "thead");
		let tbody = table.append("tbody");

		table.append("caption")
			.html("Muscle Cars");

		thead.append("tr").selectAll("th")
			.data(columns)
			.enter()
			.append("th")
			.text(function (d) {
				return d;
			})
			.on("click", function (header, i) {

				d3.select("img").remove();
				if (sort) {
					sort = false;
					d3.select(this).append('img').attr('src',down );
					d3.select(this).style("cursor", "n-resize");
					tbody.selectAll("tr").sort(function (a, b) {
						return d3.descending(a[header], b[header]);
					}).style("background-color", function (d, i) {
						if (i % 2 == 0) {
							return "#D8D8D8";
						}
					});
				}
				else {
					sort = true;

					d3.select(this).append('img').attr('src', up);
					tbody.selectAll("tr").sort(function (a, b) {
						return d3.ascending(a[header], b[header]);
					}).style("background-color", function (d, i) {
						if (i % 2 == 0) {
							return "#D8D8D8";
						}
					});
				}
			});


		let rows = tbody.selectAll("tr.row")
			.data(data)
			.enter()
			.append("tr").attr("class", "row")
			.style("background-color", function (d, i) {
				if (i % 2 == 0) {
					return "#D8D8D8";
				}
			})
			.on("click", function (row, i) {
				self.props.chooseCar(row);
			});

		let cells = rows.selectAll("td")
			.data(function (row) {
				return d3.range(Object.keys(row).length).map(function (column, i) {
					return row[Object.keys(row)[i]];
				});
			})
			.enter()
			.append("td")
			.text(function (d) {
				return d;
			})
			.on("mouseover", function (d, i) {

				d3.select(this.parentNode)
					.style("background-color", "#78B47F");

			})
			.on("mouseout", function () {

				tbody.selectAll("tr").style("background-color", function (d, i) {
					if (i % 2 == 0) {
						return "#D8D8D8";
					}
				})
			});
	}

	render() {
		return (
			<div>
				<div ref="arc"></div>
			</div>
		)
	}
}

export default CarTable
