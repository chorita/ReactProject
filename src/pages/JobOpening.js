import React from 'react';
import { Link } from 'react-router-dom';

function JobOpening() {
    return (
        <main id='lastjobs-container' class='wrapper'>
            <div id='jobopening'>
            <h1>Seek your job</h1>
            <div id='job-filter'>
                <div id='search-form'>
                    <form>
                        <input type='text' name='job' placeholder='Type the position' />
                        <select name='province'>
                            <option value=''>All places</option>
                            <option value=''>Mountain View, California, USA</option>
                            <option value=''>Armonk, New York, USA</option>
                            <option value=''>Sunnyvale, California, USA</option>
                            <option value=''>Menlo Park, California, USA</option>
                        </select>
                        <select name='category'>
                            <option value=''>Categories</option>
                            <option value=''>Home Office</option>
                            <option value=''>On Site</option>
                        </select>
                        <input type='submit' value='Search' />
                    </form>
                </div>
            </div>
            </div>
            <div id='type-filter'>
                <ul>
                    <li>
                        <input type='checkbox' checked /><label>On Site</label>
                    </li>
                    <li>
                        <input type='checkbox' checked /><label>Home Office</label>
                    </li>
                </ul>

            </div>

                <ul>
                    <li>
                        <Link to='/GoogleJob' className='clickarea'>
                            <div className='company-box'>
                                        <img src='..\IMG\google.png' alt='' />
                                    <div className='company-info'>
                                        <h3>Developer</h3>
                                        <p>Google</p>
                                    </div>
                            </div>
                            <div className='locality'>
                                <i className=' fas fa-map-marker-alt'></i>
                                <p>Mountain View, California, USA</p>
                            </div>
                            <div className='job-type'>
                                <span className='onsite'>On site</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to='/IbmJob' className='clickarea'>
                            <div className='company-box'>
                                <img src='..\IMG\ibm.png' alt='' />
                                    <div className='company-info'>
                                        <h3>Back End Developer</h3>
                                        <p>IBM</p>
                                    </div>
                            </div>
                                    <div className='locality'>
                                        <i className=' fas fa-map-marker-alt'></i>
                                        <p>Armonk, New York, USA</p>
                                    </div>
                            <div className='job-type'>
                                <span className='homeoffice'>Home Office</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to='/LinkedinJob' className='clickarea'>
                            <div className='company-box'>
                                <img src='..\IMG\linkedin.png' alt='' />
                                    <div className='company-info'>
                                        <h3>Front End Developer</h3>
                                        <p>Linkedin</p>
                                    </div>
                            </div>
                                    <div className='locality'>
                                        <i className=' fas fa-map-marker-alt'></i>
                                        <p>Sunnyvale, California, USA</p>
                                    </div>
                            <div className='job-type'>
                                <span className='onsite'>On site</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to='/FacebookJob' className='clickarea'>
                            <div className='company-box'>
                                <img src='..\IMG\facebook.png' alt='' />
                                    <div className='company-info'>
                                        <h3>Full Stack Developer</h3>
                                        <p>Facebook</p>
                                    </div>
                            </div>
                                    <div className='locality'>
                                        <i className=' fas fa-map-marker-alt'></i>
                                        <p>Menlo Park, California, USA</p>
                                    </div>
                                <div className='job-type'>
                                    <span className='homeoffice'>Home Office</span>
                                </div>
                            </Link>
                        </li>
                </ul>
                    <div className='btnjobs-container'>
                        <Link to='/MoreJobs' className='btn-jobs'>Load more jobs</Link>
            </div>
        </main>
    )
}

export default JobOpening;
