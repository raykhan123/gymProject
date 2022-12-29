import React, { useState } from 'react'
import './Navbar.css';
import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : 'header'}>
        <nav className='main-nav'>
          <div>
            <Link to="background-image">
              <img className="logo-img" src={Logo} alt="logoImg" />
            </Link>
          </div>

          <div className='logo'>
            <h2>
              <Link to="background-image"><span className='part1'>Vella </span></Link>

              <Link to="background-image"><span className='part2'>GYM</span></Link>
            </h2>
          </div>

          <div className='menu'>
            <ul className={click ? "nav-menu active" : 'nav-menu'}>
              <li>
                <Link to="background-image">  Home</Link>
              </li><li>
                <Link to='about-container'>  About</Link>
              </li><li>
                <Link to='page'> Pricing</Link>
              </li><li>
                <Link to='fitness-services'>  Program</Link>
              </li>
            </ul>
          </div>

          <div>
            <button className='btn'><span> Register Now</span></button>
          </div>

          <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={40} style={{ color: "red" }} />) : (
              <FaBars size={40} style={{ color: "blue" }} />)}
          </div>


        </nav>
      </div>

    </>

  );
}

export default Navbar;
