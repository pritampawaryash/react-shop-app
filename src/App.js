import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbar';
import Slider from './components/pages/slider/Slider';
import Intro from './components/pages/intro/Intro';
import Mmodels from './components/pages/mModels/Mmodels';
import Showtext from './components/pages/showText/Showtext';

function App() {
  return (
   <>
   <Navbars/>
   <Intro/>
   <Slider/>
   <Mmodels/>
   <Showtext/>
   </>
  );
}

export default App;
