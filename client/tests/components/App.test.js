import React from 'react';
import { shallow } from 'enzyme';

import App from '../../javascripts/components/App';

describe('App Component', function () {
  beforeEach(() => {
    this.app = shallow(<App name="myAppWorks" />);
  });

  test('renders App', () => {
    expect(this.app.instance().props.name).toBe('myAppWorks');
  });
});