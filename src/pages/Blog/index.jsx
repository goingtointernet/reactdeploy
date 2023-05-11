import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import { blogList } from '../../config/data'
import BlogList from './BlogList'
function Blog() {
  return (
    <div>
      <Header/>
      <BlogList blogs={blogList}/>
      <Footer/>
    </div>
  )
}

export default Blog
