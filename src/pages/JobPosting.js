import React from 'react';
import { Link } from 'react-router-dom';

function JobPosting() {
    return (
        <div>
            <div class='container' id='jobposting'>
                <main id='jobposting-container' class='wrapper'>
                    <h1>Please fill in the form below</h1>
                        <form action='/FormSuccess' method='GET'>
                            <div class='input-box'>
                                <label>Job position <span class='required'>*</span></label>
                                <input type='text' name='jobtitle' placeholder='Insert a job position' />
                            </div>
                            <div class='input-box'>
                                <label>Job description <span class='required'>*</span></label>
                                <textarea type='text' name='description' placeholder='Insert a job description' />
                            </div>
                            <div class='input-box'>
                                <label>Company's Name <span class='required'>*</span></label>
                                <input type='text' name='company' placeholder='Insert a company name' />
                            </div>
                            <div class='input-box'>
                                <label>Type of job <span class='required'>*</span></label>
                                <select name='jobtype'>
                                <option value=''>Choose an option</option>
                                <option value='homeoffice'>Home Office</option>
                                <option value='onsite'>On Site</option>
                                </select>
                            </div>
                            <div class='input-box'>
                                <input type='submit' value='Send' />
                            </div>
                        </form>
                    </main>
    </div>
        </div>
    )
}

export default JobPosting;
