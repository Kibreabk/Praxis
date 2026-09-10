import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Extracurriculars from './pages/Extracurriculars';
import IndependentProjects from './pages/IndependentProjects';
import CollegeResources from './pages/CollegeResources';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white overflow-hidden selection:bg-white/30 selection:text-white">
        <ParticleBackground />
        <Navbar />
        <Chatbot />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
          <Route path="/independent-projects" element={<IndependentProjects />} />
          <Route path="/resources" element={<CollegeResources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
