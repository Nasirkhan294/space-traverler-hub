import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="nav-container">
    <div className="thumbnail-wrapper">
      <img src="" alt="" />
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/mission">Mission</Link></li>
        <li><Link to="/rockets">Rockets</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
