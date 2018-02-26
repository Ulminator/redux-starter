import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// activeClassName:
// When link is active based on the route, go ahead and apply a class for me
// This allows styling of the currently selected anchor up in the header.
const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;