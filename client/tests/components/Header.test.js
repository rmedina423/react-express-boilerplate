import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../javascripts/components/Header';

describe('Header Component', function () {
  beforeEach(() => {
    this.header = shallow(<Header name="myHeaderWorks" />);
  });

  test('renders Header', () => {
    expect(this.header.instance().props.name).toBe('myHeaderWorks');
  });
});