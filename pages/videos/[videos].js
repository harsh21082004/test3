import React, { useContext, useState,useEffect } from 'react'
import data from './videos.json';
import styles from '../../styles/Videos.module.css';
import YouTube from 'react-youtube';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeContext } from '../context/themeContext';

const ReactProjectVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const currentVideo = data.url[currentIndex];

  useEffect(() => {
    // Find the index of the current route in your data
    const routeIndex = data.slug.indexOf(router.query.videos);

    // Update the current index if the route is found
    if (routeIndex !== -1) {
      setCurrentIndex(routeIndex);
    }
  }, [router.query.videos]);

  const handleNext = () => {
    if (currentIndex < data.url.length - 1) {
      setCurrentIndex(currentIndex + 1);
      router.push(`/videos/${data.slug[currentIndex + 1]}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      router.push(`/videos/${data.slug[currentIndex - 1]}`);
    }
  };

  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };


  return (
    <>
      <Head>
        <title>{data.title[currentIndex]}</title>
      </Head>
      <div className={`${styles.videoplaycont}`}>
        <div className={`${styles.youtubeplayer}`}>
          <YouTube style={{margin:'auto'}} opts={{ width: '100%', height: '500' }} videoId={currentVideo} onReady={onReady} onError={onError} />
        </div>
        <div className={`text-center ${styles.youtubeplaylist}`}>
          <ul>
            <Link  style={{textDecoration:'none'}} href={'/videos/new-upcoming-react-project'}><li className={router.query.videos === `new-upcoming-react-project` ? 'activelink' : styles.videosLink}>My new upcoming react project</li></Link>

            <Link style={{textDecoration:'none'}} href={'/videos/responsive-navbar'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>How to make a responsive navbar</li></Link>
            
            <Link style={{textDecoration:'none'}} href={'/videos/contact-form'}><li className={router.query.videos === `contact-form` ? 'activelink' : styles.videosLink}>how to make a contact form</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day4 HLorem ipsum dolor sit amet consectetur</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day5 Lorem ipsum dolor sit amet consectetur</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day6 Lorem ipsum dolor sit amet consectetur</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day2 Lorem ipsum dolor sit amet consectetur</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day3 Lorem ipsum dolor sit amet consectetur</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day4 Lorem ipsum dolor sit amet consectetur</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day5 Lorem ipsum dolor sit amet consectetur</li></Link>
            <Link style={{textDecoration:'none'}} href={'/'}><li className={router.query.videos === `responsive-navbar` ? 'activelink' : styles.videosLink}>Day6 Lorem ipsum dolor sit amet consectetur</li></Link>
          </ul>
        </div>
      </div>

      <div className={`${styles.nextprev}`}>
        <button onClick={handlePrev} className={`${styles.prev}`}>&lt; Prev</button>
        <button onClick={handleNext} className={`${styles.next}`}>Next &gt;</button>
      </div>
    </>
  );
};

export default ReactProjectVideo;
