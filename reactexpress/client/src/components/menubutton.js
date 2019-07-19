import React, { Component } from 'react';
import PropTypes from 'prop-types';
// prop-types documents intended types of properties passed to components -> js primitive types
// react will check props passed to your components against your definitions and warn if they don't match (ex. if you define a boolean but the prop is actually an array)
import { matchPath } from 'react-router-dom';
// matchPath is the mechanism react-router uses to match paths via the Route component

import { Box, RoutedButton, Text } from 'grommet';

export class MenuButton extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    // creating a contextType property using static class field to initialize it
    // we can use context to avoid passing props through intermidiate elements
    // designed to share data that can be considered "global"
    // we are telling the router that we'll be passing an object
    render() {
        const { active, Icon, label, path, ...rest } = this.props;
        const { router } = this.context;
        return (
            <RoutedButton
                active={active || !!matchPath(router.route.location.pathname, { path })}
                // bang true means false -> bang means not
                // double bang -> if a bang returns the opposite truthy value, a double bang determines the opposite value and then returns the opposite of the determined value -> first bang sets it to false, second sets it to true
                // whether active or if matchPath results to true -> matchPath matches!
                // if it doesn't match, it'll return false and not be active!
                hoverIndicator="dark-4"
                path={path}
                {...rest}
            // whatever other props are on that button, it spreads the rest of the object
            // setting up space to pass arbitrary data to another component using ...rest operator
            >
                <Box
                    pad={{ vertical: "small" }}
                    gap="xsmall"
                    align="center"
                    justify="center">
                    <Icon color="light-5"></Icon>
                    <Text size="xsmall" color="white">
                        {label}
                    </Text>
                </Box>
            </RoutedButton>
        );

    };
};