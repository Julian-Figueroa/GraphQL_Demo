import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getAuthorsQuery } from '../queries/queries';

class AuthorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayAuthor() {
    let data = this.props.data;

    if (data.loading) {
      return <div>Loading Authors ...</div>;
    } else {
      return data.authors.map(author => {
        return (
          <li
            key={author.id}
            onClick={e => {
              this.setState({
                selected: author.id
              });
            }}
          >
            {' '}
            {author.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id='author-list'>{this.displayAuthor()}</ul>
        {/* <BookDetails bookId={this.state.selected} /> */}
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AuthorList);
