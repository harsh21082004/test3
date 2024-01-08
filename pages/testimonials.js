import React, { useContext, useState } from 'react'
import styles from '@/styles/Testimonials.module.css'
import Head from 'next/head';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeContext } from './context/themeContext';

const CustomHead = () => (
    <Head>
      
    </Head>
  );

  // const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });


const Testimonials = () => {

    const { theme, handleOnClick } = useContext(ThemeContext)


    useEffect(() => {
        // Your component-specific logic (if needed)
      }, []);
    
  return (
    <>
    <CustomHead />
    <h2 className={`text-center m-5 ${theme === "light" ? 'textpurpledark' : 'textpurplelight'}`}>Testimonials</h2>
    <div className="container">
            <div id='demo' className={`${theme === "light" ? styles.demodark : styles.demolight} carousel slide`} >
                <div className={`${theme === "light" ? styles.carouselContainerdark : styles.carouselContainerlight} carousel-inner`}>
                  <div className="carousel-item active">
                    <div className={`${theme === "light" ? styles.carouselCaptiondark : styles.carouselCaptionlight} carousel-caption`}>
                      <p >When I was searching for a website to learn the basic coding and advanced programming, I found this website and beleve me if you are a beginner then it will realy help you.
                      </p>
                      <img src="/vishal.jpg" alt='none'/>
                      <div id="image-caption" className={`${styles.imageCaption}`}>Vishal Tiwari <br /><b>B.tech from CSE(AIML)</b></div>
                    </div>   
                  </div>
                  <div className="carousel-item">
                    <div className={`${theme === "light" ? styles.carouselCaptiondark : styles.carouselCaptionlight} carousel-caption`}>
                      <p>I am currently a software engineer, One day my nephew asked me that where to learn basic and advanced programming skills then I found this website and I was impressed that everyone can learn from this website.</p>
                        <img src="/dhanraj.jpg" className="img-fluid" alt='none'/>
                        <div id="image-caption" className={`${styles.imageCaption}`}>Dhanraj Tiwari <br /><b>Software Engineer</b></div>
                    </div>   
                  </div>
                  <div className="carousel-item">
                    <div className={`${theme === "light" ? styles.carouselCaptiondark : styles.carouselCaptionlight} carousel-caption`}>
                      <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                        I don't know what will.This was the very best explanation of frameworks for brginners 
                        that I've ever seen.</p>
                        <img src="/varun.jpg" className="img-fluid" alt='none'/>
                        <div id="image-caption" className={`${styles.imageCaption}`}>Varun Kumar Gupta</div>
                    </div>   
                  </div>
                  <div className="carousel-item">
                    <div className={`${theme === "light" ? styles.carouselCaptiondark : styles.carouselCaptionlight} carousel-caption`}>
                      <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                        I don't know what will.This was the very best explanation of frameworks for brginners 
                        that I've ever seen.</p>
                        <img src="/rakesh.jpg" className="img-fluid" alt='none'/>
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