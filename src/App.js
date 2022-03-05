import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import SobreMim from "./components/sobremim/sobremim";
import ParticleBackground from "./components/particlesConfig/particlesBackground";
import OutrosProjetos from "./components/outrosProjetos/outrosProjetos";
import Skills from "./components/skills/skills";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ParticleBackground />
      <Header />
      <Routes>
        <Route exact path="/" element={<SobreMim />} />
        <Route path="/projetos" element={<OutrosProjetos />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
