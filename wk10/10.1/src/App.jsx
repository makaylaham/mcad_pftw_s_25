import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './views/Home'
import { Llamas } from './views/Llamas'
import { Alpaca } from './views/Alpaca'
function App() {
  

  return (
    <>
    {/* Navigation Here */}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/llamas">Llamas</Link></li>
      <li><Link to="/Alpaca">Alpacas</Link></li>
    </ul>

    {/* Routes Go Here */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/llamas" element={<Llamas />} />
      <Route path="/Alpaca" element={<Alpaca />} />
    </Routes>
    
    </>
  )
}

export default App
