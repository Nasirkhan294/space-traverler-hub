import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/mission/missionSlice';

const Mission = ({ missionId, title, description }) => {
  const dispatch = useDispatch();
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinMission = () => {
    dispatch(joinMission(missionId));
    setIsJoined(true);
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(missionId));
    setIsJoined(false);
  };

  return (
    <>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <span className={isJoined ? 'occupied' : ''}>
          {isJoined ? 'Active member' : 'Not a member'}
        </span>
      </td>
      <td>
        <button
          type="button"
          className={`btn ${isJoined ? 'red-btn' : ''}`}
          onClick={isJoined ? handleLeaveMission : handleJoinMission}
        >
          {isJoined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
