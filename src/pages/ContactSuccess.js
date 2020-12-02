import React from 'react';
import { Link } from 'react-router-dom';

function ContactSuccess() {
    return (
        <div>
            <main id="contact-success-container" class="wrapper">
                <h1>Message Sent!</h1>
                <h2>We will send you a reply as soon as possible.</h2>
                    <div class="btnjobs-container">
                        <Link to='/' class="btn-jobs">Back to Home</Link>
                    </div>
            </main>
        </div>
    )
}

export default ContactSuccess;
