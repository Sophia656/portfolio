import Carousel from "./components/carousel/Carousel";
import {Route, Routes} from 'react-router-dom';
import React from "react";

const OverviewPage = React.lazy(() => import('./pages/overview/OverviewPage'));
const Contacts = React.lazy(() => import('./pages/contacts/Contacts'));
const FacesPage = React.lazy(() => import('./pages/faces/FacesPage'));
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const Documental = React.lazy(() => import('./pages/series/documental/Documental'));
const HasardPagee = React.lazy(() => import('./pages/series/hasard/HasardPagee'));


function App() {

  return (
    <Carousel>
      {/* <React.Suspense fallback={<div style={{color: 'green'}}>loading...</div>}> */}
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/' element={
          <React.Suspense fallback={<div style={{color: 'green'}}>loading</div>}>
              <HomePage/>
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
        <Route path='/faces' element={
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
        {/* <Route path='/overview' element={<OverviewPage />} />
        <Route path='/hasard' element={<HasardPagee />} />
        <Route path='/documental' element={<Documental />} />
        <Route path='/faces' element={<FacesPage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<HomePage />} /> */}
      </Routes>
      {/* </React.Suspense> */}
    </Carousel>
  );
}

export default App;
