import React from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import About from './About'
import Contact from './Contact'
import Main from './Main'
import More from './More'
import Resume from './Resume'
import Skill from './Skill'
function Home() {
  return (
    <div>  
        <Header/>
        <Main/>
        <About/>
        <Skill/>
        <Resume />
        <More />
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
