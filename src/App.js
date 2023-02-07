import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContactBar from "./Components/ContactBar";
import "./App.css";
import Home from "./Sections/Home";

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="app_section_container">
        <Home />
        <ContactBar />
      </div>
      <Footer />
    </main>
  );
}

export default App;
