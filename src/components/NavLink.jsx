import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavLink = () => (
  <Ul>
    <li>
      <Link className="link" to="/">Rockets</Link>
    </li>
    <li><Link className="link" to="/mission">Mission</Link></li>
    <li><Link className="link" to="/profile">My Profile</Link></li>
  </Ul>
);

export default NavLink;

const Ul = styled.ul`
display: flex;
gap: 10px;
list-style: none;

.link{
  color: white;
  text-decoration: none;
}
`;
