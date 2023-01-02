import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";


function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
