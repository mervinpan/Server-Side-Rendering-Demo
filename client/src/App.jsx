import React from 'react';

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
            <Description>If this text is italicized, Styled-Components works.</Description>
            <div style={{marginBottom: "20px"}}>If button works, hydrate worked.</div>
            <button onClick={() => alert('Hydrate Works!')}>PRESS ME</button>
          </div>
    )
  }
}

export default App;