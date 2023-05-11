import React from 'react'
import { Link } from 'react-router-dom'

function BlogItem({blog:{id, description, title, createdAt, authorName, cover, category, done, dtwo, dthree}}) {
  return (
    <div className="blog-box">
        {/*img*/}
        <div className="blog-img">
          <img alt="blog" src={cover} />
        </div>
        {/*text*/}
        <div className="blog-text">
          <span>{createdAt} / {category}</span>
          <Link to={'/blog/'+id} className="blog-title">{title}</Link>
          <p>{description}</p>
          <Link to={'/blog/'+id}><a>Read More</a></Link>
        </div>
      </div>
  )
}

export default BlogItem
