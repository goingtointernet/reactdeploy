import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Main() {
  return (
     <section id="main">
     <div className="main-bg">
       <img src="images/main.png" alt="NICK RUSLAN" />
     </div>
     {/*text***********************/}
     <div className="main-text">
       <strong>Hello, it's me</strong>
       <h1>NICK RUSLAN<span>.</span></h1>
       <p>Talented medical scientist with 2 years of experience analyzing specimens and delivering speedy results to
         propel health outcomes for patients.</p>
       <div className="main-social">
         <a rel="noreferrer" href="https://github.com/eversometiculous" target="_blank"><FaGithubAlt/></a>
         <a rel="noreferrer" href="https://www.linkedin.com/in/nasir-ruslan-9114b1176/" target="_blank"><FaLinkedinIn /></a>
         <a rel="noreferrer" href="https://twitter.com/nasisfast" target="_blank"><FaTwitter/></a>
         <a rel="noreferrer" href="https://www.instagram.com/nasisfast/" target="_blank"><FaInstagram/></a>
       </div>
       <a href="#summery">Scroll For Me</a>
     </div>
     {/*Images*********************/}
     <div className="main-img">
       <img src="/assets/images/main.png" alt="Brock Freeman - BF portrait" />
     </div>
   </section>
  )
}

export default Main
