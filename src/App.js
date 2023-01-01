import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
