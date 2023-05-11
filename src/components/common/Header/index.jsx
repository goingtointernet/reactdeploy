import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
  <nav className="navigation">
     {/*logo*/}
     <div className="logo-container">
       {/*logo*/}
       <Link to={'/'} className="logo">
         <img src="/assets/images/logo.png" alt="NICK RUSLAN" />
       </Link>
       {/*menu-btn*/}
       <input type="checkbox" className="menu-btn" id="menu-btn" />
       <label htmlFor="menu-btn" className="menu-icon">
         <span className="nav-icon" />
       </label>
       {/*menu*/}
       <ul className="menu">
         <li><a href="/#summery">About</a></li>
         <li><a href="/#languages">Skill</a></li>
         <li><a href="/#career-education">Resume</a></li>
         <li><Link to={'/blog'}>Blog</Link></li>
         <li><a href="/#contact" className="nav-contact">Contact</a></li>
       </ul>
     </div>
   </nav>
  )
}

export default Header
