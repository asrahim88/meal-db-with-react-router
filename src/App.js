import React from 'react';
import './App.css';
import Headers from './Componetns/Headers/Headers';
import { Routes, Route } from "react-router-dom";
import Home from './Componetns/Home/Home';
import About from './Componetns/About/About';
import NotFound from './Componetns/NotFound/NotFound';
import FoodDetails from './Componetns/FoodDetails/FoodDetails';
import Footer from './Componetns/Footer/Footer';

function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <Headers></Headers>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/foodDetails/:foodId' element = {<FoodDetails></FoodDetails>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
