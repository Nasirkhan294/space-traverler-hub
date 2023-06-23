import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getRockets } from '../redux/rockets/rocketSlice';

const mockStore = configureMockStore([thunk]);

describe('getRockets async action', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches the correct actions when API call is successful', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        {
          id: '1', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png', reserved: false,
        },
        {
          id: '2', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png', reserved: false,
        },
      ]),
    });

    const expectedActions = [
      getRockets.pending().type,
      getRockets.fulfilled([
        {
          id: '1', rocket_name: 'Rocket 1', description: 'Description 1', image: 'rocket1.png', reserved: false,
        },
        {
          id: '2', rocket_name: 'Rocket 2', description: 'Description 2', image: 'rocket2.png', reserved: false,
        },
      ]).type,
    ];

    await store.dispatch(getRockets());

    const dispatchedActions = store.getActions();

    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });

  it('dispatches the correct actions when API call fails', async () => {
    global.fetch = jest.fn().mockRejectedValue('API error');

    const expectedActions = [
      getRockets.pending().type,
      getRockets.rejected().type,
    ];

    await store.dispatch(getRockets());

    const dispatchedActions = store.getActions();

    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });
});
