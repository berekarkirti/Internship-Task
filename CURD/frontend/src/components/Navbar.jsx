import React from 'react'
import { Link } from 'react-router'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <a href="/">BookList</a>
        <a href="/bookadd">BookAdd</a>
    </div>
  )
}

export default Navbar
