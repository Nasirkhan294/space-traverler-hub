import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { fetchMissions } from '../redux/mission/missionSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.member);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <DIV>
      <table>
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {joinedMissions > 0 ? (
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
          <tr><td>rocket 1</td></tr>
          <tr><td>rocket 2</td></tr>
          <tr><td>rocket 3</td></tr>
          <tr><td>rocket 4</td></tr>
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
