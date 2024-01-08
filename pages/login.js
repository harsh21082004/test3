import React, { useContext,useState } from 'react'
import Footer from './footer'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from './context/themeContext';

const Signup = () => {

    const { theme, handleOnClick } = useContext(ThemeContext)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        else if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, email, password }
        let res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json();
        console.log(response)
        setEmail('');
        setName('');
        setPassword('');
        toast('Account created successfully', {
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

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className={`${theme === "light" ? styles.maindark : styles.mainlight}`}>
                <div className={`${styles.image}`}>
                    <img src={'/HarshLogin.jpg'} className={`${styles.photo}`} alt='none' width={100} height={150} />
                </div>
                <form className={`${styles.form} container `} onSubmit={handleSubmit} method='POST' >
                    <div className="form-group">
                        <label htmlFor="email" className={`text-${theme === "light" ? 'white' : 'black'} mx-1`}>Email address</label>
                        <input onChange={handleChange} value={email} type="email" className="border-dark form-control m-1" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={`text-${theme === "light" ? 'white' : 'black'} mx-1`}>Password</label>
                        <input onChange={handleChange} value={password} type="password" className="border-dark form-control m-1" name='password' id="password" placeholder="Password" required />
                    </div>
                    <div className="form-group form-check m-1">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className={` text-${theme === "light" ? 'white' : 'black'}form-check-label`} htmlFor="Check">Remember me</label>
                    </div>
                    <span>
                        <button type="submit" className={`${styles.button} btn m-2`}>Login</button>
                        <Link href={'/forgot'} style={{ float: 'right' }} className='m-3'>Forgot Password</Link></span>
                    <div className='text-center'>
                        <p className={`text-${theme === "light" ? 'white' : 'black'} ${styles.signusing} text-center m-1`}>Or Login using</p>
                        <span><Link href={'/'}><FaGoogle className={`${styles.google} m-2`} /></Link></span>
                        <span><Link href={'/'}><FaFacebook className={`${styles.google} m-2`} /></Link></span>
                        <span><Link href={'/'}><FaGithub className={`${styles.google} m-2`} /></Link></span>
                    </div>
                    <div className={`${styles.already}`}>
                        <p className={`text-${theme === "light" ? 'white' : 'black'} text-center`}>Don't have an account <Link href={'/signup'}>Signup</Link></p>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Signup