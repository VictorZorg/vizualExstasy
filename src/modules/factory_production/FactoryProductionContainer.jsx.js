/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from 'react';

class FactoryProductionContainer extends React.Component {
	render() {
		return (
			<div className="factory-container">
				<div className="factory-header">
					<div className="quote header-element">
						Quote
					</div>
					<div className="author header-element">
						Author
					</div>
				</div>
				<div className="factory-selection">
					<div className="factory-plate">
						First
					</div>
					<div className="factory-plate">
						Second
					</div>
					<div className="factory-plate">
						Third
					</div>
					<div className="factory-plate">
						Fourth
					</div>
					<div className="factory-plate">
						Fifth
					</div>
					<div className="factory-plate">
						Sixth
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
