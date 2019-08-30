import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nike from './components/Nikes/Index'
import HomePage from './components/Home'

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/kyrie5-x-bandulu" exact component={Nike} />
    </Router>
  )
}

export default App
