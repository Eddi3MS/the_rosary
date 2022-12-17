import { NavLink } from 'react-router-dom'

import classes from './Header.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/oracoes'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Orações
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/terco'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Terço Diário
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
