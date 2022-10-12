import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbar';
import Slider from './components/pages/slider/Slider';
import Intro from './components/pages/intro/Intro';
import Mmodels from './components/pages/mModels/Mmodels';
import Showtext from './components/pages/showText/Showtext';
import Sliderf from './components/pages/slider/Sliderf';
import Accessories from './components/pages/accessaries/Accessories';


function App() {
  return (
   <>
   <Navbars/>
   <Intro/>
   <Showtext/>
   <Slider/>
   <Mmodels/>
   <Sliderf/>
    <Accessories></Accessories>
   
   </>
  );
}

export default App;
