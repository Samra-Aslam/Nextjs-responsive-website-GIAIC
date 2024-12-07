import Link from 'next/link'
import React from 'react'
import "../globals.css";



const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Food.point</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/manu">Manu</Link>
        </nav>
    </header>
  )
}

export default Header