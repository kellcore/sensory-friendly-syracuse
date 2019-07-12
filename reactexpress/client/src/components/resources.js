import React, { Component } from 'react';

class ResourcesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    callAPI() {
        fetch("http://localhost:9000/resources")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    };
    componentDidMount() {
        this.callAPI();
    };
    render() {
        return (
            <div>
                <h1> resources </h1>
                <h2> screen with links to resources about sensory friendliness </h2>
                <p className="App-intro">{this.state.apiResponse} </p>
            </div>
        )
    };
};

export default ResourcesPage;