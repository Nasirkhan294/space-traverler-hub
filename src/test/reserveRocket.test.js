import rocketsReducer, { reserveRocket } from '../redux/rockets/rocketSlice';

describe('test Reservation reducer', () => {
  it('should change the reserved property to true of the rocket with the given id', () => {
    const initialState = {
      rockets: [
        {
          id: '1', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png', reserved: false,
        },
        {
          id: '7', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png', reserved: false,
        },
      ],
    };

    const expectedState = {
      rockets: [
        {
          id: '1', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png', reserved: true,
        },
        {
          id: '7', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png', reserved: false,
        },
      ],
    };

    const action = reserveRocket('1');
    const actualState = rocketsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
