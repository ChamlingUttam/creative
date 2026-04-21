import React from 'react'
import { navLinks } from '../constants/navLinks'

const NavBar = () => {
  return (
    <header>
        <img src="/public/logo.svg" alt="logo" />
        <nav>
            {navLinks.map((link)=>(
                <li key={link.label}>
                    <a href='link.label'>{link.label}</a>
                </li>
            ))}
        </nav>
        <div className='flex-center gap-3'>
            <button>
                <img src="/search.svg" alt="search" />


            </button>

            <button>
                        
                <img src="/cart.svg" alt="cart" />
                        
            </button>






        </div>
    </header>
  )
}

export default NavBar
