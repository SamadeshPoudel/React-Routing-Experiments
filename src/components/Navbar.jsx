import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
    <div style={{background: "black", color:"white"}}>This is a simple navbar which you'll see in every routes</div>
    <Link to="Landing"><button>Landing page</button></Link>
    <Link to="Dashboard"><button>Dashboard page</button></Link>
    </div>
    </>
    
  )
}

export default Navbar