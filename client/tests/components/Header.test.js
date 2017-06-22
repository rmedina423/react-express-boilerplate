import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../javascripts/components/Header';

describe('Header Component', function () {
  beforeEach(() => {
    this.header = shallow(<Header />);
  });

  test('renders Header', () => {
    expect(this.header.text()).toBe('Header');
  });
});