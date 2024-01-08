import React,{useRef} from 'react'
import styles from '@/styles/Learn.module.css'
import Footer from './footer'
import Link from 'next/link'
import { useState ,useContext} from 'react'
import LearnSideBar from './learnsidebar'
import { ThemeContext } from './context/themeContext';
import { MenuContext } from './context/menuContext';
const Learn = () => {

  const { theme, handleOnClick } = useContext(ThemeContext)

  const { openHam } = useContext(MenuContext)

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  //   setIsSidebarOpen(!isSidebarOpen);
  // };



  return (
    <>

      <div className={`${theme === "light"?styles.learndark:styles.learnlight}`}>
        <LearnSideBar/>
        <div className={`${theme === "light"?styles.learncontdark:styles.learncontlight} ${openHam ? styles.sidecont : ''}`} id='sidecont'>
          <div >
            <p className={`text-${theme === "light"?"white":"black"}`}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque qui quae earum, animi explicabo ab, repudiandae velit ex aliquam consequatur assumenda. Quis laborum totam rerum enim exercitationem sit dolorem repellendus ducimus aperiam porro temporibus cumque incidunt, id consequatur quam voluptas provident voluptate velit fugiat laboriosam nisi vitae non, qui tempora! Facilis, alias sequi nam laudantium sed porro reiciendis soluta iure in rerum omnis. Nam ex, a vero tempore illum atque corporis voluptatibus id at sit, neque nemo voluptates natus impedit vel perspiciatis qui debitis, dicta ab libero? In nulla asperiores accusantium tenetur fugiat deserunt ducimus sapiente, id excepturi sint blanditiis! </p>
          </div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default Learn