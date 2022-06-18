import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export function Form() {
  const empty = {
    title: '',
    author: '',
    category: '',
  };

  const [book, setBook] = useState(empty);

  const dispatch = useDispatch();

  const bookTitleHandler = (e) => {
    setBook({
      ...book,
      title: e.target.value,
    });
  };

  const authorHandler = (e) => {
    setBook({
      ...book,
      author: e.target.value,
    });
  };

  const categoryHandler = (e) => {
    setBook({
      ...book,
      category: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const author = (book.author || '').trim();
    const title = (book.title || '').trim();
    const { category } = book;

    if (author !== '' && title !== '' && category !== '') {
      const book = {
        id: uuid(),
        title,
        author,
        category,
      };

      dispatch(addBook(book));

      setBook(empty);

      document.querySelector('#title').focus();
    }
  };

  return (
    <div className="form-container">
      <h2 className="h2-form">ADD NEW BOOK</h2>
      <form className="inputs">
        <input id="title" type="text" placeholder="Book title" value={book.title} onChange={bookTitleHandler} />
        <input id="author" type="text" placeholder="Author" value={book.author} onChange={authorHandler} />
        <select value={book.category} onChange={categoryHandler}>
          <option value="">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="add white-font" type="submit" onClick={onSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
