import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

export default function App(props) {
  return (
    <div>
      <Header />
      <h1>Hello {props.name}</h1>
      <Footer />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
};

App.defaultProps = {
  name: 'Joey'
};