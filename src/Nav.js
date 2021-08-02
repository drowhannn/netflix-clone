import React from 'react'
import { useState,useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        <div className={`nav ${show && "nav__bg"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
                alt="Netflix Logo" 
            />
            <img 
                className="nav__avatar"
                src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904665-bar-lines-list-menu-nav-navigation-options_122515.png" 
                alt="Avatar" 
            />
        </div>
    )
}

export default Nav
