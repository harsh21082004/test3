import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Footer from './footer';
import styles from '@/styles/Myaccount.module.css';
import { jwtDecode } from "jwt-decode";

const Myaccount = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { data: session } = useSession();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
    const decoded = jwtDecode(token);
    setName(decoded.name);
      setEmail(decoded.email);
    }
    else if (session) {
      setName(session.user.name);
      setEmail(session.user.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [session]);

  return (
    <>
      <div className={`${styles.accContainer} container`}>
        <h4 className='text-center mb-5'>Myaccount</h4>
        <table className='table table-success'>
          <tbody>
            <tr>
              <th>
                <p>Name : </p>
              </th>
              <td>
                <p>{name}</p>
              </td>
            </tr>
            <tr>
              <th>
                <p>Email Id : </p>
              </th>
              <td>
                <p>{email}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Myaccount;
