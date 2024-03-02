import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Footer from './footer'
import Testimonials from './testimonials'
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from './context/themeContext'
import { useContext } from 'react'

export default function Home() {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${styles.maincont}`}>
      <Head>
        <title>CodeByte</title>
        <meta name="description" content="Codebyte provides you the best content you have ever seen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <div className={`${theme==="light" ? styles.introlight: styles.introdark}`}>
        <div className={` ${theme==="light" ? styles.introcontlight: styles.introcontdark}`}>
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
        <h2 className={`text-center my-5 text-${theme==="light"?'black':'white'}`}>Recomended Videos</h2>
        <div className={`${styles.contyoutube}`}>
          <div className={`${theme==="light"?styles.contyoutubevideoslight:styles.contyoutubevideosdark}`}>
            <motion.div
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <div className={`${theme==="light"?styles.youtubevideoslight:styles.youtubevideosdark}`}>
                <img className={`${styles.videos}`} src="/picture.png" alt='none'></img>
                <div className={`${theme==="light"?styles.videotextlight:styles.videotextdark} px-3 my-2`}>
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
              <div className={`${theme==="light"?styles.youtubevideoslight:styles.youtubevideosdark}`}>
                <img className={`${styles.videos}`} src="/picture2.png" alt='none'></img>
                <div className={`${theme==="light"?styles.videotextlight:styles.videotextdark} px-3 my-2`}>
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
              <div className={`${theme==="light"?styles.youtubevideoslight:styles.youtubevideosdark}`}>
                <img className={`${styles.videos}`} src="/picture3.png" alt='none' ></img>
                <div className={`${theme==="light"?styles.videotextlight:styles.videotextdark} px-3 my-2`}>
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
