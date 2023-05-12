import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Compromiso } from "./Compromiso";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="header__container">
          <Header/>
        </div>
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/Compromiso" element={<Compromiso />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;