import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar'
import { useEffect, useState } from 'react';
import { MenuContext, menu } from './context/menuContext'
import { ThemeContext,themes} from './context/themeContext';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider, signIn, signOut } from 'next-auth/react'

import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState(null)

  const [key, setKey] = useState(0)

  const router = useRouter()

  const [progress, setProgress] = useState(0)

  const [openHam, setOpenHam] = useState(menu.open)

  const [theme, setTheme] = useState(themes.light)

  useEffect(() => {
    // Retrieve theme from localStorage or use a default theme
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'light');
  }, []);

  useEffect(() => {
    // Update body background color when theme changes
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#282c34';
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };


  function toggleMenu() {
    openHam === menu.open ? setOpenHam(!menu.open) : setOpenHam(menu.open)
  }

  // function toggleTheme(){
  //   setTheme(theme === themes.light ? themes.dark : themes.light)
  // }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      setUser(token)
      setKey(Math.random())
    }

  }, [router.query]);


  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
    setOpenHam(menu.open)
  }, [router.route]);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
  }, [router]);

  const logout = () => {
    signOut()
    localStorage.removeItem('token')
    toast.success("successfully logged out", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setUser({ value: null })
    setKey(Math.random())
  }

  const { scrollYProgress } = useScroll();

  return <>
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
  />
    <SessionProvider session={pageProps.session}>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LoadingBar
        color='#df00a2'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={600}className='loading-bar'
      />
      <MenuContext.Provider value={{ openHam, toggleMenu }}>
          <Navbar logout={logout} key={key} user={user} />
          {/* <MouseScroll/> */}
          <Component {...pageProps} />
          {/* <Footer/> */}
      </MenuContext.Provider>
    </SessionProvider>
    </ThemeContext.Provider>
  </>
}
