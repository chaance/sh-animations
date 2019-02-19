import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import Map from './components/Map';
import './App.css';

const theme = {
  hexSize: 140,
  colors: {
    blueLight: `#5CADE8`,
    blueMedium: `#2475D9`,
  },
};

const Wrapper = styled.div`
  /* min-width: 100vw;
  min-height: 100vh; */
`;

class App extends Component {
  state = {
    activeHex: null
  };

  updateActiveHex = (activeHex = null) => {
    this.setState(state => {
      if (state.activeHex !== activeHex) {
        return { activeHex };
      }
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper className="App">
          <Map
            updateActiveHex={this.updateActiveHex}
            activeHex={this.state.activeHex}
          />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
