import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warning from './pages/Warning';
import Success from './pages/Success';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/warning" element={<Warning />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
