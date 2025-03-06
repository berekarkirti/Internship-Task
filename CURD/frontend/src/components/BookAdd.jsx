import axios from 'axios';
import React, { useState } from 'react'

const BookAdd = () => {
  const [book, setBook] = useState({ Title: '', Author: '', Price: '', Description: '', ISBN: '', PublishedDate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book)
    axios.post("http://localhost:9091/books/create", book)
      .then((res) => {
        console.log(res.data);
        alert("Books Added !");
        setBook({ Title: '', Author: '', Price: '', Description: '', ISBN: '', PublishedDate:'' })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Add Your Books</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" name="Title" value={book.Title} onChange={handleChange} />

        <label htmlFor="">Author</label>
        <input type="text" name="Author" value={book.Author} onChange={handleChange} />

        <label htmlFor="">Price</label>
        <input type="number" name="Price" value={book.Price} onChange={handleChange} />

        <label htmlFor="">Description</label>
        <textarea type="text" name="Description" value={book.Description}  onChange={handleChange} />

        <label>ISBN</label>
        <input type="text" name="ISBN" value={book.ISBN} onChange={handleChange} />
        
        <label>PublishedDate</label>
        <input type="date" name='PublishedDate' value={book.PublishedDate} onChange={handleChange}/>
        
        <button>Add Book</button>
      </form>
    </div>
  )
}

export default BookAdd;
