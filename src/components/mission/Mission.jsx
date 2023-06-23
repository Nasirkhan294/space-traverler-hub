import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/mission/missionSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(mission.mission_id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(mission.mission_id));
  };

  return (
    <tr>
      <td><span className="mission">{mission.mission_name}</span></td>
      <td>{mission.description}</td>
      {mission.reserved ? (
        <>
          <td>
            <span className="active">Active Member</span>
          </td>
          <td>
            <button
              type="button"
              className="leave-btn"
              onClick={handleLeaveMission}
            >
              Leave Mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td>
            <span className="inActive">NOT A MEMBER</span>
          </td>
          <td>
            <button type="button" className="join-btn" onClick={handleJoinMission}>
              Join Mission
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Mission;
