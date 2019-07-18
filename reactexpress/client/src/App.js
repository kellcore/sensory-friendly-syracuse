import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet';
import { FormClose, Login, Menu, UserAdd } from 'grommet-icons';
import Navigation from './components/navigation';
import Main from './components/main';
//import Home from './components/home';


// grommet theme
const theme = {
  global: {
    colors: {
      brand: '#D44500',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

// grommet AppBar
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

// grommet footer
const AppBarFoot = (props) => (
  <Box
    tag='footer'
    direction='row'
    align='center'
    justify='center'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

// creating App component
class App extends Component {
  // setting grommet header sidebar not to show on page load
  state = {
    showSidebar: false,
  };

  // beginning of what gets shown on the homepage
  render() {
    const { showSidebar } = this.state;
    // what the app returns when it's called
    return (
      <Grommet theme={theme} full>
        {/* makes the grommet layout mobile friendly */}
        <ResponsiveContext.Consumer>
          {size => (
            // tells the grommet display to fill the screen
            <Box fill>
              {/* constructs the app bar at the top of the screen with the hamburger menu and icons */}
              <AppBar>
                <Button icon={<Menu />} onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))} />
                <Button icon={<UserAdd />} onClick={() => { }} />
                <Button icon={<Login />} onClick={() => { }} />
              </AppBar>
              {/* makes the grommet layout flex when display is changed */}
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {/* logic and design for sidebar with hamburger menu */}
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
                      {/* calls the Navigation component imported above */}
                      <Navigation />
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
                        <Navigation />
                      </Box>
                    </Layer>
                  )}
                <Box flex align='center' justify='center'>
                  {/* calls the Main component imported above */}
                  <Main />
                </Box>
              </Box>
              <AppBarFoot>
                <Heading level='5' margin='none'> sensory friendly syracuse © 2019 by kell.dev </Heading>
              </AppBarFoot>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
};
export default App;
