import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import Main from './pages/Main.jsx';
import CS1 from './pages/CS1.jsx';
import CS2 from './pages/CS2.jsx';
import CS3 from './pages/CS3.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Main />} /> {/* Main contains Home, Projects, and Contact */}
            <Route path="/cs1" element={<CS1 />} /> 
            <Route path="/cs2" element={<CS2 />} /> 
            <Route path="/cs3" element={<CS3 />} /> 
          </Routes>
        </div>   
      </div>
    </Router>
  );
}

export default App;
