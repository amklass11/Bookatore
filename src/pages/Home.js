import React from 'react';
import BookList from '../components/BookList';
import { Form } from '../components/Form';

const Home = () => (
  <div className="container">
    <BookList />
    <Form />
  </div>
);

export default Home;
