import { render } from '@testing-library/react';
import RocketList from '../components/rockets/RocketList';

describe('test components render correctly', () => {
  test('test RocketList component', () => {
    const { container } = render(<RocketList />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
