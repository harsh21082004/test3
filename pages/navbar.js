import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';
import { ThemeContext } from './context/themeContext';
import { MenuContext } from './context/menuContext';


const Navbar = () => {

  const [open,setOpen] = useState(true)

  const { theme, handleOnClick } = useContext(ThemeContext)

  const { openHam, toggleMenu } = useContext(MenuContext)

  const router = useRouter();
  const isVideosPage = router.pathname === '/' || router.pathname === '/videos' || router.pathname.startsWith('/videos/');

  // If the current page is the videos page or any URL starting with /videos, don't render the hamburger menu

  // Check if the current page is the home page


  function toggle(){
    if(open == false)
   setOpen(true)
    else
    setOpen(false)
  }



  return (
    <>
      <nav className={`navbar navbar-expand-lg px-2 ${styles.navbar} ${theme === "light" ? styles.navdark : styles.navlight}`}>
        <div className={`container-fluid`} >
          <Link href="/" className={styles.containerFluid}><span className={theme === "light" ? "textpurpledark" : "textpurplelight"}><b className='fontBold'>&lt;/&gt; Codebyte</b></span></Link>
          <div className={`${styles.hamburger}`} data-bs-toggle="collapse" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div
              className={`${theme === "light" ?styles.hamburgerMenu1light : styles.hamburgerMenu1dark} ${open ? '' : styles.open}`}
              >
              <div className={`${styles.bar}`} onClick={toggle}></div>
              <div className={`${styles.bar}`} onClick={toggle}></div>
              <div className={`${styles.bar}`} onClick={toggle}></div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3" id='links'>
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
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn ${styles.serBtn}`} type="submit">Search</button>
            </form>
            <Link href={"/signup"}><button className={`btn mx-2 my-2 ${styles.serBtn}`} type="submit">SignUp</button></Link>
            <span className={`p-1`}>
              {/* <img
                className={`${styles.imgMode} ${theme === "light"?styles.imgdark:styles.imglight}`}
                src="/nmicon.png"
                width={40}
                height={40}
                alt="Picture of the author"
                onClick={handleOnClick}
              /> */}
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
    </>
  )
}

export default Navbar