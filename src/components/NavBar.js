import React from 'react'
import '../styles/nav_bar.scss';
import logoApp from '../images/logoApp.png';
import { HashLink as NavLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        
        <div className="container">
           <div className="logo">
               <img src={logoApp} alt="LogoApp"/>
           </div>

           <nav className="nav">
               <ul className="nav-list">
                   <li className="items">
                       <NavLink to="#" exact activeClassName="active">
                           Home
                       </NavLink>
                   </li>
                   <li className="items">
                       <NavLink to="#about" exact activeClassName="active">
                           About
                       </NavLink>
                   </li>
                   <li className="items">
                       <NavLink to="#services" exact activeClassName="active">
                       Services
                       </NavLink>
                   </li>
                   <li className="items">
                       <NavLink to="#blog" exact activeClassName="active">
                       Blog
                       </NavLink>
                   </li>
                   <li className="items">
                       <NavLink to="#contacts" exact activeClassName="active">
                       Contacts
                       </NavLink>
                   </li>
               </ul>
           </nav>

           <button className="quote">
               <h2>request a quote</h2>
           </button>

           
        </div>
            
        
    )
}

export default NavBar
