/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from "react";
class MainContainer extends React.Component {
	render() {
		return (
			<div className="main-container">
				<div className="greetings">
					Welcome to VizualExstasy project!
					<div className="logo">
						<img src={require('../../img/max.png')}/>
					</div>
				</div>

			</div>
		)
	}
}
export default MainContainer
