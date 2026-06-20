import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Acheivement from './pages/Acheivement'
import ParticlesBg from './components/ParticlesBg'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>

        <Route path='/' element={<Dashboard/>} />
        <Route path='/acheivments' element={<Acheivement/>} />

        </Route>
      </Routes>
      <ParticlesBg/>
    </BrowserRouter>
    
  )
}

export default App