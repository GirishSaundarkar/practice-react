import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='container'>
            <div className='container-fluid d-flex justify-content-between'>
                <NavLink to='/home' >Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/add'>Add</NavLink>
                <NavLink to='/retrieve' >Retrieve</NavLink>
            </div>
        </div>
    )
}

export default NavBar