import React from 'react'
// import { Counter } from './features/counter/Counter'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import EventDetails from './pages/EventDetails'
import NewEvent from './pages/NewEvent'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Auth />} />
          <Route path="/newevent" element={<NewEvent />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
