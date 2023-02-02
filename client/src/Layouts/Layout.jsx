import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Navbar } from '../components/NavBar/Navbar'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

// Screens (pages) - Routes
import { StartScreen } from '../components/Screen/StartPage/StartScreen'
import { ListOfGames } from '../components/Screen/ListOfGames/ListOfGames'
import { Rating } from '../components/Screen/Rating/Rating'
import { PlayerStatistic } from '../components/Screen/PlayerStatistic/PlayerStatistic'

// Styles
import { main, wrapper } from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/games" element={<ListOfGames />} />
          <Route path="/rating" element={<Rating />} />
          <Route path={`/statistics`} element={<PlayerStatistic />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
        <maim className={main}>
          <div className={wrapper}>{children}</div>
        </maim>
      </Router>
      <Footer />
      {/* </Routes> */}
    </>
  )
}

export default Layout
