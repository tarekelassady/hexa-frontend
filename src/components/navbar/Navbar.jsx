import React, { useState } from 'react';
import './Navbar.css';
import {RiMenu3Line,RiCloseLine} from "react-icons/ri";
import HexaLogo from "../../assets/Hexa_Logo-violet.png";
import {Link} from "react-router-dom";

//BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  
  return (
    <div className="hexa_navbar"  onMouseLeave={()=>setToggleMenu(false)}>
      <div className='hexa_navbar-links'>
        <div className='hexa_navbar-links_logo'>
          <img src={HexaLogo} alt="hexa logo" />
        </div>
        <div className='hexa_navbar-links_container'>
          <Menu />
        </div>
       
      </div>
      <div className='hexa_navbar-sign'>
        <p><Link to="/login">Sign In</Link></p>
        <button type="button"><Link to="/register">Sign Up</Link></button>
      </div>


      <div className="hexa_navbar-menu" onClick={()=>setToggleMenu(!toggleMenu)}>
      {toggleMenu ?
      <>
      <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
      <div className="hexa_navbar-menu_container scale-up-center">
          <div className="hexa_navbar-menu_container-links">
            <Menu />
            <div className='hexa_navbar-menu_container-links_sign'>
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        </div>
      </>
      :
      <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>}
      </div>
      
      
    </div>
  )
}

const Menu =()=>(
  <>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/projects">Projects</Link></p>
    <p><Link to="/write-project">Create Project</Link></p>
    <p><Link to="#features">Case Studies</Link></p>
    <p><Link to="#blog">Library</Link></p>
</>

)
export default Navbar