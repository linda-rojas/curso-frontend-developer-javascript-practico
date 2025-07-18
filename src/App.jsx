import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Store from './components/store/Store';
import OrdersPage from './pages/OrdersPage/OrdersPage';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
