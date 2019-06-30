import React, { Fragment } from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './AddAuthor';

const Authors = () => (
  <Fragment>
    <AuthorList />
    <AddAuthor />
  </Fragment>
);

export default Authors;
