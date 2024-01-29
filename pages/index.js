import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import Footer from './footer'
import Testimonials from './testimonials'

export default function Home() {

  return (
    <div className={`${styles.maincont}`}>
      <Head>
        <title>CodeByte</title>
        <meta name="description" content="Codebyte provides you the best content you have ever seen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <div className={`${styles.intro}`}>
        <div className={` ${styles.introcont}`}>
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
          <Link href={'/protected'}><button className={`btn ${styles.button}`}>Free Courses</button></Link>
        </div>
        <img src="/pic.jpg" width={100} height={100} alt="none" className={`${styles.photo}`} />
      </div>
      <div className={`${styles.youtube}`}>
        <h2 className={`text-center my-5`}>Recomended Videos</h2>
        <div className={`${styles.contyoutube}`}>
          <div className={`${styles.contyoutubevideos}`}>
          {/* <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}> */}
            <div className={`${styles.youtubevideos}`}>
              <img className={`${styles.videos}`} height={100} width={100} src="/picture.png" alt='none'></img>
              <div className={` px-3 my-2`}>
                <h4 className={`text-black`}>My upcoming react project</h4>
                <p className={`text-black`}>It is my new upcoming react project (AI Based Attandence System).Here you will learn how to work in react and make webapps.</p>
              </div>
              <div className={`mt-5`}>
                <Link href="/videos/new-upcoming-react-project">
                  <button className={`btn  my-2 ${styles.watch}`}>Watch</button>
                </Link>
              </div>
            </div>
            {/* </motion.div>
            </motion.div>
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}> */}
                <div className={`${styles.youtubevideos}`}>
                  <img className={`${styles.videos}`} height={100} width={100} src="/picture2.png" alt='none'></img>
                  <div className={`px-3 my-2`}>
                    <h4 className={`text-black`}>How To Make Contact Form</h4>
                    <p className={`text-black`}>In this video you will learn hoe to make a working contact form using html, css and javascript.</p>
                  </div>
                  <div className={`mt-5`}>
                    <Link href="/videos/responsive-navbar">
                      <button className={`btn  my-2 ${styles.watch}`}>Watch</button>
                    </Link>
                  </div>
                </div>
              {/* </motion.div>
              </motion.div>
              <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}> */}
              <div className={`${styles.youtubevideos}`}>
                <img className={`${styles.videos}`} height={100} width={100} src="/picture3.png" alt='none' ></img>
                <div className={`px-3 my-2`}>
                  <h4 className={`text-black`}>How To Make a Login Form</h4>
                  <p className={`text-black`}>In this video i will show you how to make a responsive login form using html, css and javascript.</p>
                </div>
                <div className={`mt-5`}>
                  <Link href="/videos/contact-form">
                    <button className={`btn  my-2 ${styles.watch}`}>Watch</button>
                  </Link>
                </div>
              </div>
              {/* </motion.div>
              </motion.div> */}
          </div>
        </div>
      </div>
      {/* <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={testimonialsVariant}> */}
      <Testimonials />
      {/* </motion.div>
      </motion.div> */}
      <Footer />
    </div>
  )
}
