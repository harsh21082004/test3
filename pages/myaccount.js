import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Footer from './footer';
import styles from '@/styles/Myaccount.module.css';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import jwt from 'jsonwebtoken';

const Myaccount = () => {

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const { data: session } = useSession();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !session) {
      const decoded = jwtDecode(token);
      setName(decoded.name);
      setUserName(decoded.name);
      setEmail(decoded.email);
      setUserEmail(decoded.email);
      setImage(decoded.image);
    } else if (session) {
      setName(session.user.name);
      setEmail(session.user.email);
      setImage(session.user.image);
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/updateuser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email,image }),
      });
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('token', responseData.token);
        setUserName(name);
        setUserEmail(email);

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

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    else if (e.target.name === 'curPass') setCurrentPassword(e.target.value);
    else if (e.target.name === 'newPass') setNewPassword(e.target.value);
    else if (e.target.name === 'cnfNewPass') setConfirmNewPassword(e.target.value);
  };

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
      <div className={`${styles.accContainer} container`}>
        <h4 className="text-center">Profile Settings</h4>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className={`${styles.main}`}>
            {/* <div className="col-md-3 border-right"> */}
            <div className="d-flex flex-column align-items-center text-center p-5">
              <img className="rounded-circle" width="150px" src={image} alt=' ' />
              {session ? (<><span className="font-weight-bold">{name}</span>
                <span className="text-black-50">{email}</span></>) : (<><span className="font-weight-bold">{userName}</span>
                  <span className="text-black-50">{userEmail}</span></>)}</div>
            {/* </div> */}
            {/* <div className="col-md-5 border-right"> */}
            <div className={`${styles.forms}`}>
              <form className="p-3 py-5" onSubmit={handleSubmit}>
                <div className="row mt-3">
                  <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="name" name='name' value={name} onChange={handleChange
                  } /></div>
                  <div className="col-md-12"><label className="labels">Email ID(Can't be changed)</label><input type="text" className="form-control" value={email} readOnly /></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
              </form>
              {!session ? (<form className="p-3 py-5" onSubmit={handleChangePassword}>
                <div className="row mt-3">
                  <div className="col-md-12"><label className="labels">Current Password</label><input type="text" className="form-control" placeholder="current password" name='curPass' value={currentPassword} onChange={handleChange
                  } /></div>
                  <div className="col-md-12"><label className="labels">New Password</label><input type="text" className="form-control" placeholder="new password" name='newPass' value={newPassword} onChange={handleChange
                  } /></div>
                  <div className="col-md-12"><label className="labels">Confirm New Password</label><input type="text" className="form-control" placeholder="confirm new password" name='cnfNewPass' value={confirmNewPassword} onChange={handleChange
                  } /></div>
                  <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Change Password</button>
                  </div>
                </div>
              </form>) : (<form className="p-3 py-5" onSubmit={handleCreatePassword}>
                <div className="row mt-3">
                  <div className="col-md-12"><label className="labels">New Password</label><input type="text" className="form-control" placeholder="new password" name='newPass' value={newPassword} onChange={handleChange
                  } /></div>
                  <div className="col-md-12"><label className="labels">Confirm New Password</label><input type="text" className="form-control" placeholder="confirm new password" name='cnfNewPass' value={confirmNewPassword} onChange={handleChange
                  } /></div>
                  <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Change Password</button>
                  </div>
                </div>
              </form>)}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Myaccount;
