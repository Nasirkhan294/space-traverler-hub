import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservedMission } from '../../redux/mission/missionSlice';

const Mission = ({ missionId, title, description }) => {
  const dispatch = useDispatch();
  const [isJoined, setIsJoined] = useState(false);
  const buttonText = isJoined ? 'Joined Mission' : 'Join Mission';

  const handleJoinMission = () => {
    dispatch(reservedMission(missionId));
    setIsJoined(true);
  };

  return (
    <>
      <td>{title}</td>
      <td>{description}</td>
      <td><span>NOT A MEMBER</span></td>
      <td>
        <button type="button" className="btn" onClick={handleJoinMission}>
          {buttonText}
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
