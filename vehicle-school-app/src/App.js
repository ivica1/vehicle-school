import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import VehicleMakePage from "./pages/VehicleMakePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={VehicleMakePage} />
      </Routes>
    </Router>
  );
}

export default App;
