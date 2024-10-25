import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Form from './Components/Form'
import AdminPanel from './Components/AdminPanel'
import Leads from './Components/Leads'
import TaskForm from './Components/TaskForm'
import AgentDash from './Components/AgentDash'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/Dashboard' element={<AdminPanel />}></Route>
        <Route path='/leads' element={<Leads />}></Route>
        <Route path='/TaskForm' element={<TaskForm />}></Route>
        <Route path='/AgentDash' element={<AgentDash />}></Route>




      </Routes>
    </BrowserRouter>

  )
}

export default App