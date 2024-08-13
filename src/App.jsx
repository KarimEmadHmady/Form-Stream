import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './contact.jsx';
import Jops from './pages/jops.jsx';
import './App.css';


function App() {
  return (
    <Router>

          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/Jops" element={<Jops />} /> 
          </Routes>

    </Router>
  );
}

export default App;
