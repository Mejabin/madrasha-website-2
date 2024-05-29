import DropdownButton from "./components/hook/DropdownButton";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <DropdownButton />
      <Home />
      <About />
    </div>
  );
}

export default App;
