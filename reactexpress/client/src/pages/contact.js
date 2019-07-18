import React, { Component } from 'react';
import { Box, Heading, Paragraph } from "grommet";

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    callAPI() {
        fetch("http://localhost:9000/contact")
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
                <Heading textAlign="center" color="#3E3D3C"> contact </Heading>
                <Paragraph textAlign="center" color="#3E3D3C"> social media links go here </Paragraph>
                <p className="App-intro">{this.state.apiResponse} </p>
            </Box>
        )
    };
};

export default ContactPage;