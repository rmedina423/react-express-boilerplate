import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

export default function App(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired
};