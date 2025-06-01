import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
export default function NavBar() {
  return (
    <>
        <nav>
            <ul className={style.navitems}>
                <li className={style.navitem}><Link to="/">Home</Link></li>
                <li className={style.navitem}><Link to="/about">About</Link></li>
                <li className={style.navitem}><Link to="/products">Products</Link></li>
                <li className={style.navitem}><Link to="/login">Login</Link></li>
                <li className={style.navitem}><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    </>
  )
}
