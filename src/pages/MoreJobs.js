import React from 'react';
import{ Link } from 'react-router-dom';

function MoreJobs() {
    return (
        <div>
            <main id="contact-success-container" class="wrapper">
                <h1>Sorry!</h1>
                <h2>There is no more job posting available.</h2>
                    <div class="btnjobs-container">
                        <Link to='/' class="btn-jobs">Back to Home</Link>
                    </div>
            </main>
        </div>
    )
}

export default MoreJobs;
