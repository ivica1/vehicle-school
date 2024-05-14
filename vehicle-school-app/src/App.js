import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import VehicleMakePage from "./pages/VehicleMakePage";
import VehicleModelPage from "./pages/VehileModelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={VehicleMakePage} />
        <Route path='/vehicle-models' Component={VehicleModelPage} />
      </Routes>
    </Router>
  );
}

export default App;
