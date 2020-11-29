import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer>
                <div className='wrapper'>
                    <div className='footer-box'>
                        <div className='company-footer'>
                        <Link to='/'>
                            <img src='..\IMG\logo.png' alt='' />
                        </Link>
                        <h2><ins><strong>JobSearch</strong></ins></h2>
                        <p><i>The easiest way to find your new job</i></p>
                    </div>
                </div>
                    <div className='footer-box'>
                        <div className='articles-footer'>
                            <h2>Recent articles</h2>
                            <ul className='footer-list footer-article-list'>
                                <li>
                                    <Link to='Article1'><ins>Article Number One</ins></Link>
                                    <span className='article-date'>November 1, 2020</span>
                                </li>
                                <li>
                                    <Link to='Article2'><ins>Article Number Two</ins></Link>
                                    <span className='article-date'>October 31, 2020</span>
                                </li>
                                <li>
                                    <Link to='Article3'><ins>Article Number Three</ins></Link>
                                    <span className='article-date'>October 30, 2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-box'>
                        <h2>Find us on social media</h2>
                        <ul className='footer-list'>
                            <li>
                                <Link to=''>
                                    <i className='fab fa-facebook-square'></i>
                                    <span>Facebook</span>
                                </Link>
                            </li>
                            <li>
                                <Link to=''>
                                    <i className='fab fa-instagram'></i>
                                    <span>Instagram</span>
                                </Link>
                            </li>
                            <li>
                                <Link to=''>
                                    <i className='fab fa-linkedin'></i>
                                    <span>Linkedin</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                        <div className='footer-bottom'>
                            <div className='wrapper'>
                            <p>Project for ComIT by Carlos Horita - 2020</p>
                        </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
