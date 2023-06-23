import React from 'react';
import renderer from 'react-test-renderer';
import MissionsList from '../components/__mocks__/MissionsList';

describe('MissionsList', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MissionsList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
