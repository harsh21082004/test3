import React, { useContext, useState, useEffect } from 'react'
import Footer from './footer'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from './context/themeContext';
import router from 'next/router';
import { TbFingerprint, TbFingerprintOff } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { SiNamebase } from "react-icons/si";
import { useSession, signIn, signOut } from "next-auth/react"
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import ClipLoader from "react-spinners/ClipLoader";


const Signup = () => {

    const [isLoggedIN, setIsLoggedIN] = useState(false)
    const [key, setKey] = useState(0)

    const [textType, setTextType] = useState("password");

    const [visible, setVisible] = useState(true);

    const { theme, handleOnClick } = useContext(ThemeContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const { data: session, status } = useSession()

    //google signin
    async function handleGoogleSignin() {
        signIn("google", { callbackUrl: "http://localhost:3000" })
    }

    //github signin
    async function handleGithubSignin() {
        signIn("github", { callbackUrl: "http://localhost:3000" })
    }

    const handleTextType = () => {
        setVisible(!visible)
        if (visible) {
            setTextType('text')
        }
        else {
            setTextType('password')
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        const data = { email, password }
        try {
            let res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                setIsLoading(false)
                toast.error(res.error, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            setIsLoading(false)
            let response = await res.json();
            setEmail('');
            setPassword('');
            if (response.error) {
                toast.error(response.error, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            }
            else if (response.success) {
                localStorage.setItem('token', response.token)
                toast.success(response.success, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    router.push('http://localhost:3000')
                }, 3000)
            }
            else {
                toast.error("error", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            toast.error("error", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            setIsLoggedIN(true)
            setKey(Math.random())
        }
        else if (session) {
            setIsLoggedIN(true)
        }
        else {
            setIsLoggedIN(false)
        }

    }, [session]);
    useEffect(() => {
        // Client-side redirect
        if (isLoggedIN === true) {
            router.push('/myaccount');
        }
    }, [isLoggedIN]);


    return (
        <>
            <div className={`${styles.main}`}>
                <form className={`${styles.form} container `} onSubmit={handleSubmit} method='POST' >
                    <h3 className={`text-center text-white`}>Login</h3>
                    <div className="form-group">
                        <label htmlFor="email" className={`text-white  mx-1`}>Email address</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={email} type="email" className={`${styles.input} m-1`} name='email' id="email" aria-describedby="emailHelp" placeholder="" required />
                            <i className={`${styles.eye}`}>
                                <MdAlternateEmail />
                            </i>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={`text-white mx-1 `}>Password</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={password} type={textType} className={`${styles.input} m-1`} name='password' id="password" placeholder="" required />
                            <i onClick={handleTextType} className={`${styles.eye}`}>
                                {visible ? <TbFingerprint /> : <TbFingerprintOff />}
                            </i>
                        </div>
                    </div>
                    <span>
                        {isLoading ? (<button type="submit" className={`${styles.button} btn m-2`}><span>
                            <ClipLoader
                                color='#ffffff'
                                loading={isLoading}
                                size={15}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </span></button>) : (<button type="submit" className={`${styles.button} btn m-2`}>Login</button>)}
                        <Link href={'/forgotpassword'} style={{ float: 'right' }} className={`${styles.button1} btn m-2`}>Forgot Password</Link></span>
                    <div className='text-center'>
                        <div className={`${styles.loginusing}`}>
                            <div className={`${styles.signusing}`}></div><b >Or Login using</b><div className={`${styles.signusing}`}></div>
                        </div>
                        <span onClick={handleGoogleSignin} ><GoogleLoginButton className={`${styles.google} m-2`} /></span>
                        <span onClick={handleGithubSignin}><GithubLoginButton className={`${styles.google} m-2`} /></span>
                    </div>
                    <div className={`${styles.already}`}>
                        <p className={`text-white text-center`}>Don't have an account <Link href={'/signup'} className={`${styles.button} btn m-2`}>Signup</Link></p>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Signup
