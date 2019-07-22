import React, { Component } from 'react';
import { Formik } from 'formik';
//import Yup from 'yup';
import { Box, Button, FormField, Heading, TextArea, TextInput } from "grommet";


class FormikContact extends Component {
    state = { submitted: false };

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
        const { submitted } = this.state;

        return (
            // <Grommet theme={grommet}>
            <Box align="center">
                <Box width="medium" margin="large">
                    <Heading> contact </Heading>
                    <Formik
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = "name is a required field";
                            }
                            if (!values.email) {
                                errors.email = "please enter a valid email address";
                            }
                            if (!values.comments) {
                                errors.comments = "comments are required";
                            }
                            return errors;
                        }}
                        validateOnBlur={submitted}
                        validateOnChange={submitted}
                        onSubmit={(values, { setSubmitting }) => {
                            //whatever submitting the form entails
                            alert("Submitting\n" + JSON.stringify(values, null, 2));
                            setSubmitting();
                        }}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            setFieldValue
                        }) => (
                                <form
                                    onSubmit={event => {
                                        event.preventDefault();
                                        this.setState({ submitted: true });
                                        handleSubmit();
                                    }}
                                >
                                    <FormField label="name:" error={errors.name}>
                                        <TextInput
                                            name="name"
                                            value={values.name || ""}
                                            onChange={handleChange}
                                        />
                                    </FormField>
                                    <FormField label="email:" error={errors.email}>
                                        <TextInput
                                            name="email"
                                            type="email"
                                            value={values.email || ""}
                                            onChange={handleChange}
                                        />
                                    </FormField>
                                    <FormField label="comments:" error={errors.comments}>
                                        <TextArea
                                            name="comments"
                                            value={values.comments || ""}
                                            onChange={handleChange}
                                        />
                                    </FormField>
                                    <Box
                                        tag="footer"
                                        margin={{ top: "medium" }}
                                        direction="row"
                                        justify="between"
                                    >
                                        <Button label="cancel" />
                                        <Button type="submit" primary label="enter" />
                                    </Box>
                                </form>
                            )}
                    </Formik>
                </Box>
            </Box>
            // </Grommet>



            // <Box fill align="center" justify="center">
            //     <Heading textAlign="center" color="#3E3D3C"> contact </Heading>
            //     {/* <Paragraph textAlign="center" color="#3E3D3C"> </Paragraph> */}
            //     <input type="email" name="email" placeholder="Email" />
            //     <p className="App-intro">{this.state.apiResponse} </p>
            // </Box>
        )
    };
};

export default FormikContact;

// form created using https://codesandbox.io/s/y331zzorz