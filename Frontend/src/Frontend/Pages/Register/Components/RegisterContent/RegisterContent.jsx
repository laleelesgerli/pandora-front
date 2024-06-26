import React, { useEffect, useState } from 'react'
import styles from './RegisterContent.module.scss'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../../../../redux/slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from "../../../../../redux/slices/authSlice";
import { toast } from "react-toastify";
const RegisterContent = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation('/dashboard');
    }
  }, [navigation, userInfo]);



  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Sifreler duz deyil');
      return;
    }
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation('/dashboard');
    } catch (error) {
      toast.error('Register fail');
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.auth}>
        <h1>REGISTER</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'User creating' : 'Register'}
          </button>
        </form>
        <p className={styles.loginmessage} onClick={() => navigation('/login')}>
          <span>Login</span>
        </p>
      </div>
    </section>
  )
}

export default RegisterContent