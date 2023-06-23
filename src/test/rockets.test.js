import React from 'react';
import renderer from 'react-test-renderer';
import Rocket from '../components/__mocks__/Rocket';

describe('Rockets', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Rocket />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
