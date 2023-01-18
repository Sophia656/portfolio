import Carousel from "./components/carousel/Carousel";
import Contacts from "./pages/contacts/Contacts";
import FacesPage from "./pages/faces/FacesPage";
import HomePage from "./pages/home/HomePage";
import OverviewPage from "./pages/overview/OverviewPage";
import Documental from "./pages/series/documental/Documental";
import HasardPagee from "./pages/series/hasard/HasardPagee";

function App() {

  return (
    <div>
      <Carousel>
        <HomePage />
        <OverviewPage />
        <HasardPagee />
        <Documental />
        <FacesPage />
        <Contacts />
      </Carousel>
    </div>
  );
}

export default App;
