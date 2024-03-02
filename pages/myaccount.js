import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Footer from './footer';
import styles from '@/styles/Myaccount.module.css';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import style from '@/styles/Myaccount.module.scss';
import { FaCamera } from 'react-icons/fa';
import { TbFingerprint, TbFingerprintOff } from "react-icons/tb";
import ClipLoader from "react-spinners/ClipLoader";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Myaccount = () => {
  const router = useRouter();
  const [isLoggedIN, setIsLoggedIN] = useState(true)
  const [key, setKey] = useState(0)
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [userImage, setUserImage] = useState({ preview: "", raw: "" });
  const { data: session } = useSession();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [textType1, setTextType1] = useState("password");
  const [textType2, setTextType2] = useState("password");
  const [textType3, setTextType3] = useState("password");
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [visible3, setVisible3] = useState(true);
  const [isNotSame, setIsNotSame] = useState(false);
  const [exceedImageSize, setExceedImageSize] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);

  const handleTextType1 = (e) => {
    setVisible1(!visible1)
    if (visible1) {
      setTextType1('text');
    } else {
      setTextType1('password');
    }
  }
  const handleTextType2 = (e) => {
    setVisible2(!visible2)
    if (visible2) {
      setTextType2('text');
    } else {
      setTextType2('password');
    }
  }
  const handleTextType3 = (e) => {
    setVisible3(!visible3)
    if (visible3) {
      setTextType3('text');
    } else {
      setTextType3('password');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token !== null) {
      setIsLoggedIN(true)
      setKey(Math.random())
    } else {
      setIsLoggedIN(false)
    }
    if (session) {
      setIsLoggedIN(true)
    }

    if (token && !session) {
      const decoded = jwtDecode(token);
      setName(decoded.name);
      setUserName(decoded.name);
      setEmail(decoded.email);
      setUserEmail(decoded.email);
      setImage(
        {
          preview: decoded.image,
          raw: decoded.image
        }
      );
      setUserImage(
        {
          preview: decoded.image,
          raw: decoded.image
        }
      );
    } else if (session) {
      setName(session.user.name);
      setEmail(session.user.email);
      setUserName(session.user.name);
      setUserEmail(session.user.email);
      setImage(
        {
          preview: session.user.image,
          raw: session.user.image
        });
      setUserImage(
        {
          preview: session.user.image,
          raw: session.user.image
        }
      );
    }
  }, [session]);

  const handleSubmit = async (e) => {
    setIsLoading1(true)
    e.preventDefault();
    try {
      // const token = localStorage.getItem('token');
      const image1 = image.preview;
      const response = await fetch('http://localhost:3000/api/updateuser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, image1 }),
      });
      if (response.ok) {
        setIsLoading1(false)
        const responseData = await response.json();
        localStorage.setItem('token', responseData.token);
        setUserName(name);
        setUserEmail(email);
        setUserImage({
          preview: image,
          raw: image
        });

        toast.success('User information updated successfully', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setIsLoading1(false)
        const errorData = await response.json();
        console.error('Failed to update user information:', errorData);
        toast.error('Failed to update user information', {
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
      setIsLoading1(false)
      console.error('Error during update:', error);
      toast.error('Error during update', {
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
  const handleCreatePassword = async (e) => {
    setIsLoading2(true)
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/createpassword', {
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
        setIsLoading2(false)
        const responseData = await response.json();
        console.log(responseData);
        toast.success('Password created successfully', {
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
      setIsLoading2(false)
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
  }
  const handleChangePassword = async (e) => {
    setIsLoading2(true)
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/updatepassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          currentPassword,
          newPassword,
          confirmNewPassword,
        }),
      });

      if (response.ok) {
        setIsLoading2(false)
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
        setIsLoading2(false)
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
      setIsLoading2(false)
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

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    else if (e.target.name === 'cnfNewPass') {
      setConfirmNewPassword(e.target.value);
      checkPasswordsMatch(newPassword, e.target.value);
    }
  };

  const checkPasswordsMatch = (newPass, confirmNewPass) => {
    if (newPass === confirmNewPass) {
      setIsNotSame(false);
    } else {
      setIsNotSame(true);
    }
  };

  useEffect(() => {
    // Client-side redirect
    if (isLoggedIN === false) {
      router.push('/login');
    }
  }, [isLoggedIN]);

  if (isLoggedIN === false) {
    // This part should not be reached due to the client-side redirect
    return null;
  }
  const handleChange1 = (e) => {
    if (e.target.name === 'newPass') {
      setNewPassword(e.target.value);
    }

    const lower = new RegExp('^(?=.*[a-z])');
    const upper = new RegExp('^(?=.*[A-Z])');
    const number = new RegExp('^(?=.*[0-9])');
    const special = new RegExp('^(?=.*[!@#$%^&*])');
    const length = new RegExp('^(?=.{8,})');

    if (lower.test(e.target.value)) {
      setError2(true);
    } else {
      setError2(false);
    }
    if (upper.test(e.target.value)) {
      setError3(true);
    } else {
      setError3(false);
    }
    if (number.test(e.target.value)) {
      setError4(true);
    } else {
      setError4(false);
    }
    if (special.test(e.target.value)) {
      setError5(true);
    } else {
      setError5(false);
    }
    if (length.test(e.target.value)) {
      setError1(true);
    } else {
      setError1(false);
    }
  }
  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const selectedImage = e.target.files[0];
      if (selectedImage.size > 1024 * 1024) {
        setExceedImageSize(true)
        return;
      }
      setExceedImageSize(false)
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage({
          preview: reader.result,
          raw: e.target.files[0]
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <div className={`${styles.accContainer} container`}>
        <h3 className="text-center text-white">Profile Settings</h3>
        <div className="container rounded mt-5 mb-5">
          {/* <div className={`${styles.main}`}> */}
          <div className={`${styles.forms} ${style.forms}`}>
            <div className="d-flex flex-column align-items-center text-center p-5">
              <div className={`${style.profilepic} profile-pic`}>
                <label className={`${style.label}`} for="file">
                  <span className='text-center align-items-center'><FaCamera /></span>
                  <span>Change Image</span>
                  <input id="file" accept='image/png,image/jpeg' type="file" onChange={handleImageChange} />
                </label>
                <img className="rounded-circle" width="150px" src={image.preview} alt=' ' />
              </div>{exceedImageSize && (<div className={`${styles.alert1} alert alert-danger`} role="alert">
                Please select image less than 1MB
              </div>)}
              <span className="text-white font-weight-bold mt-2">{userName}</span>
              <span className="text-white">{userEmail}</span></div>
            <form className="p-3 py-5" onSubmit={handleSubmit}>
              <div className="row mt-3">
                <div className="col-md-12 my-3"><label className="labels text-white">Name</label><input type="text" className={`${style.input} m-1`} placeholder="name" name='name' value={name} onChange={handleChange
                } /></div>
                <div className="col-md-12 my-3"><label className="labels text-white">Email ID(Can't be changed)</label><input type="text" className={`${style.input} m-1`} value={email} readOnly /></div>
              </div>
              {isLoading1 ? (<button type="submit" className={`${styles.button} btn m-2`}><span>
                <ClipLoader
                  color='#ffffff'
                  loading={isLoading1}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </span></button>) : (<button type="submit" className={`${styles.button} btn m-2`}>Update</button>)}
            </form>
          </div>
          <form className={`${styles.passform} p-3 py-5`} onSubmit={handleCreatePassword}>
            <div className="row mt-3">
              <div className="col-md-12 my-3"><label className="labels text-white">New Password</label>
                <div className={`${style.eyeinput}`}>
                  <input type={textType2} className={`${style.input}`} placeholder="new password" name='newPass' value={newPassword} onChange={handleChange1
                  } required /><i onClick={handleTextType2} className={`${style.eye}`}>
                    {visible2 ? <TbFingerprint /> : <TbFingerprintOff />}
                  </i></div></div>
              <div className="col-md-12 my-3"><label className="labels text-white">Confirm New Password</label>
                <div className={`${style.eyeinput}`}><input type={textType3} className={`${style.input}`} placeholder="confirm new password" name='cnfNewPass' value={confirmNewPassword} onChange={handleChange
                } required /><i onClick={handleTextType3} className={`${style.eye}`}>
                    {visible3 ? <TbFingerprint /> : <TbFingerprintOff />}
                  </i></div>{isNotSame && (<div className={`${styles.alert} alert alert-danger`} role="alert">
                    New password and confirm password should be same
                  </div>)}
                <div className={`${styles.alert1}`}>
                  <ul>
                    <span>
                      {/* <FaCheck className={`${styles.rightCheck}`} /> */}
                      {!error1 ? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                      {/* <RxCross2 className={`${styles.wrongCheck}`} /> */}
                      <li>Password must be at least 8 characters long</li></span>
                    <span>
                      {!error2 ? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                      <li>Password must contain at least one lowercase letter</li></span>
                    <span>
                      {!error3 ? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                      <li>Password must contain at least one uppercase letter</li></span>
                    <span>
                      {!error4 ? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                      <li>Password must contain at least one digit</li></span>
                    <span>
                      {!error5 ? <RxCross2 className={`${styles.wrongCheck}`} /> : <FaCheck className={`${styles.rightCheck}`} />}
                      <li>Password must contain at least one special character</li></span>
                  </ul>
                </div></div>
              {isLoading2 ? (<button type="submit" className={`${styles.button} btn mt-5`}><span>
                <ClipLoader
                  color='#ffffff'
                  loading={isLoading2}
                  size={15}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </span></button>) : (<button type="submit" className={`${styles.button1} btn mt-5`}>Change Password</button>)}
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Myaccount;