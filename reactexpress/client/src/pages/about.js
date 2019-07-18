import React, { Component } from 'react';
import { Box, Heading, Paragraph } from "grommet";
// imported styling from grommet

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    };

    callAPI() {
        fetch("http://localhost:9000/about")
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
                {/* replacing div with a flexbox taking up the width of the screen and aligning/justifying the content in the center */}
                <Heading textAlign="center" color="#3E3D3C"> about </Heading>
                {/* this is special formatting from grommet in lieu of h1 */}
                <Paragraph textAlign="center" color="#3E3D3C">sensory friendly syracuse is a project designed to meet the needs of people in and around the Syracuse area who would like information about the noise level, lighting, and other environmental criteria before venturing out into the community. </Paragraph>
                <p className="App-intro">{this.state.apiResponse} </p>
            </Box>
        )
    }
};

export default AboutPage;

// import React, { Component } from 'react';

// // imported component and changed HomePage from a function() to this
// class HomePage extends Component {
//     // setting the state for the api response from express backend
//     constructor(props) {
//         super(props);
//         this.state = { apiResponse: "" };
//     };

//     // fetch call to express server
//     callAPI() {
//         fetch("http://localhost:9000/home")
//             .then(res => res.text())
//             .then(res => this.setState({ apiResponse: res }))
//             .catch(err => err);
//     };

//     // calls callAPI function when component loads
//     componentDidMount() {
//         this.callAPI();
//     };
//     // have to put in render before the return or else the code breaks
//     render() {
//         return (
//             <div>
//                 <h1> sensory friendly syracuse </h1>
//                 <h2> rate and review local places </h2>
//                 <h3> help determine their sensory friendliness! </h3>
//                 <p className="App-intro">{this.state.apiResponse} </p>
//             </div>
//         )
//     }
// };

// export default HomePage;