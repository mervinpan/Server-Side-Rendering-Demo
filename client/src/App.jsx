import React from 'react';
import $ from 'jquery';
// import '../style.css';

import {Title, Description} from './styled-components/styles.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
          <div className="test">
            <Title>Server-side rendering demo</Title>
            <Description>If button works, hydrate worked.</Description>
            <button onClick={() => alert('Hydrate Works!')}>PRESS ME</button>
          </div>
    )
  }
}

export default App;