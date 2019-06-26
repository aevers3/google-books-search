import React from 'react';
import {Link} from 'react-router-dom';

function NavLink(props) {
    return (
        <Link to={props.page}>{props.text}</Link>
    )
}

export default NavLink;