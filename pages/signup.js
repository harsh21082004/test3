import React, { useContext, useState, useEffect } from 'react'
import Footer from './footer'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from './context/themeContext';
import { TbFingerprint, TbFingerprintOff } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { SiNamebase } from "react-icons/si";
import router from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react"
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import ClipLoader from "react-spinners/ClipLoader";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Signup = () => {

    const [textType, setTextType] = useState("password");

    const [visible, setVisible] = useState(true);

    const { theme, handleOnClick } = useContext(ThemeContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const [error5, setError5] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    //google signin
    async function handleGoogleSignin() {
        signIn("google", { callbackUrl: "https://test3codebyte.vercel.app" })

    }

    //github signin
    async function handleGithubSignin() {
        signIn("github", { callbackUrl: "https://test3codebyte.vercel.app" })
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
        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        else if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
    }
    const handleChange1 = (e) => {
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }

        const lower = new RegExp('^(?=.*[a-z])');
        const upper = new RegExp('^(?=.*[A-Z])');
        const number = new RegExp('^(?=.*[0-9])');
        const special = new RegExp('^(?=.*[!@#$%^&*])');
        const length = new RegExp('^(?=.{8,})');

        if(lower.test(e.target.value)){
            setError2(true);
        }else{
            setError2(false);
        }
        if(upper.test(e.target.value)){
            setError3(true);
        }else{
            setError3(false);
        }
        if(number.test(e.target.value)){
            setError4(true);
        }else{
            setError4(false);
        }
        if(special.test(e.target.value)){
            setError5(true);
        }else{
            setError5(false);
        }
        if(length.test(e.target.value)){
            setError1(true);
        }else{
            setError1(false);
        }
    }

    const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        if(error1 && error2 && error3 && error4 && error5){
            const data = { name, email, password };

            try {
                let res = await fetch('https://test3codebyte.vercel.app/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                setIsLoading(false)
                let response = await res.json();
                console.log(response);
                setEmail('');
                setName('');
                setPassword('');
                setError1(false);
                setError2(false);
                setError3(false);
                setError4(false);
                setError5(false);

                if (response.error) {
                    setIsLoading(false)
                    toast.error(response.error, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else if (response.success) {
                    setIsLoading(false)
                    toast.success(response.success, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        router.push('https://test3codebyte.vercel.app/login');
                    }, 3000);
                } else {
                    setIsLoading(false)
                    toast.error("Unexpected response from server", {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } catch (error) {
                setIsLoading(false)
                console.error('An error occurred:', error);
                toast.error("An error occurred while processing your request", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }else{
            setIsLoading(false)
            toast.error("Password does not meet the requirements", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };


    return (
        <>
            <div className={`${styles.main}`}>
                <form className={`${styles.form} container `} onSubmit={handleSubmit} method='POST' >
                    <h3 className={`text-center text-white`}>Signup</h3>
                    <div className="form-group">
                        <label htmlFor="name" className={`text-white mx-1 `}>Name</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} type="text" className={`${styles.input}   m-1`} name='name' id="name" value={name} aria-describedby="emailHelp" placeholder="" required />
                            <i className={`${styles.eye}`}>
                                <SiNamebase />
                            </i>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className={`text-white  mx-1`}>Email address</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={email} type="email" className={`${styles.input}  m-1`} name='email' id="email" aria-describedby="emailHelp" placeholder="" required />
                            <i className={`${styles.eye}`}>
                                <MdAlternateEmail />
                            </i>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={`text-white mx-1`}>Password</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange1} value={password} type={textType} className={`${styles.input} m-1`} name='password' id="password" placeholder="" required />
                            <i onClick={handleTextType} className={`${styles.eye}`}>
                                {visible ? <TbFingerprint /> : <TbFingerprintOff />}
                            </i>
                        </div>
                        <div className={`${styles.alert}`}>
                            <ul>
                                <span>
                                    {/* <FaCheck className={`${styles.rightCheck}`} /> */}
                                    {!error1 ? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                                    {/* <RxCross2 className={`${styles.wrongCheck}`} /> */}
                                    <li>Password must be at least 8 characters long</li></span>
                                <span>
                                    {!error2? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                                    <li>Password must contain at least one lowercase letter</li></span>
                                <span>
                                    {!error3? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                                    <li>Password must contain at least one uppercase letter</li></span>
                                <span>
                                    {!error4? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                                    <li>Password must contain at least one digit</li></span>
                                <span>
                                    {!error5? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                                    <li>Password must contain at least one special character</li></span>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="form-group form-check m-1">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className={`text-whiteform-check-label`} htmlFor="Check">Check me out</label>
                    </div> */}
                    <span>
                        {isLoading ? (<button type="submit" className={`${styles.button} btn m-2`}><span>
                            <ClipLoader
                                color='#ffffff'
                                loading={isLoading}
                                size={15}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </span></button>) : (<button type="submit" className={`${styles.button} btn m-2`}>Signup</button>)}
                        <Link href={'/forgotpassword'} style={{ float: 'right' }} className={`${styles.button1} btn m-2`}>Forgot Password</Link></span>
                    <div className='text-center'>
                        <div className={`${styles.loginusing}`}>
                            <div className={`${styles.signusing}`}></div><b >Or Login using</b><div className={`${styles.signusing}`}></div>
                        </div>
                        <span onClick={handleGoogleSignin} ><GoogleLoginButton className={`${styles.google} m-2`} /></span>
                        <span onClick={handleGithubSignin}><GithubLoginButton className={`${styles.google} m-2`} /></span>
                    </div>
                    <div className={`${styles.already}`}>
                        <p className={`text-white text-center`}>Already have an account <Link href={'/login'} className={`${styles.button} btn m-1`}>Login</Link></p>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Signup
