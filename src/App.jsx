import ParticleBackground from "./components/ParticleBackground";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="app" onContextMenu={(e) => e.preventDefault()}>
      <ParticleBackground />
      <Gallery />
    </div>
  );
}

export default App;
