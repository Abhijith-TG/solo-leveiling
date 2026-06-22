import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Acheivement from './pages/Acheivement'
import ParticlesBg from './components/ParticlesBg'
import Layout from './components/Layout'
import Statistics from './pages/Statistics'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>

        <Route path='/' element={<Dashboard/>} />
        <Route path='/acheivments' element={<Acheivement/>} />
        <Route path='/statistics' element={<Statistics/>} />


        </Route>
      </Routes>
      <ParticlesBg/>
    </BrowserRouter>
    
  )
}

export default App