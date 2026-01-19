import '../../App.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navContainer">
      <div className="blurredNav flex justify-between">
        <div className="headerContent textStroke">

          <h3 className="headerTitle">Lorenzo Ferri</h3>

          <nav className="hidden navLinks sm:flex">
            <a className="btn hover-underline-animation" href="#home">Home</a>
            <a className="btn hover-underline-animation" href="#skills" >Skills</a>
            <a className="btn hover-underline-animation" href="#projects">Projects</a>
            <a className="btn hover-underline-animation" href="#contact">Contact</a>
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
          className={`sm:hidden absolute top-full right-0 left-0 blurredNav transition-all overflow-hidden justify-self-end rounded-b-md ${
            isOpen ? "max-h-60 py-4 w-40" : "max-h-0 py-0 w-40"
          }`}
        >
        
          <nav className="flex flex-col items-center pr-4 space-y-4">
            <a className="btn hover-underline-animation" href="#home">Home</a>
            <a className="btn hover-underline-animation" href="#skills" >Skills</a>
            <a className="btn hover-underline-animation" href="#projects">Projects</a>
            <a className="btn hover-underline-animation" href="#contact">Contact</a>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
