import React from 'react'
import { routes } from '../routes'
import { Link, useNavigate } from 'react-router-dom'
import { useContextGlobal } from "../components/utils/global.context"
import dentalLogo from '../assets/dental-logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const { themeState, themeDispatch } = useContextGlobal()

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: 'SWITCH_DARK' })
    } else {
      themeDispatch({ type: 'SWITCH_LIGHT' })
    }
  }

  return (
    <div className="nav-container">
      <Link to={routes.home}>
        <img src={dentalLogo} alt="dental-logo" />
      </Link>
      <nav className="nav-link">
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.contact}><h3>Contacto</h3></Link>
        <Link to={routes.favs}><h3>Destacados</h3></Link>

        <button onClick={switchTheme}>
          {themeState.theme ? '🌜 dark' : '🔆 light'}
        </button>

        <button onClick={() => navigate(-1)}>
          ↲
        </button>
      </nav>
    </div>
  )
}

export default Navbar