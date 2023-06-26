import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import { PagesContext } from "./components/context/context";
import Magazine from "./components/magazine/Magazine";
import Loader from "./components/UI/loader/Loader";
import { useEffect } from 'react';

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
  const [modalCrYear, setModalCrYear] = useState('')
  const [testAgeModal, setTestAgeModal] = useState(true)
  const [rus, setRus] = useState(false)
  
  const [openCurrentImg, setOpenCurrentImg] = useState(false)

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler)
  //   return function() {
  //     document.removeEventListener('scroll', scrollHandler)
  //   }
  // }, [])

  // const scrollHandler = (e) => {
  //   console.log('scroll')
  // //   console.log('общая высота стр с уч скроолла: ', e.target.documentElement.scrollHeight)
  // //   console.log('тек полож скролла от верха стр: ', e.target.documentElement.scrollTop)
  // //   console.log('высота видимой области стр: ', window.innerHeight)
  // }

  return (
    <PagesContext.Provider value={{
      height, setHeight, 
      baseHeight, setBaseHeight, 
      navigate, location,
      modalCrYear, setModalCrYear,
      testAgeModal, setTestAgeModal,
      rus, setRus,
      openCurrentImg, setOpenCurrentImg
    }}>

    <Magazine>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<Loader />}>
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