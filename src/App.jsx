import './App.css'
import { Routes, Route } from 'react-router'
import Dashboard from './layouts/Dashboard'
import Home from './pages/Home'
import Contact from './pages/Contact'
import TechStack from './pages/TechStack'
import Resume from './pages/Resume'
import Uses from './pages/Uses'
import Project from './pages/Project'

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Dashboard/>}>
        <Route index element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/uses' element={<Uses/>}/>
        <Route path='/tech' element={<TechStack/>}/>
      </Route>
    </Routes>

  )
}
export default App