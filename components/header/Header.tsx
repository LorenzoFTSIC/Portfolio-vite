import './App.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="navContainer">
      <div className="blurredNav">
        <div className="headerContent textStroke">
          <h3 className="headerTitle">Lorenzo Ferri</h3>

          <nav className="navLinks">
            <Link className="btn hover-underline-animation" to="home" smooth offset={-70} duration={500}>Home</Link>
            <Link className="btn hover-underline-animation" to="skills" smooth offset={-70} duration={500}>Skills</Link>
            <Link className="btn hover-underline-animation" to="projects" smooth offset={-70} duration={500}>Projects</Link>
            <Link className="btn hover-underline-animation" to="contactMe" smooth offset={-70} duration={500}>Contact</Link>
          </nav>
          
        </div>
      </div>
    </header>
  );
};
  
export default Header;
