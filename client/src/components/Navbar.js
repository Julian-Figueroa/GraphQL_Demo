import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <ul>
        <li>
          <i className={icon} /> {title}
        </li>
        <li>
          <Link to='/'>Books</Link>
        </li>
        <li>
          <Link to='/authors'>Authors</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'List of Books',
  icon: 'fab fa-facebook'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
