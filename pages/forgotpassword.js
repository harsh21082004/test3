import React, { useContext, useState } from 'react'
import Footer from './footer'
import styles from '@/styles/Forgotpassword.module.css'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from './context/themeContext';
import router from 'next/router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react"

const Signup = () => {

    const [textType1, setTextType1] = useState("password");
    const [textType2, setTextType2] = useState("password");

    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);

    const { theme, handleOnClick } = useContext(ThemeContext)

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleTextType1 = () => {
        setVisible1(!visible1)
        if (visible1) {
            setTextType1('text')
        }
        else {
            setTextType1('password')
        }
    }
    const handleTextType2 = () => {
        setVisible2(!visible2)
        if (visible2) {
            setTextType2('text')
        }
        else {
            setTextType2('password')
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'newPassword') {
            setNewPassword(e.target.value)
        }
        else if (e.target.name === 'confirmNewPassword') {
            setConfirmNewPassword(e.target.value)
        }
    }

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:3000/api/forgotpassword', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              newPassword,
              confirmNewPassword,
            }),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            toast.success('Password changed successfully', {
              position: 'bottom-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          } else {
            // Handle the error response
            const errorData = await response.json();
            console.error('Failed to change password:', errorData);
            toast.error('Failed to change password', {
              position: 'bottom-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }
        } catch (error) {
          console.error('Error during password change:', error);
          toast.error('Error during password change', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      };

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
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
                <form className={`${styles.form} container `} onSubmit={handleChangePassword} >
                    <h3 className={`text-center ${theme === "light" ? "textpurpledark" : "textpurplelight"}`}>Forgot Password</h3>
                    <div className="form-group">
                        <label htmlFor="email" className={`text-${theme === "light" ? 'white' : 'black'}  mx-1`}>Email address</label>
                        <input onChange={handleChange} value={email} type="email" className={`${styles.input1} border-secondary form-control m-1`} name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                        {/* <label htmlFor="curPassword" className={`text-${theme === "light" ? 'white' : 'black'} mx-1`}>Current password</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={currentPassword} type={textType1} className={`${styles.input} border-secondary form-control m-1`} name='currentPassword' id="curPassword" placeholder="Current password" required />
                            <i onClick={handleTextType1} className={`${theme === "light" ? styles.eyelight : styles.eyedark}`}>
                                {visible1 ? <FaEye /> : <FaEyeSlash />}
                            </i>
                        </div> */}
                        <label htmlFor="newPassword" className={`text-${theme === "light" ? 'white' : 'black'} mx-1`}>New password</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={newPassword} type={textType1} className={`${styles.input} border-secondary form-control m-1`} name='newPassword' id="newPassword" placeholder="New password" required />
                            <i onClick={handleTextType1} className={`${theme === "light" ? styles.eyelight : styles.eyedark}`}>
                                {visible1 ? <FaEye /> : <FaEyeSlash />}
                            </i>
                        </div>
                        <label htmlFor="cnfNewPassword" className={`text-${theme === "light" ? 'white' : 'black'} mx-1`}>Confirm new password</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={confirmNewPassword} type={textType2} className={`${styles.input} border-secondary form-control m-1`} name='confirmNewPassword' id="cnfNewPassword" placeholder="Confirm new password" required />
                            <i onClick={handleTextType2} className={`${theme === "light" ? styles.eyelight : styles.eyedark}`}>
                                {visible2 ? <FaEye /> : <FaEyeSlash />}
                            </i>
                        </div>
                        <span className={`${styles.submitbut}`}>
                            <button type="submit" className={`${styles.button} btn m-2`}>Change Password</button>
                            <Link href={'/login'}><button type="submit" className={`${styles.button} btn m-2`}>Go to login</button></Link>
                        </span>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Signup
