import React, {Component} from "react";
import * as d3 from "d3";
import SortableTable from 'react-sortable-table';

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

	componentDidUpdate() {
		this.drawTable();
	}

//


	sortTable(self, header, i) {
		console.log(self)
		d3.select("img").remove();

		if (self.state.sort) {
			self.setState({
				sort: false
			});
			d3.select(this).append('img').attr('src', up);
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
			self.setState({
				sort: true
			});

			d3.select(this).append('img').attr('src', down);
			tbody.selectAll("tr").sort(function (a, b) {
				return d3.ascending(a[header], b[header]);
			}).style("background-color", function (d, i) {
				if (i % 2 == 0) {
					return "#D8D8D8";
				}
			});
		}
	}

	drawTable() {
		let self = this;
		let data = this.state.cars;
		const columns = Object.keys(data[0]);

		if (d3.select(this.refs.arc).select("table")) {
			d3.select(this.refs.arc).select("table").remove();
		}

		let table = d3.select(this.refs.arc).append("table");
		let thead = table.append("thead")
			.attr("class", "thead");
		let tbody = table.append("tbody");

		thead.append("tr").selectAll("th")
			.data(columns)
			.enter()
			.append("th")
			.text(function (d) {
				return d;
			})
			.on("click", function (header, i) {
				self.sortTable(this, header, i);
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
		const columns = [
			{
				header: 'Id',
				key: 'id',
				defaultSorting: 'ASC',
				headerProps: { className: 'align-left' },
				headerStyle: { fontSize: '15px', backgroundColor: '#FFDAB9', width: '100px' },
				dataStyle: { fontSize: '15px', backgroundColor: '#FFDAB9'},
				dataProps: { className: 'align-right' }
			},			{
				header: 'Brand',
				key: 'brand',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-center' },
			},			{
				header: 'Model',
				key: 'model',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-center' },
			},			{
				header: 'Mpg',
				key: 'mpg',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			},			{
				header: 'Cylinders',
				key: 'cylinders',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			},			{
				header: 'Displacement',
				key: 'displacement',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			},			{
				header: 'Horsepower',
				key: 'horsepower',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			},{
				header: 'Weight',
				key: 'weight',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			},{
				header: 'Acceleration',
				key: 'acceleration',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			},{
				header: 'Year',
				key: 'year',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			},{
				header: 'Origin',
				key: 'origin',
				headerStyle: { fontSize: '15px' },
				headerProps: { className: 'align-left' },
			}
		];

		const style = {
			backgroundColor: '#eee'
		};

		const iconStyle = {
			color: '#aaa',
			paddingLeft: '5px',
			paddingRight: '5px'
		};

		let data =  [
			{ id: 3, name: 'Satoshi Yamamoto', class: 'B' },
			{ id: 1, name: 'Taro Tanak', class: 'A' },
			{ id: 2, name: 'Ken Asada', class: 'A' },
			{ id: 4, name: 'Masaru Tokunaga', class: 'C' }
		]

		return (
			<div className="car-table-content">
				<div ref="arc"></div>

			</div>
		)
	}
}
//<div className="table-container">
//	<SortableTable
//		data={this.props.carData}
//		columns={columns}
//		style={style}
//		iconStyle={iconStyle}
//	/>
//</div>

export default CarTable
