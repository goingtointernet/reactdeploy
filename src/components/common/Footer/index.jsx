import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <span>Copyright 2023 - NICK RUSLAN</span>
        <Link to={'/'} className="footer-logo">NICK RUSLAN</Link>
    </footer>
  )
}

export default Footer
