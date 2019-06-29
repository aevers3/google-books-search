import React from 'react';
import NavLink from '../NavLink';
import './style.css';

function Navbar() {
    return (
        <>
            <nav>
                <span className='navLink'>
                    <NavLink
                        text="Search"
                        page="/"
                    />
                </span>
                <span className='navLink'>
                    <NavLink
                        text="Saved"
                        page="/saved"
                    />
                </span>
            </nav>
        </>
    )
}

export default Navbar;