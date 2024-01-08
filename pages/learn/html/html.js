import React from 'react'
import styles from '@/styles/Html.module.css'
import Link from 'next/link'
import { useState,useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'
import { MenuContext } from '../../context/menuContext';
import { useRouter } from "next/router";

const Html = () => {

  const router = useRouter();

  const { theme, handleOnClick } = useContext(ThemeContext)

  const { openHam } = useContext(MenuContext)
  


  return (
    <>
        <div className={`${theme === "light"?styles.sidebardark:styles.sidebarlight} ${!openHam ? styles.sideopen : ''}`} id='navside'>
          <h3>Learn</h3>
          <Link href="/learn/html/html-home" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>HTML Home</Link>
          <Link href="/learn/html/html-intro" className={router.pathname === "/learn/html/html-intro" ? 'activelink' : ""}>HTML INTRODUCTION</Link>
          <Link href="/learn/html/html-editors" className={router.pathname === "/learn/html/html-editors" ? 'activelink' : ""}>JAVASCRIPT</Link>
          <Link href="/learn/html/html-basic" className={router.pathname === "/learn/html/html-basic" ? 'activelink' : ""}>C</Link>
          <Link href="/learn/html/html-home" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>C++</Link>
          <Link href="/learn/html/html-home" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>PYTHON</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>REACT</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>NEXTJS</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>BOOTSTRAP</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>TAILWIND CSS</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>JAVA</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>JQUERY</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>NODEJS</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>FONTAWESOME</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>HOW TO</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>SQL</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>PHP</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>MONGODB</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>ARTIFITIAL INTELLIGENCE</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>MACHINE LEARNING</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>Html</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>Html</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>Html</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>Html</Link>
          <Link href="/html" className={router.pathname === "/learn/html/html-home" ? 'activelink' : ""}>Html</Link>
          <Link href="/html">Html</Link>
          <Link href="/html">Html</Link>
          <Link href="/html">Html</Link>
          <Link href="/html">Html</Link>

        </div>
    </>
  )
}

export default Html