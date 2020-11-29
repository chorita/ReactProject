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
                    <li><Link to='/JobPosting'>Job Posting</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
       </>
    )
}

export default Navbar;
