import Carousel from "./components/carousel/Carousel";
import Contacts from "./pages/contacts/Contacts";
import FacesPage from "./pages/faces/FacesPage";
import HomePage from "./pages/home/HomePage";
import OverviewPage from "./pages/overview/OverviewPage";
import Documental from "./pages/series/documental/Documental";
import HasardPagee from "./pages/series/hasard/HasardPagee";
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Carousel>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/overview' element={<OverviewPage />} />
        <Route path='/hasard' element={<HasardPagee />} />
        <Route path='/documental' element={<Documental />} />
        <Route path='/faces' element={<FacesPage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Carousel>
  );
}

export default App;
