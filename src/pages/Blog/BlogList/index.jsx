import React from 'react'
import BlogItem from './BlogItem'

function BlogList({blogs}) {
  return (
    <section id="blog">

    <div className='blog-heading'>
        <h1>Musings, workings, and everything inbetween.</h1>
    </div>
    
    <div className='blog-container'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id}/>
      ))}
    </div>

    </section>
  );
}

export default BlogList
