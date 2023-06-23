/* eslint-disable import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMissions } from '../redux/mission/missionSlice';

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
          id: '1', name: 'Mission 1', description: 'Description 1',
        },
        {
          id: '2', name: 'Mission 2', description: 'Description 2',
        },
      ]),
    });

    const expectedActions = [
      fetchMissions.pending().type,
      fetchMissions.fulfilled([
        {
          id: '1', name: 'Mission 1', description: 'Description 1',

        },
        {
          id: '2', name: 'Mission 2', description: 'Description 2',

        },
      ]).type,
    ];

    await store.dispatch(fetchMissions());

    const dispatchedActions = store.getActions();

    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });

  it('dispatches the correct actions when API call fails', async () => {
    global.fetch = jest.fn().mockRejectedValue('API error');

    const expectedActions = [
      fetchMissions.pending().type,
      fetchMissions.rejected().type,
    ];

    await store.dispatch(fetchMissions());

    const dispatchedActions = store.getActions();

    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });
});
