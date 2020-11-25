import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
       <>
        <nav>
            <div className='nav-container'>
                <Link to='/'>
                <img id='logo' src='..\IMG\logo.png' alt='SearchJob' />
                </Link>
                <ul>
                    <li><Link to='/JobOpening'>Job Opening</Link></li>
                    <li><a href='..\HTML\jobposting.html'>Job Posting</a></li>
                    <li><a href='..\HTML\contact.html'>Contact</a></li>
                </ul>
            </div>
        </nav>
       </>
    )
}

export default Navbar;
