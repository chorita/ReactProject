import React from 'react';
import { Link } from 'react-router-dom';

function FormSuccess() {
    return (
        <div>
            <main id="contact-success-container" class="wrapper">
                <h1>Thank You!</h1>
                <h2>Your job post will be advertised very soon..</h2>
                <div class="btnjobs-container">
                        <Link to='/' class="btn-jobs">Back to Home</Link>
                    </div>
            </main>
        </div>
    )
}
export default FormSuccess;
