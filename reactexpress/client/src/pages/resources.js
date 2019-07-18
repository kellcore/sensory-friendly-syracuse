import React, { Component } from 'react';
import { Box, Heading, Paragraph } from "grommet";

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
            <Box fill align="center" justify="center">
                <Heading textAlign="center" color="#3E3D3C"> resources </Heading>
                <Paragraph textAlign="center" color="#3E3D3C"> screen with links to resources about sensory friendliness </Paragraph>
                <p className="App-intro">{this.state.apiResponse} </p>
            </Box>
        )
    };
};

export default ResourcesPage;