import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //this is responsible for reload of pages because React Router does not do that (⩺_⩹)
  window.onhashchange = function () {
    window.location.reload();
  };
  
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
