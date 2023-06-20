import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Header>
    <div className="thumbnail-wrapper">
      <div>
        <img src="" alt="logo" />
      </div>
      <span>Space travelers hub</span>
    </div>
    <nav>
      <Ul>
        <li>
          <NavLink exact="true" activeclassname="active" className="link" to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" className="link" to="/mission">Mission</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" className="link" to="/profile">My Profile</NavLink>
        </li>
      </Ul>
    </nav>
  </Header>
);

export default Navbar;

const Header = styled.header`
width: 100%;
height: 56px;
background-color: #9e9797;
padding: 0 4rem;
display: flex;
align-items: center;
justify-content: space-between;

.thumbnail-wrapper{
  display: flex;
  gap: 10px;
}


`;

const Ul = styled.ul`
display: flex;
gap: 10px;
list-style: none;

.link{
  color: white;
  text-decoration: none;
}

.active {
  color: blue
}

`;
