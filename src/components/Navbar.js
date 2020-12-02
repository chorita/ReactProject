import { Link } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, useRouteMatch, useLocation } from 'react-router-dom';
import { adminPages, noTemplatePages } from '../utilities/utilities';


const Navbar = (props) => {
    let { path, url } = useRouteMatch();
    let location = useLocation();

    const noHeaderPages = ['/admin', 'admin/posts', '/admin/create-post', '/login'];
    return (
       <>
        <nav>
            <div className='nav-container'>
                <Link to='/'>
                <img id='logo' src='..\IMG\logo.png' alt='' />
                </Link>
                <ul>
                    <li><Link to='/JobOpening'>Job Opening</Link></li>
                    <li><Link to='/JobPosting'>Job Posting</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/admin'>Admin Page</Link></li>
                </ul>
            </div>
        </nav>
       </>
    ) ;
        }

export default Navbar;
