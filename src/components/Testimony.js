import React from 'react';

function Testimony() {
    return (
        <div>
            <section id='testimony-container'>
                <div className='wrapper'>
                    <h2>See what the applicants say</h2>
                    <p className='p-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed lobortis ex dolor, a pulvinar nibh cursus vel. Curabitur pellentesque eu diam at semper</p>
                    <div className='testimony-box'>
                        <p className='testimony-msg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <img src='..\IMG\avatar1.png' alt='' />
                        <p className='testimony-name'>John</p>
                    </div>
                    <div className='testimony-box'>
                        <p className='testimony-msg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <img src='..\IMG\avatar2.png' alt='' />
                        <p className='testimony-name'>Mary</p>
                    </div>
                    <div className='testimony-box'>
                        <p className='testimony-msg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <img src='..\IMG\avatar3.png' alt='' />
                        <p className='testimony-name'>Alex</p>
                    </div>
                    <div className='testimony-box'>
                        <p className='testimony-msg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <img src='..\IMG\avatar4.png' alt='' />
                        <p className='testimony-name'>Rachel</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimony;
