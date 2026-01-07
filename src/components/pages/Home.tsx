import '../../App.css';
import Projects from "./Projects"
import Contact from "./Contact"

const Home = () => {
  return (
     <main>
        <div id="landingPageBox">
            <div className="titleDiv textStroke scroll-mt-24" id="home">
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
        <Projects ></Projects>
        <Contact ></Contact>
    </main>
  );
};
  
export default Home;
