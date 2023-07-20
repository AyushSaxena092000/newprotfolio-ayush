import NavBar from "./components/NavBar";
import Home from './components/Home';
import SocailLinks from './components/SocialLinks';
import About from "./components/About";
import Protfolio from './components/Protfolio';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <SocailLinks/>
    <About/>
    <Protfolio/>
    <Experience/>
    <Contact/>
   </div>
  );
}

export default App;
