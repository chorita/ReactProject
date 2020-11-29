import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <div>
            <section id='blog-container' className='wrapper'>
                <h2 className='title-center'>Latest articles from our blog</h2>
                <p className='p-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex dolor, 
                a pulvinar nibh cursus vel. Curabitur pellentesque eu diam at semper. Curabitur vitae imperdiet libero, 
                a ultricies dui. Aliquam venenatis lectus nec risus consectetur tristique.</p>
                <div className='article-box'>
                    <img src='..\IMG\blog1.jpg' alt='' />
                    <h4><Link to='/Article1'>Article Number One</Link></h4>
                    <p className='article-date'>November 1, 2020 | 0 Comments</p>
                    <p className='article-resume'>Lorem ipsum dolor sit amet</p>
                    <Link to='Article1' className='article-btn light-btn'>Read post</Link>
                </div>
                <div className='article-box'>
                    <img src='..\IMG\blog2.jpg' alt='' />
                    <h4><Link to='/Article2'>Article Number Two</Link></h4>
                    <p className='article-date'>October 31, 2020 | 0 Comments</p>
                    <p className='article-resume'>Lorem ipsum dolor sit amet</p>
                    <Link to='Article2' className='article-btn light-btn'>Read post</Link>
                </div>
                <div className='article-box'>
                    <img src='..\IMG\blog3.jpg' alt='' />
                    <h4><Link to='Article3'>Article Number Three</Link></h4>
                    <p className='article-date'>October 30, 2020 | 0 Comments</p>                    
                    <p className='article-resume'>Lorem ipsum dolor sit amet</p>
                    <Link to='Article3' className='article-btn light-btn'>Read post</Link>
                </div>
            </section>
        </div>
    )
}

export default Blog;
