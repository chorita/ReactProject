import React from 'react';

function Contact() {
    return (
        <div>
            <div class='container' id='contact'>
                <main id='contact-container' class='wrapper'>
                    <h1>Contact us</h1>
                    <h2>A place where you can easily find solutions and ask questions</h2>
                        <form action='/ContactSuccess' method='GET'>
                            <div class='input-box'>
                                <label>How can we help?<span class='required'>*</span></label>
                                    <select name='jobtype'>
                                        <option value='chooseanoption'>Choose an option</option>
                                        <option value='jobopening'>Job Opening</option>
                                        <option value='jobposting'>Job Posting</option>
                                        <option value='askquestions'>Questions</option>
                                    </select>
                            </div>
                            <div class='input-box'>
                                <label>First Name <span class='required'>*</span></label>
                                <input type='text' name='firstName' placeholder='Insert your First Name' />
                            </div>
                            <div class='input-box'>
                                <label>Last Name <span class='required'>*</span></label>
                                <input type='text' name='lastName' placeholder='Insert your Last Name' />
                            </div>
                            <div class='input-box'>
                                <label>Your e-mail <span class='required'>*</span></label>
                                <input type='email' name='email' placeholder='Insert your e-mail' />
                            </div>
                            <div class='input-box'>
                    <           label>Description<span class='required'>*</span></label>
                                <textarea type='text' name='description' />
                            </div>
                            <div class='input-box'>
                                <input type='submit' value='Submit' />
                            </div>
                        </form>
                </main>
            </div>
        </div>
    )
}

export default Contact;
