import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect } from 'react';
import Rockets from './Rockets';
import { getRockets } from '../../redux/rockets/rocketSlice';

export default function RocketList() {
  const rockets = useSelector((state) => state.rocket.rockets);
  const { isLoading } = useSelector((store) => store.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <Div>
      {isLoading === true ? <h3>Loading...</h3> : ''}
      {rockets.map((item) => <Rockets key={item.id} rocket={item} />)}

    </Div>
  );
}

const Div = styled.div`
width: 100%;
padding: 1rem 0;
display: flex;
flex-direction: column;

`;
