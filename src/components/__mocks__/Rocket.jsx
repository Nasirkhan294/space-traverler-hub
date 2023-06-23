import React from 'react';

const Rocket = () => (
  <div>
    <div className="container">
      <div className="img-container">
        <img src="src/image" alt="something" />
      </div>
      <div className="detail-container">
        <h3>Rocket name</h3>
        <p>
          <span className="badge">
            Reserved
          </span>
        </p>
        <div className="btn-container">
          <button type="button">Reserve Rocket</button>
          <button type="button">Cancel Reservation</button>
        </div>
      </div>

    </div>
  </div>
);

export default Rocket;
