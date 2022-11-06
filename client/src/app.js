import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Components
import { Header } from './components/Header/Header'
import { Screen } from './components/Screen/Screen'
import { Footer } from './components/Footer/Footer'

// Screens (pages) - Routes
import { StartScreen } from './components/Screen/StartPage/StartScreen'
import { ListOfGames } from './components/Screen/ListOfGames/ListOfGames'
import { Rating } from './components/Screen/Rating/Rating'
import { PlayerStatistic } from './components/Screen/PlayerStatistic/PlayerStatistic'

// Styles
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Router>
        {/*Navbar*/}
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/games" element={<ListOfGames />} />
          <Route path="/rating" element={<Rating />} />
          <Route path=`/${id || null}/statistics` element={<PlayerStatistic />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
        {/*<Navbar/>*/}
        {/* <Routes> */}
        <Header />
        <Screen>
          <PlayerStatistic />
        </Screen>
        <Footer />
        {/* </Routes> */}
      </Router>
    </div>
  )
}
