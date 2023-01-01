import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  // const win = window.screen.width;
  // const wee = window.innerWidth;
  // console.log(win,wee)
  // console.log(window.screen.width, window.screen.height);
  // console.log(window.innerWidth, window.outerHeight);
  // console.log(window.screen.availWidth, window.screen.availHeight)
  // console.log(window.screen.height)

  // console.log(window.screenTop);
  

  
  
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
