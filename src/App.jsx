import React from 'react';
import 'normalize.css';
import 'index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
				<p>This React project just works including <span className="redBg">module</span> local styles.</p>
				<p>ASdsdads!</p>
      </div>
    )
  }
}
