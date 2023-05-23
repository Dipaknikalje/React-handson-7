import React from 'react'
import {  NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        
<NavLink to={"/"} className='navchild'>
<p className='navp'>Home</p>  

</NavLink>
<NavLink to={"/Student"} className='navchild'>
<p className='navp'>Student</p>  

</NavLink>
<NavLink to={"/ContactUs"} className='navchild'>
<p className='navp'>Contact Us</p>  

</NavLink>

    </div>
  )
}

export default Navbar;