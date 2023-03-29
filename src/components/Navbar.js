import React from 'react'
import logo from "../assets/paperFlourish.png";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>

        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
