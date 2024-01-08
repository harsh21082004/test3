import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Footer from './footer'
import { useContext } from 'react'
import { ThemeContext } from '../pages/context/themeContext';

import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import Testimonials from './testimonials'

export default function Home() {

  const { theme, handleOnClick } = useContext(ThemeContext)

  return (
    <>
      <Head>
        <title>CodeByte</title>
        <meta name="description" content="Codebyte provides you the best content you have ever seen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <div className={`${theme === "light" ? styles.introdark : styles.introlight}`}>
        <div className={` ${theme === "light" ? styles.introcontdark : styles.introcontlight}`}>
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
          <p>Welcome to codebyte.If you are worrying that how to start coding then you are at right place.Codbyte will provide you the all of the basic knowledge that is required while learning a language.</p>
          <button className={`btn ${styles.btncourse}`}>Free Courses</button>
        </div>
        <img src="/pic.jpg" width={100} height={100} alt="none" className={`${styles.photo}`} />
      </div>
      <div className={`${theme === "light" ? styles.youtubedark : styles.youtubelight}`}>
        <h2 className={`text-center my-5`}>Recomended Videos</h2>
        <div className={`${styles.contyoutube}`}>
          <div className={`${styles.contyoutubevideos}`}>
            <div className={`${theme === "light" ? styles.youtubevideosdark : styles.youtubevideoslight}`}>
              <img className={`${styles.videos}`} height={100} width={100} src="/picture.png" alt='none'></img>
              <div className={` px-3 my-2`}>
                <h4 className={`text-${theme === "light" ? "white" : "black"}`}>My upcoming react project</h4>
                <p className={`text-${theme === "light" ? "white" : "black"}`}>It is my new upcoming react project (AI Based Attandence System).Here you will learn how to work in react and make webapps.</p>
              </div>
              <div className={`mt-5`}>
                <Link href="/videos/new-upcoming-react-project">
                  <button className={`btn  my-2 ${styles.watch}`}>Watch</button>
                </Link>
              </div>
            </div>
            <div className={`${theme === "light" ? styles.youtubevideosdark : styles.youtubevideoslight}`}>
              <img className={`${styles.videos}`} height={100} width={100} src="/picture2.png" alt='none'></img>
              <div className={`px-3 my-2`}>
                <h4 className={`text-${theme === "light" ? "white" : "black"}`}>How To Make Contact Form</h4>
                <p className={`text-${theme === "light" ? "white" : "black"}`}>In this video you will learn hoe to make a working contact form using html, css and javascript.</p>
              </div>
              <div className={`mt-5`}>
                <Link href="/videos/responsive-navbar">
                  <button className={`btn  my-2 ${styles.watch}`}>Watch</button>
                </Link>
              </div>
            </div>
            <div className={`${theme === "light" ? styles.youtubevideosdark : styles.youtubevideoslight}`}>
              <img className={`${styles.videos}`} height={100} width={100} src="/picture3.png" alt='none' ></img>
              <div className={`px-3 my-2`}>
                <h4 className={`text-${theme === "light" ? "white" : "black"}`}>How To Make a Login Form</h4>
                <p className={`text-${theme === "light" ? "white" : "black"}`}>In this video i will show you how to make a responsive login form using html, css and javascript.</p>
              </div>
              <div className={`mt-5`}>
                <Link href="/videos/contact-form">
                  <button className={`btn  my-2 ${styles.watch}`}>Watch</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  )
}
