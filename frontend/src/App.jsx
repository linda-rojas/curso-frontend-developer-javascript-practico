import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginUser from './components/LoginUser/LoginUser';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
