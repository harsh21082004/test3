import React, { useContext } from 'react'
import styles from '@/styles/Testimonials.module.css'
import Head from 'next/head';
import { useEffect } from 'react';
import { PiQuotesFill } from "react-icons/pi";
import { ThemeContext } from './context/themeContext';

const CustomHead = () => (
  <Head>

  </Head>
);


const Testimonials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <CustomHead />
      <div className="container">
        <div id='demo' className={`${theme === "light"? styles.demolight:styles.demodark} carousel slide`} >
          <h2 className={`text-center ${styles.text} text-${theme === 'light'?'black':'white'}`}><PiQuotesFill className={`${styles.text1}`} style={{float:'left',margin:'0px 15px',position:'absolute',left:'5px'}}/>Testimonials</h2>
          <div className={`${styles.carouselContainer} carousel-inner `}>
            <div className="carousel-item active">
              <div className={`${styles.carouselCaption} text-${theme === 'light'?'black':'white'} carousel-caption`}>
                <p >In my quest for a platform to delve into the fundamentals of coding and advance my programming skills, I stumbled upon this website. Believe me, if you're a neophyte in the coding realm, this platform is exceptionally beneficial. It provides comprehensive resources and support, making it an invaluable aid for beginners looking to establish a solid foundation and for those seeking to delve into more advanced programming concepts.
                </p>
                <img src="/vishal.jpg" alt='none' />
                <div id="image-caption" className={`${styles.imageCaption}`}>Vishal Tiwari <br /><b>B.tech from CSE(AIML)</b></div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={`${styles.carouselCaption} text-${theme === 'light'?'black':'white'} carousel-caption`}>
                <p>I am currently a software engineer, One day my nephew asked me that where to learn basic and advanced programming skills then I found this website and I was impressed that everyone can learn from this website.</p>
                <img src="/dhanraj.jpg" className="img-fluid" alt='none' />
                <div id="image-caption" className={`${styles.imageCaption}`}>Dhanraj Tiwari <br /><b>Software Engineer</b></div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={`${styles.carouselCaption} text-${theme === 'light'?'black':'white'} carousel-caption`}>
                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                  I don't know what will.This was the very best explanation of frameworks for brginners
                  that I've ever seen.</p>
                <img src="/varun.jpg" className="img-fluid" alt='none' />
                <div id="image-caption" className={`${styles.imageCaption}`}>Varun Kumar Gupta</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={`${styles.carouselCaption} text-${theme === 'light'?'black':'white'} carousel-caption`}>
                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                  I don't know what will.This was the very best explanation of frameworks for brginners
                  that I've ever seen.</p>
                <img src="/rakesh.jpg" className="img-fluid" alt='none' />
                <div id="image-caption" className={`${styles.imageCaption}`}>Rakesh Maurya</div>
              </div>
            </div>
          </div>
          <a className={`${styles.carouselControlPrev} carousel-control-prev`} data-bs-target="#demo" data-bs-slide="prev">
            <i className='fa fa-arrow-left'></i>
          </a>
          <a className={`${styles.carouselControlNext} carousel-control-next`} data-bs-target="#demo" data-bs-slide="next">
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </>
  )
}

export default Testimonials