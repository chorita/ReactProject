import React from 'react';

function LastJobs() {
    return (
       <>
        <main id='lastjobs-container' className='wrapper'>
            <h1>Latest job post</h1>
            <ul>
                <li>
                    <a href='job.html' className='clickarea'>
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
                </a>
                </li>

                <li>
                    <a href='job2.html' className='clickarea'>
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
                </a>
                </li>

                <li>
                    <a href='job3.html' className='clickarea'>
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
                </a>
                </li>

                <li>
                    <a href='job4.html' className='clickarea'>
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
                </a>
                </li>
            </ul>
            
            <div className='btnjobs-container'>
                <a href='..\HTML\jobopening.html' className='btn-jobs'>See more jobs</a>
            </div>
        </main>
       </>
    )
}

export default LastJobs;
