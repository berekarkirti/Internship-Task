import React from 'react'
import BookList from './components/BookList'
import BookAdd from './components/BookAdd'
import BookDetails from './components/BookDetails'
import BookEdit from './components/BookEdit'
import { Route, Routes } from 'react-router'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<BookList />}/>
      <Route path='/bookadd' element={<BookAdd />}/>
      <Route path='/bookdetail/:id' element={<BookDetails />}/>
      <Route path='/bookedit/:id' element={<BookEdit />}/>
    </Routes>
  )
}

export default AllRoutes;
