import "../assets/css/App.css";
import TopAdvertisement from "../components/Advertisement/TopAdvertisement.js";
import LeftAside from "../components/LeftAside/LeftAside.js";
import RightAside from "../components/RightAside/RightAside.js";
import MainContent from "../components/MainContent/MainContent.js";

function App() {
  return (
    <div className="mx-auto max-w-6.9xl">
      <TopAdvertisement />
      <div className="grid grid-cols-main gap-2.5 mt-2.5">
        <LeftAside />
        <MainContent />
        <RightAside />
      </div>
    </div>
  );
}

export default App;
