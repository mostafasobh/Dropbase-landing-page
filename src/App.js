import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Headline from './Components/HeadLine/Headline'
import Middle from './Components/Middle/Middle'
import MiddleBottom from './Components/Middle/MiddlBottom/MiddleBottom'
import Footer from './Components/Footer/Footer'
import 'aos/dist/aos.css'

const App=()=>{
  
 const moveTopBtn=()=>{
    window.scrollTo(0,0)
  }

    return (
      <div className="App">
      <Navbar />
      <Headline />
      <Middle />
      <MiddleBottom />
    <button onClick={()=>moveTopBtn()} className='scroll-top-btn'>Top</button>
    <Footer />
        </div>
  );

}

export default App;
