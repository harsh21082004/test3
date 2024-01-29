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
import { MdAlternateEmail } from 'react-icons/md';
import { TbFingerprint, TbFingerprintOff } from 'react-icons/tb';

const Signup = () => {

    const [textType1, setTextType1] = useState("password");
    const [textType2, setTextType2] = useState("password");

    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(true);

    const { theme, handleOnClick } = useContext(ThemeContext)

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isNotSame, setIsNotSame] = useState(false);

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
            setNewPassword(e.target.value);
          }
          else if (e.target.name === 'confirmNewPassword') {
            setConfirmNewPassword(e.target.value);
            checkPasswordsMatch(newPassword, e.target.value);
          }
    }

    const checkPasswordsMatch = (newPass, confirmNewPass) => {
        if (newPass === confirmNewPass) {
          setIsNotSame(false);
        } else {
          setIsNotSame(true);
        }
      };

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
            <div className={`${styles.main}`}>
                <form className={`${styles.form} container `} onSubmit={handleChangePassword} >
                    <h3 className={`text-center text-white`}>Forgot Password</h3>
                    <div className="form-group">
                        <label htmlFor="email" className={`text-white  mx-1`}>Email address</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={email} type="email" className={`${styles.input} m-1`} name='email' id="email" aria-describedby="emailHelp" placeholder="" required />
                            <i className={`${styles.eye}`}>
                                <MdAlternateEmail />
                            </i>
                        </div>
                        <label htmlFor="newPassword" className={`text-white mx-1`}>New password</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={newPassword} type={textType1} className={`${styles.input}`} name='newPassword' id="newPassword" required />
                            <i onClick={handleTextType1} className={`${styles.eye}`}>
                            {visible1 ? <TbFingerprint /> : <TbFingerprintOff />}
                            </i>
                        </div>
                        <label htmlFor="cnfNewPassword" className={`text-white mx-1`}>Confirm new password</label>
                        <div className={`${styles.eyeinput}`}>
                            <input onChange={handleChange} value={confirmNewPassword} type={textType2} className={`${styles.input}`} name='confirmNewPassword' id="cnfNewPassword" required />
                            <i onClick={handleTextType2} className={`${styles.eye}`}>
                            {visible2 ? <TbFingerprint /> : <TbFingerprintOff />}
                            </i>
                        </div>{isNotSame && (<div className={`${styles.alert} alert alert-danger`} role="alert">
                        New password and confirm password should be same
                      </div>)}
                        <span className={`${styles.submitbut}`}>
                            <button type="submit" className={`${styles.button} btn mt-5 mx-2`}>Change Password</button>
                            <Link href={'/login'}><button type="submit" className={`${styles.button} btn mt-5 mx-2`}>Go to login</button></Link>
                        </span>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Signup
