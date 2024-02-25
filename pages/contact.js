import React, { useState } from 'react';
import styles from '@/styles/Contact.module.scss';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './footer';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    }
    else if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name === 'subject') {
      setSubject(e.target.value)
    }
    else if (e.target.name === 'messege') {
      setMessage(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const data = ({ name: name, email: email, subject: subject, message: message })
    try {
      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setIsLoading(false)
        if (res.error) {
          toast.error(res.error, {
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
        console.log('error', res)
      }
      setIsLoading(false)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      let response = await res.json()
      if (response.error) {
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
      }
    } catch (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error(error)
    }
  }
  return (
    <>
      <div className={`${styles.containerContact100} container-contact100`}>
        <div className={`${styles.wrapContact100} wrap-contact100`}>
          <form className={`${styles.contact100Form} ${styles.validateForm} contact100-form validate-form`} onSubmit={handleSubmit} method='POST'>
            <span className={`${styles.contact100FormTitle} contact100-form-title`}>
              Contact Us
            </span>
            <div className={`${styles.wrapInput100} ${styles.validateInput} wrap-input100 validate-input`} >
              <span className={`${styles.labelInput100} label-input100`}>Your Name</span>
              <input className={`${styles.input100} ${styles.input} input100`} type="text" name="name"
                value={name}
                onChange={handleChange}
                required />
              <span className="focus-input100"></span>
            </div>
            <div className={`${styles.wrapInput100} ${styles.validateInput} wrap-input100 validate-input`} >
              <span className={`${styles.labelInput100} label-input100`}>Email</span>
              <input className={`${styles.input100} ${styles.input} input100`} type="email" name="email"
                value={email}
                onChange={handleChange}
                required />
              <span className="focus-input100"></span>
            </div>

            <div className={`${styles.wrapInput100} ${styles.validateInput} wrap-input100 validate-input`} >
              <span className={`${styles.labelInput100} label-input100`}>Subject</span>
              <input className={`${styles.input100} ${styles.input} input100`} type="text" name="subject"
                value={subject}
                onChange={handleChange}
                required />
              <span className="focus-input100"></span>
            </div>

            <div className={`${styles.wrapInput100} ${styles.validateInput} wrap-input100 validate-input`} data-validate="Message is required">
              <span className={`${styles.labelInput100} label-input100`}>Message</span>
              <textarea className={`${styles.input100} ${styles.input} input100`} style={{height:'100px'}} name="messege"
                value={message}
                onChange={handleChange}
                required></textarea>
              <span className="focus-input100"></span>
            </div>
            <div className={`${styles.containerContact100FormBtn} container-contact100-form-btn`}>
              <div className={`${styles.wrapContact100FormBtn} wrap-contact100-form-btn`}>
                <div className={`${styles.contact100FormBgBtn} contact100-form-bgbtn`}></div>
                {isLoading ? (<><button className={`${styles.contact100FormBtn} contact100-form-btn`} type='submit'>
                  <span>
                    <ClipLoader
                      color='#ffffff'
                      loading={isLoading}
                      size={25}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </span></button></>) : (<><button className={`${styles.contact100FormBtn} contact100-form-btn`} type='submit'>
                    <span>
                      Submit
                      <i className="fa fa-long-arrow-right mx-1" aria-hidden="true"></i>
                    </span></button></>)}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact