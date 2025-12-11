import '../../App.css';
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'

const Header = () => {
  const [count, setCount] = useState(0)
  return (
     <main>
        <div id="landingPageBox">
            <div className="titleDiv textStroke">
                <div className="border-4 bubble bubbleTop">
                    <h2>
                        Hello World,
                    </h2>
                    <h2 >
                        I'm Lorenzo
                    </h2>
                </div>
            </div>
            <div className="descDiv textStroke">
                <div className="border-4 bubble bubbleBot">
                    <p>
                        Developer located in Orlando, FL
                    </p>
                </div>
            </div>   
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            
            <div className="flex justify-center">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </main>
  );
};
  
export default Header;
