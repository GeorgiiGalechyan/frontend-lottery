import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import { Header } from './components/Header/Header'
import { Screen } from './components/Screen/Screen'
import { Footer } from './components/Footer/Footer'

// Screens (pages) - Routes
import { StartScreen } from './components/Screen/Contents/StartPage/StartScreen'
import { ListOfGames } from './components/Screen/Contents/ListOfGames/ListOfGames'
import { Rating } from './components/Screen/Contents/Rating/Rating'
import { PlayerStatistic } from './components/Screen/Contents/PlayerStatistic/PlayerStatistic'

// Styles
import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Router>
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
