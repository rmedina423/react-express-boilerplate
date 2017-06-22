import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../javascripts/components/Footer';

describe('Footer Component', function () {
  beforeEach(() => {
    this.footer = shallow(<Footer />);
  });

  test('renders Footer', () => {
    expect(this.footer.text()).toBe('Footer');
  });
});