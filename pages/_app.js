import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar'
import { useEffect,useState } from 'react';
import {ThemeContext,themes} from './context/themeContext'
import {MenuContext,menu} from './context/menuContext'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const router = useRouter()

  const [progress, setProgress] = useState(0)

  const [theme,setTheme] = useState(themes.dark)
  const [them,setThem] = useState(themes.dar)

  const [openHam,setOpenHam] = useState(menu.open)


  function handleOnClick(){
    theme === themes.light? setTheme(themes.dark) : setTheme(themes.light)
  }

  function handleOnClick2(){
    them === themes.ligh? setThem(themes.dar) : setThem(themes.ligh)
  }

  function toggleMenu(){
    openHam === menu.open? setOpenHam(!menu.open):setOpenHam(menu.open)
  }
  

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', () =>{
     setProgress(100)
    })

    router.events.on('routeChangeStart', () =>{
     setProgress(40)
    })
  }, [router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
  
      switch (theme) {
        case themes.dark:
          body.style.backgroundColor = "#fff"; // Set the background color to white
          body.style.color = "#000"; // Set the text color to black
          break;
        case themes.light:
          body.style.backgroundColor = "rgb(21,32,43)"; // Set the background color to a dark color
          body.style.color = "#000"; // Set the text color to black
          break;
        default:
          body.style.backgroundColor = "#fff"; // Set the background color to white
          body.style.color = "#000"; // Set the text color to black
      }
    }
  }, [theme]);
  



  return <>
  <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={600}
      />
  <MenuContext.Provider value = {{openHam,toggleMenu}}>
  <ThemeContext.Provider value={{theme, handleOnClick,handleOnClick2,them}} >
  <Navbar theme={theme}/>
  {/* <MouseScroll/> */}
  <Component {...pageProps} />
  {/* <Footer/> */}
  </ThemeContext.Provider>
  </MenuContext.Provider>
  </>
}
