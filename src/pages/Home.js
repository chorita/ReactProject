import React from 'react';
import LastJobs from '../components/LastJobs';
import Mainbanner from '../components/MainBanner';
import SendJobs from '../components/SendJobs';
import Status from '../components/Status';
import Testimony from '../components/Testimony';
import Blog from '../components/Blog';

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