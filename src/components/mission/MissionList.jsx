import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import Mission from './Mission';
import { fetchMissions } from '../../redux/mission/missionSlice';

const MissionList = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        `
        Error
        {error.message}
        `
      </p>
    );
  }

  return (
    <DIV>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <Mission
                missionId={mission.mission_id}
                title={mission.mission_name}
                description={mission.description}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </DIV>
  );
};

export default MissionList;

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  line-height: 1.3;
  font-size: 1rem;
  word-spacing: 3px;

  span {
    background-color: #6D757E;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: #fff;
    word-spacing: 0;
  }

  table, th, td {
    border: 2px solid #6D757E;
    border-collapse: collapse;
    padding: 1rem;
  }

  table {
    border: 2px solid #6D757E;
    width: 100%;
    height: 200px;
  }
 
  th {
    background-color: #F2F2F2;
    text-align: center;
  }

  td:nth-of-type(1) {
    width: 15%;
    text-align: center;
  }

  td:nth-of-type(3) {
    width: 15%;
    text-align: center;
  }

  td:nth-of-type(4) {
    width: 15%;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #F2F2F2;
  }

  .btn {
  border: 2px solid #6D757E;
  padding: 0.8rem 1rem;
  background-color: #fff;
  color: #000;
  font-size: 1rem
}

.btn:hover {
  cursor: pointer;
  background-color: #6D757E;
  border-color: #000;
  color: #fff;
  transition: 0.3s ease all;
 }
`;
