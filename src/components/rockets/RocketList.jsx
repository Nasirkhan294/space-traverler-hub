import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import Rockets from './Rockets';

export default function RocketList() {
  const { rockets } = useSelector((store) => store.rocket);
  return (
    <Div>
      {rockets.map((item) => <Rockets key={item.id} rockets={item} />)}

    </Div>
  );
}

const Div = styled.div`
width: 100%;
padding: 1rem 0;
display: flex;
flex-direction: column;

`;
