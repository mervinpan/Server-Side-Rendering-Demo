import React from 'react';

import {Title, Description} from './styled-components/styles.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    let initialData;

    if (props.images) {
      initialData = props.images
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }
    this.state = {
      image: initialData
    }
  }

  render() {
    return (
          <div className="test">
            <Title>Server-side rendering demo</Title>
            <Description>If this text is italicized, Styled-Components works.</Description>
            <img src={this.state.image} style={{width: "300px", height: "300px"}}/>
            <div style={{marginBottom: "20px", color: "green"}}>If button works, hydrate worked.</div>
            <button onClick={() => alert('Hydrate Works!')}>PRESS ME</button>
          </div>
    )
  }
}

export default App;