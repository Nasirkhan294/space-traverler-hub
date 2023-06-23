import missionsReducer, { leaveMission } from '../redux/mission/missionSlice';

describe('joinMission reducer', () => {
  it('should add the reserved property of the mission with the given id', () => {
    const initialState = {
      missions: [
        {
          mission_id: '1', mission_name: 'Mission 1', description: 'Description 1', reserved: true,
        },
        {
          mission_id: '7', mission_name: 'Mission 2', description: 'Description 2', reserved: true,
        },
      ],
    };

    const expectedState = {
      missions: [
        {
          mission_id: '1', mission_name: 'Mission 1', description: 'Description 1', reserved: false,
        },
        {
          mission_id: '7', mission_name: 'Mission 2', description: 'Description 2', reserved: true,
        },
      ],
    };

    const action = leaveMission('1');
    const actualState = missionsReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
});
