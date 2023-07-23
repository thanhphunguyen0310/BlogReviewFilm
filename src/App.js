import './App.css';
import Navigation from './components/Navigation';
import Film from './components/Film';
import Footer from './components/Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Detail from './components/Detail';
import { red } from '@mui/material/colors';

function App() {
  const [color,setColor]=useState('')
  function handleChangeColor(isColor){
    console.log(color);
    setColor(isColor)
  }
  return (
    <div className='App'style={{backgroundColor:`${color}`}}>
      <Navigation colors={handleChangeColor}/>
      <Routes>
        <Route path='/' element={<Film/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>      
      <Footer/>
    </div>
  );
}
export default App;
