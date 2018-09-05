import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Example } from './StickyList.stories';

describe('<StickyList/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Example />, div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
