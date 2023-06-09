import React from 'react'
import logo from '../../assets/logonu.png'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'



 const Navbar = () => {
  return (
    <nav>
        <div className='container nav__container'>
            <a href="index.html" className='nav__logo'>
            <img src={logo} alt='logo' style={{objectFit: "contain"}}/>
            </a>
            <ul className='nav__menu'>
                {
                    data.map(x => <li key={x.id}>
                        <a href={x.link}>{x.title}</a>
                    </li>)
                }
            </ul>
            <button id='theme__icon'><IoIosColorPalette></IoIosColorPalette></button>
        </div>
    </nav>
  )
}

export default Navbar
