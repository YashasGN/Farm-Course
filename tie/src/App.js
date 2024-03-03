// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Home} from './pages/Home/Home'; // Import the HomePage component
import {Course} from './pages/Course/Course'; 
import { Services } from "./pages/Services/Services";
import { Shop } from "./pages/Shop/Shop";
import { Contact } from "./pages/Contact/Contact";
import { Header } from './component/Header';
import { Details } from './component/Details/Details';
import { Footer } from './component/Footer';

export const BASE_URL = "http://localhost:9000"
function App() {
  return (
    
    <Router>
      <Header/>
      
      <Routes> {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Home />} /> 
        <Route path="/Course" element={<Course />} /> 
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Details/:link" element={<Details/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
