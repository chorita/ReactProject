import React from 'react';

function Status() {
    return (
        <div>
            <section id='status-container' className='wrapper'>
                <h2 className='title-center'>JobSearch Statistics</h2>
                <p className='p-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed lobortis ex dolor, a pulvinar nibh cursus vel.</p>
               <div>
                        <div className='status-box'>
                            <span className='status-qtd'>100</span>
                            <p className='status-text'>Open positions</p>
                       </div>
                       <div className='status-box'>
                            <span className='status-qtd'>250</span>
                            <p className='status-text'>Successful candidates</p>
                        </div>
                        <div className='status-box'>
                            <span className='status-qtd'>65</span>
                            <p className='status-text'>Companies involved</p>
                        </div>
                        <div className='status-box'>
                            <span className='status-qtd'>475</span>
                            <p className='status-text'>Applicant</p>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Status;
