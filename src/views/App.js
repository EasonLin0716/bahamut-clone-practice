import "../assets/css/App.css";
import Advertisement from "../components/Advertisement.js";

function App() {
  return (
    <div class="mx-auto max-w-7xl">
      <Advertisement />
      <div class="grid grid-cols-main gap-2.5 mt-2.5">
        <div class="bg-gray-300">Left</div>
        <div class="bg-green-300">Content</div>
        <div class="bg-blue-300">Right</div>
      </div>
    </div>
  );
}

export default App;
