import React from 'react';
import { styled } from 'styled-components';
import img from '../../assets/space.jpg';

export default function Rockets({ rockets }) {
  return (
    <Div>
      <div className="container">
        <div className="img-container">
          <img src={img} alt="something" />
        </div>
        <div className="detail-container">
          <h3>{rockets.title}</h3>
          <p>
            {rockets.detail}
            hi
          </p>
          <div className="btn-container">
            <button type="button">Reserve Rocket</button>
          </div>
        </div>

      </div>
    </Div>
  );
}

const Div = styled.div`
width: 100%;
display: flex;

.container {
    display: flex;
    padding: 1rem 3rem;
    gap: 15px;
   

    .img-container{
        width: 50%;
        img{
            width: 100%;
            height: auto;
        }
    }

    .detail-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .btn-container {
        button{
            padding: 9px 1rem;
            border: solid 1px #007BFF;
            border-radius: 4px;
            background-color: #007BFF;
            color: white;
        }
    }
}
`;
