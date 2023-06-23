import React from 'react';
import renderer from 'react-test-renderer';
import Navibar from '../components/__mocks__/Navibar';

describe('Navibar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Navibar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
