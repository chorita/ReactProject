import React from 'react';
import LastJobs from '../LastJobs';
import Mainbanner from '../MainBanner';
import SendJobs from '../SendJobs';
import Status from '../Status';
import Testimony from '../Testimony';
import Blog from '../Blog';

function Home () {
    return (
        <>
            <Mainbanner />
            <LastJobs />
            <SendJobs />
            <Status />
            <Testimony />
            <Blog />
        </>
    )
}

export default Home;