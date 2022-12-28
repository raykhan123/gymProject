import React,{useState} from 'react'
import './Navbar.css';
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick=() => setClick(!click)
  const[color, setColor] = useState(false)
const changeColor =()=>{
  if(window.scrollY >=100){
    setColor(true);
  }else{
    setColor(false)
  }
}
window.addEventListener("scroll", changeColor);

  return (
    <>
    <div className={color ? "header header-bg" : 'header'}>
    <nav className='main-nav'>
    <div><img className="logo-img" src={Logo} alt="logoImg"/></div>
    <div className='logo'>
    <h2>
    <span className='part1'>Vella </span>
    
    <span className='part2'>GYM</span>
    </h2>
    </div>

    <div className='menu'>
    <ul className={click ? "nav-menu active" : 'nav-menu'}>
    <li>
    <a href='/'>  Home</a>
    </li><li>
    <a href='About'>  About</a>
    </li><li>
    <a href='Pricing'> Pricing</a>
    </li><li>
    <a href='Program'>  Program</a>
    </li>
    </ul>
    </div>

    <div>
    <button className='btn'><span> Register Now</span></button>
    </div>   

    <div className='hamburger' onClick={handleClick}>
     {click ? (<FaTimes size={40} style={{color: "red"}}/>) : (
     <FaBars size={40} style={{color: "blue"}}/>)}
     </div>
   
    
    </nav>
    </div>

    </>
   
  );
}

export default Navbar;
