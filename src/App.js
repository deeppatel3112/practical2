import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter, Routes} from 'react-router-dom'

import Home from './components/Home/Home.js';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contactus' element={<ContactUs />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
