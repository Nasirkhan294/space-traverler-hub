import { styled } from 'styled-components';
import NavLink from './NavLink';

const Navbar = () => (
  <Header>
    <div className="thumbnail-wrapper">
      <div>
        <img src="" alt="logo" />
      </div>
      <span>Space travelers hub</span>
    </div>
    <nav>
      <NavLink />
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
