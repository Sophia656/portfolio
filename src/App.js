import Carousel from "./components/carousel/Carousel";
import HomePage from "./pages/home/HomePage";
import HasardPagee from "./pages/series/hasard/HasardPagee";

function App() {

  return (
    <div>
      <Carousel>
        <HomePage />
        <HasardPagee />
      </Carousel>
    </div>
  );
}

export default App;
