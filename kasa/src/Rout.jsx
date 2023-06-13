import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Error from './pages/Error';
import FicheLogement from './pages/FicheLogement' 
import Apropos from './pages/Apropos'

import Header from './components/Header/index'
import Footer from './components/Footer';

import "./style.css"

function Rout() {
    return ( 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/FicheLogement/:id' element={<FicheLogement />} />
          <Route path='Apropos' element={<Apropos />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

  export default Rout