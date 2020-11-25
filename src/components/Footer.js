import React from 'react';

function Footer() {
    return (
        <div>
            <footer>
                <div className='wrapper'>
                    <div className='footer-box'>
                        <div className='company-footer'>
                        <a href='..\HTML\index.html'>
                            <img src='..\IMG\logo.png' alt='' />
                        </a>
                        <h2><ins><strong>JobSearch</strong></ins></h2>
                        <p><i>The easiest way to find your new job</i></p>
                    </div>
                </div>
                    <div className='footer-box'>
                        <div className='articles-footer'>
                            <h2>Recente articles</h2>
                            <ul className='footer-list footer-article-list'>
                                <li>
                                    <a href='..\HTML\article1.html'><ins>Article Number One</ins></a>
                                    <span className='article-date'>November 1, 2020</span>
                                </li>
                                <li>
                                    <a href='..\HTML\article2.html'><ins>Article Number Two</ins></a>
                                    <span className='article-date'>October 31, 2020</span>
                                </li>
                                <li>
                                    <a href='..\HTML\article3.html'><ins>Article Number Three</ins></a>
                                    <span className='article-date'>October 30, 2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-box'>
                        <h2>Find us on social media</h2>
                        <ul className='footer-list'>
                            <li>
                                <a href='#facebook.ca'>
                                    <i className='fab fa-facebook-square'></i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href='instagram.com'>
                                    <i className='fab fa-instagram'></i>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href='linkedin.com'>
                                    <i className='fab fa-linkedin'></i>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                        <div className='footer-bottom'>
                            <div className='wrapper'>
                            <p>Project by Carlos Horita - 2020</p>
                        </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
