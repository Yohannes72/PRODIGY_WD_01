import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home';
import Intern from './components/Intern';

function App() {
  return (
    <div className="App">


     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/intern" element={<Intern />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
