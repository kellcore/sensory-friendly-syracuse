import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet';
import { FormClose, Menu } from 'grommet-icons';
import Navigation from './components/navigation';
import Main from './components/main';
import Home from './components/home';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  }
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/home")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Button icon={<Menu />} onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))} />
                <Heading level='3' margin='none'> sensory friendly syracuse </Heading>
              </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {(!showSidebar || size !== 'small') ? (
                  <Collapsible direction='horizontal' open={showSidebar}>
                    <Box
                      flex
                      width='small'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ) : (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => this.setState({ showSidebar: false })}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        sidebar
                    </Box>
                    </Layer>
                  )}
                <Box flex align='center' justify='center'>
                  <Navigation />
                  <Main />
                  <Home />
                  <p className="App-intro">{this.state.apiResponse} </p>
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
};
export default App;
