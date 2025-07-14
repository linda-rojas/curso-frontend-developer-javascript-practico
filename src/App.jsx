import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Store from './components/store/Store';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
