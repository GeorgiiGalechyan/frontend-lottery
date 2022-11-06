import { Link } from 'react-router-dom'

// Children Components

// Style
import cl from './Navbar.module.css'

// Component
export const Navbar = () => {
  return (
    <div className={cl.Navbar}>
      <Link to={'/'}> Start </Link>
      <Link to={'/games'}> Games </Link>
      <Link to={'/rating'}> Rating </Link>
      <Link to={`/statistics`}> Player Statistic </Link>
    </div>
  )
}
