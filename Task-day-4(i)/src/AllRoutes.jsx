import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Navbar from './components/Navbar';

const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </>
    )
}

export default AllRoutes
