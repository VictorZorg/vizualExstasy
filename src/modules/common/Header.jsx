/**
 * Created by ZAITNIK on 20.11.2017.
 */
import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/map'>Map</Link></li>
						<li><Link to='/factory'>factory</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header
