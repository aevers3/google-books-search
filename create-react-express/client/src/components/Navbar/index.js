import React from 'react';
import NavLink from '../NavLink';
import './style.css'

function Navbar() {
    return (
        <>
            <nav>
                <span>Nav stuff</span>

                <NavLink 
                    text="Search"
                    page="/"
                />
                <NavLink 
                    text="Saved"
                    page="/saved"
                />
            </nav>
        </>
    )
}

export default Navbar;