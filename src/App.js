import Carousel from "./components/carousel/Carousel";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import { PagesContext } from "./components/context/context";
import Magazine from "./components/magazine/Magazine";

const OverviewPage = React.lazy(() => import('./pages/overview/OverviewPage'));
const Contacts = React.lazy(() => import('./pages/contacts/Contacts'));
const FacesPage = React.lazy(() => import('./pages/faces/FacesPage'));
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const Documental = React.lazy(() => import('./pages/series/documental/Documental'));
const HasardPagee = React.lazy(() => import('./pages/series/hasard/HasardPagee'));


function App() {
  const [height, setHeight] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const [baseHeight, setBaseHeight] = useState('fit-content')
  const [openModal, setOpenModal] = useState(false)

  return (
    <PagesContext.Provider value={{
      height, setHeight, 
      baseHeight, setBaseHeight, 
      navigate, location,
      openModal, setOpenModal
    }}>

    
    <Magazine>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<div style={{color: 'green'}}>loading</div>}>
              <HomePage />
          </React.Suspense>
        }/>
        <Route path='/overview' element={
          <React.Suspense fallback={<div>loading</div>}>
              <OverviewPage/>
          </React.Suspense>
        }/>
        <Route path='/hasard' element={
          <React.Suspense fallback={<div>loading</div>}>
              <HasardPagee/>
          </React.Suspense>
        }/>
        <Route path='/documental' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Documental/>
          </React.Suspense>
        }/>
        <Route path='/personalities' element={
          <React.Suspense fallback={<div>loading</div>}>
              <FacesPage/>
          </React.Suspense>
        }/>
        <Route path='/contacts' element={
          <React.Suspense fallback={<div>loading</div>}>
              <Contacts/>
          </React.Suspense>
        }/>
        <Route path='*' element={
          <React.Suspense fallback={<div>loading</div>}>
              <HomePage/>
          </React.Suspense>
        }/>
      </Routes>
    </Magazine>
    </PagesContext.Provider>
  );
}

export default App;