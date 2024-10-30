import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import Galerie from './components/Galerie'
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar /> {/* Use the Navbar component here */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
