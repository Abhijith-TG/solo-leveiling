import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Acheivement from './pages/Acheivement'
import ParticlesBg from './components/ParticlesBg'
import Layout from './components/Layout'
import Statistics from './pages/Statistics'
import LevelUpPage from './pages/LevelUpPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>

        <Route path='/' element={<Dashboard/>} />
        <Route path='/level' element={<LevelUpPage/>} />
        <Route path='/acheivments' element={<Acheivement/>} />
        <Route path='/statistics' element={<Statistics/>} />



        </Route>
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
      <ParticlesBg/>
    </BrowserRouter>
    
  )
}

export default App