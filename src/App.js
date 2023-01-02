import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
