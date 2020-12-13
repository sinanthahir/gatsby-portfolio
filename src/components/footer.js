import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Made with <span className="icon -love"><RiHeart2Line/></span> 2020 <Link to="https://www.linkedin.com/in/sinanthahir/">Sinan Thahir</Link></p>
    </div>
  </footer>
)

export default Footer