import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';

const BookEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [book, setBook] = useState({
    Title: '',
    Author: '',
    Price: 0,
    Description: '',
    ISBN: '',
    bookImage: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/books/singledata/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`http://localhost:9091/books/update/${id}`, book)
      .then((res) => {
        console.log(res.data);
        alert('Book updated successfully!');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Edit Your Books</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" name="Title" value={book.Title} onChange={handleChange}/>

        <label htmlFor="">Author</label>
        <input type="text" name="Author" value={book.Author} onChange={handleChange} />

        <label htmlFor="">Price</label>
        <input type="number" name="Price" value={book.Price} onChange={handleChange} />

        <label htmlFor="">Description</label>
        <textarea type="text" name="Description" value={book.Description} onChange={handleChange} />

        <label htmlFor="">Book Image</label>
        <textarea type="text" name="bookImage" value={book.bookImage} onChange={handleChange} />

        <label htmlFor=""></label>
        <textarea type="text" name="bookImage" value={book.bookImage} onChange={handleChange} />

        <button>Edit Book</button>
      </form>
    </div>
  )
}

export default BookEdit;
