import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbar';
import Slider from './components/pages/slider/Slider';
import Intro from './components/pages/intro/Intro';

function App() {
  return (
   <>
   <Navbars/>
   <Intro/>
   <Slider/>
   </>
  );
}

export default App;
