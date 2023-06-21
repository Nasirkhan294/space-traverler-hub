import { useSelector } from 'react-redux';
import Mission from './Mission';

const MissionList = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <div>
      <ul>
        {missions.map((mission) => (
          <li key={mission}>
            <Mission
              title={mission.title}
              description={mission.description}
              status={mission.status}
              action={mission.action}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionList;
