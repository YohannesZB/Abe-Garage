import './App.css';
// Import the Router from react-router 
import { Routes, Route } from 'react-router-dom';
// Import the Home component
import Home from './pages/Home';
// Import the AddEmployee component
import AddEmployee from './pages/AddEmployee';
// Import the Login component
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
