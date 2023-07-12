import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter, Routes} from 'react-router-dom'

import Home from './components/Home/Home.js';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<ContactUs />} />
        </Routes>
      

    </div>
  );
}

export default App;
