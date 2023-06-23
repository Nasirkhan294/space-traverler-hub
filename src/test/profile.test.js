import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../components/__mocks__/Profile';

describe('Profile', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Profile />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
