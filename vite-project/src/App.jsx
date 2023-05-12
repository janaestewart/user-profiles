import { useState } from 'react'
import { userData } from './utils/users'
import './App.css'
import Header from './components/Header/Header'
import Hompage from './components/Homepage/Homepage'

function App() {
  // console.log(userData)

  // create state to hold the users that are displayed
  const[users, setUsers] = useState([])

  return (
    <div>
      <Header userData={userData} setUsers={setUsers}/>
      <Hompage users={users}/> 
    </div>
  )
}

export default App
