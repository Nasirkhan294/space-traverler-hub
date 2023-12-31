import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import Mission from './Mission';
import { fetchMissions } from '../../redux/mission/missionSlice';

const MissionList = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        return `
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
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
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

  .mission {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .inActive {
    background-color: #6D757E;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: #fff;
    word-spacing: 0;
  }

  .active {
    background-color: #18A2B9;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: #fff;
    word-spacing: 0
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
    font-size: 1.2rem;
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

  .join-btn {
    border: 2px solid #6D757E;
    padding: 0.8rem 1rem;
    background-color: #fff;
    color: #6D757E;
    font-size: 1rem
  }

  .join-btn:hover {
    cursor: pointer;
    border-color: #222;
    color: #000;
    transition: 0.3s ease all;
  }

  .leave-btn {
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border: 2px solid #DD394A;
    color: #DD394A;
  }

  .leave-btn:hover {
    border-color: #18A2B9;
    color: #18A2B9;
    cursor: pointer
    transition: 0.3s ease all;
  }

`;
