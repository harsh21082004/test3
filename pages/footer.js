import React, { useContext } from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

const Footer = () => {

    return (
        <div className={`blockcode ${styles.footer}`}>
            <footer className="page-footer shadow">
                <div className="d-flex flex-column mx-auto py-5" style={{ width: '80%' }}>
                    <div className={`${styles.links} d-flex flex-wrap justify-content-between`}>
                        <div>
                            <Link href="/" passHref legacyBehavior >
                                <a className={`d-flex align-items-center p-0 text-dark ${styles.containerFluid}`}>
                                    <span className={"textpurple"}><b className="fontBold" >&lt;/&gt; Codebyte</b></span>
                                </a>
                            </Link>
                            <p className={`my-3 text-black`} style={{ width: '250px' }}>
                                CodeByte is providing high quality knowledge to understand any programming language.
                            </p>
                        </div>
                        <div>
                            <p className={`h5 mb-4 text-black`} style={{ fontWeight: '600' }}>Important Links</p>
                            <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
                                <li className="my-2">
                                    <Link href="/resources" passHref legacyBehavior>
                                        <a className={`text-black`} style={{ textDecoration: 'none' }}>Courses</a>
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link href="/about" passHref legacyBehavior>
                                        <a className={`text-black`} style={{ textDecoration: 'none' }}>Learn</a>
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link href="/contact" passHref legacyBehavior>
                                        <a className={`text-black`} style={{ textDecoration: 'none' }}>About Us</a>
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link href="/blog" passHref legacyBehavior>
                                        <a className={`text-black`} style={{ textDecoration: 'none' }}>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className={`h-5 mb-4 text-black`} style={{ fontWeight: '600' }}>Help</p>
                            <ul className="p-0" style={{ listStyle: 'none', cursor: 'pointer' }}>
                                <li className="my-2">
                                    <Link href="tel:+919555096698" passHref legacyBehavior>
                                        <a className={`text-black`} style={{ textDecoration: 'none' }}>+919555096698</a>
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link href="mailto:harshtiwari.up2004@gmail.com" passHref legacyBehavior>
                                        <a className={`text-black`} style={{ textDecoration: 'none' }}>harshtiwari.up2004@gmail.com</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <div className="mb-4">
                            <a href="https://github.com/harsh21082004" target='_blank'>
                                <button className="btn btn-dark btn-flat p-3 mx-2">
                                    <i className="fa fa-github"></i>
                                </button>
                            </a>
                            <a href="https://www.instagram.com/harshtiwari2108/" target='_blank'>
                                <button className="btn btn-dark btn-flat p-3 mx-2">
                                    <i className="fa fa-instagram"></i>
                                </button>
                            </a>
                            <a href="https://www.youtube.com/channel/UC3PaBnmCwSDWkQS8QbbndCA" target='_blank'>
                                <button className="btn btn-dark btn-flat p-3 mx-2">
                                    <i className="fa fa-youtube"></i>
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/harsh-tiwari-745a85274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                                <button className="btn btn-dark btn-flat p-3 mx-2">
                                    <i className="fa fa-linkedin"></i>
                                </button>
                            </a>
                        </div>
                        <small className={`text-black`}>&copy; CodeByte, 2023. All rights reserved.</small>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
