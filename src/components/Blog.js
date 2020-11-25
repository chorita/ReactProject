import React from 'react';

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
                    <h4><a href='..\HTML\article1.html'>Article Number One</a></h4>
                    <p className='article-date'>November 1, 2020 | 0 Comments</p>
                    <p className='article-resume'>Lorem ipsum dolor sit amet</p>
                    <a href='..\HTML\article1.html' className='article-btn light-btn'>Read post</a>
                </div>
                <div className='article-box'>
                    <img src='..\IMG\blog2.jpg' alt='' />
                    <h4><a href='..\HTML\article2.html'>Article Number Two</a></h4>
                    <p className='article-date'>October 31, 2020 | 0 Comments</p>
                    <p className='article-resume'>Lorem ipsum dolor sit amet</p>
                    <a href='..\HTML\article2.html' className='article-btn light-btn'>Read post</a>
                </div>
                <div className='article-box'>
                    <img src='..\IMG\blog3.jpg' alt='' />
                    <h4><a href='..\HTML\article3.html'>Article Number Three</a></h4>
                    <p className='article-date'>October 30, 2020 | 0 Comments</p>                    <p className='article-resume'>Lorem ipsum dolor sit amet</p>
                    <a href='..\HTML\article3.html' className='article-btn light-btn'>Read post</a>
                </div>
            </section>
        </div>
    )
}

export default Blog;
