import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function NavLink(props) {
    return (
        <Link className='navLink' to={props.page}>{props.text}</Link>
    )
}

export default NavLink;