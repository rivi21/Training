import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cuidado from './pages/Cuidado';
import Vamos from './pages/Vamos';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cuidado />} />
        <Route path="/vamos" element={<Vamos />} />
        <Route path="/upps" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
