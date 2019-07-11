import React, { Component } from 'react';

// imported component and changed HomePage from a function() to this
class HomePage extends Component {
    // setting the state for the api response from express backend
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    // fetch call to express server
    callAPI() {
        fetch("http://localhost:9000/home")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    };

    // calls callAPI function when component loads
    componentDidMount() {
        this.callAPI();
    };
    // have to put in render before the return or else the code breaks
    render() {
        return (
            <div>
                <h1> sensory friendly syracuse </h1>
                <h2> rate and review local places </h2>
                <h3> help determine their sensory friendliness! </h3>
                <p className="App-intro">{this.state.apiResponse} </p>
            </div>
        )
    }
};

export default HomePage;

// through moving the logic and p tag to the home.js component and re-formatting it from a function, the API response from Express now only shows on the homepage instead of on all of the pages