import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { leaveRocket, reserveRocket } from '../../redux/rockets/rocketSlice';

export default function Rockets({ rocket }) {
  const dispatch = useDispatch();
  return (
    <Div>
      <div className="container">
        <div className="img-container">
          <img src={rocket.flickr_images[0]} alt="something" />
        </div>
        <div className="detail-container">
          <h3>{rocket.name}</h3>
          <p>
            <span className={rocket.reserved === true ? 'badge' : 'display-none'}>
              Reserved
            </span>
            {rocket.details}
          </p>
          <div className="btn-container">
            <button type="button" onClick={() => dispatch(reserveRocket(rocket.id))} className={rocket.reserved === true ? 'display-none' : ' '}>Reserve Rocket</button>
            <button type="button" onClick={() => dispatch(leaveRocket(rocket.id))} className={rocket.reserved === false ? 'display-none' : 'cancel'}>Cancel Reservation</button>
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
      
      display: flex;
      align-items: center;
      
        img{
          width: 300px;
          height: 190px;
          object-fit: cover;
        }
    }

    .detail-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .badge {
      background-color: #1ca7a0;
      color: white;
      font-weight: bold;
      padding: 2px 5px;
      border-radius: 4px;
      margin-right: 5px;
    }

    .btn-container {
     
        button{
            padding: 9px 1rem;
            border: solid 1px #007BFF;
            border-radius: 4px;
            background-color: #007BFF;
            color: white;
        }
        .cancel{
            padding: 9px 1rem;
            border: solid 1px black;
            border-radius: 4px;
            background-color: white;
            color: black;
        }
    }
    .display-none{
        display: none;
      }
}
`;
