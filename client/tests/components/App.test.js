import React from 'react';
import { shallow } from 'enzyme';

import App from '../../javascripts/components/App';
import HomePage from '../../javascripts/components/HomePage';
import Header from '../../javascripts/components/Header';
import Footer from '../../javascripts/components/Footer';

describe('App Component', function () {
  beforeEach(() => {
    this.app = shallow(
      <App>
        {<HomePage />}
      </App>
    );
  });

  test('renders a HomePage', () => {
    expect(this.app.contains(<HomePage />)).toBe(true);
  });

  test('renders a Header', () => {
    expect(this.app.contains(<Header />)).toBe(true);
  });

  test('renders a Footer', () => {
    expect(this.app.contains(<Footer />)).toBe(true);
  });
});