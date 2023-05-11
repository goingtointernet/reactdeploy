import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { blogList } from '../../config/data';

const BlogPage = () => {
    const {id}=useParams();
    const [blog, setBlogPage] = useState(null);

    useEffect(() => {
        let blog = blogList.find(blog => blog.id === parseInt(id));
        if(blog){
            setBlogPage(blog);
        }
        
    },[]); 
  return (
    <>
    <Header />
    {blog ? (
        <section id="post">
        <img src={blog.cover} alt={blog.title} className="blog-img" />
        <div className="content-post">
          <h1>{blog.title}</h1>
          <span>{blog.createdAt}</span>
          <p>{blog.done}</p>
          <p>{blog.dtwo}</p>
          <p>{blog.dthree}</p>
          <strong>Regards</strong><br />
          <span>{blog.authorName}</span>
        </div>
      </section>
      ) : (<section id="post"><center><br/><h1>Page Not Found - 404</h1></center></section>
    )}
    <Footer/>
    </>
  )
}

export default BlogPage
