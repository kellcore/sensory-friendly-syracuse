import React, { Component } from 'react';

import Home from './components/pages/home';

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
        <Home />
        <p className="App-intro">{this.state.apiResponse} </p>
      </div>
    );
  }
};
export default App;
