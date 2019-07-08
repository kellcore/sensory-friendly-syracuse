import React, { Component } from 'react';
import Navigation from './components/navigation';
import Main from './components/main';
import Home from './components/home';

class App extends Component {
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
    return (
      <div className="App">

        <Navigation />
        <Main />
        <Home />
        <p className="App-intro">{this.state.apiResponse} </p>
      </div>
    );
  }
};
export default App;
