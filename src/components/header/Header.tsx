import '../../App.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navContainer">
      <div className="blurredNav flex justify-between">
        <div className="headerContent textStroke">

          <h3 className="headerTitle">Lorenzo Ferri</h3>

          <nav className="hidden navLinks sm:flex">
            <Link className="btn hover-underline-animation" to="home" smooth offset={-70} duration={500}>Home</Link>
            <Link className="btn hover-underline-animation" to="skills" smooth offset={-70} duration={500}>Skills</Link>
            <Link className="btn hover-underline-animation" to="projects" smooth offset={-70} duration={500}>Projects</Link>
            <Link className="btn hover-underline-animation" to="contactMe" smooth offset={-70} duration={500}>Contact</Link>
          </nav>

          <button 
            className="sm:hidden flex flex-col justify-center space-y-1 w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {/* <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} /> */}
          </button>

        </div>

        <div 
          className={`md:hidden absolute top-full right-0 left-0 bg-black/60 backdrop-blur-lg transition-all overflow-hidden justify-self-end rounded-md ${
            isOpen ? "max-h-60 py-4 w-40" : "max-h-0 py-0 w-40"
          }`}
        >
          <nav className="flex flex-col items-center pr-4 space-y-4">
            <Link onClick={() => setIsOpen(false)} className="btn" to="home" smooth offset={-70} duration={500}>Home</Link>
            <Link onClick={() => setIsOpen(false)} className="btn" to="skills" smooth offset={-70} duration={500}>Skills</Link>
            <Link onClick={() => setIsOpen(false)} className="btn" to="projects" smooth offset={-70} duration={500}>Projects</Link>
            <Link onClick={() => setIsOpen(false)} className="btn" to="contactMe" smooth offset={-70} duration={500}>Contact</Link>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
