import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo3.png';

const Navbar = () => (
  <Header>
    <div className="logo-wrapper">
      <div className="thumbnail-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <h1>Space travelers hub</h1>
    </div>
    <NAV>
      <ul>
        <li>
          <NavLink exact="true" activeclassname="active" className="link" to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" className="link" to="/mission">Mission</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" className="link" to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </NAV>
  </Header>
);

export default Navbar;

const Header = styled.header`
width: 100%;
height: 5rem;
background-color: #6D757E;
padding: 0 4rem;
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
top: 0;

h1 {
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: capitalize;
  color: #27D7C6;
}

.logo-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.thumbnail-wrapper{
  width: 5%;
}

img {
  width: 100%;
}

`;

const NAV = styled.nav`
display: flex;
justify-content: center;
align-items: center;
width: 25%;

ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
}

.link{
  color: #27D7C6;
  text-decoration: none;
}

.link:hover {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #fff;
  transition: 0.3s ease-in-out all;
  color: #fff;
}

.active {
  color: #F68D35;
}
`;
