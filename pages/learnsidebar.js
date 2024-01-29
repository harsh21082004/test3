import React from 'react'
import styles from '@/styles/LearnSidebar.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { MenuContext } from './context/menuContext';
// import Link from "next/link";
import { useRouter } from "next/router";

const LearnSideBar = () => {

  const router = useRouter();

  const { openHam } = useContext(MenuContext)


  

  return (
    <>
      <div className={`${styles.sidebar} ${!openHam ? styles.sideopen : ''}`} id='navside'>
        <h3>Learn</h3>
        <Link href="/learn/html/html-home" className={router.pathname === "/learn/html/html-home" ? "activelink" : ""}>HTML</Link>
        <Link href="/learn/css/css1">CSS</Link>
        <Link href="/learn/html/html3">JAVASCRIPT</Link>
        <Link href="/html">C</Link>
        <Link href="/html">C++</Link>
        <Link href="/html">PYTHON</Link>
        <Link href="/html">REACT</Link>
        <Link href="/html">NEXTJS</Link>
        <Link href="/html">BOOTSTRAP</Link>
        <Link href="/html">TAILWIND CSS</Link>
        <Link href="/html">JAVA</Link>
        <Link href="/html">JQUERY</Link>
        <Link href="/html">NODEJS</Link>
        <Link href="/html">FONTAWESOME</Link>
        <Link href="/html">HOW TO</Link>
        <Link href="/html">SQL</Link>
        <Link href="/html">PHP</Link>
        <Link href="/html">MONGODB</Link>
        <Link href="/html">ARTIFITIAL INTELLIGENCE</Link>
        <Link href="/html">MACHINE LEARNING</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>
        <Link href="/html">Html</Link>

      </div>
    </>
  )
}

export default LearnSideBar