import React from 'react';

function MainBanner() {
    return (
        <div>
            <div id='main-banner'>
                <div id='search-form'>
                    <h1>The easiest way to find your new job</h1>
                    <p>Connect free of charge to the best companies and get the job of your dreams.</p>
                    <form>
                        <input type='text' name='job' placeholder='Type the position' />
                        <select name='Province'>
                            <option value=''>All places</option>
                            <option value=''>Mountain View, California, USA</option>
                            <option value=''>Armonk, New York, USA</option>
                            <option value=''>Sunnyvale, California, USA</option>
                            <option value=''>Menlo Park, California, USA</option>
                        </select>
                        <select name='category'>
                            <option value=''>Categories</option>
                            <option value=''>Home Office</option>
                            <option value=''>On Site</option>
                        </select>
                        <input type='submit' value='Search' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;
