import React, { Fragment } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';

const Books = () => (
  <Fragment>
    <BookList />
    <AddBook />
  </Fragment>
);

export default Books;
