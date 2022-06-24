import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import image from '../img/percent.png';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const removeHandler = () => { dispatch(removeBook(id)); };

  return (
    <li className="item" id={id}>
      <div className="book-info">
        <p className="book-category">{category}</p>
        <h2 className="book-title">{title}</h2>
        <p className="book-author blue-font">{author}</p>
        <div className="book-buttons">
          <button className="blue-font" type="button">Comments</button>
          <span> | </span>
          <button id={id} className="remove blue-font" type="button" onClick={removeHandler}>
            Remove
          </button>
          <span> | </span>
          <button className="blue-font" type="button">Edit</button>
        </div>
      </div>
      <div className="percentage-container">
        <img className="percent-img" src={image} alt="percentage" />
        <div className='"percentage-info'>
          <p className="percentage">64%</p>
          <p className="completed grey-font">Completed</p>
        </div>
      </div>
      <div className="progress">
        <p className="current-chapter grey-font">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="update white-font" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
