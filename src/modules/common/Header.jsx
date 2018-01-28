/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header-link">
					<Link to='/'>
						Home
					</Link>
				</div>
				<div className="header-link">
					<Link to='/map'>
						<img src={require('../../img/map.png')} />
					</Link>
				</div>
			</div>
		)
	}
}

export default Header
