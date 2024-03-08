import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Footer from './footer'
import Testimonials from './testimonials'
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from './context/themeContext'
import { useContext, useState } from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hybrid,zTouch,vs2015 } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  const [code, setCode] = useState(
    '<!DOCTYPE html>\n<html>\n <head> \n<title>Page Title</title> \n</head>\n <body>\n<h1>This is a Heading</h1>\n <p>This is a paragraph.</p>\n </body> \n</html>'
  );

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.maincont}`}>
      <Head>
        <title>CodeByte</title>
        <meta name="description" content="Codebyte provides you the best content you have ever seen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <div className={`${theme === "light" ? styles.introlight : styles.introdark}`}>
        <div className={` ${theme === "light" ? styles.introcontlight : styles.introcontdark}`}>
          <h1>Welcome to <b>CodeByte</b></h1><br /><span>Learn </span><span className={` ${styles.typer}`}><Typewriter
            options={{
              strings: [
                'HTML',
                'CSS',
                'JAVASCRIPT',
                'C',
                'C++',
                'PYTHON',
                'REACT',
                'NEXT',
              ],
              autoStart: true,
              loop: true,
              delay: 70,

            }}
          /></span>
          <p>Welcome to CodeByte, your go-to resource for initiating your coding journey! If you find yourself contemplating how to embark on the coding path, worry not. CodeByte is here to furnish you with fundamental knowledge essential for language acquisition. Whether you are a novice or looking to strengthen your coding foundation, we've got you covered with comprehensive insights and guidance.</p>
          <Link href={'/protected'}><button className={`btn btn-primary ${styles.button} mt-2`}>Free Courses</button></Link>
        </div>
        <video src={require('../public/video.mp4')} autoPlay muted loop className={`${styles.photo}`} loading='lazy' />
        <video src={require('../public/video2.mp4')} autoPlay muted loop className={`${styles.photo1}`} loading='lazy' />
      </div>
      <div className={`${styles.youtube}`}>
        <h2 className={`text-center my-5 text-${theme === "light" ? 'black' : 'white'}`}>Recomended Videos</h2>
        <div className={`${styles.contyoutube}`}>
          <div className={`${theme === "light" ? styles.contyoutubevideoslight : styles.contyoutubevideosdark}`}>
            <motion.div
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className={`${theme === "light" ? styles.youtubevideoslight : styles.youtubevideosdark}`}>
                <img className={`${styles.videos}`} src="/picture.png" alt='none'></img>
                <div className={`${theme === "light" ? styles.videotextlight : styles.videotextdark} px-3 my-2`}>
                  <h4 >My upcoming react project</h4>
                  <p >It is my new upcoming react project (AI Based Attandence System).Here you will learn how to work in react and make webapps.</p>
                </div>
                <div className={`mt-5 ${styles.watchButton}`}>
                  <Link href="/videos/new-upcoming-react-project">
                    <button className={`btn btn-primary  my-2 ${styles.watch}`}>Watch</button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className={`${theme === "light" ? styles.youtubevideoslight : styles.youtubevideosdark}`}>
                <img className={`${styles.videos}`} src="/picture2.png" alt='none'></img>
                <div className={`${theme === "light" ? styles.videotextlight : styles.videotextdark} px-3 my-2`}>
                  <h4 >How To Make Contact Form</h4>
                  <p >In this video you will learn hoe to make a working contact form using html, css and javascript.</p>
                </div>
                <div className={`mt-5 ${styles.watchButton}`}>
                  <Link href="/videos/responsive-navbar">
                    <button className={`btn btn-primary  my-2 ${styles.watch}`}>Watch</button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className={`${theme === "light" ? styles.youtubevideoslight : styles.youtubevideosdark}`}>
                <img className={`${styles.videos}`} src="/picture3.png" alt='none' ></img>
                <div className={`${theme === "light" ? styles.videotextlight : styles.videotextdark} px-3 my-2`}>
                  <h4 >How To Make a Login Form</h4>
                  <p >In this video i will show you how to make a responsive login form using html, css and javascript.</p>
                </div>
                <div className={`mt-5 ${styles.watchButton}`}>
                  <Link href="/videos/contact-form">
                    <button className={`btn btn-primary  my-2 ${styles.watch}`}>Watch</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={`${theme === 'light'?styles.waveBoxLight:styles.waveBoxDark} mt-5`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
          <path fill-opacity="1" d="M0,96L80,96C160,96,320,96,480,122.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className={`${theme === 'light' ? styles.htmlBoxLight:styles.htmlBoxDark}`}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <h2 className={`text-center text-${theme === "light" ? 'black' : 'white'} my-2`} style={{fontSize:'50px'}}>HTML</h2>
            <p className={`text-center text-${theme === "light" ? 'black' : 'white'} my-2`} style={{fontSize:'17px',fontWeight:'bold',width:'80%',margin:'auto'}}>Html is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
            <input type="button" className={`btn btn-success`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Learn Html" />
            <input type="button" className={`btn btn-primary`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Watch Videos" />
            <input type="button" className={`btn btn-danger`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Learn Html" />
          </div>
          <div className={`${theme === 'light' ? styles.htmlSyntaxLight:styles.htmlSyntaxDark}`}>
            <h2 className={`text-${theme === "light" ? 'black' : 'white'} my-2`}>HTML Example:</h2>
          <SyntaxHighlighter className={`${styles.syntax} my-2`} language={'html'} style={zTouch}>
            {code}
          </SyntaxHighlighter>
          <input type="button" className={`btn btn-primary my-2`} style={{width:'250px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Try it yourself" />
          </div>
        </div>
        <div className={`${theme === 'light' ? styles.cssBoxLight:styles.cssBoxDark}`} style={{backgroundColor:'wheat'}}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <h2 className={`text-center text-${theme === "light" ? 'black' : 'white'} my-2`} style={{fontSize:'50px'}}>CSS</h2>
            <p className={`text-center text-${theme === "light" ? 'black' : 'white'} my-2`} style={{fontSize:'17px',fontWeight:'bold',width:'80%',margin:'auto'}}>Html is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
            <input type="button" className={`btn btn-success`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Learn Html" />
            <input type="button" className={`btn btn-primary`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Watch Videos" />
            <input type="button" className={`btn btn-danger`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Learn Html" />
          </div>
          <div className={`${theme === 'light' ? styles.cssSyntaxLight:styles.cssSyntaxDark}`}>
            <h2 className={`text-${theme === "light" ? 'black' : 'white'} my-2`}>CSS Example:</h2>
          <SyntaxHighlighter className={`${styles.syntax} my-2`} language={'html'} style={zTouch}>
            {code}
          </SyntaxHighlighter>
          <input type="button" className={`btn btn-primary my-2`} style={{width:'250px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Try it yourself" />
          </div>
        </div>
        <div className={`${theme === 'light' ? styles.jsBoxLight:styles.jsBoxDark}`}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <h2 className={`text-center text-black my-2`} style={{fontSize:'50px'}}>JAVASCRIPT</h2>
            <p className={`text-center text-black my-2`} style={{fontSize:'17px',fontWeight:'bold',width:'80%',margin:'auto'}}>Html is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
            <input type="button" className={`btn btn-success`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Learn Html" />
            <input type="button" className={`btn btn-primary`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Watch Videos" />
            <input type="button" className={`btn btn-danger`} style={{width:'300px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Learn Html" />
          </div>
          <div className={`${theme === 'light' ? styles.jsSyntaxLight:styles.jsSyntaxDark}`}>
            <h2 className={`text-${theme === "light" ? 'black' : 'white'} my-2`}>CSS Example:</h2>
          <SyntaxHighlighter className={`${styles.syntax} my-2`} language={'html'} style={zTouch}>
            {code}
          </SyntaxHighlighter>
          <input type="button" className={`btn btn-primary my-2`} style={{width:'250px',margin:'5px auto',padding:'10px',borderRadius:'25px'}} value="Try it yourself" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,96L80,96C160,96,320,96,480,122.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <motion.div
        variants={variant}
        initial="hidden"
        whileInView="visible"
      >
        <Testimonials />
      </motion.div>
      <Footer />
    </div>
  )
}
