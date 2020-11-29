import React from 'react'
import { Link } from 'react-router-dom';

function IbmJob() {
    return (
        <div>
    <div class='container' id='jobpage'>

            <div id='job-header'>
            <h1>Back End Developer</h1>
            <div id='job-info'>
                <div class='job-type'>
                    <span class='homeoffice'>Home Office</span>
                </div>
                <div class='locality'>
                    <i class='fas fa-map-marker-alt'></i>
                    <p>Armonk, New York</p>
                </div>
                <div class='date'>
                    <i class='far fa-calendar-alt'></i>
                    <p>Posted 5 days ago</p>
                </div>
            </div>
        </div>
        <div class='wrapper'>
            <main id='job-container' class='wrapper'>
                <div class='about-company-container'>
                    <h2 class='page-title'>About company</h2>
                    <img src='..\IMG\ibm.jpg' id='company-img' alt='' />
                    <p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex dolor, a pulvinar nibh cursus vel. Curabitur pellentesque eu diam at semper. Curabitur vitae imperdiet libero, a ultricies dui. Aliquam venenatis lectus nec risus consectetur tristique. Integer in lorem eu nunc auctor suscipit vel sed enim. Morbi pretium lacinia erat nec dapibus. Duis sollicitudin dolor vel mauris faucibus, in pellentesque dui pulvinar. Ut bibendum fermentum lacus vitae pharetra. Nulla elementum enim vel consequat tempus. Nam nec tellus vitae tortor pulvinar blandit.</p>
                </div>
                <div id='description-container'>
                    <h2 class='page-title'>Job Description</h2>
                    <p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex dolor, a pulvinar nibh cursus vel. Curabitur pellentesque eu diam at semper. Curabitur vitae imperdiet libero, a ultricies dui. Aliquam venenatis lectus nec risus consectetur tristique. Integer in lorem eu nunc auctor suscipit vel sed enim. Morbi pretium lacinia erat nec dapibus. Duis sollicitudin dolor vel mauris faucibus, in pellentesque dui pulvinar. Ut bibendum fermentum lacus vitae pharetra. Nulla elementum enim vel consequat tempus. Nam nec tellus vitae tortor pulvinar blandit.</p>
                </div>
                <div id='requirements-container'>
                    <h2 class='page-title'>Requirements</h2>
                    <ul class='jobpage-list'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div id='benefits-container'>
                    <h2 class='page-title'>Benefits</h2>
                    <ul class='jobpage-list'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </main>
            <aside id='companyinfo-container'>
                <img src='..\IMG\ibm2.png' alt='' />
                <div class='job-type'>
                    <span class='homeoffice'>Home Office</span>
                </div>
                <Link to='/Applied' id='apply-btn'>Apply</Link>
                <div class='companysocial-container'>
                    <ul id='job-social-list'>
                        <li>
                            <Link to=''>
                                <i class='fab fa-facebook-square'></i>
                                <span>Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i class='fab fa-instagram'></i>
                                <span>Instagram</span>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i class='fab fa-linkedin'></i>
                                <span>Linkedin</span>
                            </Link>
                        </li>
                    </ul>
                </div>
             </aside>
    </div>
        </div>
        </div>
    )
}

export default IbmJob;
