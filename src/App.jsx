import React from 'react';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import FeaturedProducts from './components/FeaturedProducts';
import './Styles/Style.css';
import 'animate.css';



function App() {
  
  

  
  return (
    <div className="App">
      
      <Navbar/>
      <SlideShow/>
      <FeaturedProducts/>
      
    </div>
  );
}

export default App;