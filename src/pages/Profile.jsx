import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { fetchMissions } from '../redux/mission/missionSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.member);
  const { rockets } = useSelector((store) => store.rocket);
 

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <DIV>
      <table>
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {joinedMissions.length > 0 ? (
            joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))
          ) : (<tr><td>No Reserved Missions</td></tr>)}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          {rockets.filter((item) => item.reserved === true).map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          ))}
          {rockets.filter((item) => !item.reserved).length === rockets.length && (
          <tr>
            <td>No Reserved Rocket</td>
          </tr>
          )}
        </tbody>
      </table>
    </DIV>
  );
};

export default Profile;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 10rem 5rem;

  table {
    border: 2px solid #6D757E;
    border-collapse: collapse;
    width: 45%;
    font-size: 2rem;
  }

  th {
    background-color: #D6EEEE; 
    padding: 1rem;
  }
  
  td {
    padding: 1rem;
  }

  tr:nth-child(even) {
    background-color: #D6EEEE;
  }
`;
