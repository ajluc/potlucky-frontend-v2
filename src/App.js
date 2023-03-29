import React from 'react'
// import { Counter } from './features/counter/Counter'
import './App.css'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import EventDetails from './pages/EventDetails'
import NewEvent from './pages/NewEvent'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import NavBar from './components/NavBar'

function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  // const handleLogout = () => {
  //   setUser(null)
  //   localStorage.clear()
  // }

  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/newevent" element={<NewEvent />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
