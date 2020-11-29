import React from 'react';
import { Link } from 'react-router-dom';

function LastJobs() {
    return (
       <>
        <main id='lastjobs-container' className='wrapper'>
            <h1>Latest job post</h1>
            <ul>
                <li>
                    <Link to='GoogleJob' className='clickarea'>
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
                    <Link to='IbmJob' className='clickarea'>
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
                    <Link to='LinkedinJob' className='clickarea'>
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
                    <Link to='FacebookJob' className='clickarea'>
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
                <Link to='JobOpening' className='btn-jobs'>See more jobs</Link>
            </div>
        </main>
       </>
    )
}

export default LastJobs;
