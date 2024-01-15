import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { ThemeContext } from './context/themeContext';
import { MenuContext } from './context/menuContext';
import { MdAccountCircle } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = ({ user, logout }) => {



  const [isLoggedIN, setIsLoggedIN] = useState(user.value)

  const [open, setOpen] = useState(true)

  const { theme, handleOnClick } = useContext(ThemeContext)

  const { openHam, toggleMenu } = useContext(MenuContext)

  const router = useRouter();
  const isVideosPage = router.pathname === '/' || router.pathname === '/videos' || router.pathname.startsWith('/videos/');
  
  const {data:session} = useSession();
  const isSession = session || user.value;

  // If the current page is the videos page or any URL starting with /videos, don't render the hamburger menu

  // Check if the current page is the home page



  function toggle() {
    if (open == false)
      setOpen(true)
    else
      setOpen(false)
  }


  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  return (
    <>
      <div className={`${styles.nav}`}>
        <nav className={`navbar navbar-expand-lg px-2 ${styles.navbar} ${theme === "light" ? styles.navdark : styles.navlight}`}>
          <div className={`container-fluid`} >
            <Link href="/" className={styles.containerFluid}><span className={theme === "light" ? "textpurpledark" : "textpurplelight"}><b className={`${styles.codebyte} fontBold`}>&lt;/&gt; Codebyte</b></span></Link>
            <i onMouseOver={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}>
              {isSession && (
                <>
                  <MdAccountCircle className={` ${theme === "light" ? styles.account1dark : styles.account1light}`} onMouseOver={() => { setIsHovered(true) }}
                    onMouseLeave={() => { setIsHovered(false) }} />{isHovered && <ul className={`${styles.accdrop}`} style={{ display: isHovered ? 'block' : 'none' }}>
                      <Link href={'/myaccount'} style={{ textDecoration: 'none' }}><li className={`nav-item ${styles.nav_item}`}>My account</li></Link>
                      <li className={`nav-item ${styles.nav_item}`} onClick={logout}>Logout</li>
                    </ul>}</>
              )}
            </i>
            <img
              className={`${styles.imgMode1} ${theme === "light" ? styles.imgdark : styles.imglight}`}
              src="/nmicon.png"
              width={40}
              height={40}
              alt="Picture of the author"
              onClick={handleOnClick}
            />
            <div className={`${styles.hamburger}`} data-bs-toggle="collapse" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggle}>
              <div
                className={`${theme === "light" ? styles.hamburgerMenu1light : styles.hamburgerMenu1dark} ${open ? '' : styles.open}`}
              >
                <div className={`${styles.bar}`} ></div>
                <div className={`${styles.bar}`} ></div>
                <div className={`${styles.bar}`} ></div>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`${styles.navul} navbar-nav me-auto mb-2 mb-lg-0 px-3`} id='links'>
                <li className={`nav-item ${styles.navItem}`} >
                  <Link className={`nav-link text-${theme === "light" ? "white" : "black"} `} aria-current="page" href="/" >Home</Link>
                </li>
                <li className={`nav-item ${styles.navItem}`} >
                  <Link className={`nav-link text-${theme === "light" ? "white" : "black"} `} aria-current="page" href="/learn">Learn</Link>
                </li>
                <li className={`nav-item ${styles.navItem}`} >
                  <Link className={`nav-link text-${theme === "light" ? "white" : "black"}`} aria-current="page" href="/courses">Courses</Link>
                </li>
                <li className={`nav-item ${styles.navItem}`} >
                  <Link className={`nav-link text-${theme === "light" ? "white" : "black"}`} aria-current="page" href="/about">About Us</Link>
                </li>
                <li className={`nav-item ${styles.navItem}`} >
                  <Link className={`nav-link text-${theme === "light" ? "white" : "black"}`} aria-current="page" href="/contact">Contact Us</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className={`${styles.serBox} form-control me-2`} type="search" placeholder="Search" aria-label="Search" />
                <button className={`btn ${styles.serBtn}`} type="submit">Search</button>
              </form>
              {!isSession && (<Link href={"/login"}><button className={` btn mx-2 ${styles.signBtn}`} type="submit">Login</button></Link>)}
              <i onMouseOver={() => { setIsHovered(true) }}
                onMouseLeave={() => { setIsHovered(false) }}>
                {isSession && (
                  <>
                    <MdAccountCircle className={`${theme === "light" ? styles.accountdark : styles.accountlight}`} onMouseOver={() => { setIsHovered(true) }}
                      onMouseLeave={() => { setIsHovered(false) }} />{isHovered && <ul className={`${styles.accdrop}`} style={{ display: isHovered ? 'block' : 'none' }}>
                        <Link href={'/myaccount'} style={{ textDecoration: 'none' }}><li className={`nav-item ${styles.nav_item}`}>My account</li></Link>
                        <li className={`nav-item ${styles.nav_item}`} onClick={logout}>Logout</li>
                      </ul>}</>
                )}
              </i>
              <span className={`p-1`}>

                <img
                  className={`${styles.imgMode} ${theme === "light" ? styles.imgdark : styles.imglight}`}
                  src="/nmicon.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  onClick={handleOnClick}
                />
              </span>
            </div>
          </div>
        </nav>
        <div className={styles.menu}>
          {!isVideosPage && (
            <div className={`${styles.hamburger}`} >
              <div
                className={`${styles.hamburgerMenu} ${openHam ? '' : styles.open}`}
                onClick={toggleMenu}>
                <div className={`${styles.bar}`} onClick={toggleMenu}></div>
                <div className={`${styles.bar}`} onClick={toggleMenu}></div>
                <div className={`${styles.bar}`} onClick={toggleMenu}></div>
              </div>
            </div>
          )}
          {/* <div id="scroll_left_btn" class={`${styles.scrollleft} w3-hide-medium w3-hide-small`} style={{display: 'block'}}>
            <span onmousedown="scrollmenow(-1)" onmouseup="stopscrollmenow()" onmouseout="stopscrollmenow()">&nbsp;&nbsp;&nbsp;❮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div> */}
          <div className={`${theme === "light" ? styles.scrollmenudark : styles.scrollmenulight}`}>
            <div className={styles.scrollmenuContent}>
              <Link href="/learn/html/html-home">HTML</Link>
              <Link href="/learn/css/css1">CSS</Link>
              <Link href="/contact">JAVASCRIPT</Link>
              <Link href="/about">C</Link>
              <Link href="/support">C++</Link>
              <Link href="/blog">PYTHON</Link>
              <Link href="/tools">REACT</Link>
              <Link href="/base">NEXTJS</Link>
              <Link href="/custom">BOOTSTRAP</Link>
              <Link href="/more">TAILWIND CSS</Link>
              <Link href="/logo">JAVA</Link>
              <Link href="/friends">JQUERY</Link>
              <Link href="/partners">NODEJS</Link>
              <Link href="/people">FONTAWESOME</Link>
              <Link href="/work">HOW TO</Link>
              <Link href="/work">SQL</Link>
              <Link href="/work">PHP</Link>
              <Link href="/work">MONGODB</Link>
              <Link href="/work">AI</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
