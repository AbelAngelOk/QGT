import "./App.css";
import { Header } from "./components/commons/Header";
import { Home } from "./pages/Home";
import { Promises } from "./pages/Promises";
import { Reports } from "./pages/Reports";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="header__container" id="topHeader">
          <Header/>
        </div>
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/Compromiso" element={<Promises />} />
          <Route path="/Informes" element={<Reports />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;