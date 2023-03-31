import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import MyNav from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Stock from './Pages/Stocks';
import StockInfo from './components/StockInfo';
import Cart from './Pages/Cart';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stock" element={<Stock/>}  />
      <Route path="/stockinfo/:id" element={<StockInfo/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

    
    </>
  );
}

export default App;
