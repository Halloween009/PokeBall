import "./App.css";
import PokeballPage from "./pages/PokeballPage";
import Header from "./components/Header";
import bgImage from "./assets/background.png";

function App() {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <Header />
      <PokeballPage />
    </div>
  );
}

export default App;
