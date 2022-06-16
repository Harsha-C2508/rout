import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link style={{ textDecoration:"none" }} to='/'>Home</Link>
        <Link style={{ marginLeft:"20px",textDecoration:"none" }} to='/products'>Products</Link>
    </div>
  )
}

export default Navbar