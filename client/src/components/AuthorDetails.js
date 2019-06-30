import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getAuthorQuery } from '../queries/queries';

class AuthorDetails extends Component {
  //console.log('Props: ', this.props);
  displayAuthorDetails() {
    const { author } = this.props.data;
    if (author) {
      return (
        <div>
          <h2>{author.name}</h2>
          <p>{author.age}</p>
          <p>All Books by this Author:</p>
          <ul className='other-books'>
            {author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No author selected ...</div>;
    }
  }
  render() {
    return <div id='book-details'>{this.displayAuthorDetails()}</div>;
  }
}

export default graphql(getAuthorQuery, {
  options: props => {
    return {
      variables: {
        id: props.authorId
      }
    };
  }
})(AuthorDetails);
