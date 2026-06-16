import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Acheivement from './pages/Acheivement'
import ParticlesBg from './components/ParticlesBg'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/acheivments' element={<Acheivement/>} />

      </Routes>
      <ParticlesBg/>
    </BrowserRouter>
    
  )
}

export default App