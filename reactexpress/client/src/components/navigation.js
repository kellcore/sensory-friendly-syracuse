import React from 'react';
//import { render } from 'react-dom';

// import { Router, Route, Switch } from 'react-router-dom';

import { Box, Text } from 'grommet';

import { Home as HomeIcon, Announce, Contact as ContactIcon, Article, Bookmark, Organization } from 'grommet-icons';
// // have to name Home to HomeIcon because Home conflicts with the Home named in Pages below -> same with Contact

// import { Sidebar } from './sidebar';

// import About from '../pages/about';
// import Contact from '../pages/contact';
// import Home from '../pages/home';
// import Resources from '../pages/resources';
// import Reviews from '../pages/reviews';
// import Venues from '../pages/venues';

// const items = [
//     {
//         label: "Home",
//         Icon: HomeIcon,
//         path: "/"
//     },
//     {
//         label: "About",
//         Icon: Announce,
//         path: "/about"
//     },
//     {
//         label: "Contact",
//         Icon: ContactIcon,
//         path: "/contact"
//     },
//     {
//         label: "Reviews",
//         Icon: Article,
//         path: "/reviews"
//     },
//     {
//         label: "Resources",
//         Icon: Bookmark,
//         path: "/resources"
//     },
//     {
//         label: "Venues",
//         Icon: Organization,
//         path: "/venues"
//     }
// ];

// class Navigation extends Component {
//     render() {
//         return (
//             <Router>
//                 <Box
//                     direction="row"
//                     fill>
//                     <Sidebar
//                         items={items}
//                     >
//                     </Sidebar>
//                     <Box flex>
//                         <Switch>
//                             <Route path="/" exact component={Home} />
//                             <Route path="/about" component={About} />
//                             <Route path="/contact" component={Contact} />
//                             <Route path="/reviews" component={Reviews} />
//                             <Route path="/resources" component={Resources} />
//                             <Route path="/venues" component={Venues} />
//                         </Switch>
//                     </Box>
//                 </Box>
//             </Router>
//         );
//     }
// }
// setting up the array of objects here with key-value pairs established in sidebar.js! a neat way to make a re-usable component

import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <Box
            fill="vertical"
        // width="sidebar"
        //background="dark-2"
        //elevation="medium"
        >
            <nav>
                {/* <ul>
                    <li><NavLink to='/'> Home </NavLink></li>
                    <li><NavLink to='/about'> About </NavLink></li>
                    <li><NavLink to='/contact'> Contact </NavLink></li>
                    <li><NavLink to='/login'> Login </NavLink></li>
                    <li><NavLink to='/signup'> Signup </NavLink></li>
                    <li><NavLink to='/reviews'> Reviews </NavLink> </li>
                    <li><NavLink to='/resources'> Resources </NavLink> </li>
                    <li><NavLink to='/venues'> Venues </NavLink> </li>
                    <li><NavLink to='/dashboard'> Dashboard </NavLink> </li>
                </ul>
                <Button icon={<HomeIcon />}> <NavLink to='/'> Home </NavLink> </Button>
                <Text alignSelf="center" color="#3E3D3C" weight="bold" textAlign="center"> Home </Text> */}

                <Box
                    flex={false}
                    align="center"
                    gap="xsmall"
                    pad={{ vertical: "small" }}
                >

                    <NavLink to='/'> <HomeIcon /> </NavLink>
                    <NavLink to='/'> <Text size="small" color="#3E3D3C" weight="bold">Home</Text> </NavLink>
                </Box>
                <Box
                    flex={false}
                    align="center"
                    gap="xsmall"
                    pad={{ vertical: "small" }}
                >

                    <NavLink to='/about'> <Announce /> </NavLink>
                    <NavLink to='/about'> <Text size="small" color="#3E3D3C" weight="bold">About</Text> </NavLink>
                </Box>
                <Box
                    flex={false}
                    align="center"
                    gap="xsmall"
                    pad={{ vertical: "small" }}
                >

                    <NavLink to='/contact'> <ContactIcon /> </NavLink>
                    <NavLink to='/contact'> <Text size="small" color="#3E3D3C" weight="bold">Contact</Text> </NavLink>
                </Box>
                <Box
                    flex={false}
                    align="center"
                    gap="xsmall"
                    pad={{ vertical: "small" }}
                >

                    <NavLink to='/reviews'> <Article /> </NavLink>
                    <NavLink to='/reviews'> <Text size="small" color="#3E3D3C" weight="bold">Reviews</Text> </NavLink>
                </Box>
                <Box
                    flex={false}
                    align="center"
                    gap="xsmall"
                    pad={{ vertical: "small" }}
                >

                    <NavLink to='/resources'> <Bookmark /> </NavLink>
                    <NavLink to='/resources'> <Text size="small" color="#3E3D3C" weight="bold">Resources</Text> </NavLink>
                </Box>
                <Box
                    flex={false}
                    align="center"
                    gap="xsmall"
                    pad={{ vertical: "small" }}
                >

                    <NavLink to='/venues'> <Organization /> </NavLink>
                    <NavLink to='/venues'> <Text size="small" color="#3E3D3C" weight="bold">Venues</Text> </NavLink>
                </Box>
            </nav>
        </Box>
    )
};

export default Navigation;